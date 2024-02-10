import React from "react";
import frameImage from "../assets/frame.webp";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function Template({ title, desc1, desc2, image, formType, setIsLoggedIn }) {
  return (
    <div className="flex justify-between w-11/12 max-w-[1280px] py-4 mx-auto">
      <div>
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

        <div className="flex w-screen items-center my-5 gap-x-4 ">
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <button>
          {formType === "signup" ? (
            <p>Sign Up with Google</p>
          ) : (
            <p>Sign In with Google</p>
          )}
        </button>
      </div>
      <div>
        <img
          src={frameImage}
          alt="Pattern"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="Students"
          width={558}
          height={490}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Template;
