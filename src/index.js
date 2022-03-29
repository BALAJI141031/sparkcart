import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {CartProvider} from './contexts/cart-context'
import {WishlistProvider} from './contexts/wishlist-context'

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <WishlistProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </WishlistProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
