import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ModuleSidebar from './components/ModuleSidebar';
import HomeView from './components/HomeView';
import LabArticleView from './components/LabArticleView';
import AlgebraView from './components/AlgebraView';
import EcuacionesView from './components/EcuacionesView';
import PotenciasView from './components/PotenciasView';
import SumatoriaView from './components/SumatoriaView';
import NotacionCientificaView from './components/NotacionCientificaView';
import AritmeticaConversionView from './components/AritmeticaConversionView';
import SimbolosElectricosView from './components/SimbolosElectricosView';
import CircuitoCCView from './components/CircuitoCCView';
import DisenoCircuitosView from './components/DisenoCircuitosView';
import NormativaSeguridadView from './components/NormativaSeguridadView';
import MagnitudesFisicasView from './components/MagnitudesFisicasView';
import MagnitudesElectricasView from './components/MagnitudesElectricasView';
import PrefijosSufijosView from './components/PrefijosSufijosView';
import ResistenciaConductanciaView from './components/ResistenciaConductanciaView';
import TiposResistenciaView from './components/TiposResistenciaView';
import CodigoColoresView from './components/CodigoColoresView';
import PuenteWheatstoneView from './components/PuenteWheatstoneView';
import UsoMultimetroView from './components/UsoMultimetroView';
import NormasInstrumentosView from './components/NormasInstrumentosView';
import { CURRICULUM_DATA } from './data/curriculumData';
import { LAB_DATA } from './data/labData';

const App = () => {
  const navigate = useNavigate();
  const [selectedLab, setSelectedLab] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSelectLab = (lab) => {
    setSelectedLab(lab);
    navigate(`/lab/${lab.id}`);
    window.scrollTo(0, 0);
  };

  const handleBackHome = () => {
    setSelectedLab(null);
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-primary-500 selection:text-white">
      <Navbar
        onHomeClick={handleBackHome}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <ModuleSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <main className="w-full px-6 py-12 md:py-20 relative">
        <Routes>
          <Route
            path="/"
            element={<HomeView units={CURRICULUM_DATA} />}
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
          <Route
            path="/topic/t1-1"
            element={<AlgebraView onBack={handleBackHome} />}
          />
          <Route
            path="/topic/t1-2"
            element={<EcuacionesView onBack={handleBackHome} />}
          />
          <Route
            path="/topic/t1-3"
            element={<PotenciasView onBack={handleBackHome} />}
          />
          <Route path="/topic/t1-4" element={<SumatoriaView onBack={handleBackHome} />} />
          <Route path="/topic/t1-5" element={<NotacionCientificaView onBack={handleBackHome} />} />
          <Route path="/topic/t1-6" element={<AritmeticaConversionView onBack={handleBackHome} />} />
          <Route path="/topic/t1-7" element={<SimbolosElectricosView onBack={handleBackHome} />} />
          <Route path="/topic/t1-8" element={<CircuitoCCView onBack={handleBackHome} />} />
          <Route path="/topic/t1-9" element={<DisenoCircuitosView onBack={handleBackHome} />} />
          <Route path="/topic/t1-10" element={<NormativaSeguridadView onBack={handleBackHome} />} />
          <Route path="/topic/t1-11" element={<MagnitudesFisicasView onBack={handleBackHome} />} />
          <Route path="/topic/t1-12" element={<MagnitudesElectricasView onBack={handleBackHome} />} />
          <Route path="/topic/t1-13" element={<PrefijosSufijosView onBack={handleBackHome} />} />
          <Route path="/topic/t1-14" element={<ResistenciaConductanciaView onBack={handleBackHome} />} />
          <Route path="/topic/t1-15" element={<TiposResistenciaView onBack={handleBackHome} />} />
          <Route path="/topic/t1-16" element={<CodigoColoresView onBack={handleBackHome} />} />
          <Route path="/topic/t1-17" element={<PuenteWheatstoneView onBack={handleBackHome} />} />
          <Route path="/topic/t1-18" element={<UsoMultimetroView onBack={handleBackHome} />} />
          <Route path="/topic/t1-19" element={<NormasInstrumentosView onBack={handleBackHome} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="border-t border-white/5 py-12 bg-slate-900/50">
        <div className="w-full px-6 text-center">
          <p className="text-slate-500 text-sm font-medium tracking-widest uppercase">
            Laboratorio de Corriente Continua • 2026
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
