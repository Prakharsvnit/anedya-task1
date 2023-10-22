import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { Component } = props;

  const isAuthorized = localStorage.getItem("isUserLoggedIn");
  const navigate = useNavigate();

  if (!isAuthorized) {
    navigate("/login");
    return <div>Not Authorized!! You need to login first</div>;
  }
  console.log("isAuthorized", isAuthorized);
  console.log("Component", Component);
  return <Component />;
};

export default ProtectedRoute;
