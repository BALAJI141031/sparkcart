import "./App.css";
import { BrowserRouter,Routes, Route, } from "react-router-dom";
import {Sidebar} from './contexts/sidebar-context'
import {LandingRoute} from './routes/landingroute'
import {Products} from './routes/productsRoute'
import {FilterProvider} from './contexts/filter-context'
import {CartProvider} from './contexts/cart-context'
import {Cart} from './routes/cartRoute'
import Mockman from "mockman-js"
import {Wishlist} from './routes/wishlistRoute'
function App() {
  return (
    <>
      <BrowserRouter>  
      <Routes>
      <Route exact path="/" element={<CartProvider><Sidebar><LandingRoute/></Sidebar></CartProvider>}/>
      <Route exact path="/mock" element={<Mockman />}/>
      <Route exact path="/products" element={<Sidebar><FilterProvider><Products/></FilterProvider></Sidebar>}/>
      <Route exact path="/cart" element={<Cart/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
      </Routes>
      </BrowserRouter>  
    </>
  );
}

export default App;
