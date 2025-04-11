import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CarDetail from './pages/CarDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home page - car search and listing */}
        <Route path="/" element={<Home />} />

        {/* Car detail page - when a car card is clicked */}
        <Route path="/car/:id" element={<CarDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
