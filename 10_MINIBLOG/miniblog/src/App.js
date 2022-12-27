import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes></Routes>
        </div>
      </BrowserRouter>
      <h1>Miniblog</h1>
    </div>
  );
}

export default App;
