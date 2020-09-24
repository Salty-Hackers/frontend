import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/comments">Comments</Link>
      <Link to="/logout">Logout</Link>
    </nav>
  );
}

export default NavBar;
