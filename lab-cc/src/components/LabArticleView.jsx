import React from 'react';
import { ArrowLeft, Beaker, ClipboardList, Info, Wrench, HardHat } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

const LabArticleView = ({ lab, onBack }) => {
    if (!lab) return null;

    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header & Back Action */}
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
                        Laboratorio de Corriente Continua
                    </p>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        {lab.titulo}
                    </h1>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column: Video & Main Explanation */}
                <div className="lg:col-span-2 space-y-8">
                    <section>
                        <VideoPlayer
                            videoUrl={lab.videoUrl}
                            title={lab.titulo}
                            thumbnail={lab.thumbnail}
                        />
                    </section>

                    <section className="glass-morphism rounded-3xl p-8 space-y-6">
                        <div className="flex items-center gap-3 text-2xl font-bold text-white">
                            <ClipboardList className="w-8 h-8 text-primary-400" />
                            <h2>Procedimiento Experimental</h2>
                        </div>

                        <div className="space-y-4 text-slate-300 leading-relaxed">
                            {lab.procedimiento?.map((step, idx) => (
                                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center font-bold">
                                        {idx + 1}
                                    </span>
                                    <p>{step}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Column: Objectives, Tools & Safety */}
                <div className="space-y-6">
                    {/* Objectives Card */}
                    <div className="glass-morphism rounded-3xl p-6 border-l-4 border-l-primary-500">
                        <div className="flex items-center gap-2 text-white font-bold mb-4">
                            <Beaker className="w-5 h-5 text-primary-400" />
                            <h3>Objetivos de Aprendizaje</h3>
                        </div>
                        <ul className="space-y-2">
                            {lab.objetivos?.map((obj, idx) => (
                                <li key={idx} className="flex gap-2 text-sm text-slate-400">
                                    <span className="text-primary-500 mt-1">•</span>
                                    {obj}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tools Card */}
                    <div className="glass-morphism rounded-3xl p-6">
                        <div className="flex items-center gap-2 text-white font-bold mb-4">
                            <Info className="w-5 h-5 text-accent-400" />
                            <h3>Equipos y Materiales</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {lab.materiales?.map((item, idx) => (
                                <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Safety Warning */}
                    <div className="p-6 rounded-3xl bg-accent-500/10 border border-accent-500/30">
                        <div className="flex items-center gap-2 text-accent-400 font-bold mb-3">
                            <HardHat className="w-5 h-5" />
                            <h3>Seguridad Eléctrica</h3>
                        </div>
                        <p className="text-sm text-slate-400">
                            Asegúrate de desenergizar el circuito antes de realizar cualquier modificación en las conexiones. Usa equipo de protección personal (EPP) adecuado.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LabArticleView;
