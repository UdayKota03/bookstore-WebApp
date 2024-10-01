import React from "react";

import "./App.css";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import {Toaster} from "react-hot-toast";
import {useAuth} from "./context/authprovider";

function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Toaster position="top-center"/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>} />
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
