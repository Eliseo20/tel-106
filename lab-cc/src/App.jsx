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

// UNIDAD 2 Imports
import DiferenciaPotencialView from './components/DiferenciaPotencialView';
import ConceptosVoltajeView from './components/ConceptosVoltajeView';
import TiposVoltajeView from './components/TiposVoltajeView';
import PrefijosSufijosVoltajeView from './components/PrefijosSufijosVoltajeView';
import SimilPresionVoltajeView from './components/SimilPresionVoltajeView';
import MedicionVoltajeView from './components/MedicionVoltajeView';
import NormasInstrumentosVoltajeView from './components/NormasInstrumentosVoltajeView';
import ConceptoIntensidadView from './components/ConceptoIntensidadView';
import TiposIntensidadView from './components/TiposIntensidadView';
import PrefijosSufijosIntensidadView from './components/PrefijosSufijosIntensidadView';
import SimilFlujoCorrienteView from './components/SimilFlujoCorrienteView';
import MedicionCorrienteView from './components/MedicionCorrienteView';
import NormasSeguridadCorrienteView from './components/NormasSeguridadCorrienteView';
import ConceptoPotenciaView from './components/ConceptoPotenciaView';
import ConsumoElectricoView from './components/ConsumoElectricoView';
import PrefijosSufijosPotenciaView from './components/PrefijosSufijosPotenciaView';
import CalculoPotenciaView from './components/CalculoPotenciaView';
import NormasSeguridadTrabajoView from './components/NormasSeguridadTrabajoView';
import LeyOhmView from './components/LeyOhmView';
import SimbologiaComponentesView from './components/SimbologiaComponentesView';
import ConceptoCircuitoView from './components/ConceptoCircuitoView';
import CircuitosSerieView from './components/CircuitosSerieView';
import CircuitosParaleloView from './components/CircuitosParaleloView';
import CircuitosMixtoView from './components/CircuitosMixtoView';
import ConexionCircuitosView from './components/ConexionCircuitosView';
import ConexionTrianguloEstrellaView from './components/ConexionTrianguloEstrellaView';
import LeyKirchhoffView from './components/LeyKirchhoffView';
import MallaView from './components/MallaView';
import RamaView from './components/RamaView';
import NodoView from './components/NodoView';
import DivisorTensionView from './components/DivisorTensionView';
import DivisorCorrienteView from './components/DivisorCorrienteView';
import NormasInstrumentosFinalView from './components/NormasInstrumentosFinalView';

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

      <main className="container max-w-6xl mx-auto px-6 py-12 md:py-20 relative">
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

          {/* UNIDAD 2 RUTAS */}
          <Route path="/topic/t2-1" element={<DiferenciaPotencialView onBack={handleBackHome} />} />
          <Route path="/topic/t2-2" element={<ConceptosVoltajeView onBack={handleBackHome} />} />
          <Route path="/topic/t2-3" element={<TiposVoltajeView onBack={handleBackHome} />} />
          <Route path="/topic/t2-4" element={<PrefijosSufijosVoltajeView onBack={handleBackHome} />} />
          <Route path="/topic/t2-5" element={<SimilPresionVoltajeView onBack={handleBackHome} />} />
          <Route path="/topic/t2-6" element={<MedicionVoltajeView onBack={handleBackHome} />} />
          <Route path="/topic/t2-7" element={<NormasInstrumentosVoltajeView onBack={handleBackHome} />} />
          <Route path="/topic/t2-8" element={<ConceptoIntensidadView onBack={handleBackHome} />} />
          <Route path="/topic/t2-9" element={<TiposIntensidadView onBack={handleBackHome} />} />
          <Route path="/topic/t2-10" element={<PrefijosSufijosIntensidadView onBack={handleBackHome} />} />
          <Route path="/topic/t2-11" element={<SimilFlujoCorrienteView onBack={handleBackHome} />} />
          <Route path="/topic/t2-12" element={<MedicionCorrienteView onBack={handleBackHome} />} />
          <Route path="/topic/t2-13" element={<NormasSeguridadCorrienteView onBack={handleBackHome} />} />
          <Route path="/topic/t2-14" element={<ConceptoPotenciaView onBack={handleBackHome} />} />
          <Route path="/topic/t2-15" element={<ConsumoElectricoView onBack={handleBackHome} />} />
          <Route path="/topic/t2-16" element={<PrefijosSufijosPotenciaView onBack={handleBackHome} />} />
          <Route path="/topic/t2-17" element={<CalculoPotenciaView onBack={handleBackHome} />} />
          <Route path="/topic/t2-18" element={<NormasSeguridadTrabajoView onBack={handleBackHome} />} />
          <Route path="/topic/t2-19" element={<LeyOhmView onBack={handleBackHome} />} />
          <Route path="/topic/t2-20" element={<SimbologiaComponentesView onBack={handleBackHome} />} />
          <Route path="/topic/t2-21" element={<ConceptoCircuitoView onBack={handleBackHome} />} />
          <Route path="/topic/t2-22" element={<CircuitosSerieView onBack={handleBackHome} />} />
          <Route path="/topic/t2-23" element={<CircuitosParaleloView onBack={handleBackHome} />} />
          <Route path="/topic/t2-24" element={<CircuitosMixtoView onBack={handleBackHome} />} />
          <Route path="/topic/t2-25" element={<ConexionCircuitosView onBack={handleBackHome} />} />
          <Route path="/topic/t2-26" element={<ConexionTrianguloEstrellaView onBack={handleBackHome} />} />
          <Route path="/topic/t2-27" element={<LeyKirchhoffView onBack={handleBackHome} />} />
          <Route path="/topic/t2-28" element={<MallaView onBack={handleBackHome} />} />
          <Route path="/topic/t2-29" element={<RamaView onBack={handleBackHome} />} />
          <Route path="/topic/t2-30" element={<NodoView onBack={handleBackHome} />} />
          <Route path="/topic/t2-31" element={<DivisorTensionView onBack={handleBackHome} />} />
          <Route path="/topic/t2-32" element={<DivisorCorrienteView onBack={handleBackHome} />} />
          <Route path="/topic/t2-33" element={<NormasInstrumentosFinalView onBack={handleBackHome} />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="border-t border-white/5 py-12 bg-slate-900/50">
        <div className="container max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-500 text-sm font-medium tracking-widest uppercase">
            Laboratorio de Corriente Continua • 2026
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
