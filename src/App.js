import "./App.css";
import {Routes, Route, } from "react-router-dom";
import {LandingRoute,Products} from './routes'

function App() {
  return (
    <>  
      <Routes>
      <Route path="/" element={<LandingRoute/>}/>
      <Route path="/products" element={<Products/>}/>
      </Routes>
    </>
  );
}

export default App;
