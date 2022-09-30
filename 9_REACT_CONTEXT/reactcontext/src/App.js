// Css
import "./App.css";
import "./components/Navbar.css";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
