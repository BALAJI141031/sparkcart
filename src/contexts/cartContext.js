import { createContext, useContext, useReducer, useState } from "react";

const cartContext = createContext();

const CartProvider = ({ children }) => {
  const reducerFn = (cartState, action) => {
    switch (action.type) {
      case "cart":
        return {
          ...cartState,
          cart: [...action.payload.cart],
          cartCount: action.payload.cartCount,
        };
      case "cartTotalAmount":
        return { ...cartState, cartTotal: action.payload };
      case "discountAmount":
        return { ...cartState, discount: action.payload };
      default:
        return { ...cartState };
    }
  };

  const [
    { cart, cartCount, wishlistCount, cartTotal, discount },
    dispatchCart,
  ] = useReducer(reducerFn, {
    cart: [],
    cartCount: 0,
    wishlistCount: 0,
    cartTotal: 0,
    discount: 0,
  });
  return (
    <cartContext.Provider
      value={{
        cart,
        dispatchCart,
        cartCount,
        wishlistCount,
        cartTotal,
        discount,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => useContext(cartContext);

export { CartProvider, useCart };
