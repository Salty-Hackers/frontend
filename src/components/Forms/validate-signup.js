import * as Yup from "yup";

export default Yup.object().shape({
  firstName: Yup.string().required("First Name is required."),

  lastName: Yup.string().required("Last Name is required."),

  email: Yup.string()
    .required("Email is required.")
    .email("Must be a valid email."),

  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password must be 8 characters or longer.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain at least 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character from !@#$%^&*"
    ),

  confirmPassword: Yup.string()
    .required("Password confirmation is required.")
    .when("password", {
      is: password => (password && password.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match")
    })
});
