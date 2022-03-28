import "./App.css";
import { BrowserRouter,Routes, Route, } from "react-router-dom";
import {Sidebar} from './contexts/sidebar-context'
import {LandingRoute} from './routes/landingroute'
import {Products} from './routes/productsRoute'
import {FilterProvider} from './contexts/filter-context'
import {CartProvider} from './contexts/cart-context'
import {Cart} from './routes/cartRoute'
import Mockman from "mockman-js"
function App() {
  return (
    <>
      <BrowserRouter>  
      <Routes>
      <Route path="/" element={<Sidebar><LandingRoute/></Sidebar>}/>
      <Route path="/mock" element={<Mockman />}/>
      <Route path="/products" element={<Sidebar><FilterProvider><Products/></FilterProvider></Sidebar>}/>
      <Route path="/cart" element={<CartProvider><Cart/></CartProvider>}/>
      </Routes>
      </BrowserRouter>  
    </>
  );
}

export default App;
