import { createBrowserRouter} from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import WorkerHome from "../pages/dashboard/Worker/WorkerHome/WorkerHome";
import DashboardHome from "../pages/dashboard/DashboardHome";
import TaskList from "../pages/dashboard/Worker/TaskList/TaskList";
import TaskDetails from "../pages/TaskDetails/TaskDetails";
import WorkerSubmission from "../pages/dashboard/Worker/WorkerSubmission/WorkerSubmission";
import BuyerHome from "../pages/dashboard/Buyer/BuyerHome/BuyerHome";
import AddNewTasks from "../pages/dashboard/Buyer/AddNewTasks/AddNewTasks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout></BasicLayout>,
    errorElement: <p>Error page</p>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <p>Dashboard error</p>,
    children: [
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <DashboardHome></DashboardHome>
          </PrivateRoute>
        ),
      },
      // For buyer
      {
        path: "buyerHome",
        element: (
          <PrivateRoute>
            <BuyerHome></BuyerHome>
          </PrivateRoute>
        ),
      },
      {
        path: "addNewTasks",
        element: (
          <PrivateRoute>
            <AddNewTasks></AddNewTasks>
          </PrivateRoute>
        ),
      },
      // For Worker
      {
        path: "workerHome",
        element: (
          <PrivateRoute>
            <WorkerHome></WorkerHome>
          </PrivateRoute>
        ),
      },
      {
        path: "taskList",
        element: (
          <PrivateRoute>
            <TaskList></TaskList>
          </PrivateRoute>
        ),
      },
      {
        path: "workerSubmission",
        element: (
          <PrivateRoute>
            <WorkerSubmission></WorkerSubmission>
          </PrivateRoute>
        ),
      },
      {
        path: "taskDetails/:id",
        element: (
          <PrivateRoute>
            <TaskDetails></TaskDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;