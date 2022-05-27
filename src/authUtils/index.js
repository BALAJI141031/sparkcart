import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../customHooks";

const RequireAuth = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/user/login" state={{ from: location }} replace></Navigate>
  );
};

export default RequireAuth;
