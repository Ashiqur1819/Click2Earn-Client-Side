import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";
import loadingImage from "../assets/loading.gif";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [currentUser] = useUser();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen mx-auto flex items-center justify-center">
        <img src={loadingImage} className="w-96 mx-auto" alt="" />
      </div>
    );
  }

  if (user && currentUser?.role === "Admin") {
    return children;
  }

  return <Navigate state={location.pathname} to="/"></Navigate>;
};

export default AdminRoute;
