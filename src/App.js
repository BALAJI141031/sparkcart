import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LandingRoute } from "./routes/landingRoute";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingRoute />} />
      </Routes>
    </>
  );
}

export default App;
