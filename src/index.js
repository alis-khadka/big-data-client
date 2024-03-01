import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

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
// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />}>
//           <Route index element={<Home />} />
//           <Route path="/what-business-to-open" element={<BusinessSuitability />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
