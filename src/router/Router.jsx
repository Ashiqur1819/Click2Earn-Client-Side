import { createBrowserRouter} from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout></BasicLayout>,
    errorElement: <p>Error page</p>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ]
  },
])

export default router;