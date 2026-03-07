import React from 'react';
import { ArrowLeft, Ruler, Zap, Power, Battery, Activity, Flame, MoveRight, Layers, TableProperties } from 'lucide-react';

const MagnitudesFisicasView = ({ onBack }) => {
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
                        Magnitudes Físicas
                    </h1>
                </div>
            </div>

            {/* 1. ¿Qué es una magnitud física? */}
            <section className="glass-morphism rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 opacity-5 pointer-events-none">
                    <Ruler className="w-80 h-80 text-primary-500" />
                </div>

                <div className="relative z-10 flex flex-col items-start gap-4 mb-8">
                    <div className="flex items-start gap-4">
                        <span className="text-5xl font-black text-primary-500/20 leading-none">1.</span>
                        <div>
                            <h2 className="text-2xl font-bold text-white pt-1">¿Qué es una magnitud física?</h2>
                            <p className="text-slate-300 mt-2 text-lg">
                                Es una propiedad de un fenómeno o sistema que puede medirse y expresarse mediante <strong className="text-white">un número y una unidad</strong>.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="space-y-6">
                        <p className="text-sm text-slate-300">
                            En el ámbito de la electricidad, estas permiten describir, analizar y calcular fenomenos en la naturaleza, modelando el comportamiento de los circuitos.
                        </p>
                        <ul className="text-sm text-slate-400 space-y-2 list-disc list-inside bg-black/30 p-4 rounded-xl border border-white/5">
                            <li>La <strong className="text-white">corriente</strong> por un conductor</li>
                            <li>El <strong className="text-white">voltaje</strong> de una batería</li>
                            <li>La <strong className="text-white">resistencia</strong> de un componente</li>
                        </ul>
                        <p className="text-xs text-primary-300 font-medium italic">
                            * Todas pueden medirse con instrumentos eléctricos.
                        </p>
                    </div>

                    <div className="bg-primary-900/20 border border-primary-500/20 rounded-2xl flex flex-col justify-center items-center p-6 text-center space-y-4">
                        <h3 className="text-primary-400 font-bold uppercase tracking-widest text-sm">Fórmula General</h3>
                        <div className="bg-black/40 p-4 rounded-xl font-mono text-white text-lg w-full">
                            Magnitud = Número + Unidad
                        </div>
                        <div className="text-slate-400 text-sm">
                            Ejemplo: <strong className="text-white">Voltaje = 12 volt</strong>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. SI */}
            <section className="space-y-6">
                <div className="flex items-start gap-4 ml-4">
                    <span className="text-4xl font-black text-primary-500/20 leading-none">2.</span>
                    <h2 className="text-xl font-bold text-white pt-1">Sistema Internacional de Unidades (SI)</h2>
                </div>
                <p className="text-slate-300 ml-4 lg:ml-12 mb-6">Para trabajar universalmente, el SI establece unidades estándar para medir distintas magnitudes.</p>

                <div className="bg-slate-900/60 rounded-3xl border border-white/5 overflow-hidden">
                    <div className="bg-white/5 p-4 border-b border-white/10 flex items-center gap-3">
                        <TableProperties className="w-5 h-5 text-primary-400" />
                        <h3 className="text-white font-bold text-sm uppercase tracking-widest">Unidades Fundamentales del SI</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-black/40 text-xs uppercase tracking-widest text-slate-400">
                                    <th className="p-4 font-medium border-b border-white/5">Magnitud</th>
                                    <th className="p-4 font-medium border-b border-white/5">Unidad</th>
                                    <th className="p-4 font-medium border-b border-white/5">Símbolo</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-slate-300 divide-y divide-white/5">
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-medium text-white">Longitud</td>
                                    <td className="p-4">metro</td>
                                    <td className="p-4 font-mono text-primary-300">m</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-medium text-white">Masa</td>
                                    <td className="p-4">kilogramo</td>
                                    <td className="p-4 font-mono text-primary-300">kg</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-medium text-white">Tiempo</td>
                                    <td className="p-4">segundo</td>
                                    <td className="p-4 font-mono text-primary-300">s</td>
                                </tr>
                                <tr className="bg-primary-500/10 hover:bg-primary-500/20 transition-colors">
                                    <td className="p-4 font-bold text-primary-400">Corriente eléctrica</td>
                                    <td className="p-4 text-white">ampere</td>
                                    <td className="p-4 font-mono text-primary-300 font-bold">A</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-medium text-white">Temperatura</td>
                                    <td className="p-4">kelvin</td>
                                    <td className="p-4 font-mono text-primary-300">K</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 3. Magnitudes Eléctricas Fundamentales */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-[1px] rounded-3xl shadow-2xl shadow-primary-500/20">
                <div className="bg-slate-950 rounded-[23px] p-8 md:p-10 relative overflow-hidden">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4 relative z-10">
                        <span className="text-4xl text-primary-500 font-black leading-none">3.</span>
                        Magnitudes Eléctricas Fundamentales
                    </h3>

                    <div className="relative z-10">
                        <p className="text-slate-300 mb-6 text-sm">Estas magnitudes permiten describir completamente el funcionamiento de un circuito:</p>

                        <div className="flex flex-wrap gap-3">
                            <span className="bg-white/10 px-4 py-2 rounded-xl text-white font-medium border border-white/5 shadow-lg flex items-center gap-2">
                                <MoveRight className="w-4 h-4 text-blue-400" /> Corriente
                            </span>
                            <span className="bg-white/10 px-4 py-2 rounded-xl text-white font-medium border border-white/5 shadow-lg flex items-center gap-2">
                                <Battery className="w-4 h-4 text-green-400" /> Voltaje
                            </span>
                            <span className="bg-white/10 px-4 py-2 rounded-xl text-white font-medium border border-white/5 shadow-lg flex items-center gap-2">
                                <Activity className="w-4 h-4 text-orange-400" /> Resistencia
                            </span>
                            <span className="bg-white/10 px-4 py-2 rounded-xl text-white font-medium border border-white/5 shadow-lg flex items-center gap-2">
                                <Zap className="w-4 h-4 text-yellow-400" /> Potencia
                            </span>
                            <span className="bg-white/10 px-4 py-2 rounded-xl text-white font-medium border border-white/5 shadow-lg flex items-center gap-2">
                                <Power className="w-4 h-4 text-purple-400" /> Energía
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4 a 8 - Grid details */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-center text-white mb-8 border-b border-white/10 pb-4">Detalle por Magnitud</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* 4. Corriente */}
                    <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 shadow-lg hover:border-blue-500/50 transition-all group">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                                <MoveRight className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2"><span className="text-slate-500">4.</span> Corriente Eléctrica</h3>
                                <div className="flex gap-2 mt-2">
                                    <span className="bg-black/50 px-2 py-0.5 rounded text-xs font-mono text-slate-300 border border-white/10">Símbolo: I</span>
                                    <span className="bg-blue-500/20 px-2 py-0.5 rounded text-xs font-mono text-blue-300 font-bold border border-blue-500/30">UND: Ampere (A)</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-slate-300 mb-4 h-16">Flujo de cargas eléctricas (electrones) por un conductor.</p>
                        <div className="bg-black/30 p-3 rounded-lg border border-white/5 text-sm">
                            <span className="text-slate-400">Ejemplo:</span> <span className="font-mono font-bold text-white">I = 2 A</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-3 text-right">Mide con: <strong className="text-slate-400">Amperímetro</strong></p>
                    </div>

                    {/* 5. Voltaje */}
                    <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 shadow-lg hover:border-green-500/50 transition-all group">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 bg-green-500/10 rounded-xl text-green-400">
                                <Battery className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2"><span className="text-slate-500">5.</span> Voltaje</h3>
                                <div className="flex gap-2 mt-2">
                                    <span className="bg-black/50 px-2 py-0.5 rounded text-xs font-mono text-slate-300 border border-white/10">Símbolo: V</span>
                                    <span className="bg-green-500/20 px-2 py-0.5 rounded text-xs font-mono text-green-300 font-bold border border-green-500/30">UND: Volt (V)</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-slate-300 mb-4 h-16">Diferencia de potencial. Es la fuerza que impulsa la corriente eléctrica por el circuito.</p>
                        <div className="bg-black/30 p-3 rounded-lg border border-white/5 text-sm">
                            <span className="text-slate-400">Ejemplo:</span> <span className="font-mono font-bold text-white">V = 12 V</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-3 text-right">Mide con: <strong className="text-slate-400">Voltímetro</strong></p>
                    </div>

                    {/* 6. Resistencia */}
                    <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 shadow-lg hover:border-orange-500/50 transition-all group">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 bg-orange-500/10 rounded-xl text-orange-400">
                                <Activity className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2"><span className="text-slate-500">6.</span> Resistencia</h3>
                                <div className="flex gap-2 mt-2">
                                    <span className="bg-black/50 px-2 py-0.5 rounded text-xs font-mono text-slate-300 border border-white/10">Símbolo: R</span>
                                    <span className="bg-orange-500/20 px-2 py-0.5 rounded text-xs font-mono text-orange-300 font-bold border border-orange-500/30">UND: Ohm (Ω)</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-slate-300 mb-4 h-16">Oposición que presenta un material al paso de la corriente eléctrica.</p>
                        <div className="bg-black/30 p-3 rounded-lg border border-white/5 text-sm">
                            <span className="text-slate-400">Ejemplo:</span> <span className="font-mono font-bold text-white">R = 100 Ω</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-3 text-right">Mide con: <strong className="text-slate-400">Ohmímetro</strong></p>
                    </div>

                    {/* 7. Potencia */}
                    <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 shadow-lg hover:border-yellow-500/50 transition-all group">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-400">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2"><span className="text-slate-500">7.</span> Potencia Eléc.</h3>
                                <div className="flex gap-2 mt-2">
                                    <span className="bg-black/50 px-2 py-0.5 rounded text-xs font-mono text-slate-300 border border-white/10">Símbolo: P</span>
                                    <span className="bg-yellow-500/20 px-2 py-0.5 rounded text-xs font-mono text-yellow-300 font-bold border border-yellow-500/30">UND: Watt (W)</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-slate-300 mb-4 h-16">Cantidad de energía eléctrica que se consume o transforma en un tiempo (P = V · I).</p>
                        <div className="bg-black/30 p-3 rounded-lg border border-white/5 text-sm">
                            <span className="text-slate-400">Ejemplo:</span> <span className="font-mono font-bold text-white">P = 60 W</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-3 text-right">Cálculo o Vatio-metro</p>
                    </div>

                    {/* 8. Energía */}
                    <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 shadow-lg hover:border-purple-500/50 transition-all group md:col-span-2">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <div className="p-6 bg-purple-500/10 rounded-full text-purple-400 shrink-0">
                                <Power className="w-8 h-8" />
                            </div>
                            <div className="flex-1 space-y-3">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2"><span className="text-slate-500">8.</span> Energía Eléctrica</h3>
                                <p className="text-sm text-slate-300">Capacidad de realizar trabajo. En sistemas eléctricos representa la cantidad total consumida durante un período de tiempo.</p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-black/30 p-3 rounded-lg border border-white/5 text-sm flex justify-between items-center">
                                        <span className="text-slate-400">Oficial (SI)</span>
                                        <span className="bg-white/10 px-2 py-0.5 rounded text-xs font-mono text-white">Joule (J)</span>
                                    </div>
                                    <div className="bg-purple-500/10 p-3 rounded-lg border border-purple-500/20 text-sm flex justify-between items-center">
                                        <span className="text-purple-300 font-bold">Uso Doméstico</span>
                                        <span className="bg-purple-900 px-2 py-0.5 rounded text-xs font-mono text-white font-bold">kWh</span>
                                    </div>
                                </div>
                                <div className="bg-white/5 p-2 rounded-lg text-center text-sm font-mono text-white">
                                    E = 5 kWh
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Relación y Ley de Ohm */}
            <section className="glass-morphism rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
                    <Layers className="w-96 h-96" />
                </div>
                <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-3xl font-black text-primary-500/30 leading-none">9.</span>
                        <h2 className="text-2xl font-bold text-white">Relación: La Ley de Ohm</h2>
                    </div>
                    <p className="text-slate-300 text-sm">Las magnitudes no son independientes. La más importante es la Ley de Ohm, que permite analizar cualquier circuito.</p>

                    <div className="bg-black/40 border border-primary-500/30 p-8 rounded-3xl inline-block mt-4 shadow-xl shadow-black">
                        <div className="text-5xl md:text-6xl font-serif italic text-white mb-2">
                            <span className="text-green-400">V</span> = <span className="text-blue-400">I</span> · <span className="text-orange-400">R</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. Importancia General */}
            <section className="bg-gradient-to-t from-primary-900/50 p-[1px] rounded-3xl border border-white/10">
                <div className="bg-slate-950 rounded-[23px] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="shrink-0 relative">
                        <div className="w-24 h-24 rounded-full bg-primary-500/20 flex flex-col items-center justify-center border-2 border-primary-500/50">
                            <span className="text-3xl font-black text-primary-400">10</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">Importancia General</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Analizar circuitos</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Calcular valores funcionales</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Diseñar sistemas</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Verificar equipos</li>
                            <li className="flex items-center gap-2 sm:col-span-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Realizar mediciones exactas con instrumentos</li>
                        </ul>
                        <div className="bg-white/5 p-4 rounded-xl border border-white/5 text-primary-300 text-sm italic mt-4">
                            "Sin esto, sería imposible modelar, diseñar o analizar sistemas eléctricos de manera precisa. Es la base formativa."
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default MagnitudesFisicasView;
