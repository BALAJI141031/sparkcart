import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  LandingRoute,
  Products,
  Cart,
  Wishlist,
  Login,
  Signup,
} from "./routes";
import { Navbar } from "./components";
import Mockman from "mockman-js";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingRoute />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
