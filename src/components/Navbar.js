import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import { toast } from "react-toastify";

function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div>
      <nav className="flex justify-between w-11/12 max-w-[1280px] py-4 mx-auto">
        <ul className="flex">
          <li>
            <NavLink to={"/"}>
              <img src={logo} alt="Logo" />
            </NavLink>
          </li>
        </ul>
        <ul className="flex text-cyan-50 gap-x-6">
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
        <ul className="flex text-cyan-50 gap-x-5">
          {!isLoggedIn ? (
            <>
              <Link to={"/login"}>
                <button className=" bg-slate-800 py-1 px-3 rounded-lg border border-slate-900">
                  Login
                </button>
              </Link>
              <Link to={"/signup"}>
                <button className=" bg-slate-800 py-1 px-3 rounded-lg border border-slate-900">
                  Sign Up
                </button>
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
              <Link to={"/dashboard"}>
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
