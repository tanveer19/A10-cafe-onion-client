import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/Layout.jsx";
import ErrorPage from "./error-page.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
