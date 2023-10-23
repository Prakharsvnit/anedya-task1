import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Dashboard1 from "./components/Dashboard1";
import Dashboard2 from "./components/Dashboard2";
import Dashboard3 from "./components/Dashboard3";
import ProtectedRoute from "./utils/ProtectedRoute";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("isUserLoggedIn");

    if (isUserLoggedIn === "true") {
      navigate("/main");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/main" element={<ProtectedRoute Component={Navbar} />} />
      <Route
        path="/dashboard1"
        element={<ProtectedRoute Component={Dashboard1} />}
      />
      <Route
        path="/dashboard2"
        element={<ProtectedRoute Component={Dashboard2} />}
      />
      <Route
        path="/dashboard3"
        element={<ProtectedRoute Component={Dashboard3} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
