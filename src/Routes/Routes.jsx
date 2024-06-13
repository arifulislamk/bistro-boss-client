import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Layout/DashBoard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../pages/Dashboard/ManageItem/ManageItems";
import UpdatedItem from "../pages/Dashboard/UpdatedItem/UpdatedItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/Dashboard/PaymentHistory/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        element: <PrivateRoutes><Menu /></PrivateRoutes>
      },
      {
        path: "order/:category",
        element: <Order />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <SignUp />
      }
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoutes><DashBoard /></PrivateRoutes>,
    children: [
      // normal user routes 
      {
        path: 'userHome',
        element: <UserHome />
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'payment',
        element: <Payment />
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory />
      },


      // admin routes 
      {
        path: 'adminHome',
        element: <AdminRoutes><AdminHome /></AdminRoutes>
      },
      {
        path: 'addItems',
        element: <AdminRoutes><AddItems /></AdminRoutes>
      },
      {
        path: 'manageItems',
        element: <AdminRoutes><ManageItems /></AdminRoutes>

      },
      {
        path: 'update/:id',
        element: <AdminRoutes><UpdatedItem /></AdminRoutes>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/menu/${params.id}`)
      },
      {
        path: 'users',
        element: <AdminRoutes><AllUsers /></AdminRoutes>
      }


    ]
  }
]);