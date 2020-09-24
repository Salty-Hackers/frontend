import React from "react";
import { Link } from "react-router-dom";

const token = localStorage.getItem("token")

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/comments">Comments</Link>
      {token  &&
      <Link to="/logout">Logout</Link>
      }

    </nav>
  );
}

export default NavBar;
