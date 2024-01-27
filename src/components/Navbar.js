import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
function Navbar() {
  return (
    <div>
      <nav>
        <ul className="flex">
          <li>
            <NavLink to={"/home"}>
              <img src={logo} alt="Logo" />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/home"}>
              <button>Home</button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>
              <button>About</button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>
              <button>Contact</button>
            </NavLink>
          </li>
          <div>
            <Link to={"/login"}>
              <button>Login</button>
            </Link>
            <Link to={"/signup"}>
              <button>Sign Up</button>
            </Link>
            <Link to={"/logout"}>
              <button>Log Out</button>
            </Link>
            <Link to={"/dasboard"}>
              <button>Dashboard</button>
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
