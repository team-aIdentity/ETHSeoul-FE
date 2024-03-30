import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "../router/Router";
import { MainContextProvider } from "../components/context/MainContext";
import { CartContextProvider } from "../components/context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartContextProvider>
    <MainContextProvider>
      <RouterProvider router={router} />
    </MainContextProvider>
  </CartContextProvider>
);
