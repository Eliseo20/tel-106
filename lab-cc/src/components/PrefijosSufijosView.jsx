import React from 'react';
import { ArrowLeft, PlusSquare, MinusSquare, Zap, Target, BookOpen, Layers, Lightbulb, Hash } from 'lucide-react';

const PrefijosSufijosView = ({ onBack }) => {
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
                        Prefijos y Sufijos
                    </h1>
                </div>
            </div>

            {/* Introducción */}
            <section className="glass-morphism rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute -right-20 -top-20 opacity-5 pointer-events-none">
                    <Hash className="w-96 h-96 text-primary-500" />
                </div>

                <div className="relative z-10 max-w-3xl space-y-6">
                    <p className="text-slate-300 text-lg">
                        En la electricidad y la electrónica es muy común trabajar con valores extremadamente grandes o extremadamente pequeños.
                    </p>

                    <div className="bg-black/40 p-5 rounded-2xl border border-white/5 space-y-3">
                        <h3 className="text-primary-400 font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                            <Lightbulb className="w-4 h-4" /> Ejemplos Reales:
                        </h3>
                        <ul className="text-sm text-slate-300 space-y-2">
                            <li className="flex items-start gap-2">
                                <PlusSquare className="w-5 h-5 text-green-400 shrink-0" />
                                <span>Una línea eléctrica puede transportar <strong className="text-white">millones de watts</strong>.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <MinusSquare className="w-5 h-5 text-blue-400 shrink-0" />
                                <span>Un circuito electrónico puede trabajar con <strong className="text-white">millonésimas de amperio</strong>.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 1. ¿Qué son? */}
            <section className="space-y-6">
                <div className="flex items-start gap-4 ml-4">
                    <span className="text-4xl font-black text-primary-500/20 leading-none">1.</span>
                    <h2 className="text-2xl font-bold text-white pt-1">¿Qué son los prefijos SI?</h2>
                </div>
                <div className="bg-gradient-to-br from-primary-900/30 to-slate-900/60 p-8 rounded-3xl border border-primary-500/20 text-slate-300 space-y-6">
                    <p>
                        Para evitar escribir números con muchos ceros, el Sistema Internacional de Unidades (SI) utiliza <strong className="text-primary-300">prefijos</strong>, que permiten expresar estas cantidades de forma más simple y ordenada.
                    </p>
                    <p>
                        Son elementos que se colocan antes de una unidad de medida para indicar músculos o submúltiplos de esa unidad.
                    </p>
                    <div className="bg-black/30 p-5 rounded-xl border border-white/5 font-mono text-center flex flex-col md:flex-row items-center justify-center gap-4 text-white">
                        <span>1000 ohm</span>
                        <ArrowLeft className="w-4 h-4 hidden md:block text-slate-500 rotate-180" />
                        <ArrowLeft className="w-4 h-4 md:hidden text-slate-500 -rotate-90" />
                        <span className="bg-primary-500/20 text-primary-300 px-3 py-1 rounded-lg border border-primary-500/30 font-bold text-lg">1 kilo-ohm</span>
                    </div>
                    <p className="text-xs text-slate-400 italic text-center">Esto simplifica la lectura y el cálculo de valores eléctricos.</p>
                </div>
            </section>

            {/* 2. Tabla de prefijos y Potencias */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Tabla de prefijos */}
                <section className="bg-slate-900/60 rounded-3xl border border-white/5 overflow-hidden flex flex-col">
                    <div className="bg-white/5 p-5 border-b border-white/10 flex items-center justify-between">
                        <h3 className="text-white font-bold uppercase tracking-widest flex items-center gap-3">
                            <Layers className="w-5 h-5 text-primary-400" /> Prefijos SI Comunes
                        </h3>
                    </div>
                    <div className="overflow-x-auto flex-grow">
                        <table className="w-full text-left border-collapse min-w-[400px]">
                            <thead>
                                <tr className="bg-black/40 text-[10px] md:text-xs uppercase tracking-widest text-slate-400">
                                    <th className="p-4 font-medium border-b border-white/5">Prefijo</th>
                                    <th className="p-4 font-medium border-b border-white/5 text-center">Símbolo</th>
                                    <th className="p-4 font-medium border-b border-white/5">Valor Numérico</th>
                                    <th className="p-4 font-medium border-b border-white/5">Ejemplo</th>
                                </tr>
                            </thead>
                            <tbody className="text-xs md:text-sm text-slate-300 divide-y divide-white/5 font-mono">
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-white">giga</td>
                                    <td className="p-4 text-center font-bold text-primary-300">G</td>
                                    <td className="p-4">1 000 000 000</td>
                                    <td className="p-4 text-slate-400">1 GW</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-white">mega</td>
                                    <td className="p-4 text-center font-bold text-primary-300">M</td>
                                    <td className="p-4">1 000 000</td>
                                    <td className="p-4 text-slate-400">1 MW</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-white">kilo</td>
                                    <td className="p-4 text-center font-bold text-primary-300">k</td>
                                    <td className="p-4">1 000</td>
                                    <td className="p-4 text-slate-400">1 kΩ</td>
                                </tr>
                                <tr className="bg-white/5">
                                    <td colSpan="4" className="p-2 text-center text-[10px] text-slate-500 italic">Unidad Base (1)</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-white">mili</td>
                                    <td className="p-4 text-center font-bold text-orange-300">m</td>
                                    <td className="p-4">0,001</td>
                                    <td className="p-4 text-slate-400">1 mA</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-white">micro</td>
                                    <td className="p-4 text-center font-bold text-orange-300">μ</td>
                                    <td className="p-4">0,000 001</td>
                                    <td className="p-4 text-slate-400">1 μF</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-white">nano</td>
                                    <td className="p-4 text-center font-bold text-orange-300">n</td>
                                    <td className="p-4">0,000 000 001</td>
                                    <td className="p-4 text-slate-400">1 nF</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-white">pico</td>
                                    <td className="p-4 text-center font-bold text-orange-300">p</td>
                                    <td className="p-4">0,000 000 000 001</td>
                                    <td className="p-4 text-slate-400">1 pF</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Potencias Relativas */}
                <section className="bg-slate-900/60 rounded-3xl border border-white/5 overflow-hidden flex flex-col">
                    <div className="bg-white/5 p-5 border-b border-white/10 flex items-center justify-between">
                        <h3 className="text-white font-bold uppercase tracking-widest flex items-center gap-3">
                            <Target className="w-5 h-5 text-primary-400" /> Potencias de 10
                        </h3>
                    </div>
                    <div className="p-6 md:p-8 flex-grow flex flex-col justify-center">
                        <p className="text-slate-300 text-sm mb-6">Para convertir entre prefijos se utilizan <strong className="text-white">potencias de 10</strong>.</p>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-center mb-6">
                            <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                                <span className="block text-primary-300 font-bold mb-1 font-mono">G</span>
                                <span className="text-sm font-mono text-white">10⁹</span>
                            </div>
                            <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                                <span className="block text-primary-300 font-bold mb-1 font-mono">M</span>
                                <span className="text-sm font-mono text-white">10⁶</span>
                            </div>
                            <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                                <span className="block text-primary-300 font-bold mb-1 font-mono">k</span>
                                <span className="text-sm font-mono text-white">10³</span>
                            </div>
                            <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                                <span className="block text-slate-500 font-bold mb-1 font-mono text-xs uppercase tracking-widest">Base</span>
                                <span className="text-sm font-mono text-white">10⁰</span>
                            </div>
                            <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                                <span className="block text-orange-300 font-bold mb-1 font-mono">m</span>
                                <span className="text-sm font-mono text-white">10⁻³</span>
                            </div>
                            <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                                <span className="block text-orange-300 font-bold mb-1 font-mono">μ</span>
                                <span className="text-sm font-mono text-white">10⁻⁶</span>
                            </div>
                            <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                                <span className="block text-orange-300 font-bold mb-1 font-mono">n</span>
                                <span className="text-sm font-mono text-white">10⁻⁹</span>
                            </div>
                            <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                                <span className="block text-orange-300 font-bold mb-1 font-mono">p</span>
                                <span className="text-sm font-mono text-white">10⁻¹²</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* 3. Mas Usados */}
            <section className="space-y-6">
                <div className="flex items-start gap-4 ml-4">
                    <span className="text-4xl font-black text-primary-500/20 leading-none">3.</span>
                    <h2 className="text-2xl font-bold text-white pt-1">Prefijos más usados</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* kilo */}
                    <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 group hover:border-primary-500/50 transition-all">
                        <h3 className="text-primary-300 font-bold text-lg mb-2 flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-primary-500/20 text-center leading-8 font-mono">k</div> kilo</h3>
                        <p className="text-xs text-slate-400 mb-4 h-8">Mil veces la unidad <span className="block text-white font-mono mt-1 w-full p-1 bg-black/50 text-center rounded">1 kΩ = 1000 Ω</span></p>

                        <div className="bg-black/30 p-3 rounded-xl text-xs space-y-2 mt-4">
                            <span className="text-slate-500 block uppercase tracking-widest">Ejemplo</span>
                            <p className="text-slate-300">Resistencia eléctrica:</p>
                            <p className="font-mono text-white text-center bg-white/5 py-1 rounded">4,7 kΩ = 4700 Ω</p>
                        </div>
                    </div>
                    {/* mega */}
                    <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 group hover:border-primary-500/50 transition-all">
                        <h3 className="text-primary-300 font-bold text-lg mb-2 flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-primary-500/20 text-center leading-8 font-mono">M</div> mega</h3>
                        <p className="text-xs text-slate-400 mb-4 h-8">Un millón de veces la unidad <span className="block text-white font-mono mt-1 w-full p-1 bg-black/50 text-center rounded">1 MΩ = 1 000 000 Ω</span></p>

                        <div className="bg-black/30 p-3 rounded-xl text-xs space-y-2 mt-4">
                            <span className="text-slate-500 block uppercase tracking-widest">Ejemplo</span>
                            <p className="text-slate-300">Resistencia de aislamiento:</p>
                            <p className="font-mono text-white text-center bg-white/5 py-1 rounded">2 MΩ = 2 000 000 Ω</p>
                        </div>
                    </div>
                    {/* mili */}
                    <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 group hover:border-orange-500/50 transition-all">
                        <h3 className="text-orange-300 font-bold text-lg mb-2 flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-orange-500/20 text-center leading-8 font-mono text-orange-400">m</div> mili</h3>
                        <p className="text-xs text-slate-400 mb-4 h-8">Una milésima parte <span className="block text-white font-mono mt-1 w-full p-1 bg-black/50 text-center rounded">1 mA = 0,001 A</span></p>

                        <div className="bg-black/30 p-3 rounded-xl text-xs space-y-2 mt-4">
                            <span className="text-slate-500 block uppercase tracking-widest">Ejemplo</span>
                            <p className="text-slate-300">Consumo de un LED:</p>
                            <p className="font-mono text-white text-center bg-white/5 py-1 rounded">20 mA = 0,020 A</p>
                        </div>
                    </div>
                    {/* micro */}
                    <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 group hover:border-orange-500/50 transition-all">
                        <h3 className="text-orange-300 font-bold text-lg mb-2 flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-orange-500/20 text-center leading-8 font-mono text-orange-400">μ</div> micro</h3>
                        <p className="text-xs text-slate-400 mb-4 h-8">Una millonésima parte <span className="block text-white font-mono mt-1 w-full p-1 bg-black/50 text-center rounded">1 μF = 0,000001 F</span></p>

                        <div className="bg-black/30 p-3 rounded-xl text-xs space-y-2 mt-4">
                            <span className="text-slate-500 block uppercase tracking-widest">Ejemplo</span>
                            <p className="text-slate-300">Capacitor común:</p>
                            <p className="font-mono text-white text-center bg-white/5 py-1 rounded">100 μF = 0,0001 F</p>
                        </div>
                    </div>
                </div>

                <div className="bg-black/30 p-4 border border-white/10 rounded-2xl flex flex-wrap gap-4 text-xs font-mono text-center justify-center text-slate-400">
                    <span className="bg-white/5 px-3 py-1.5 rounded">Corriente: 5 mA = 0,005 A</span>
                    <span className="bg-white/5 px-3 py-1.5 rounded">Resistencia: 10 kΩ = 10 000 Ω</span>
                    <span className="bg-white/5 px-3 py-1.5 rounded">Capacitancia: 470 nF = 0,000000470 F</span>
                    <span className="bg-white/5 px-3 py-1.5 rounded">Potencia: 2 kW = 2000 W</span>
                </div>
            </section>

            {/* 4. Conversiones */}
            <section className="bg-gradient-to-r from-primary-600 to-primary-800 p-[1px] rounded-3xl shadow-2xl shadow-primary-500/20">
                <div className="bg-slate-950 rounded-[23px] p-8 md:p-10 relative overflow-hidden">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="text-4xl font-black text-primary-500 leading-none">4.</span>
                        <h2 className="text-2xl font-bold text-white pt-1">Ejemplos de Conversión</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                        <div className="bg-black/40 p-6 rounded-2xl border border-white/5 text-sm space-y-4">
                            <h3 className="text-primary-300 font-bold uppercase tracking-widest text-xs">Ejemplo 1</h3>
                            <p className="text-white">Convertir: <span className="font-mono bg-white/10 px-2 py-0.5 rounded">3 kΩ a Ω</span></p>
                            <div className="bg-primary-900/30 p-3 rounded-lg border border-primary-500/20 font-mono text-slate-300">
                                <p>1 kΩ = 1000 Ω</p>
                                <p>3 × 1000 = 3000 Ω</p>
                            </div>
                            <div className="text-center bg-white/5 p-2 rounded text-white font-mono font-bold">
                                3 kΩ = 3000 Ω
                            </div>
                        </div>

                        <div className="bg-black/40 p-6 rounded-2xl border border-white/5 text-sm space-y-4">
                            <h3 className="text-primary-300 font-bold uppercase tracking-widest text-xs">Ejemplo 2</h3>
                            <p className="text-white">Convertir: <span className="font-mono bg-white/10 px-2 py-0.5 rounded">500 mA a A</span></p>
                            <div className="bg-primary-900/30 p-3 rounded-lg border border-primary-500/20 font-mono text-slate-300">
                                <p>1 mA = 0,001 A</p>
                                <p>500 × 0,001 = 0,5 A</p>
                            </div>
                            <div className="text-center bg-white/5 p-2 rounded text-white font-mono font-bold">
                                500 mA = 0,5 A
                            </div>
                        </div>

                        <div className="bg-black/40 p-6 rounded-2xl border border-white/5 text-sm space-y-4">
                            <h3 className="text-primary-300 font-bold uppercase tracking-widest text-xs">Ejemplo 3</h3>
                            <p className="text-white">Convertir: <span className="font-mono bg-white/10 px-2 py-0.5 rounded">2,5 MW a W</span></p>
                            <div className="bg-primary-900/30 p-3 rounded-lg border border-primary-500/20 font-mono text-slate-300">
                                <p>1 MW = 1 000 000 W</p>
                                <p>2,5 × 1 000 000 = 2 500 000 W</p>
                            </div>
                            <div className="text-center bg-white/5 p-2 rounded text-white font-mono font-bold">
                                2,5 MW = 2 500 000 W
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Importancia */}
            <section className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 flex flex-col md:flex-row gap-8 items-center border-l-4 border-l-primary-500">
                <div className="space-y-4 flex-1">
                    <h2 className="text-2xl font-bold text-white">Importancia y Recomendación</h2>
                    <p className="text-sm text-slate-300 mb-4">El dominio de los prefijos es una habilidad fundamental para cualquier estudiante y profesional ya que permite:</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300 mb-6">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Leer valores con facilidad</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Reducir errores de cálculo</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Comprender especificaciones</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Interpretar instrumentos</li>
                    </ul>
                </div>

                <div className="bg-black/40 p-6 rounded-2xl border border-white/10 min-w-[300px]">
                    <h3 className="text-primary-400 font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" /> Recomendación CLAVE
                    </h3>
                    <p className="text-sm text-slate-300 mb-3">Reconoce visualmente al instante:</p>
                    <div className="grid grid-cols-4 gap-2 text-center font-mono font-bold text-white mb-3">
                        <span className="bg-primary-500/20 py-1 rounded text-primary-300">k</span>
                        <span className="bg-primary-500/20 py-1 rounded text-primary-300">M</span>
                        <span className="bg-orange-500/20 py-1 rounded text-orange-400">m</span>
                        <span className="bg-orange-500/20 py-1 rounded text-orange-400">μ</span>
                    </div>
                    <p className="text-xs text-slate-400 italic">Aparecen en resistencias, capacitores, fuentes y multímetros siempre.</p>
                </div>
            </section>

        </div>
    );
};

export default PrefijosSufijosView;
