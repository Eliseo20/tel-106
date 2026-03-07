import React from 'react';
import { ArrowLeft, Activity, Search, Image as ImageIcon, Zap, Maximize2, Minimize2, ThermometerSun, Replace, Power, Lightbulb } from 'lucide-react';

const ImagePlaceholder = ({ title, height = "h-48" }) => (
    <div className={`w-full ${height} bg-slate-900/60 border-2 border-dashed border-primary-500/30 rounded-2xl flex flex-col items-center justify-center text-slate-500 hover:border-primary-500/60 hover:text-primary-400 hover:bg-slate-900/80 transition-all cursor-pointer group mt-6 mb-4 relative overflow-hidden`}>
        <ImageIcon className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform relative z-10" />
        <p className="text-sm font-medium uppercase tracking-widest text-center px-4 relative z-10">{title}</p>
        <p className="text-xs mt-1 opacity-60 flex items-center gap-1 relative z-10"><Search className="w-3 h-3" /> Buscar imagen</p>
    </div>
);

const ResistenciaConductanciaView = ({ onBack }) => {
    return (
        <div className="w-full space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
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
                        Unidad 1: Fundamentos
                    </p>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        Resistencia y Conductancia
                    </h1>
                </div>
            </div>

            {/* Introducción */}
            <section className="glass-morphism rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute -right-20 -top-20 opacity-5 pointer-events-none">
                    <Replace className="w-96 h-96 text-primary-500" />
                </div>

                <div className="relative z-10 max-w-3xl space-y-6">
                    <p className="text-slate-300 text-lg">
                        En los circuitos eléctricos, el comportamiento de la corriente depende de la forma en que los materiales permiten o dificultan el paso de los electrones.
                    </p>

                    <div className="bg-black/40 p-5 rounded-2xl border border-white/5 flex flex-wrap gap-4 items-center">
                        <span className="text-primary-400 font-bold text-sm uppercase tracking-widest">Dos conceptos opuestos:</span>
                        <span className="bg-orange-500/20 text-orange-400 border border-orange-500/30 px-3 py-1.5 rounded-lg flex items-center gap-2">
                            <Activity className="w-4 h-4" /> Resistencia
                        </span>
                        <span className="text-slate-500">vs</span>
                        <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3 py-1.5 rounded-lg flex items-center gap-2">
                            <Zap className="w-4 h-4" /> Conductancia
                        </span>
                    </div>
                </div>
            </section>

            {/* 1. Resistencia */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Activity className="w-6 h-6 text-orange-400" /> Resistencia Eléctrica
                    </h2>

                    <div className="bg-gradient-to-br from-orange-900/20 to-slate-900/60 p-8 rounded-3xl border border-orange-500/20 h-full flex flex-col">
                        <p className="text-slate-300 text-sm mb-6">
                            Propiedad que tienen los materiales de <strong className="text-orange-400">oponerse al paso de la corriente eléctrica</strong>.
                            Cuando los electrones circulan, chocan con los átomos del material; estos choques generan dificultad al movimiento.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-black/40 p-4 rounded-xl text-center border border-white/5">
                                <span className="block text-slate-500 text-xs mb-1 uppercase tracking-widest">Símbolo</span>
                                <span className="font-serif italic text-2xl text-orange-400">R</span>
                            </div>
                            <div className="bg-black/40 p-4 rounded-xl text-center border border-orange-500/20">
                                <span className="block text-slate-500 text-xs mb-1 uppercase tracking-widest">Unidad (SI)</span>
                                <span className="font-mono font-bold text-2xl text-orange-400">Ω (Ohm)</span>
                                <span className="block text-[10px] text-slate-400 mt-1 uppercase tracking-widest">Por Georg Simon Ohm</span>
                            </div>
                        </div>

                        <div className="bg-white/5 p-4 rounded-xl border border-white/10 mt-auto">
                            <h3 className="text-white font-bold text-sm mb-3">Ejemplos en la práctica:</h3>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Resistencias electrónicas en circuitos</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Filamento de una ampolleta</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Elementos de hervidores eléctricos</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Conductores eléctricos largos</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 2. Factores */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3 text-slate-500">
                        <span className="text-4xl text-primary-500/20 leading-none">#</span> Factores que influyen
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/5 hover:border-primary-500/50 transition-all">
                            <h3 className="text-primary-300 font-bold mb-2 flex items-center gap-2"><Maximize2 className="w-4 h-4 text-slate-400" /> 1. Longitud</h3>
                            <p className="text-xs text-slate-400">Mientras más largo sea el conductor, mayor resistencia. Electrones recorren más distancia = más colisiones.</p>
                        </div>
                        <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/5 hover:border-primary-500/50 transition-all">
                            <h3 className="text-primary-300 font-bold mb-2 flex items-center gap-2"><Minimize2 className="w-4 h-4 text-slate-400" /> 2. Área (Sección)</h3>
                            <p className="text-xs text-slate-400">Mientras más grueso, menor resistencia. Permite que circulen más electrones simultáneamente.</p>
                        </div>
                        <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/5 hover:border-primary-500/50 transition-all">
                            <h3 className="text-primary-300 font-bold mb-2 flex items-center gap-2"><Layers className="w-4 h-4 text-slate-400" /> 3. Material</h3>
                            <div className="text-xs text-slate-400 space-y-1">
                                <p><span className="text-white">Cobre:</span> baja (excelente)</p>
                                <p><span className="text-white">Aluminio:</span> buena</p>
                                <p><span className="text-white">Hierro:</span> mayor resist.</p>
                                <p><span className="text-white">Nichrome:</span> alta (calefac.)</p>
                            </div>
                        </div>
                        <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/5 hover:border-red-500/50 transition-all group">
                            <h3 className="text-red-400 font-bold mb-2 flex items-center gap-2"><ThermometerSun className="w-4 h-4 text-slate-400 group-hover:text-red-400 transition-colors" /> 4. Temperatura</h3>
                            <p className="text-xs text-slate-400">Al aumentar T°, aumenta la resistencia. Los átomos vibran y dificultan el paso.</p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="flex justify-center w-full max-w-2xl mx-auto">
                <ImagePlaceholder title="Símbolo eléctrico de resistencia" height="h-32" />
            </div>

            {/* 3. Conductancia + Relación */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 3. Conductancia */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Zap className="w-6 h-6 text-blue-400" /> Conductancia Eléctrica
                    </h2>

                    <div className="bg-gradient-to-br from-blue-900/20 to-slate-900/60 p-8 rounded-3xl border border-blue-500/20 h-full flex flex-col">
                        <p className="text-slate-300 text-sm mb-6">
                            Concepto opuesto a la resistencia. Mide la <strong className="text-blue-400">facilidad con que la corriente puede circular</strong>. Indica qué tan fácilmente un material permite el paso eléctrico.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-black/40 p-4 rounded-xl text-center border border-white/5">
                                <span className="block text-slate-500 text-xs mb-1 uppercase tracking-widest">Símbolo</span>
                                <span className="font-serif italic text-2xl text-blue-400">G</span>
                            </div>
                            <div className="bg-black/40 p-4 rounded-xl text-center border border-blue-500/20">
                                <span className="block text-slate-500 text-xs mb-1 uppercase tracking-widest">Unidad (SI)</span>
                                <span className="font-mono font-bold text-2xl text-blue-400">S (Siemens)</span>
                                <span className="block text-[10px] text-slate-400 mt-1 uppercase tracking-widest">Por Ernst Werner von Siemens</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Relación */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3 text-slate-500">
                        <span className="text-4xl text-primary-500/20 leading-none">☯</span> Relación Inversa
                    </h2>

                    <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 space-y-6 text-center">
                        <p className="text-slate-300 text-sm">
                            La conductancia es el <strong className="text-white">inverso matemático</strong> de la resistencia.
                        </p>

                        <div className="bg-primary-900/30 border border-primary-500/30 p-6 rounded-2xl mx-auto w-fit shadow-xl inline-block mt-4 mb-4">
                            <div className="flex items-center gap-4 text-4xl font-serif italic text-white">
                                <span className="text-blue-400">G</span> = <div className="flex flex-col items-center"><span>1</span><div className="w-full h-[2px] bg-white/50 my-1"></div><span className="text-orange-400">R</span></div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center font-mono text-sm text-slate-300">
                            <div className="bg-black/40 p-3 rounded-xl border border-white/5 w-full">
                                <p className="text-orange-400 mb-1">R = 10 Ω</p>
                                <p>G = 1 / 10</p>
                                <p className="text-blue-400 font-bold">G = 0,1 S</p>
                            </div>
                            <div className="bg-black/40 p-3 rounded-xl border border-white/5 w-full">
                                <p className="text-orange-400 mb-1">R = 5 Ω</p>
                                <p>G = 1 / 5</p>
                                <p className="text-blue-400 font-bold">G = 0,2 S</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* 4. Importancia e Interpretación F */}
            <section className="bg-gradient-to-r from-primary-600 to-primary-800 p-[1px] rounded-3xl shadow-2xl shadow-primary-500/20 mt-12">
                <div className="bg-slate-950 rounded-[23px] p-8 md:p-10 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">

                    <div className="flex-1 space-y-6">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <Power className="w-6 h-6 text-primary-400" /> Importancia
                        </h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Analizar circuitos</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Diseñar sistemas</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Calcular corrientes</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Dimensionar conductores</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Determinar pérdidas de energía</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Aplicar correcta Ley de Ohm</li>
                        </ul>
                        <div className="bg-black/30 p-3 rounded-lg border border-white/5 text-primary-300 text-xs italic">
                            Utilizados constantemente en instalaciones, electrónica, telecomunicaciones y sistemas de potencia.
                        </div>
                    </div>

                    <div className="flex-1 space-y-4 bg-black/40 p-6 rounded-2xl border border-white/10 w-full min-w-[300px]">
                        <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                            <Lightbulb className="w-4 h-4 text-yellow-400" /> Regla General
                        </h3>
                        <div className="space-y-4 text-sm">
                            <div className="bg-orange-500/10 p-3 rounded-lg border-l-4 border-orange-500 text-orange-200">
                                <strong className="text-orange-400 block mb-1">Alta Resistencia (R) = Baja Conductancia (G)</strong>
                                La corriente tiene <strong className="text-white">mayor dificultad</strong> para circular.
                            </div>
                            <div className="bg-blue-500/10 p-3 rounded-lg border-l-4 border-blue-500 text-blue-200">
                                <strong className="text-blue-400 block mb-1">Baja Resistencia (R) = Alta Conductancia (G)</strong>
                                La corriente circula con <strong className="text-white">mayor facilidad</strong>.
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default ResistenciaConductanciaView;
