
import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Menu from "../Page/Menu/Menu";
import ErrorPage from "../Page/ErroPage/ErrorPage";
import Order from "../Page/Order/Order/Order";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import Secret from "../Page/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Page/DashBoard/Cart/Cart";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/order/:category',
        element: <Order></Order>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }

    ]
  },
  {
    path: '/dashboard',
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      }
    ]
  }
]);