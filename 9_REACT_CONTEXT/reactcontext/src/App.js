// Css
import "./App.css";
import "./components/Navbar.css";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import First from "./pages/First";
import Second from "./pages/Second";
import Third from "./pages/Third";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
