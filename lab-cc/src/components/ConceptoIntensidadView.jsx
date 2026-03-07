import React from 'react';
import { ArrowLeft } from 'lucide-react';

const ConceptoIntensidadView = ({ onBack }) => {
  return (
    <div className="w-full space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <div className="flex items-center gap-4">
          <button
              onClick={onBack}
              className="p-2 rounded-full glass-morphism text-slate-400 hover:text-primary-400 hover:scale-110 transition-all cursor-pointer"
          >
              <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
              <p className="text-primary-500 font-bold text-sm uppercase tracking-widest mb-1 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-primary-500"></span>
                  Unidad 2: Taller de corriente continua
              </p>
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                  En construcción
              </h1>
          </div>
      </div>
      <div className="p-8 text-center bg-white/5 rounded-2xl border border-white/10 mt-8">
        <p className="text-slate-400 text-lg">
          Este módulo está siendo preparado y pronto contará con todo el material detallado.
        </p>
      </div>
    </div>
  );
};

export default ConceptoIntensidadView;
