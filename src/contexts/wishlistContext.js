import { createContext, useContext, useReducer } from "react";

const wishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const reducerFn = (wishlistState, action) => {
    switch (action.type) {
      case "wishlist":
        return {
          ...wishlistState,
          wishlist: [...action.payload.wishlist],
          wishlistCount: action.payload.wishlistCount,
        };
      default:
        return { ...wishlistState };
    }
  };

  const [{ wishlist, wishlistCount }, dispatchWishlist] = useReducer(
    reducerFn,
    { wishlist: [], wishlistCount: 0 }
  );

  return (
    <wishlistContext.Provider
      value={{ wishlist, dispatchWishlist, wishlistCount }}
    >
      {children}
    </wishlistContext.Provider>
  );
};
const useWishlist = () => useContext(wishlistContext);

export { WishlistProvider, useWishlist };
