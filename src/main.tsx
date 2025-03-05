import { publicRoutes } from "@/types/constants/app.router";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./common.scss";
import "./fonts.scss";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={publicRoutes} />
  </StrictMode>
);
