import { BrowserRouter as Router } from "react-router-dom";
import { Sidebar } from "../contexts/sidebarContext";
import { FilterProvider } from "../contexts/filterContext";
import { CartProvider } from "../contexts/cartContext";
import { WishlistProvider } from "../contexts/wishlistContext";
import { SnackbarProvider } from "../contexts/snackbarContext";

const Providers = ({ children }) => {
  return (
    <Router>
      <SnackbarProvider>
        <WishlistProvider>
          <CartProvider>
            <FilterProvider>
              <Sidebar>{children}</Sidebar>
            </FilterProvider>
          </CartProvider>
        </WishlistProvider>
      </SnackbarProvider>
    </Router>
  );
};

export { Providers };
