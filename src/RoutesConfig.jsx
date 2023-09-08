import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Universal from "./components/Universal"; // Import the Billing component
import Smartfarm from "./components/Smartfarm";
// import Chargingnet from "./components/Chargingnet";

const RoutesConfig = () => (
  <Router>
    <Routes>
      <Route path="/universal" element={<Universal />} />
      <Route path="/smart-farm" element={<Smartfarm />} />
      <Route path="*" element={<App />} />
    </Routes>
  </Router>
);

export default RoutesConfig;
