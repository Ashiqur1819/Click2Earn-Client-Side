import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";


const BuyerRoute = ({children}) => {
 const { user, loading } = useAuth();
 const [currentUser] = useUser();
 const location = useLocation();

 if (loading) {
   return <span className="loading loading-bars loading-md"></span>;
 }

 if (user && currentUser?.role === "Buyer") {
   return children;
 }

 return <Navigate state={location.pathname} to="/"></Navigate>;
};

export default BuyerRoute;