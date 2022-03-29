import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {CartProvider} from './contexts/cart-context'

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
