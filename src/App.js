import "./App.css";
import {Routes, Route, } from "react-router-dom";
import {LandingRoute,Products,Cart} from './routes'
import Mockman from "mockman-js"
import {Wishlist} from './routes/wishlistRoute'
function App() {
  return (
    <>  
      <Routes>
      <Route path="/" element={<LandingRoute/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path="/mock" element={<Mockman />}/>
      </Routes>
    </>
  );
}

export default App;
