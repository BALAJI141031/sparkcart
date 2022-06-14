import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  LandingRoute,
  Products,
  Cart,
  Wishlist,
  Login,
  Signup,
  Product,
  OrderDetials
} from "./routes";
import { Navbar } from "./components";
import Mockman from "mockman-js";
import RequireAuth from "./authUtils";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingRoute />} />
        <Route path="/products" element={<Products />} />
         <Route path="/products/:id" element={<Product />} />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route path="/order/confirmed/:id" element={<OrderDetials/>}/>
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <Wishlist />
            </RequireAuth>
          }
        />
        <Route path="/mock" element={<Mockman />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
