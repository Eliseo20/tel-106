import React from 'react';
import { ArrowLeft, GitCommit, GitMerge, Search, Image as ImageIcon, Scale, Calculator, Activity, Cpu, ShieldCheck } from 'lucide-react';

const ImagePlaceholder = ({ title, height = "h-48" }) => (
    <div className={`w-full ${height} bg-slate-900/60 border-2 border-dashed border-primary-500/30 rounded-2xl flex flex-col items-center justify-center text-slate-500 hover:border-primary-500/60 hover:text-primary-400 hover:bg-slate-900/80 transition-all cursor-pointer group mt-6 mb-4 relative overflow-hidden`}>
        <ImageIcon className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform relative z-10" />
        <p className="text-sm font-medium uppercase tracking-widest text-center px-4 relative z-10">{title}</p>
        <p className="text-xs mt-1 opacity-60 flex items-center gap-1 relative z-10"><Search className="w-3 h-3" /> Buscar imagen</p>
    </div>
);

const PuenteWheatstoneView = ({ onBack }) => {
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
                        Puente de Wheatstone
                    </h1>
                </div>
            </div>

            {/* Intro */}
            <section className="glass-morphism rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute -right-20 -top-20 opacity-5 pointer-events-none">
                    <GitMerge className="w-96 h-96 text-primary-500" />
                </div>

                <div className="relative z-10 max-w-4xl space-y-6">
                    <p className="text-slate-300 text-lg">
                        Circuito eléctrico utilizado para medir resistencias desconocidas con <strong className="text-white">gran precisión</strong>. Fue desarrollado en el siglo XIX y se basa en el principio de equilibrio de voltajes en una red de resistencias.
                    </p>

                    <div className="bg-gradient-to-r from-primary-900/40 to-transparent p-5 rounded-2xl border-l-4 border-primary-500 text-sm text-slate-300">
                        Se convirtió en uno de los métodos más importantes para realizar mediciones eléctricas antes de la aparición de instrumentos digitales modernos.
                    </div>
                </div>
            </section>

            {/* 1. Estructura y Componentes */}
            <section className="space-y-6">
                <div className="flex items-start gap-4 ml-4">
                    <span className="text-4xl font-black text-primary-500/20 leading-none">1.</span>
                    <h2 className="text-2xl font-bold text-white pt-1">Estructura del Puente</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 space-y-6">
                        <p className="text-slate-300 text-sm">
                            El puente de Wheatstone está formado por <strong className="text-primary-400">cuatro resistencias</strong> conectadas en forma de puente.
                        </p>

                        <div className="space-y-4">
                            <h3 className="text-white font-bold text-sm uppercase tracking-widest border-b border-white/10 pb-2">Componentes:</h3>
                            <ul className="space-y-3 font-mono text-sm text-slate-300">
                                <li className="flex items-center gap-3 bg-black/40 p-3 rounded-lg border border-white/5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> R1, R2, R3 (Conocidas)
                                </li>
                                <li className="flex items-center gap-3 bg-primary-900/20 p-3 rounded-lg border border-primary-500/30 text-primary-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></div> Rx (Desconocida)
                                </li>
                                <li className="flex items-center gap-3 bg-black/40 p-3 rounded-lg border border-white/5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div> Fuente de voltaje
                                </li>
                                <li className="flex items-center gap-3 bg-black/40 p-3 rounded-lg border border-white/5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Galvanómetro (Centro)
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full">
                        <ImagePlaceholder title="Diagrama del Puente de Wheatstone (R1, R2, R3, Rx, Fuente, Galvanómetro)" height="h-64" />
                    </div>
                </div>
            </section>

            {/* 2. Principio y Equilibrio */}
            <section className="space-y-6">
                <div className="flex items-start gap-4 ml-4">
                    <span className="text-4xl font-black text-blue-500/20 leading-none">2.</span>
                    <h2 className="text-2xl font-bold text-white pt-1">Principio de Funcionamiento</h2>
                </div>

                <div className="bg-gradient-to-br from-blue-900/20 to-slate-900/60 p-8 rounded-3xl border border-blue-500/20 relative overflow-hidden">
                    <Scale className="absolute right-[-20px] bottom-[-20px] w-48 h-48 text-blue-500/5 pointer-events-none" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-blue-300 flex items-center gap-2">
                                <GitCommit className="w-5 h-5" /> Condición de Equilibrio
                            </h3>
                            <p className="text-sm text-slate-300">
                                El puente está equilibrado cuando <strong className="text-white">no circula corriente</strong> por el galvanómetro.
                            </p>
                            <p className="text-sm text-slate-300">
                                Esto ocurre cuando el voltaje en ambos puntos centrales del puente es exactamente el mismo, cumpliéndose una relación matemática exacta:
                            </p>
                        </div>

                        <div className="flex flex-col items-center justify-center space-y-4">
                            <div className="bg-black/40 p-6 rounded-2xl border border-white/10 w-full max-w-sm">
                                <span className="block text-center text-xs text-slate-500 uppercase tracking-widest mb-4">Relación de Equilibrio</span>
                                <div className="flex items-center justify-center gap-4 text-2xl font-serif text-white">
                                    {/* R1 / R2 */}
                                    <div className="flex flex-col items-center">
                                        <span>R1</span>
                                        <div className="w-full h-[2px] bg-white/30 my-1"></div>
                                        <span>R2</span>
                                    </div>
                                    <span>=</span>
                                    {/* R3 / Rx */}
                                    <div className="flex flex-col items-center">
                                        <span>R3</span>
                                        <div className="w-full h-[2px] bg-blue-500/50 my-1"></div>
                                        <span className="text-blue-400">Rx</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-500/20 border border-blue-500/30 p-4 rounded-xl text-center w-full max-w-sm shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                                <span className="block text-center text-[10px] text-blue-300 uppercase tracking-widest mb-2 font-bold">Fórmula Despejada</span>
                                <span className="text-xl font-mono text-white font-bold">Rx = (R2 × R3) / R1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Cálculo */}
            <section className="bg-gradient-to-r from-primary-600 to-primary-800 p-[1px] rounded-3xl shadow-2xl shadow-primary-500/20">
                <div className="bg-slate-950 rounded-[23px] p-8 md:p-10 relative overflow-hidden">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="text-4xl font-black text-primary-500 leading-none">3.</span>
                        <h2 className="text-2xl font-bold text-white pt-1">Ejemplo de Cálculo</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                        {/* Datos iniciales */}
                        <div className="bg-black/40 p-6 rounded-2xl border border-white/5 h-fit">
                            <h3 className="text-primary-300 font-bold uppercase tracking-widest text-xs mb-4">Datos del Circuito</h3>
                            <div className="grid grid-cols-3 gap-3 font-mono text-sm text-center">
                                <div className="bg-white/5 p-3 rounded-lg border border-white/10 text-white">
                                    <span className="block text-slate-500 text-xs mb-1">R1</span>
                                    100 Ω
                                </div>
                                <div className="bg-white/5 p-3 rounded-lg border border-white/10 text-white">
                                    <span className="block text-slate-500 text-xs mb-1">R2</span>
                                    200 Ω
                                </div>
                                <div className="bg-white/5 p-3 rounded-lg border border-white/10 text-white">
                                    <span className="block text-slate-500 text-xs mb-1">R3</span>
                                    150 Ω
                                </div>
                            </div>
                        </div>

                        {/* Pasos */}
                        <div className="space-y-3 font-mono text-sm">
                            <div className="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                                <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center text-xs shrink-0">1</span>
                                <div className="flex-1">
                                    <span className="text-slate-400 block text-xs">Fórmula:</span>
                                    <span className="text-white">Rx = (R2 × R3) / R1</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                                <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center text-xs shrink-0">2</span>
                                <div className="flex-1">
                                    <span className="text-slate-400 block text-xs">Reemplazar valores:</span>
                                    <span className="text-white">Rx = (200 × 150) / 100</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                                <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center text-xs shrink-0">3</span>
                                <div className="flex-1">
                                    <span className="text-slate-400 block text-xs">Resolver:</span>
                                    <span className="text-white">Rx = 30000 / 100</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-primary-900/30 p-4 rounded-xl border border-primary-500/30 shadow-inner">
                                <span className="w-6 h-6 rounded-full bg-primary-500 text-white font-bold flex items-center justify-center text-xs shrink-0">R</span>
                                <div className="flex-1">
                                    <span className="text-primary-300 block text-xs">Resultado final:</span>
                                    <span className="text-xl font-bold text-white">Rx = 300 Ω</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Aplicaciones Modernas */}
            <section className="space-y-6">
                <div className="flex items-start gap-4 ml-4">
                    <span className="text-4xl font-black text-orange-500/20 leading-none">4.</span>
                    <h2 className="text-2xl font-bold text-white pt-1">Aplicaciones Modernas (Sensores)</h2>
                </div>
                <p className="text-slate-300 ml-4 lg:ml-12 mb-6">El principio del Wheatstone es fundamental para una inmensa cantidad de sensores hoy en día. Un pequeño cambio en resistencia desequilibra el puente y genera una señal eléctrica equivalente a la medición física.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/5 hover:border-orange-500/50 transition-all text-center">
                        <Activity className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                        <h3 className="text-white font-bold text-sm mb-1">Galgas Extensiométricas</h3>
                        <p className="text-xs text-slate-400">Miden deformación mecánica en estructuras o materiales.</p>
                    </div>
                    <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/5 hover:border-orange-500/50 transition-all text-center">
                        <Scale className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                        <h3 className="text-white font-bold text-sm mb-1">Celdas de Carga</h3>
                        <p className="text-xs text-slate-400">Utilizadas en balanzas y básculas para medir peso continuo.</p>
                    </div>
                    <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/5 hover:border-orange-500/50 transition-all text-center">
                        <ShieldCheck className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                        <h3 className="text-white font-bold text-sm mb-1">Sensores de Presión</h3>
                        <p className="text-xs text-slate-400">Detectan variaciones de presión en gases o fluidos industriales.</p>
                    </div>
                    <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/5 hover:border-orange-500/50 transition-all text-center">
                        <GitCommit className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                        <h3 className="text-white font-bold text-sm mb-1">Sensores de Fuerza</h3>
                        <p className="text-xs text-slate-400">Aplicación directa de tracción o compresión sobre sistemas mecánicos.</p>
                    </div>
                </div>

                <div className="bg-black/30 w-fit mx-auto mt-6 p-4 rounded-2xl border border-white/5 flex items-center gap-3">
                    <Calculator className="w-5 h-5 text-slate-400" />
                    <p className="text-xs text-slate-400">
                        <strong className="text-white">Formación:</strong> Sigue siendo clave hoy porque enseña <span className="text-primary-300">conceptos de equilibrio en circuitos</span> y base analítica.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default PuenteWheatstoneView;
