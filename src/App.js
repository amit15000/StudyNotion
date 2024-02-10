import { Route, Routes } from "react-router-dom";
import "./App.css";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="w-screen h-full bg-slate-950 flex flex-col text-cyan-50">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        ></Route>
        <Route
          path="/signup"
          element={<SignUp setIsLoggedIn={setIsLoggedIn} />}
        ></Route>
        <Route
          path="/dashboard"
          element={<Dashboard setIsLoggedIn={setIsLoggedIn} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
