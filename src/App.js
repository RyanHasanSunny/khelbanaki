import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Router>
      <div className="App flex justify-center items-center h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
