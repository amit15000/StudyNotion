import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import { toast } from "react-toastify";

function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div>
      <nav className="flex justify-between">
        <ul className="flex">
          <li>
            <NavLink to={"/"}>
              <img src={logo} alt="Logo" />
            </NavLink>
          </li>
        </ul>
        <ul className="flex gap-x-5">
          <li>
            <NavLink to={"/"}>
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
        </ul>
        <ul className="flex gap-x-5">
          {!isLoggedIn ? (
            <>
              <Link to={"/login"}>
                <button>Login</button>
              </Link>
              <Link to={"/signup"}>
                <button>Sign Up</button>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/logout"}>
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    toast("Logged Out");
                  }}
                >
                  Log Out
                </button>
              </Link>
              <Link to={"/dasboard"}>
                <button>Dashboard</button>
              </Link>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
