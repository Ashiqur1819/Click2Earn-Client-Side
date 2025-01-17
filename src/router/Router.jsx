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
import BuyerTasks from "../pages/dashboard/Buyer/BuyerTasks/BuyerTasks";
import PurchaseCoin from "../pages/dashboard/Buyer/PurchaseCoin/PurchaseCoin";
import PaymentHistory from "../pages/dashboard/Buyer/PaymentHistory/PaymentHistory";
import WorkerWithDrawals from "../pages/dashboard/Worker/WorkerWithDrawals/WorkerWithDrawals";
import AdminHome from "../pages/dashboard/Admin/AdminHome/AdminHome";
import ManageUsers from "../pages/dashboard/Admin/ManageUsers/ManageUsers";
import ManageTasks from "../pages/dashboard/Admin/ManageTasks/ManageTasks";
import UpdateTask from "../pages/dashboard/Buyer/UpdateTask/UpdateTask";
import CheckOutForm from "../pages/dashboard/Buyer/CheckOutForm/CheckOutForm";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";

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
      // For admin
      {
        path: "adminHome",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminHome></AdminHome>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers></ManageUsers>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manageTasks",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageTasks></ManageTasks>
            </AdminRoute>
          </PrivateRoute>
        ),
      },

      // For buyer
      {
        path: "buyerHome",
        element: (
          <PrivateRoute>
            <BuyerRoute>
              <BuyerHome></BuyerHome>
            </BuyerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "addNewTasks",
        element: (
          <PrivateRoute>
            <BuyerRoute>
              <AddNewTasks></AddNewTasks>
            </BuyerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "myTasks",
        element: (
          <PrivateRoute>
            <BuyerRoute>
              <BuyerTasks></BuyerTasks>
            </BuyerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "updateTask/:id",
        element: (
          <PrivateRoute>
            <BuyerRoute>
              <UpdateTask></UpdateTask>
            </BuyerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "purchaseCoin",
        element: (
          <PrivateRoute>
            <BuyerRoute>
              <PurchaseCoin></PurchaseCoin>
            </BuyerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "checkOut",
        element: (
          <PrivateRoute>
            <BuyerRoute>
              <CheckOutForm></CheckOutForm>
            </BuyerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <PrivateRoute>
            <BuyerRoute>
              <PaymentHistory></PaymentHistory>
            </BuyerRoute>
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
        path: "withDrawals",
        element: (
          <PrivateRoute>
            <WorkerWithDrawals></WorkerWithDrawals>
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