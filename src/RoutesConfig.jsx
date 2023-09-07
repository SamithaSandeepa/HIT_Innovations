import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Universal from "./components/Universal"; // Import the Billing component
// Import other components as needed

const RoutesConfig = () => (
  <Router>
    <Routes>
      <Route path="/universal" element={<Universal />} />{" "}
      {/* Use "element" prop */}
      <Route path="/" element={<App />} /> {/* Use "element" prop */}
    </Routes>
  </Router>
);

export default RoutesConfig;
