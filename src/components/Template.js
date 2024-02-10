import React from "react";
import frameImage from "../assets/frame.webp";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

function Template({ title, desc1, desc2, image, formType, setIsLoggedIn }) {
  return (
    <div className="flex justify-between w-11/12 max-w-[1280px] py-4 mx-auto">
      <div className="w-11/12 max-w-md">
        <h1 className="font-semibold text-3xl leading-9">{title}</h1>
        <p className="mt-2">
          <span className=" text-slate-040 text-sm leading-3 ">{desc1}</span>
          <br />
          <span className=" text-cyan-300 text-sm leading-3 italic ">
            {desc2}
          </span>
        </p>
        {formType === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex w-full items-center my-5 gap-x-4 ">
          <div className=" w-full h-[1px] bg-slate-500"></div>
          <p className=" text-slate-400">OR</p>
          <div className=" w-full h-[1px] bg-slate-500"></div>
        </div>
        <button className="flex items-center gap-x-1 border border-slate-700 rounded-lg px-2 py-2 mx-auto ">
          <FcGoogle />
          {formType === "signup" ? (
            <p>Sign Up with Google</p>
          ) : (
            <p>Sign In with Google</p>
          )}
        </button>
      </div>
      <div className="relative w-11/12 max-w-md mx-auto ">
        <img
          className=" max-h-[72%] w-full"
          src={frameImage}
          alt="Pattern"
          loading="lazy"
        />
        <img
          className="absolute -top-4 right-3 "
          src={image}
          alt="Students"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Template;
