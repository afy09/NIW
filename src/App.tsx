import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import halaman
import LandingPageUdin from "./LandingPageUdin/Pages";
import Pengaduan from "./LandingPageUdin/Pages/pengaduan";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPageUdin />} />
          <Route path="/pengaduan" element={<Pengaduan />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
