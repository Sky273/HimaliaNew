import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Organization from './pages/Organization';
import Fleet from './pages/Fleet';
import Tools from './pages/Tools';
import Knowledge from './pages/Knowledge';
import Blog from './pages/Blog';
import Dashboard from './pages/Dashboard';

function App() {
  const [visuals, setVisuals] = useState(() => {
    const saved = localStorage.getItem('himalia-visuals');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    const handleVisualsUpdate = () => {
      const saved = localStorage.getItem('himalia-visuals');
      if (saved) {
        setVisuals(JSON.parse(saved));
      }
    };

    window.addEventListener('visualsUpdated', handleVisualsUpdate);
    return () => window.removeEventListener('visualsUpdated', handleVisualsUpdate);
  }, []);

  const heroBackground = visuals.homeHero || 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564';

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className={`fixed inset-0 bg-[url('${heroBackground}')] bg-cover bg-center opacity-20 pointer-events-none`} />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/organization" element={<Organization />} />
              <Route path="/fleet" element={<Fleet />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/knowledge" element={<Knowledge />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;