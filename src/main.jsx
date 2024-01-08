import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import Agents from "./pages/Agents.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import Listing from "./pages/Listing.jsx";
import Selling from "./pages/Selling.jsx";
import Buying from "./pages/Buying.jsx";
import Mortgage from "./pages/Mortgage.jsx";
import Buisness from "./pages/Buisness.jsx";
import Marketing from "./pages/Marketing.jsx";
import Insurance from "./pages/Insurance.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "agents",
        element: <Agents />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "listings",
        element: <Listing />,
      },
      {
        path: "buying",
        element: <Buying />,
      },
      {
        path: "selling",
        element: <Selling />,
      },
      {
        path: "mortgage",
        element: <Mortgage />,
      },
      {
        path: "buisness",
        element: <Buisness />,
      },
      {
        path: "marketing",
        element: <Marketing />,
      },
      {
        path: "insurance",
        element: <Insurance />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
