import { Checkout, CartProduct, Headers, Navbar } from "../components";
import { useCart } from "../contexts/cartContext";
import { useSnackbar } from "../customHooks";
import { showSnackbar } from "../dryProviders";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./index.css";
const Cart = () => {
  // const [totalQuantityPrice, setTotalQuantityPrice] = useState({});
  const navigate = useNavigate();
  const { cart, dispatchCart, cartTotal } = useCart();

  return (
    <div className="cart">
      {cart.length !== 0 ? (
        <div className="cart-section">
          <div className="cart-products">
            {cart.map((item) => {
              return <CartProduct product={item} />;
            })}
          </div>
          <Checkout />
        </div>
      ) : (
        <center>
          <h1>cart is empty</h1>
        </center>
      )}
      <button
        className="primary-cta"
        id="cta"
        onClick={() => navigate("/products")}
      >
        Shop Now!
      </button>
    </div>
  );
};

export { Cart };
