import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginForm({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPass, setShowPass] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-full mt-6 gap-y-3  "
      >
        <label>
          <p className="text-sm ">
            Email Address<sup className=" text-red-500">*</sup>
          </p>
          <input
            required
            type="text"
            value={formData.email}
            placeholder="Enter Email ID"
            name="email"
            onChange={changeHandler}
            className=" bg-slate-800 rounded-lg px-3 py-1 mt-1 w-full border-b-[0.1px] border-b-neutral-400		"
          />
        </label>
        <label className="relative w-full">
          <p>
            Password<sup className="text-red-500">*</sup>
          </p>
          <input
            required
            type={showPass ? "text" : "password"}
            value={formData.password}
            placeholder="Enter Password"
            name="password"
            onChange={changeHandler}
            className=" bg-slate-800  rounded-lg px-3 py-1 mt-1 w-full border-b-[1px] border-b-neutral-400 "
          />
          <span
            className="absolute right-2 top-9 text-slate-400"
            onClick={() => setShowPass((prev) => !prev)}
          >
            {showPass ? <IoMdEye /> : <IoMdEyeOff />}
          </span>
          <Link to="#">
            <p className="text-xs text-blue-200 w-max ml-auto mt-1">
              Forgot Password ?
            </p>
          </Link>
        </label>
        <button className="w-full bg-yellow-300 text-center py-1 rounded-lg text-black font-medium">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
