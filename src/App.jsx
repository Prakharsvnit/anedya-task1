import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Dashboard1 from "./components/Dashboard1";
import Dashboard2 from "./components/Dashboard2";
import Dashboard3 from "./components/Dashboard3";
import ProtectedRoute from "./utils/ProtectedRoute";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute Component={Navbar} />} />
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
    </Router>
  );
}

export default App;
