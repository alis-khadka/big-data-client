import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';

import Home from "./pages/Home";
import BusinessSuitability from "./pages/BusinessSuitability";
import EconomicActivity from "./pages/EconomicActivity";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/what-business-to-open",
    element: <BusinessSuitability />,
  },
  {
    path: "/overall-economic-activities",
    element: <EconomicActivity />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
