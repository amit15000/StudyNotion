import React from "react";
import Template from "../components/Template";
import loginImg from "../assets/Login Image.png";
function Login({ setisLoggedIn }) {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formType="login"
      setisLoggedIn={setisLoggedIn}
    />
  );
}

export default Login;
