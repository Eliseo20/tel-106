import React from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';

const TiposResistenciaView = ({ onBack }) => {
    return (
        <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
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
                        Unidad 1: Fundamentos
                    </p>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        Tipos de resistencia
                    </h1>
                </div>
            </div>

            <section className="glass-morphism rounded-3xl p-8 space-y-6 text-center">
                <div className="flex flex-col items-center gap-4 py-12">
                    <BookOpen className="w-16 h-16 text-primary-500/50" />
                    <h2 className="text-2xl font-bold text-white">Contenido en preparación</h2>
                    <p className="text-slate-400 max-w-md mx-auto">
                        Este módulo está siendo preparado y pronto estará disponible con todo el material necesario.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default TiposResistenciaView;
