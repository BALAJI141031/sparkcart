import { BrowserRouter as Router } from "react-router-dom";
import { Sidebar } from "../contexts/sidebarContext";
import { FilterProvider } from "../contexts/filterContext";
import { CartProvider } from "../contexts/cartContext";
import { WishlistProvider } from "../contexts/wishlistContext";
import { AuthProvider } from "../contexts/authContext";
import { NotifyUser } from "../contexts/toastContext";

const Providers = ({ children }) => {
  return (
    <Router>
      <AuthProvider>
        <NotifyUser>
            <WishlistProvider>
              <CartProvider>
                <FilterProvider>
                  <Sidebar>{children}</Sidebar>
                </FilterProvider>
              </CartProvider>
            </WishlistProvider>
        </NotifyUser>
      </AuthProvider>
    </Router>
  );
};

export { Providers };
