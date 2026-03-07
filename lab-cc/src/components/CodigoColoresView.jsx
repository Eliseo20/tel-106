import React, { useState } from 'react';
import { ArrowLeft, Palette, Eye, Target, Calculator, Hash, CheckSquare, Search, BookOpen, AlertCircle } from 'lucide-react';

const Band = ({ color, value, label }) => (
    <div className="flex flex-col items-center gap-2 group">
        <div className={`w-12 h-20 rounded-lg shadow-lg border-2 border-white/20 relative overflow-hidden flex items-center justify-center transition-all group-hover:scale-110 ${color}`}>
            <span className="font-mono font-black text-white mix-blend-difference opacity-80">{value}</span>
        </div>
        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center">{label}</span>
    </div>
);

const CodigoColoresView = ({ onBack }) => {
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
                        Código de Colores
                    </h1>
                </div>
            </div>

            {/* Intro */}
            <section className="glass-morphism rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
                    <Palette className="w-80 h-80 text-primary-500" />
                </div>

                <div className="relative z-10 max-w-4xl space-y-6">
                    <p className="text-slate-300 text-lg">
                        Las resistencias son componentes muy pequeños, por lo que no es práctico escribir su valor numérico directamente sobre ellas. Para esto se inventó un sistema visual.
                    </p>

                    <div className="bg-black/40 p-5 rounded-2xl border border-white/5 md:flex items-center gap-6 justify-between">
                        <div className="space-y-2 mb-4 md:mb-0">
                            <h3 className="text-primary-300 font-bold text-sm uppercase tracking-widest">Este sistema estandarizado permite determinar:</h3>
                            <ul className="text-sm text-white space-y-1 ml-4 list-disc">
                                <li>El valor de la resistencia</li>
                                <li>El multiplicador</li>
                                <li>La tolerancia del componente</li>
                            </ul>
                        </div>
                        <div className="shrink-0">
                            <span className="bg-primary-500/20 text-primary-300 border border-primary-500/30 px-4 py-2 rounded-xl flex items-center gap-2 font-bold shadow-[0_0_15px_rgba(var(--primary-500),0.2)]">
                                <Eye className="w-5 h-5" /> Visual e Internacional
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1. ¿Cómo se leen las bandas? (4 bandas info) */}
            <section className="space-y-6">
                <div className="flex items-start gap-4 ml-4">
                    <span className="text-4xl font-black text-primary-500/20 leading-none">1.</span>
                    <h2 className="text-2xl font-bold text-white pt-1">¿Cómo se leen? (4 Bandas)</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-900/60 p-6 md:p-8 rounded-3xl border border-white/5 h-full space-y-6">
                        <p className="text-slate-300 text-sm">
                            Suelen tener 4 o 5 bandas de colores. El método más común en <strong className="text-primary-400">electrónica básica utiliza 4 bandas</strong>.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3 bg-black/40 p-3 rounded-lg border border-white/5">
                                <div className="w-6 h-6 rounded-full bg-white text-black font-black text-xs flex items-center justify-center shrink-0">1</div>
                                <span className="text-sm text-slate-300">Primera cifra significativa</span>
                            </div>
                            <div className="flex items-center gap-3 bg-black/40 p-3 rounded-lg border border-white/5">
                                <div className="w-6 h-6 rounded-full bg-white text-black font-black text-xs flex items-center justify-center shrink-0">2</div>
                                <span className="text-sm text-slate-300">Segunda cifra significativa</span>
                            </div>
                            <div className="flex items-center gap-3 bg-primary-900/40 p-3 rounded-lg border border-primary-500/20">
                                <div className="w-6 h-6 rounded-full bg-primary-500 text-white font-black text-xs flex items-center justify-center shrink-0">3</div>
                                <span className="text-sm text-white font-bold">Multiplicador</span>
                            </div>
                            <div className="flex items-center gap-3 bg-slate-800 p-3 rounded-lg border border-slate-600">
                                <div className="w-6 h-6 rounded-full bg-slate-500 text-white font-black text-xs flex items-center justify-center shrink-0">4</div>
                                <span className="text-sm text-slate-300 font-bold">Tolerancia</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary-900/20 to-slate-900/60 p-6 md:p-8 rounded-3xl border border-primary-500/20 h-full flex flex-col justify-center">
                        <div className="bg-black/40 p-6 rounded-2xl border border-white/5 space-y-4">
                            <h3 className="text-primary-300 font-bold flex items-center gap-2 mb-2">
                                <Target className="w-5 h-5" /> Cómo identificar el orden correct
                            </h3>
                            <p className="text-sm text-slate-300">Antes de leer los colores, debes identificar desde qué lado comenzar:</p>
                            <ul className="text-sm text-slate-400 list-disc list-inside space-y-2 mt-2">
                                <li>La banda de <strong className="text-white">tolerancia (dorado o plateado)</strong> suele estar más separada del resto.</li>
                                <li>La lectura se realiza desde el <strong className="text-white">lado opuesto</strong> a la banda de tolerancia.</li>
                            </ul>
                        </div>

                        {/* Visual Resistor Example */}
                        <div className="mt-8 flex justify-center items-center relative h-24">
                            {/* Resistor body */}
                            <div className="w-48 h-12 bg-amber-100/90 rounded-2xl relative shadow-inner border border-amber-900 flex justify-between px-6 py-0 items-center">
                                {/* Leads (patitas) */}
                                <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-1.5 bg-slate-400 rounded-l-full"></div>
                                <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-1.5 bg-slate-400 rounded-r-full"></div>

                                <div className="w-3 h-full bg-red-500"></div>
                                <div className="w-3 h-full bg-purple-600"></div>
                                <div className="w-3 h-full bg-amber-800"></div>
                                <div className="w-10"></div> {/* Space */}
                                <div className="w-3 h-full bg-yellow-500"></div> {/* Dorado */}
                            </div>
                            <div className="absolute bottom-[-15px] right-2 text-[10px] text-yellow-500 font-bold uppercase flex flex-col items-center">
                                <span>↑</span>
                                <span>Tolerancia (separada)</span>
                            </div>
                            <div className="absolute top-[-10px] left-6 text-[10px] text-slate-400 font-bold uppercase flex flex-col items-center">
                                <span>Comienza aquí</span>
                                <span>↓</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Tabla de Colores */}
            <section className="space-y-6">
                <div className="flex items-start gap-4 ml-4">
                    <span className="text-4xl font-black text-primary-500/20 leading-none">2.</span>
                    <h2 className="text-2xl font-bold text-white pt-1">Tabla del Código de Colores</h2>
                </div>

                <div className="bg-slate-900/80 rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[600px] text-sm">
                            <thead>
                                <tr className="bg-black/60 uppercase tracking-widest text-slate-400 text-xs border-b border-white/10">
                                    <th className="p-4 font-bold">Color</th>
                                    <th className="p-4 font-bold text-center">Número (1° y 2° Cifra)</th>
                                    <th className="p-4 font-bold font-mono">Multiplicador (3° Banda)</th>
                                    <th className="p-4 font-bold">Tolerancia (4° Banda)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {/* Negro */}
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-medium flex items-center gap-3"><div className="w-4 h-4 rounded-full bg-black border border-white/20"></div> Negro</td>
                                    <td className="p-4 text-center text-white font-bold text-lg">0</td>
                                    <td className="p-4 font-mono text-slate-300">× 10⁰ (1)</td>
                                    <td className="p-4 text-slate-500 text-center">—</td>
                                </tr>
                                {/* Marrón */}
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-medium flex items-center gap-3"><div className="w-4 h-4 rounded-full bg-amber-900 border border-white/10"></div> Marrón</td>
                                    <td className="p-4 text-center text-white font-bold text-lg">1</td>
                                    <td className="p-4 font-mono text-slate-300">× 10¹ (10)</td>
                                    <td className="p-4 text-white font-bold">± 1%</td>
                                </tr>
                                {/* Rojo */}
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-medium flex items-center gap-3"><div className="w-4 h-4 rounded-full bg-red-500 border border-white/10"></div> Rojo</td>
                                    <td className="p-4 text-center text-white font-bold text-lg">2</td>
                                    <td className="p-4 font-mono text-slate-300">× 10² (100)</td>
                                    <td className="p-4 text-white font-bold">± 2%</td>
                                </tr>
                                {/* Naranjo */}
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-medium flex items-center gap-3"><div className="w-4 h-4 rounded-full bg-orange-500 border border-white/10"></div> Naranjo</td>
                                    <td className="p-4 text-center text-white font-bold text-lg">3</td>
                                    <td className="p-4 font-mono text-slate-300">× 10³ (1k)</td>
                                    <td className="p-4 text-slate-500 text-center">—</td>
                                </tr>
                                {/* Amarillo */}
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-medium flex items-center gap-3"><div className="w-4 h-4 rounded-full bg-yellow-400 border border-white/10"></div> Amarillo</td>
                                    <td className="p-4 text-center text-white font-bold text-lg">4</td>
                                    <td className="p-4 font-mono text-slate-300">× 10⁴ (10k)</td>
                                    <td className="p-4 text-slate-500 text-center">—</td>
                                </tr>
                                {/* Verde */}
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-medium flex items-center gap-3"><div className="w-4 h-4 rounded-full bg-green-500 border border-white/10"></div> Verde</td>
                                    <td className="p-4 text-center text-white font-bold text-lg">5</td>
                                    <td className="p-4 font-mono text-slate-300">× 10⁵ (100k)</td>
                                    <td className="p-4 text-white font-bold">± 0.5%</td>
                                </tr>
                                {/* Azul */}
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-medium flex items-center gap-3"><div className="w-4 h-4 rounded-full bg-blue-500 border border-white/10"></div> Azul</td>
                                    <td className="p-4 text-center text-white font-bold text-lg">6</td>
                                    <td className="p-4 font-mono text-slate-300">× 10⁶ (1M)</td>
                                    <td className="p-4 text-white font-bold">± 0.25%</td>
                                </tr>
                                {/* Violeta */}
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-medium flex items-center gap-3"><div className="w-4 h-4 rounded-full bg-purple-500 border border-white/10"></div> Violeta</td>
                                    <td className="p-4 text-center text-white font-bold text-lg">7</td>
                                    <td className="p-4 font-mono text-slate-300">× 10⁷ (10M)</td>
                                    <td className="p-4 text-white font-bold">± 0.1%</td>
                                </tr>
                                {/* Gris */}
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-medium flex items-center gap-3"><div className="w-4 h-4 rounded-full bg-slate-400 border border-white/10"></div> Gris</td>
                                    <td className="p-4 text-center text-white font-bold text-lg">8</td>
                                    <td className="p-4 font-mono text-slate-300">× 10⁸</td>
                                    <td className="p-4 text-white font-bold">± 0.05%</td>
                                </tr>
                                {/* Blanco */}
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-medium flex items-center gap-3"><div className="w-4 h-4 rounded-full bg-white border border-white/10 text-black text-[8px] flex items-center justify-center"></div> Blanco</td>
                                    <td className="p-4 text-center text-white font-bold text-lg">9</td>
                                    <td className="p-4 font-mono text-slate-300">× 10⁹</td>
                                    <td className="p-4 text-slate-500 text-center">—</td>
                                </tr>

                                {/* Oro y Plata (Tolerancias comunes) */}
                                <tr className="bg-amber-900/20 border-t-2 border-white/10">
                                    <td className="p-4 font-medium flex items-center gap-3"><div className="w-4 h-4 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)] border border-white/20"></div> Dorado</td>
                                    <td className="p-4 text-center text-slate-500">—</td>
                                    <td className="p-4 font-mono text-amber-300">× 10⁻¹ (0.1)</td>
                                    <td className="p-4 text-amber-400 font-bold text-lg">± 5%</td>
                                </tr>
                                <tr className="bg-slate-700/20">
                                    <td className="p-4 font-medium flex items-center gap-3"><div className="w-4 h-4 rounded-full bg-slate-300 shadow-[0_0_10px_rgba(203,213,225,0.4)] border border-white/20"></div> Plateado</td>
                                    <td className="p-4 text-center text-slate-500">—</td>
                                    <td className="p-4 font-mono text-slate-300">× 10⁻² (0.01)</td>
                                    <td className="p-4 text-slate-300 font-bold text-lg">± 10%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-black/30 w-fit mx-auto p-4 rounded-2xl flex items-center gap-4 border border-white/5">
                    <BookOpen className="w-6 h-6 text-primary-400 shrink-0" />
                    <p className="text-xs text-slate-400">
                        <strong className="text-white">Tip:</strong> Para memorizar, el orden sigue el espectro del arcoíris desde el <span className="text-red-400 font-bold">Rojo (2)</span> al <span className="text-purple-400 font-bold">Violeta (7)</span>, rodeados de negro/marrón al inicio y grises/blancos al final.
                    </p>
                </div>
            </section>

            {/* 3. Ejemplos Resueltos */}
            <section className="bg-gradient-to-r from-primary-600 to-primary-800 p-[1px] rounded-3xl shadow-2xl shadow-primary-500/20">
                <div className="bg-slate-950 rounded-[23px] p-8 md:p-10 relative overflow-hidden">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="text-4xl font-black text-primary-500 leading-none">3.</span>
                        <h2 className="text-2xl font-bold text-white pt-1">Ejemplos Prácticos</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
                        {/* Ejemplo 1 */}
                        <div className="bg-black/40 p-6 rounded-2xl border border-white/5 text-sm space-y-5">
                            <h3 className="text-primary-300 font-bold uppercase tracking-widest text-xs">Ejemplo 1</h3>

                            <div className="flex justify-center gap-2 mb-4">
                                <Band color="bg-red-500" value="2" label="Rojo" />
                                <Band color="bg-purple-500" value="7" label="Viol." />
                                <Band color="bg-amber-800" value="x10" label="Marr." />
                                <div className="w-4"></div>
                                <Band color="bg-yellow-500" value="±5%" label="Oro" />
                            </div>

                            <div className="space-y-3 bg-white/5 p-4 rounded-xl font-mono text-xs">
                                <div className="flex justify-between text-slate-400"><span>Cifras [Rojo, Viol.]:</span> <span className="text-white font-bold">2 7</span></div>
                                <div className="flex justify-between text-slate-400"><span>Multiplicador [Marr.]:</span> <span className="text-white font-bold">× 10</span></div>
                                <div className="h-[1px] bg-white/10 w-full my-1"></div>
                                <div className="flex justify-between text-slate-300"><span>Subtotal:</span> <span>270 Ω</span></div>
                                <div className="flex justify-between text-yellow-500"><span>Tolerancia [Oro]:</span> <span>± 5%</span></div>
                            </div>

                            <div className="text-center bg-primary-500/20 py-2 rounded-lg text-white font-mono font-bold border border-primary-500/30 text-lg">
                                270 Ω ±5%
                            </div>
                        </div>

                        {/* Ejemplo 2 */}
                        <div className="bg-black/40 p-6 rounded-2xl border border-white/5 text-sm space-y-5">
                            <h3 className="text-primary-300 font-bold uppercase tracking-widest text-xs">Ejemplo 2</h3>

                            <div className="flex justify-center gap-2 mb-4">
                                <Band color="bg-yellow-400 text-black" value="4" label="Amar." />
                                <Band color="bg-purple-500" value="7" label="Viol." />
                                <Band color="bg-red-500" value="x100" label="Rojo" />
                                <div className="w-4"></div>
                                <Band color="bg-yellow-500" value="±5%" label="Oro" />
                            </div>

                            <div className="space-y-3 bg-white/5 p-4 rounded-xl font-mono text-xs">
                                <div className="flex justify-between text-slate-400"><span>Cifras [Amar, Viol.]:</span> <span className="text-white font-bold">4 7</span></div>
                                <div className="flex justify-between text-slate-400"><span>Multiplicador [Rojo]:</span> <span className="text-white font-bold">× 100</span></div>
                                <div className="h-[1px] bg-white/10 w-full my-1"></div>
                                <div className="flex justify-between text-slate-300"><span>Operación:</span> <span>4700 Ω</span></div>
                                <div className="flex justify-between text-primary-300 font-bold"><span>Conversión:</span> <span>4,7 kΩ</span></div>
                            </div>

                            <div className="text-center bg-primary-500/20 py-2 rounded-lg text-white font-mono font-bold border border-primary-500/30 text-lg">
                                4,7 kΩ ±5%
                            </div>
                        </div>

                        {/* Ejemplo 3 */}
                        <div className="bg-black/40 p-6 rounded-2xl border border-white/5 text-sm space-y-5">
                            <h3 className="text-primary-300 font-bold uppercase tracking-widest text-xs">Ejemplo 3</h3>

                            <div className="flex justify-center gap-2 mb-4">
                                <Band color="bg-amber-800" value="1" label="Marr." />
                                <Band color="bg-black" value="0" label="Negro" />
                                <Band color="bg-red-500" value="x100" label="Rojo" />
                                <div className="w-4"></div>
                                <Band color="bg-yellow-500" value="±5%" label="Oro" />
                            </div>

                            <div className="space-y-3 bg-white/5 p-4 rounded-xl font-mono text-xs">
                                <div className="flex justify-between text-slate-400"><span>Cifras [Marr, Negro]:</span> <span className="text-white font-bold">1 0</span></div>
                                <div className="flex justify-between text-slate-400"><span>Multiplicador [Rojo]:</span> <span className="text-white font-bold">× 100</span></div>
                                <div className="h-[1px] bg-white/10 w-full my-1"></div>
                                <div className="flex justify-between text-slate-300"><span>Operación:</span> <span>1000 Ω</span></div>
                                <div className="flex justify-between text-primary-300 font-bold"><span>Conversión:</span> <span>1 kΩ</span></div>
                            </div>

                            <div className="text-center bg-primary-500/20 py-2 rounded-lg text-white font-mono font-bold border border-primary-500/30 text-lg">
                                1 kΩ ±5%
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. 5 Bandas y Tolerancia */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 5 Bandas */}
                <section className="bg-slate-900/60 p-8 rounded-3xl border border-white/5">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-4xl font-black text-blue-500/20 leading-none">4.</span>
                        <h2 className="text-2xl font-bold text-white pt-1">Sistema de 5 Bandas</h2>
                    </div>

                    <p className="text-sm text-slate-300 mb-6">
                        Algunas resistencias de mayor precisión utilizan 5 bandas. Tienen una <strong className="text-blue-400">cifra significativa adicional</strong> para lograr mucha más exactitud.
                    </p>

                    <div className="bg-black/40 p-5 rounded-2xl border border-white/5 text-sm space-y-5">

                        <div className="flex justify-center gap-2 mb-4">
                            <Band color="bg-amber-800" value="1" label="Marr." />
                            <Band color="bg-black" value="0" label="Neg." />
                            <Band color="bg-black" value="0" label="Neg." />
                            <Band color="bg-red-500" value="x100" label="Rojo" />
                            <Band color="bg-amber-800" value="±1%" label="Marr." />
                        </div>

                        <div className="space-y-3 bg-white/5 p-4 rounded-xl font-mono text-xs">
                            <div className="flex justify-between text-slate-400"><span>Cifras (B1, B2, B3):</span> <span className="text-white font-bold">1 0 0</span></div>
                            <div className="flex justify-between text-slate-400"><span>Multiplicador (Rojo):</span> <span className="text-white font-bold">× 100</span></div>
                            <div className="h-[1px] bg-white/10 w-full my-1"></div>
                            <div className="flex justify-between text-slate-300"><span>Subtotal:</span> <span>10 000 Ω</span></div>
                            <div className="flex justify-between text-blue-400 font-bold"><span>Conversión:</span> <span>10 kΩ</span></div>
                            <div className="flex justify-between text-amber-500"><span>Tolerancia (Marrón):</span> <span>± 1%</span></div>
                        </div>

                        <div className="text-center bg-blue-500/10 py-2 rounded-lg text-blue-300 font-mono font-bold border border-blue-500/30 text-lg">
                            10 kΩ ±1%
                        </div>
                    </div>
                </section>

                {/* Tolerancia e Importancia */}
                <section className="space-y-8 flex flex-col justify-between">
                    <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 flex-grow relative overflow-hidden">
                        <AlertCircle className="absolute right-[-20px] bottom-[-20px] w-48 h-48 text-white/5 pointer-events-none" />
                        <h2 className="text-2xl font-bold text-white mb-4 relative z-10">La Tolerancia (Margen de Error)</h2>
                        <p className="text-sm text-slate-300 mb-6 relative z-10">Indica el margen de variación físico permitido debido al proceso de fabricación.</p>

                        <div className="bg-orange-500/10 p-5 rounded-2xl border border-orange-500/30 text-sm relative z-10">
                            <div className="flex items-center gap-2 font-mono font-bold text-orange-400 text-lg mb-2">
                                <Calculator className="w-5 h-5" /> 1000 Ω ±5%
                            </div>
                            <p className="text-slate-300 mb-3 text-xs">Significa que el valor real medido con multímetro estará garantizado de estar entre:</p>

                            <div className="flex justify-between items-center bg-black/40 p-3 rounded-lg border border-white/5 font-mono text-center text-white">
                                <div><span className="text-red-400 block text-xs mb-1">-50Ω (5%)</span> 950 Ω</div>
                                <span className="text-slate-500">y</span>
                                <div><span className="text-green-400 block text-xs mb-1">+50Ω (5%)</span> 1050 Ω</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black/50 p-6 rounded-3xl border border-white/5 relative overflow-hidden max-h-48 group">
                        <CheckSquare className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 text-primary-500/5 group-hover:scale-110 transition-transform pointer-events-none" />
                        <h3 className="text-white font-bold text-lg mb-2 relative z-10 flex items-center gap-2">
                            <Target className="w-5 h-5 text-primary-400" /> ¿Por qué es importante?
                        </h3>
                        <p className="text-xs text-slate-400 relative z-10 mb-2">
                            Aprender esto permite identificar resistencias sin usar instrumentos, evitar errores de conexión al armar circuitos y comprender diagramas fácilmente.
                        </p>
                        <p className="text-xs text-primary-300 font-bold relative z-10 italic">"Es de los conocimientos base más críticos en electrónica."</p>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default CodigoColoresView;
