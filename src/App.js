import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ListingsPage from './pages/ListingsPage/ListingsPage';
import DetailPage from './pages/DetailPage/DetailPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const AppContent = () => {
  const location = useLocation();
  const isDetailPage = location.pathname.includes('/property/');

  return (
    <div className="app">
      {!isDetailPage && <Navbar />}
      <Routes>
        <Route path="/" element={<ListingsPage />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/property/:id" element={<DetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App; 