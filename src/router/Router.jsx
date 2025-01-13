import { createBrowserRouter} from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout></BasicLayout>,
    errorElement: <p>Error page</p>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }, 
      {
        path: "login",
        element: <Login></Login>
      }
    ]
  },
])

export default router;