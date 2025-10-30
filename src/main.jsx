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
import Soal2 from "./page/latihan2/soal_latihan2.jsx";
import Pembahasan2 from "./page/latihan2/pembahasan_latihan2.jsx";
import Soal3 from "./page/latihan3/soal_latihan3.jsx";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/soal-latihan1",
    element: <Soal1 />,
  },
  {
    path: "/pembahasan-latihan1",
    element: <Pembahasan1 />,
  },
  {
    path: "/soal-latihan2",
    element: <Soal2 />,
  },
  {
    path: "/pembahasan-latihan2",
    element: <Pembahasan2 />,
  },
  {
    path: "/soal-latihan3",
    element: <Soal3 />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRoutes} />
);
