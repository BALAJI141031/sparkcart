import "./App.css";
import { BrowserRouter,Routes, Route, } from "react-router-dom";
import {Sidebar} from './contexts/sidebar-context'
import {LandingRoute} from './routes/landingroute'


function App() {
  return (
    <>
      <BrowserRouter>  
      <Routes>
      <Route path="/" element={<Sidebar><LandingRoute/></Sidebar>}/>
      </Routes>
      </BrowserRouter>  
    </>
  );
}

export default App;
