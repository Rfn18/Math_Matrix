import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import Soal1 from "./page/latihan1/soal_latihan1.jsx";
import Pembahasan1 from "./page/latihan1/pembahasan_latihan1.jsx";
import About from "./component/about.jsx";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path: "/about",
    element: <About />
  },{
    path: "/soal-latihan1",
    element: <Soal1 />,
  },{
    path: "/pembahasan-latihan1",
    element: <Pembahasan1 />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRoutes} />
);
