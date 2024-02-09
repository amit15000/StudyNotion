import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPass, setShowPass] = useState(false);

  const changeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>
      <form>
        <div>
          <label>
            <p>
              First Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter First Name"
            />
          </label>
          <label>
            <p>
              Last Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter Last Name"
            />
          </label>
        </div>
        <label>
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter Email ID"
          />
        </label>
        <label>
          <p>
            Create Password<sup>*</sup>
          </p>
          <input
            required
            type={showPass ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter Password"
          />
          <span onClick={() => setShowPass((prev) => !prev)}>
            {showPass ? <IoMdEye /> : <IoMdEyeOff />}
          </span>
        </label>
        <label>
          <p>
            Confirm Password<sup>*</sup>
          </p>
          <input
            required
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={changeHandler}
            placeholder="Re-enter Password"
          />
          <span onClick={() => setShowPass((prev) => !prev)}>
            {showPass ? <IoMdEye /> : <IoMdEyeOff />}
          </span>
        </label>
        <button>Create Account</button>
      </form>
    </div>
  );
}

export default SignUp;
