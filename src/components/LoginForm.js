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
      <form onSubmit={submitHandler}>
        <label>
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            required
            type="text"
            value={formData.email}
            placeholder="Enter Email ID"
            name="email"
            onChange={changeHandler}
          />
        </label>
        <label>
          <p>
            Password<sup>*</sup>
          </p>
          <input
            required
            type={showPass ? "text" : "password"}
            value={formData.password}
            placeholder="Enter Password"
            name="password"
            onChange={changeHandler}
          />
          <span onClick={() => setShowPass((prev) => !prev)}>
            {showPass ? <IoMdEye /> : <IoMdEyeOff />}
          </span>
          <Link to="#">
            <p>Forgot Password</p>
          </Link>
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default LoginForm;
