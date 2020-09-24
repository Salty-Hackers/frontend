
import React, { useContext, useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const UserContext = React.createContext();
const LoginContext = React.createContext();
const SignupContext = React.createContext();
const CommentsContext = React.createContext();
const SaveCommentContext = React.createContext();
const GetSavedCommentContext = React.createContext();
const DeleteSavedCommentContext = React.createContext();

export const useLogin = () => {
  return useContext(LoginContext);
};

export const useSignup = () => {
  return useContext(SignupContext);
};

export const useComments = () => {
  return useContext(CommentsContext);
};

export const useSaveComments = () => {
  return useContext(SaveCommentContext);
};

export const useGetSavedCommentContext = () => {
  return useContext(GetSavedCommentContext);
};

export const useDeleteSavedComment = () => {
  return useContext(DeleteSavedCommentContext);
};

export const UserProvider = ({ children }) => {
  let user = { id: "", email: "", firstName: "", lastName: "" };
  const [comments, setComments] = useState([]);
  const [savedComments, setSavedComments] = useState([]);
  let history = useHistory();
  const [updated, setUpdated] = useState(false);
  const login = (email, password) => {
    return axiosWithAuth()
      .post("/api/auth/login", { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("firstName", res.data.user.firstName);
        localStorage.setItem("lastName", res.data.user.lastName);
        localStorage.setItem("id", res.data.user.id);
        localStorage.setItem("email", res.data.user.email);

        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  const signup = (firstName, lastName, email, password) => {
    return axiosWithAuth()
      .post("/api/auth/signup", {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  const userID = localStorage.getItem("id");
  useEffect(() => {
    axiosWithAuth()
      .get("/api/comments")
      .then((res) => {
        setUpdated(true);
        return setComments(res.data);
      })
      .catch((err) => console.log(err));

    axiosWithAuth()
      .get(`/api/users/${userID}/favoritecomments`)
      .then((res) => {
        setUpdated(true);
        return setSavedComments(res.data.userFavoriteComments);
      })
      .catch((err) => {
        setUpdated(true);
        return setSavedComments(err.response.data);
      });
  }, [updated]);

  const saveComment = (data) => {
    axiosWithAuth()
      .post(`/api/users/${userID}/favoritecomments/${data.id}`, data)
      .then(setUpdated(!updated));
  };

  const deleteComment = (data) => {
    axiosWithAuth()
      .delete(`/api/users/${userID}/favoritecomments/${data.id}`)
      .then(setUpdated(!updated));
  };

  return (
    <UserContext.Provider value={user}>
      <LoginContext.Provider value={login}>
        <SignupContext.Provider value={signup}>
          <CommentsContext.Provider value={comments}>
            <SaveCommentContext.Provider value={saveComment}>
              <GetSavedCommentContext.Provider value={savedComments}>
                <DeleteSavedCommentContext.Provider value={deleteComment}>
                    {children}
                </DeleteSavedCommentContext.Provider>
              </GetSavedCommentContext.Provider>
            </SaveCommentContext.Provider>
          </CommentsContext.Provider>
        </SignupContext.Provider>
      </LoginContext.Provider>
    </UserContext.Provider>
  );
};