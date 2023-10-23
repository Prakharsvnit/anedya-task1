import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { Component } = props;

  const navigate = useNavigate();

  const isAuthorized = localStorage.getItem("isUserLoggedIn");

  if (isAuthorized === "false" || !isAuthorized) {
    navigate("/login");
    return <div>Not Authorized!! You need to login first</div>;
  }

  return <Component />;
};

export default ProtectedRoute;
