import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/Errorpage/Errorpage";
import Homepage from "../pages/Homepage/Homepage";

const Route = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Homepage></Homepage>
        }
    ]
  },
]);

export default Route;
