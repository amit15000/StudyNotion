import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function SignUp({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [accountType, setAccountType] = useState("Student");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setshowConfirmPass] = useState(false);
  console.log(accountType);
  const changeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.warning("Password do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    navigate("/dashboard");
  };
  return (
    <div>
      <div className="flex bg-slate-800 rounded-full w-max gap-x-1 px-2 py-1 mt-4 text-sm mt-4">
        <button
          className={`${
            accountType === "Student"
              ? " bg-black px-4 py-2 rounded-full "
              : " bg-transparent text-slate-400 rounded-full px-4 py-1 transition-all duration-200"
          }`}
          onClick={() => setAccountType("Student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "Instructor"
              ? " bg-black px-4 py-2 rounded-full "
              : " bg-transparent text-slate-400 rounded-full px-4 py-1 transition-all duration-200"
          }`}
          onClick={() => setAccountType("Instructor")}
        >
          Instructor
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div className="flex justify-between items-center mt-3">
          <label>
            <p className="text-sm ">
              First Name<sup className=" text-red-500">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter First Name"
              className=" bg-slate-800  rounded-lg px-3 py-2 mt-2 w-full border-b-[1px] border-b-neutral-400 "
            />
          </label>
          <label>
            <p className="text-sm ">
              Last Name<sup className=" text-red-500">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter Last Name"
              className=" bg-slate-800 rounded-lg px-3 py-2 mt-2 w-full border-b-[1px] border-b-neutral-400 "
            />
          </label>
        </div>
        <div className="flex flex-col gap-y-2 mt-3">
          <label>
            <p className="text-sm ">
              Email Address<sup className=" text-red-500">*</sup>
            </p>
            <input
              required
              type="text"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              placeholder="Enter Email ID"
              className=" bg-slate-800  rounded-lg px-3 py-2 mt-2 w-full border-b-[1px] border-b-neutral-400 "
            />
          </label>
          <div className="flex justify-between items-cente gap-x-2">
            <label className="relative w-full">
              <p className="text-sm ">
                Create Password<sup className=" text-red-500">*</sup>
              </p>
              <input
                required
                type={showPass ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                className=" bg-slate-800  rounded-lg px-3 py-2 mt-2 w-full border-b-[1px] border-b-neutral-400 "
              />
              <span
                className="absolute right-2 top-10 text-slate-400 cursor-pointer"
                onClick={() => setShowPass((prev) => !prev)}
              >
                {showPass ? <IoMdEye /> : <IoMdEyeOff />}
              </span>
            </label>
            <label className="relative w-full">
              <p className="text-sm ">
                Confirm Password<sup className=" text-red-500">*</sup>
              </p>
              <input
                required
                type={showConfirmPass ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={changeHandler}
                placeholder="Re-enter Password"
                className=" bg-slate-800  rounded-lg px-3 py-2 mt-2 w-full border-b-[1px] border-b-neutral-400 "
              />
              <span
                className="absolute right-2 top-10 text-slate-400 cursor-pointer"
                onClick={() => setshowConfirmPass((prev) => !prev)}
              >
                {showConfirmPass ? <IoMdEye /> : <IoMdEyeOff />}
              </span>
            </label>
          </div>
        </div>
        <button className="w-full bg-yellow-300 text-center py-1 rounded-lg text-black font-medium mt-4">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignUp;
