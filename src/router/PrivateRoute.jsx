import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import loadingImage from "../assets/loading.gif";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen mx-auto flex items-center justify-center">
        <img src={loadingImage} className="w-96 mx-auto" alt="" />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
