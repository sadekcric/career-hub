import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Blogs from "./Components/Blogs/Blogs";
import Statistics from "./Components/Statistics/Statistics";
import Applied from "./Components/Applied/Applied";
import JobDetails from "./Components/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/applied",
        element: <Applied />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/details/:id",
        element: <JobDetails />,
        loader: () => fetch("../data.json"), //should not load all data.
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
