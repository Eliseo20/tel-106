import React, { useState } from 'react';
import { ArrowLeft, BookOpen, ChevronDown, ChevronRight, Zap, Target, Lightbulb, Calculator, GitCommit, Layers, AlertCircle, CheckCircle } from 'lucide-react';

const NotacionCientificaView = ({ onBack }) => {
    const [isTechnicalContentOpen, setIsTechnicalContentOpen] = useState(true);
    const [isExercisesOpen, setIsExercisesOpen] = useState(false);

    return (
        <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
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
                        Notación Científica
                    </h1>
                </div>
            </div>

            {/* Main Topic Introduction */}
            <section className="glass-morphism rounded-3xl p-8 space-y-8">
                <div className="flex justify-between items-start gap-6">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-2xl font-bold text-white">
                            <Target className="w-8 h-8 text-primary-400" />
                            <h2>1. ¿Por qué existen estas notaciones?</h2>
                        </div>
                        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                            <p>
                                En ciencia e ingeniería es muy común trabajar con números <strong className="text-white">muy grandes</strong> o <strong className="text-white">muy pequeños</strong>.
                            </p>

                            <ul className="space-y-3 mt-4">
                                <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                                    <span>Número de electrones en un conductor.</span>
                                </li>
                                <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                                    <span>Distancia entre planetas.</span>
                                </li>
                                <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                                    <span>Corrientes muy pequeñas en electrónica.</span>
                                </li>
                                <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                                    <span>Resistencias muy grandes en megaohmios.</span>
                                </li>
                            </ul>

                            <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl mt-6">
                                <p className="text-red-300 font-medium mb-4 flex items-center gap-2">
                                    <AlertCircle className="w-5 h-5" />
                                    Escribir estos números con muchos ceros puede ser incómodo y propenso a errores.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xl text-center">
                                    <div className="bg-black/30 p-4 rounded-xl text-white">0,000000003 A</div>
                                    <div className="bg-black/30 p-4 rounded-xl text-white">1200000000 Ω</div>
                                </div>
                            </div>

                            <p className="text-primary-300 font-medium mt-4 bg-primary-500/10 p-4 rounded-xl border border-primary-500/20">
                                Para simplificar la escritura y los cálculos se utilizan la <strong className="text-white">notación científica</strong> y la <strong className="text-white">notación de ingeniería</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Content Section */}
            <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                <button
                    onClick={() => setIsTechnicalContentOpen(!isTechnicalContentOpen)}
                    className="w-full flex items-center justify-between p-6 glass-morphism rounded-2xl hover:bg-white/5 transition-all duration-300 group shadow-lg"
                >
                    <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl transition-colors duration-300 ${isTechnicalContentOpen ? 'bg-primary-500 text-white' : 'bg-white/5 text-primary-400 group-hover:bg-primary-500/20'}`}>
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <h2 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                                Conceptos y Reglas
                            </h2>
                            <p className="text-sm font-medium text-slate-500">Definiciones, operaciones y aplicaciones eléctricas</p>
                        </div>
                    </div>
                    <div className={`p-2 rounded-full transition-all duration-300 ${isTechnicalContentOpen ? 'bg-primary-500/10 text-primary-400' : 'bg-white/5 text-slate-400'}`}>
                        {isTechnicalContentOpen ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                    </div>
                </button>

                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isTechnicalContentOpen ? 'opacity-100 max-h-[14000px] visible mt-4' : 'opacity-0 max-h-0 invisible'}`}>
                    <div className="glass-morphism rounded-[2.5rem] p-8 md:p-14 space-y-16 list-none border border-primary-500/10">

                        {/* Section 2: Definición */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <span className="text-5xl font-black text-primary-500/20 leading-none">2.</span>
                                <div>
                                    <h2 className="text-2xl font-bold text-white pt-1">Notación Científica</h2>
                                    <p className="text-slate-400 mt-2">La notación científica es una forma de escribir un número como un producto.</p>
                                </div>
                            </div>

                            <div className="bg-slate-900/40 p-8 rounded-3xl border border-white/5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div className="flex justify-center">
                                    <div className="text-5xl text-white font-bold font-mono">
                                        a × 10<sup className="text-2xl text-primary-400">n</sup>
                                    </div>
                                </div>
                                <div className="space-y-3 text-slate-300">
                                    <p><strong className="text-primary-400">a</strong> = número entre 1 y 10</p>
                                    <p><strong className="text-primary-400">10</strong> = base decimal</p>
                                    <p><strong className="text-primary-400">n</strong> = exponente entero que indica cuántos lugares se mueve la coma decimal</p>
                                </div>
                            </div>

                            {/* Ejemplos Paso a Paso */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
                                    <h3 className="text-primary-400 font-bold uppercase text-xs tracking-widest border-b border-white/10 pb-2">Ejemplo Básico (Número Grande)</h3>
                                    <div className="flex justify-between items-center bg-black/30 p-4 rounded-xl">
                                        <span className="text-slate-400 font-mono text-xl">3500</span>
                                        <span className="text-primary-500 font-bold">→</span>
                                        <span className="text-white font-mono text-xl">3,5 × 10³</span>
                                    </div>
                                    <ol className="list-decimal list-inside text-sm text-slate-300 space-y-2 mt-4">
                                        <li>Mover la coma hasta el 3,5.</li>
                                        <li>Se movió <strong>3 lugares</strong>.</li>
                                        <li>El exponente es <strong>3</strong>.</li>
                                    </ol>
                                </div>
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
                                    <h3 className="text-primary-400 font-bold uppercase text-xs tracking-widest border-b border-white/10 pb-2">Ejemplo (Número Pequeño)</h3>
                                    <div className="flex justify-between items-center bg-black/30 p-4 rounded-xl">
                                        <span className="text-slate-400 font-mono text-xl">0,00042</span>
                                        <span className="text-primary-500 font-bold">→</span>
                                        <span className="text-white font-mono text-xl">4,2 × 10⁻⁴</span>
                                    </div>
                                    <ol className="list-decimal list-inside text-sm text-slate-300 space-y-2 mt-4">
                                        <li>Mover la coma hasta el 4,2.</li>
                                        <li>Se movió <strong>4 lugares</strong>.</li>
                                        <li>Como es menor a 1, el exponente es <strong>-4</strong>.</li>
                                    </ol>
                                </div>
                            </div>

                            <div className="bg-primary-900/30 border-l-4 border-primary-500 p-6 rounded-r-2xl">
                                <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                                    <Lightbulb className="w-5 h-5 text-primary-400" /> Regla Importante
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-black/30 p-4 rounded-xl text-center">
                                        <span className="block text-slate-400 text-sm mb-1">Número grande ({">"}10)</span>
                                        <span className="text-white font-bold text-lg">exponente positivo</span>
                                    </div>
                                    <div className="bg-black/30 p-4 rounded-xl text-center">
                                        <span className="block text-slate-400 text-sm mb-1">Número pequeño ({"<"}1)</span>
                                        <span className="text-white font-bold text-lg">exponente negativo</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 3 & 4 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <span className="text-4xl font-black text-primary-500/20 leading-none">3.</span>
                                    <h2 className="text-xl font-bold text-white pt-1">Potencias de 10</h2>
                                </div>
                                <p className="text-slate-300">La notación científica funciona gracias a las potencias de base 10.</p>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-900/50 p-4 rounded-2xl border border-white/5">
                                        <div className="text-xs text-slate-500 uppercase font-bold mb-3">Positivas (+ ceros)</div>
                                        <ul className="font-mono text-sm space-y-2 text-white">
                                            <li>10¹ = 10</li>
                                            <li>10² = 100</li>
                                            <li>10³ = 1000</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-900/50 p-4 rounded-2xl border border-white/5">
                                        <div className="text-xs text-slate-500 uppercase font-bold mb-3">Negativas (decimales)</div>
                                        <ul className="font-mono text-sm space-y-2 text-white">
                                            <li>10⁻¹ = 0,1</li>
                                            <li>10⁻² = 0,01</li>
                                            <li>10⁻³ = 0,001</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <span className="text-4xl font-black text-primary-500/20 leading-none">4.</span>
                                    <h2 className="text-xl font-bold text-white pt-1">Cómo convertir</h2>
                                </div>
                                <div className="bg-primary-500/10 p-6 rounded-2xl border border-primary-500/20 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="bg-primary-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">1</span>
                                        <span className="text-slate-300 text-sm">Mover la coma hasta que quede un número entre 1 y 10.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="bg-primary-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">2</span>
                                        <span className="text-slate-300 text-sm">Contar cuántos lugares se movió la coma.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="bg-primary-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">3</span>
                                        <span className="text-slate-300 text-sm">Ese número será el exponente de 10.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 5: Operaciones */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <span className="text-5xl font-black text-primary-500/20 leading-none">5.</span>
                                <div>
                                    <h2 className="text-2xl font-bold text-white pt-1">Operaciones con notación científica</h2>
                                    <p className="text-slate-400 mt-1">Una gran ventaja es que se simplifican usando propiedades de las potencias.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Multiplicación */}
                                <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 space-y-4">
                                    <h3 className="text-white font-bold text-lg border-b border-white/10 pb-3">Multiplicación</h3>
                                    <div className="bg-black/40 p-4 rounded-xl font-mono text-center text-xl text-primary-300">
                                        (2 × 10³) (3 × 10⁴)
                                    </div>
                                    <ul className="space-y-2 text-sm text-slate-300">
                                        <li className="flex justify-between items-center"><span className="text-slate-500">1. Multiplicar números:</span> <span>2 × 3 = <strong className="text-white">6</strong></span></li>
                                        <li className="flex justify-between items-center"><span className="text-slate-500">2. Sumar exponentes:</span> <span>10³⁺⁴ = <strong className="text-white">10⁷</strong></span></li>
                                    </ul>
                                    <div className="bg-white/5 p-4 rounded-xl text-center">
                                        <span className="text-xs text-slate-500 uppercase block mb-1">Resultado:</span>
                                        <span className="text-white font-mono text-2xl font-bold">6 × 10⁷</span>
                                    </div>
                                </div>
                                {/* División */}
                                <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 space-y-4">
                                    <h3 className="text-white font-bold text-lg border-b border-white/10 pb-3">División</h3>
                                    <div className="bg-black/40 p-4 rounded-xl font-mono text-center text-xl text-primary-300 flex justify-center divide-y divide-primary-400/30 flex-col items-center">
                                        <span>6 × 10⁸</span>
                                        <span>3 × 10²</span>
                                    </div>
                                    <ul className="space-y-2 text-sm text-slate-300">
                                        <li className="flex justify-between items-center"><span className="text-slate-500">1. Dividir números:</span> <span>6 / 3 = <strong className="text-white">2</strong></span></li>
                                        <li className="flex justify-between items-center"><span className="text-slate-500">2. Restar exponentes:</span> <span>10⁸⁻² = <strong className="text-white">10⁶</strong></span></li>
                                    </ul>
                                    <div className="bg-white/5 p-4 rounded-xl text-center">
                                        <span className="text-xs text-slate-500 uppercase block mb-1">Resultado:</span>
                                        <span className="text-white font-mono text-2xl font-bold">2 × 10⁶</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 6: Notación de Ingeniería y 7: Casos */}
                        <div className="space-y-8 bg-gradient-to-br from-primary-900/20 to-transparent p-8 md:p-12 rounded-[2.5rem] border border-primary-500/10">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <span className="text-5xl font-black text-primary-500/30 leading-none">6.</span>
                                    <div>
                                        <h2 className="text-2xl font-bold text-white pt-1 flex items-center gap-3">
                                            Notación de Ingeniería <Zap className="w-6 h-6 text-primary-400" />
                                        </h2>
                                        <p className="text-slate-300 mt-2">
                                            Es una variante utilizada especialmente en electricidad y electrónica. La diferencia principal es que <strong className="text-white">el exponente de 10 siempre debe ser múltiplo de 3</strong>.
                                        </p>
                                    </div>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse min-w-[400px]">
                                        <thead>
                                            <tr className="border-b border-primary-500/20 text-primary-400 font-mono text-sm">
                                                <th className="py-4 px-4 font-normal uppercase tracking-widest">Prefijo</th>
                                                <th className="py-4 px-4 font-normal uppercase tracking-widest">Símbolo</th>
                                                <th className="py-4 px-4 font-normal uppercase tracking-widest text-right">Potencia</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-slate-300">
                                            <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                                <td className="py-3 px-4">giga</td><td className="py-3 px-4 font-bold text-white">G</td><td className="py-3 px-4 font-mono text-right">10⁹</td>
                                            </tr>
                                            <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                                <td className="py-3 px-4">mega</td><td className="py-3 px-4 font-bold text-white">M</td><td className="py-3 px-4 font-mono text-right">10⁶</td>
                                            </tr>
                                            <tr className="border-b border-white/5 hover:bg-white/5 transition-colors bg-primary-500/10">
                                                <td className="py-3 px-4 font-bold text-primary-300">kilo</td><td className="py-3 px-4 font-bold text-white">k</td><td className="py-3 px-4 font-mono text-right font-bold text-primary-400">10³</td>
                                            </tr>
                                            <tr className="border-b border-white/5 hover:bg-white/5 transition-colors bg-primary-500/10">
                                                <td className="py-3 px-4 font-bold text-primary-300">mili</td><td className="py-3 px-4 font-bold text-white">m</td><td className="py-3 px-4 font-mono text-right font-bold text-primary-400">10⁻³</td>
                                            </tr>
                                            <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                                <td className="py-3 px-4">micro</td><td className="py-3 px-4 font-bold text-white">μ</td><td className="py-3 px-4 font-mono text-right">10⁻⁶</td>
                                            </tr>
                                            <tr className="hover:bg-white/5 transition-colors">
                                                <td className="py-3 px-4">nano</td><td className="py-3 px-4 font-bold text-white">n</td><td className="py-3 px-4 font-mono text-right">10⁻⁹</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <hr className="border-white/10 my-8" />

                            {/* Section 7 */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <span className="text-4xl font-black text-primary-500/20 leading-none">7.</span>
                                    <h3 className="text-xl font-bold text-white pt-1">Ejemplos en electricidad</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-slate-900/80 p-6 rounded-2xl border border-white/5">
                                        <div className="text-xs text-slate-500 uppercase tracking-widest mb-4">Corriente pequeña</div>
                                        <div className="text-white font-mono text-xl mb-4 border-b border-white/10 pb-4">0,000002 A</div>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex justify-between items-center"><span className="text-slate-400">Científica:</span> <span className="text-white font-mono">2 × 10⁻⁶ A</span></div>
                                            <div className="flex justify-between items-center"><span className="text-primary-400 font-bold">Ingeniería:</span> <span className="text-primary-300 font-mono font-bold text-lg">2 μA</span></div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-900/80 p-6 rounded-2xl border border-white/5">
                                        <div className="text-xs text-slate-500 uppercase tracking-widest mb-4">Resistencia grande</div>
                                        <div className="text-white font-mono text-xl mb-4 border-b border-white/10 pb-4">4700000 Ω</div>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex justify-between items-center"><span className="text-slate-400">Científica:</span> <span className="text-white font-mono">4,7 × 10⁶ Ω</span></div>
                                            <div className="flex justify-between items-center"><span className="text-primary-400 font-bold">Ingeniería:</span> <span className="text-primary-300 font-mono font-bold text-lg">4,7 MΩ</span></div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-900/80 p-6 rounded-2xl border border-white/5">
                                        <div className="text-xs text-slate-500 uppercase tracking-widest mb-4">Voltaje</div>
                                        <div className="text-white font-mono text-xl mb-4 border-b border-white/10 pb-4">0,003 V</div>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex justify-between items-center"><span className="text-slate-400">Científica:</span> <span className="text-white font-mono">3 × 10⁻³ V</span></div>
                                            <div className="flex justify-between items-center"><span className="text-primary-400 font-bold">Ingeniería:</span> <span className="text-primary-300 font-mono font-bold text-lg">3 mV</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 8: Trucos */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <span className="text-4xl font-black text-primary-500/20 leading-none">8.</span>
                                <h2 className="text-xl font-bold text-white pt-1">Trucos rápidos</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-black/20 border border-white/5 p-5 rounded-2xl flex flex-col gap-2">
                                    <div className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center font-bold">1</div>
                                    <p className="text-sm text-slate-300">El exponente indica cuántos lugares se mueve la coma.</p>
                                </div>
                                <div className="bg-black/20 border border-white/5 p-5 rounded-2xl flex flex-col gap-2">
                                    <div className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center font-bold">2</div>
                                    <p className="text-sm text-slate-300">Si el número es grande, el exponente es <strong>positivo</strong>.</p>
                                </div>
                                <div className="bg-black/20 border border-white/5 p-5 rounded-2xl flex flex-col gap-2">
                                    <div className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center font-bold">3</div>
                                    <p className="text-sm text-slate-300">Si el número es menor que 1, el exponente es <strong>negativo</strong>.</p>
                                </div>
                                <div className="bg-primary-500/10 border border-primary-500/20 p-5 rounded-2xl flex flex-col gap-2">
                                    <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold">4</div>
                                    <p className="text-sm text-primary-200">Aprender conversiones directas (k = 10³, M = 10⁶, m = 10⁻³, μ = 10⁻⁶).</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 9: Importancia */}
                        <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-[1px] rounded-3xl shadow-lg shadow-primary-500/10">
                            <div className="bg-slate-950 rounded-[23px] p-8 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center justify-between">
                                <div className="space-y-4 max-w-lg">
                                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                        <Layers className="w-8 h-8 text-primary-400" />
                                        9. Importancia en electricidad
                                    </h3>
                                    <p className="text-slate-300">Sin estas notaciones, los cálculos con números muy grandes o muy pequeños serían mucho más difíciles. Son fundamentales para:</p>
                                    <ul className="flex flex-wrap gap-2 pt-2">
                                        <li className="bg-white/10 px-3 py-1 scale-95 rounded-full text-white text-sm">Ley de Ohm</li>
                                        <li className="bg-white/10 px-3 py-1 scale-95 rounded-full text-white text-sm">Leyes de Kirchhoff</li>
                                        <li className="bg-white/10 px-3 py-1 scale-95 rounded-full text-white text-sm text-primary-300 font-medium">Cálculo de resistencias</li>
                                        <li className="bg-white/10 px-3 py-1 scale-95 rounded-full text-white text-sm">Corrientes muy pequeñas</li>
                                        <li className="bg-white/10 px-3 py-1 scale-95 rounded-full text-white text-sm">Electrónica</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Exercises Section */}
            <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                <button
                    onClick={() => setIsExercisesOpen(!isExercisesOpen)}
                    className="w-full flex items-center justify-between p-6 glass-morphism rounded-2xl hover:bg-white/5 transition-all duration-300 group shadow-lg"
                >
                    <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl transition-colors duration-300 ${isExercisesOpen ? 'bg-primary-500 text-white' : 'bg-white/5 text-primary-400 group-hover:bg-primary-500/20'}`}>
                            <CheckCircle className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <h2 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                                Ejercicios Resueltos
                            </h2>
                            <p className="text-sm font-medium text-slate-500">15 ejercicios explicados paso a paso</p>
                        </div>
                    </div>
                    <div className={`p-2 rounded-full transition-all duration-300 ${isExercisesOpen ? 'bg-primary-500/10 text-primary-400' : 'bg-white/5 text-slate-400'}`}>
                        {isExercisesOpen ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                    </div>
                </button>

                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isExercisesOpen ? 'opacity-100 max-h-[14000px] visible mt-4' : 'opacity-0 max-h-0 invisible'}`}>
                    <div className="glass-morphism rounded-[2.5rem] p-8 md:p-10 space-y-8 border border-primary-500/10">

                        <p className="text-slate-300 text-lg mb-8">
                            A continuación, se presentan 15 ejercicios resueltos paso a paso para dominar la conversión y operaciones con notación científica y de ingeniería.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Ejercicio 1 */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 hover:border-primary-500/30 transition-colors flex flex-col h-full">
                                <span className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-4">Ejercicio 1</span>
                                <p className="text-white font-medium mb-4">Expresar en notación científica:</p>
                                <div className="bg-black/40 p-3 rounded-xl font-mono text-center text-xl text-primary-300 mb-4">4500</div>
                                <div className="space-y-3 text-sm text-slate-300 flex-grow">
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>1. Mover coma:</span> <span className="text-white font-mono">4500 = 4,5</span></div>
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>2. Desplazamientos:</span> <span className="text-white">3 a la izq.</span></div>
                                </div>
                                <div className="mt-4 bg-primary-500/10 p-4 rounded-xl text-center">
                                    <span className="text-xs text-slate-500 uppercase block mb-1">Resultado:</span>
                                    <span className="text-white font-mono text-xl font-bold">4,5 × 10³</span>
                                </div>
                            </div>

                            {/* Ejercicio 2 */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 hover:border-primary-500/30 transition-colors flex flex-col h-full">
                                <span className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-4">Ejercicio 2</span>
                                <p className="text-white font-medium mb-4">Expresar en notación científica:</p>
                                <div className="bg-black/40 p-3 rounded-xl font-mono text-center text-xl text-primary-300 mb-4">82000</div>
                                <div className="space-y-3 text-sm text-slate-300 flex-grow">
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>1. Mover coma:</span> <span className="text-white font-mono">82000 = 8,2</span></div>
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>2. Desplazamientos:</span> <span className="text-white">4 a la izq.</span></div>
                                </div>
                                <div className="mt-4 bg-primary-500/10 p-4 rounded-xl text-center">
                                    <span className="text-xs text-slate-500 uppercase block mb-1">Resultado:</span>
                                    <span className="text-white font-mono text-xl font-bold">8,2 × 10⁴</span>
                                </div>
                            </div>

                            {/* Ejercicio 3 */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 hover:border-primary-500/30 transition-colors flex flex-col h-full">
                                <span className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-4">Ejercicio 3</span>
                                <p className="text-white font-medium mb-4">Expresar en notación científica:</p>
                                <div className="bg-black/40 p-3 rounded-xl font-mono text-center text-xl text-primary-300 mb-4">0,0036</div>
                                <div className="space-y-3 text-sm text-slate-300 flex-grow">
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>1. Mover coma:</span> <span className="text-white font-mono">3,6</span></div>
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>2. Desplazamientos:</span> <span className="text-white">3 a la der. (-)</span></div>
                                </div>
                                <div className="mt-4 bg-primary-500/10 p-4 rounded-xl text-center">
                                    <span className="text-xs text-slate-500 uppercase block mb-1">Resultado:</span>
                                    <span className="text-white font-mono text-xl font-bold">3,6 × 10⁻³</span>
                                </div>
                            </div>

                            {/* Ejercicio 4 */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 hover:border-primary-500/30 transition-colors flex flex-col h-full">
                                <span className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-4">Ejercicio 4</span>
                                <p className="text-white font-medium mb-4">Expresar en notación científica:</p>
                                <div className="bg-black/40 p-3 rounded-xl font-mono text-center text-xl text-primary-300 mb-4">0,00072</div>
                                <div className="space-y-3 text-sm text-slate-300 flex-grow">
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>1. Mover coma:</span> <span className="text-white font-mono">7,2</span></div>
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>2. Desplazamientos:</span> <span className="text-white">4 a la der. (-)</span></div>
                                </div>
                                <div className="mt-4 bg-primary-500/10 p-4 rounded-xl text-center">
                                    <span className="text-xs text-slate-500 uppercase block mb-1">Resultado:</span>
                                    <span className="text-white font-mono text-xl font-bold">7,2 × 10⁻⁴</span>
                                </div>
                            </div>

                            {/* Ejercicio 5 */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 hover:border-primary-500/30 transition-colors flex flex-col h-full">
                                <span className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-4">Ejercicio 5</span>
                                <p className="text-white font-medium mb-4">Expresar en notación científica:</p>
                                <div className="bg-black/40 p-3 rounded-xl font-mono text-center text-xl text-primary-300 mb-4">1200000</div>
                                <div className="space-y-3 text-sm text-slate-300 flex-grow">
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>1. Mover coma:</span> <span className="text-white font-mono">1,2</span></div>
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>2. Desplazamientos:</span> <span className="text-white">6 lugares</span></div>
                                </div>
                                <div className="mt-4 bg-primary-500/10 p-4 rounded-xl text-center">
                                    <span className="text-xs text-slate-500 uppercase block mb-1">Resultado:</span>
                                    <span className="text-white font-mono text-xl font-bold">1,2 × 10⁶</span>
                                </div>
                            </div>

                            {/* Ejercicio 6 */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 hover:border-primary-500/30 transition-colors flex flex-col h-full">
                                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-4">Ejercicio 6</span>
                                <p className="text-white font-medium mb-4">Convertir a número normal:</p>
                                <div className="bg-black/40 p-3 rounded-xl font-mono text-center text-xl text-amber-300 mb-4">3,5 × 10³</div>
                                <div className="space-y-3 text-sm text-slate-300 flex-grow">
                                    <p>El exponente 3 indica mover la coma <strong>3 lugares</strong> hacia la derecha.</p>
                                </div>
                                <div className="mt-4 bg-amber-500/10 p-4 rounded-xl text-center">
                                    <span className="text-xs text-slate-500 uppercase block mb-1">Resultado:</span>
                                    <span className="text-white font-mono text-xl font-bold">3500</span>
                                </div>
                            </div>

                            {/* Ejercicio 7 */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 hover:border-primary-500/30 transition-colors flex flex-col h-full">
                                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-4">Ejercicio 7</span>
                                <p className="text-white font-medium mb-4">Convertir a número normal:</p>
                                <div className="bg-black/40 p-3 rounded-xl font-mono text-center text-xl text-amber-300 mb-4">7,8 × 10⁴</div>
                                <div className="space-y-3 text-sm text-slate-300 flex-grow">
                                    <p>Mover la coma <strong>4 lugares</strong> hacia la derecha.</p>
                                </div>
                                <div className="mt-4 bg-amber-500/10 p-4 rounded-xl text-center">
                                    <span className="text-xs text-slate-500 uppercase block mb-1">Resultado:</span>
                                    <span className="text-white font-mono text-xl font-bold">78000</span>
                                </div>
                            </div>

                            {/* Ejercicio 8 */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 hover:border-primary-500/30 transition-colors flex flex-col h-full">
                                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-4">Ejercicio 8</span>
                                <p className="text-white font-medium mb-4">Convertir a número normal:</p>
                                <div className="bg-black/40 p-3 rounded-xl font-mono text-center text-xl text-amber-300 mb-4">2,4 × 10⁻³</div>
                                <div className="space-y-3 text-sm text-slate-300 flex-grow">
                                    <p>Exponente negativo: mover coma hacia la izquierda <strong>3 lugares</strong>.</p>
                                </div>
                                <div className="mt-4 bg-amber-500/10 p-4 rounded-xl text-center">
                                    <span className="text-xs text-slate-500 uppercase block mb-1">Resultado:</span>
                                    <span className="text-white font-mono text-xl font-bold">0,0024</span>
                                </div>
                            </div>

                            {/* Ejercicio 9 */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 hover:border-primary-500/30 transition-colors flex flex-col h-full">
                                <span className="text-xs font-bold text-green-500 uppercase tracking-widest mb-4">Ejercicio 9</span>
                                <p className="text-white font-medium mb-4">Multiplicar:</p>
                                <div className="bg-black/40 p-3 rounded-xl font-mono text-center text-xl text-green-300 mb-4">(2×10³) (4×10²)</div>
                                <div className="space-y-3 text-sm text-slate-300 flex-grow">
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>1. Multiplicar núm:</span> <span className="text-white font-mono">2 × 4 = 8</span></div>
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>2. Sumar exp:</span> <span className="text-white">10³⁺² = 10⁵</span></div>
                                </div>
                                <div className="mt-4 bg-green-500/10 p-4 rounded-xl text-center">
                                    <span className="text-xs text-slate-500 uppercase block mb-1">Resultado:</span>
                                    <span className="text-white font-mono text-xl font-bold">8 × 10⁵</span>
                                </div>
                            </div>

                            {/* Ejercicio 10 */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 hover:border-primary-500/30 transition-colors flex flex-col h-full">
                                <span className="text-xs font-bold text-green-500 uppercase tracking-widest mb-4">Ejercicio 10</span>
                                <p className="text-white font-medium mb-4">Multiplicar:</p>
                                <div className="bg-black/40 p-3 rounded-xl font-mono text-center text-xl text-green-300 mb-4">(3×10⁴) (2×10³)</div>
                                <div className="space-y-3 text-sm text-slate-300 flex-grow">
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>1. Multiplicar núm:</span> <span className="text-white font-mono">3 × 2 = 6</span></div>
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>2. Sumar exp:</span> <span className="text-white">10⁴⁺³ = 10⁷</span></div>
                                </div>
                                <div className="mt-4 bg-green-500/10 p-4 rounded-xl text-center">
                                    <span className="text-xs text-slate-500 uppercase block mb-1">Resultado:</span>
                                    <span className="text-white font-mono text-xl font-bold">6 × 10⁷</span>
                                </div>
                            </div>

                            {/* Ejercicio 11 */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 hover:border-primary-500/30 transition-colors flex flex-col h-full">
                                <span className="text-xs font-bold text-red-500 uppercase tracking-widest mb-4">Ejercicio 11</span>
                                <p className="text-white font-medium mb-4">Dividir:</p>
                                <div className="bg-black/40 p-3 rounded-xl font-mono text-center text-xl text-red-300 mb-4 flex justify-center flex-col items-center">
                                    <span>6 × 10⁷</span>
                                    <span className="w-16 h-px bg-red-500/30 my-1"></span>
                                    <span>2 × 10³</span>
                                </div>
                                <div className="space-y-3 text-sm text-slate-300 flex-grow">
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>1. Dividir núm:</span> <span className="text-white font-mono">6 / 2 = 3</span></div>
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>2. Restar exp:</span> <span className="text-white">10⁷⁻³ = 10⁴</span></div>
                                </div>
                                <div className="mt-4 bg-red-500/10 p-4 rounded-xl text-center">
                                    <span className="text-xs text-slate-500 uppercase block mb-1">Resultado:</span>
                                    <span className="text-white font-mono text-xl font-bold">3 × 10⁴</span>
                                </div>
                            </div>

                            {/* Ejercicio 12 */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 hover:border-primary-500/30 transition-colors flex flex-col h-full">
                                <span className="text-xs font-bold text-red-500 uppercase tracking-widest mb-4">Ejercicio 12</span>
                                <p className="text-white font-medium mb-4">Dividir:</p>
                                <div className="bg-black/40 p-3 rounded-xl font-mono text-center text-xl text-red-300 mb-4 flex justify-center flex-col items-center">
                                    <span>9 × 10⁶</span>
                                    <span className="w-16 h-px bg-red-500/30 my-1"></span>
                                    <span>3 × 10²</span>
                                </div>
                                <div className="space-y-3 text-sm text-slate-300 flex-grow">
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>1. Dividir núm:</span> <span className="text-white font-mono">9 / 3 = 3</span></div>
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>2. Restar exp:</span> <span className="text-white">10⁶⁻² = 10⁴</span></div>
                                </div>
                                <div className="mt-4 bg-red-500/10 p-4 rounded-xl text-center">
                                    <span className="text-xs text-slate-500 uppercase block mb-1">Resultado:</span>
                                    <span className="text-white font-mono text-xl font-bold">3 × 10⁴</span>
                                </div>
                            </div>

                            {/* Ejercicio 13 */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 hover:border-primary-500/30 transition-colors flex flex-col h-full lg:col-span-1">
                                <span className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-4 flex items-center gap-2"><Zap className="w-3 h-3" /> Ejercicio 13</span>
                                <p className="text-white font-medium mb-4">A notación de ingeniería:</p>
                                <div className="bg-black/40 p-3 rounded-xl font-mono text-center text-xl text-purple-300 mb-4">0,000004 A</div>
                                <div className="space-y-3 text-sm text-slate-300 flex-grow">
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>1. N. Científica:</span> <span className="text-white font-mono">4 × 10⁻⁶ A</span></div>
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>2. Reconocer:</span> <span className="text-white">10⁻⁶ = micro (μ)</span></div>
                                </div>
                                <div className="mt-4 bg-purple-500/10 p-4 rounded-xl text-center">
                                    <span className="text-xs text-slate-500 uppercase block mb-1">Resultado:</span>
                                    <span className="text-white font-mono text-2xl font-bold">4 μA</span>
                                </div>
                            </div>

                            {/* Ejercicio 14 */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 hover:border-primary-500/30 transition-colors flex flex-col h-full lg:col-span-1">
                                <span className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-4 flex items-center gap-2"><Zap className="w-3 h-3" /> Ejercicio 14</span>
                                <p className="text-white font-medium mb-4">A notación de ingeniería:</p>
                                <div className="bg-black/40 p-3 rounded-xl font-mono text-center text-xl text-purple-300 mb-4">5600000 Ω</div>
                                <div className="space-y-3 text-sm text-slate-300 flex-grow">
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>1. N. Científica:</span> <span className="text-white font-mono">5,6 × 10⁶ Ω</span></div>
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>2. Reconocer:</span> <span className="text-white">10⁶ = mega (M)</span></div>
                                </div>
                                <div className="mt-4 bg-purple-500/10 p-4 rounded-xl text-center">
                                    <span className="text-xs text-slate-500 uppercase block mb-1">Resultado:</span>
                                    <span className="text-white font-mono text-2xl font-bold">5,6 MΩ</span>
                                </div>
                            </div>

                            {/* Ejercicio 15 */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 hover:border-primary-500/30 transition-colors flex flex-col h-full lg:col-span-1">
                                <span className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-4 flex items-center gap-2"><Zap className="w-3 h-3" /> Ejercicio 15</span>
                                <p className="text-white font-medium mb-4">A notación de ingeniería:</p>
                                <div className="bg-black/40 p-3 rounded-xl font-mono text-center text-xl text-purple-300 mb-4">0,003 V</div>
                                <div className="space-y-3 text-sm text-slate-300 flex-grow">
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>1. N. Científica:</span> <span className="text-white font-mono">3 × 10⁻³ V</span></div>
                                    <div className="flex justify-between border-b border-white/5 pb-2"><span>2. Reconocer:</span> <span className="text-white">10⁻³ = mili (m)</span></div>
                                </div>
                                <div className="mt-4 bg-purple-500/10 p-4 rounded-xl text-center">
                                    <span className="text-xs text-slate-500 uppercase block mb-1">Resultado:</span>
                                    <span className="text-white font-mono text-2xl font-bold">3 mV</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotacionCientificaView;
