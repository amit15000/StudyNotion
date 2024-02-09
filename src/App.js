import { Route, Routes } from "react-router-dom";
import "./App.css";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./components/SignupForm";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <div>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
