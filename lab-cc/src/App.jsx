import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import LabArticleView from './components/LabArticleView';
import { LAB_DATA } from './data/labData';

const App = () => {
  const navigate = useNavigate();
  const [selectedLab, setSelectedLab] = useState(null);

  const handleSelectLab = (lab) => {
    setSelectedLab(lab);
    navigate(`/lab/${lab.id}`);
  };

  const handleBackHome = () => {
    setSelectedLab(null);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-primary-500 selection:text-white">
      <Navbar onHomeClick={handleBackHome} />

      <main className="container mx-auto px-6 py-12 md:py-20">
        <Routes>
          <Route
            path="/"
            element={<HomeView labs={LAB_DATA} onSelectLab={handleSelectLab} />}
          />
          <Route
            path="/lab/:id"
            element={
              <LabArticleView
                lab={selectedLab || LAB_DATA.find(l => window.location.pathname.includes(l.id))}
                onBack={handleBackHome}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="border-t border-white/5 py-12 bg-slate-900/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500 text-sm font-medium tracking-widest uppercase">
            Laboratorio de Corriente Continua • 2026
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
