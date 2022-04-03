import { BrowserRouter as Router } from "react-router-dom";
import { Sidebar } from "../contexts/sidebarContext";
import { FilterProvider } from "../contexts/filterContext";
import { CartProvider } from "../contexts/cartContext";
import { WishlistProvider } from "../contexts/wishlistContext";

const Providers = ({ children }) => {
  return (
    <Router>
      <WishlistProvider>
        <CartProvider>
          <FilterProvider>
            <Sidebar>{children}</Sidebar>
          </FilterProvider>
        </CartProvider>
      </WishlistProvider>
    </Router>
  );
};

export { Providers };
