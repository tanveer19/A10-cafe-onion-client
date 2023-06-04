import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/Layout.jsx";
import ErrorPage from "./error-page.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AuthProvider from "./providers/AuthProvider";
import ChefRecipe from "./components/ChefRecipe";
import PrivateRoute from "./routes/PrivateRoute";
import Profile from "./components/Profile";
import Chef from "./components/Chef";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/chefrecipe",
        element: (
          <PrivateRoute>
            <ChefRecipe></ChefRecipe>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/chef/:id",
        element: <ChefRecipe></ChefRecipe>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chefs/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
