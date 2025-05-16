import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import halaman
import LandingPageUdin from "./LandingPageUdin/Pages";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPageUdin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
