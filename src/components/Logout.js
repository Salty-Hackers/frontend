import React from "react";
import { useHistory } from "react-router-dom";

function Logout() {
  let history = useHistory();
  history.push("/");
  localStorage.clear();

  return <></>;
}

export default Logout;
