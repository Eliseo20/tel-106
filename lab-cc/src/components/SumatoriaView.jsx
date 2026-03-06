import React, { useState } from 'react';
import { ArrowLeft, BookOpen, ChevronDown, ChevronRight, Zap, Target, Lightbulb, Calculator, GitCommit } from 'lucide-react';

const SumatoriaView = ({ onBack }) => {
    const [isTechnicalContentOpen, setIsTechnicalContentOpen] = useState(true);

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
                        Sumatoria
                    </h1>
                </div>
            </div>

            {/* Main Topic Introduction */}
            <section className="glass-morphism rounded-3xl p-8 space-y-6">
                <div className="flex items-center gap-3 text-2xl font-bold text-white">
                    <BookOpen className="w-8 h-8 text-primary-400" />
                    <h2>1. Definición académica de sumatoria</h2>
                </div>
                <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                    <p>
                        En matemáticas, una sumatoria es una operación que consiste en sumar una secuencia de números o expresiones.
                    </p>
                    <p>
                        Se representa con la letra griega sigma mayúscula <strong className="text-primary-300">(Σ)</strong>.
                    </p>

                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 space-y-4 mt-6">
                        <div className="text-slate-400 font-medium uppercase tracking-widest text-xs">Forma general</div>
                        <div className="flex items-center gap-4 text-primary-400 text-3xl font-bold font-mono">
                            <div className="flex flex-col items-center">
                                <span className="text-sm">b</span>
                                <span className="text-5xl">∑</span>
                                <span className="text-sm">i=a</span>
                            </div>
                            <span>f(i)</span>
                        </div>
                        <ul className="space-y-2 text-sm mt-4">
                            <li><strong className="text-white">Σ (sigma)</strong> → indica que se deben sumar términos</li>
                            <li><strong className="text-white">i</strong> → variable o índice de la suma</li>
                            <li><strong className="text-white">a</strong> → valor inicial del índice</li>
                            <li><strong className="text-white">b</strong> → valor final del índice</li>
                            <li><strong className="text-white">f(i)</strong> → expresión que se va evaluando en cada valor del índice</li>
                        </ul>
                    </div>

                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 space-y-4">
                        <div className="text-slate-400 font-medium uppercase tracking-widest text-xs">Ejemplo Básico</div>

                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 text-white text-2xl font-bold font-mono">
                                <div className="flex flex-col items-center">
                                    <span className="text-xs">4</span>
                                    <span className="text-4xl text-primary-400">∑</span>
                                    <span className="text-xs">i=1</span>
                                </div>
                                <span className="ml-2">i</span>
                            </div>
                            <div className="text-slate-400 text-sm">
                                Esto significa: sumar los valores de <strong className="text-white">i</strong> desde 1 hasta 4.
                            </div>
                        </div>

                        <div className="pt-2">
                            <span className="text-slate-500 mr-4">Entonces:</span>
                            <span className="text-white font-mono text-xl">1 + 2 + 3 + 4</span>
                        </div>
                        <div className="flex items-center gap-4 pt-2">
                            <span className="text-slate-500">Resultado:</span>
                            <span className="text-primary-300 font-bold text-3xl">10</span>
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
                            <Calculator className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <h2 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                                Ejemplos y Aplicaciones
                            </h2>
                            <p className="text-sm font-medium text-slate-500">Aplicación en ingeniería y redes eléctricas</p>
                        </div>
                    </div>
                    <div className={`p-2 rounded-full transition-all duration-300 ${isTechnicalContentOpen ? 'bg-primary-500/10 text-primary-400' : 'bg-white/5 text-slate-400'}`}>
                        {isTechnicalContentOpen ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                    </div>
                </button>

                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isTechnicalContentOpen ? 'opacity-100 max-h-[14000px] visible mt-4' : 'opacity-0 max-h-0 invisible'}`}>
                    <div className="glass-morphism rounded-[2.5rem] p-10 md:p-14 space-y-16 list-none border border-primary-500/10">

                        {/* Section 2 */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-5">
                                <span className="text-5xl font-black text-primary-500/20 leading-none">2.</span>
                                <h2 className="text-2xl font-bold text-white pt-1">Otro ejemplo paso a paso</h2>
                            </div>

                            <div className="bg-slate-900/40 rounded-3xl p-8 border border-white/5 space-y-6">
                                <div className="flex items-center gap-4 text-white text-2xl font-bold font-mono border-b border-white/10 pb-6">
                                    <div className="flex flex-col items-center">
                                        <span className="text-xs">5</span>
                                        <span className="text-4xl text-primary-400">∑</span>
                                        <span className="text-xs">i=1</span>
                                    </div>
                                    <span className="ml-2">2i</span>
                                </div>

                                <div className="space-y-4">
                                    <div className="text-primary-400 font-bold mb-2 uppercase text-xs tracking-widest">Paso 1: reemplazar los valores de i</div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-black/20 rounded-xl border border-white/5 flex justify-between items-center">
                                            <span className="text-slate-400 text-sm">Para i = 1</span>
                                            <span className="font-mono text-white text-lg">2(1) = <strong className="text-primary-300">2</strong></span>
                                        </div>
                                        <div className="p-4 bg-black/20 rounded-xl border border-white/5 flex justify-between items-center">
                                            <span className="text-slate-400 text-sm">Para i = 2</span>
                                            <span className="font-mono text-white text-lg">2(2) = <strong className="text-primary-300">4</strong></span>
                                        </div>
                                        <div className="p-4 bg-black/20 rounded-xl border border-white/5 flex justify-between items-center">
                                            <span className="text-slate-400 text-sm">Para i = 3</span>
                                            <span className="font-mono text-white text-lg">2(3) = <strong className="text-primary-300">6</strong></span>
                                        </div>
                                        <div className="p-4 bg-black/20 rounded-xl border border-white/5 flex justify-between items-center">
                                            <span className="text-slate-400 text-sm">Para i = 4</span>
                                            <span className="font-mono text-white text-lg">2(4) = <strong className="text-primary-300">8</strong></span>
                                        </div>
                                        <div className="p-4 bg-black/20 rounded-xl border border-white/5 flex justify-between items-center md:col-span-2 md:w-1/2 md:mx-auto">
                                            <span className="text-slate-400 text-sm">Para i = 5</span>
                                            <span className="font-mono text-white text-lg">2(5) = <strong className="text-primary-300">10</strong></span>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-white/10">
                                        <div className="text-primary-400 font-bold mb-4 uppercase text-xs tracking-widest">Paso 2: sumar los resultados</div>
                                        <div className="bg-primary-500/10 border border-primary-500/20 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4">
                                            <span className="font-mono text-white text-xl">2 + 4 + 6 + 8 + 10</span>
                                            <div className="flex items-center gap-3">
                                                <span className="text-slate-500 uppercase text-xs font-bold">Resultado:</span>
                                                <span className="text-3xl font-bold text-primary-400">30</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 3 & 4 Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Section 3 */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <span className="text-4xl font-black text-primary-500/20 leading-none">3.</span>
                                    <h2 className="text-xl font-bold text-white pt-1">Interpretación conceptual</h2>
                                </div>
                                <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 h-full">
                                    <p className="text-slate-300 mb-4">La sumatoria permite representar sumas extensas:</p>

                                    <div className="font-mono text-white text-lg bg-black/20 p-4 rounded-xl text-center mb-4 overflow-x-auto">
                                        a₁ + a₂ + a₃ + a₄ + ⋯ + aₙ
                                    </div>

                                    <p className="text-slate-400 text-sm mb-4">de forma más compacta:</p>

                                    <div className="flex justify-center mb-4">
                                        <div className="flex items-center gap-2 text-primary-300 text-2xl font-bold font-mono">
                                            <div className="flex flex-col items-center">
                                                <span className="text-xs">n</span>
                                                <span className="text-4xl text-primary-400">∑</span>
                                                <span className="text-xs">i=1</span>
                                            </div>
                                            <span className="ml-2">aᵢ</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-400 mt-4 border-t border-white/5 pt-4">
                                        <Lightbulb className="w-4 h-4 text-primary-400" />
                                        <span>Esto es muy útil cuando hay muchos términos.</span>
                                    </div>
                                </div>
                            </div>

                            {/* Section 4 */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <span className="text-4xl font-black text-primary-500/20 leading-none">4.</span>
                                    <h2 className="text-xl font-bold text-white pt-1">En ingeniería y física</h2>
                                </div>
                                <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 h-full">
                                    <p className="text-slate-300 mb-4">
                                        En ingeniería se usa la sumatoria para representar la suma de magnitudes físicas complejas como:
                                    </p>
                                    <ul className="grid grid-cols-2 gap-3">
                                        <li className="bg-white/5 p-3 rounded-xl flex items-center justify-center text-sm font-medium text-white hover:bg-primary-500/20 transition-colors border border-white/5">Corrientes</li>
                                        <li className="bg-white/5 p-3 rounded-xl flex items-center justify-center text-sm font-medium text-white hover:bg-primary-500/20 transition-colors border border-white/5">Voltajes</li>
                                        <li className="bg-white/5 p-3 rounded-xl flex items-center justify-center text-sm font-medium text-white hover:bg-primary-500/20 transition-colors border border-white/5">Fuerzas</li>
                                        <li className="bg-white/5 p-3 rounded-xl flex items-center justify-center text-sm font-medium text-white hover:bg-primary-500/20 transition-colors border border-white/5">Potencias</li>
                                        <li className="bg-white/5 p-3 rounded-xl flex items-center justify-center text-sm font-medium text-white hover:bg-primary-500/20 transition-colors border border-white/5 col-span-2">Energías</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Section 5 & 6 & 7 - Electricidad */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <span className="text-5xl font-black text-primary-500/20 leading-none">5.</span>
                                <h2 className="text-2xl font-bold text-white pt-1">Sumatoria en electricidad</h2>
                            </div>
                            <p className="text-slate-300 text-lg">
                                En electricidad la sumatoria aparece principalmente en las <strong className="text-primary-400">Leyes de Kirchhoff</strong>. Existen dos aplicaciones fundamentales:
                            </p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Section 6: KCL */}
                                <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-primary-500/30 transition-all duration-500">
                                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <GitCommit className="w-32 h-32" />
                                    </div>
                                    <div className="relative z-10 space-y-6">
                                        <div>
                                            <span className="text-primary-500 font-bold mb-2 uppercase text-xs tracking-widest block">Ley 1 (6)</span>
                                            <h3 className="text-2xl font-bold text-white mb-4">Ley de Kirchhoff de Corrientes (KCL)</h3>
                                        </div>
                                        <div className="bg-black/30 p-4 rounded-xl border-l-2 border-primary-500">
                                            <p className="text-slate-300 italic">
                                                "La suma de las corrientes que entran a un nodo es igual a la suma de las corrientes que salen."
                                            </p>
                                        </div>

                                        <div className="text-center py-4">
                                            <span className="text-xs text-slate-500 uppercase tracking-widest block mb-2">Forma Matemática</span>
                                            <span className="font-mono text-4xl font-bold text-primary-300">∑ I = 0</span>
                                        </div>
                                        <p className="text-sm text-slate-400 text-center">
                                            La suma algebraica de todas las corrientes en un nodo es cero.
                                        </p>

                                        <div className="bg-white/5 p-4 rounded-2xl space-y-3 border border-white/5">
                                            <div className="text-xs text-slate-400 font-bold uppercase tracking-wide">Ejemplo en un nodo:</div>
                                            <ul className="text-sm space-y-1 text-slate-300 font-mono">
                                                <li className="flex justify-between"><span>Entra:</span> <span className="text-green-400">+5 A</span></li>
                                                <li className="flex justify-between"><span>Entra:</span> <span className="text-green-400">+3 A</span></li>
                                                <li className="flex justify-between border-b border-white/10 pb-2"><span>Sale:</span> <span className="text-red-400">-8 A</span></li>
                                                <li className="flex justify-between pt-2"><span>Ecuación:</span> <span className="text-white">5 + 3 - 8 = 0</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 7: KVL */}
                                <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-primary-500/30 transition-all duration-500">
                                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Zap className="w-32 h-32" />
                                    </div>
                                    <div className="relative z-10 space-y-6">
                                        <div>
                                            <span className="text-primary-500 font-bold mb-2 uppercase text-xs tracking-widest block">Ley 2 (7)</span>
                                            <h3 className="text-2xl font-bold text-white mb-4">Ley de Kirchhoff de Voltajes (KVL)</h3>
                                        </div>
                                        <div className="bg-black/30 p-4 rounded-xl border-l-2 border-primary-500">
                                            <p className="text-slate-300 italic">
                                                "La suma de todos los voltajes en una malla cerrada es igual a cero."
                                            </p>
                                        </div>

                                        <div className="text-center py-4">
                                            <span className="text-xs text-slate-500 uppercase tracking-widest block mb-2">Forma Matemática</span>
                                            <span className="font-mono text-4xl font-bold text-primary-300">∑ V = 0</span>
                                        </div>

                                        <div className="bg-white/5 p-4 rounded-2xl space-y-3 mt-auto border border-white/5">
                                            <div className="text-xs text-slate-400 font-bold uppercase tracking-wide">Ejemplo en un circuito:</div>
                                            <ul className="text-sm space-y-1 text-slate-300 font-mono">
                                                <li className="flex justify-between"><span>Fuente:</span> <span className="text-green-400">+12 V</span></li>
                                                <li className="flex justify-between"><span>Caída:</span> <span className="text-red-400">-5 V</span></li>
                                                <li className="flex justify-between"><span>Caída:</span> <span className="text-red-400">-4 V</span></li>
                                                <li className="flex justify-between border-b border-white/10 pb-2"><span>Caída:</span> <span className="text-red-400">-3 V</span></li>
                                                <li className="flex justify-between pt-2"><span>Ecuación:</span> <span className="text-white">12 - 5 - 4 - 3 = 0</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 8 & 9 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Section 8 */}
                            <div className="bg-primary-500/10 border border-primary-500/20 p-8 rounded-3xl">
                                <div className="flex items-start gap-4 mb-4">
                                    <span className="text-4xl font-black text-primary-500/30 leading-none">8.</span>
                                    <h2 className="text-xl font-bold text-white pt-1">Interpretación física</h2>
                                </div>
                                <p className="text-slate-300 mb-6">La sumatoria en circuitos representa principios fundamentales de la física:</p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 bg-black/20 p-4 rounded-xl">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-primary-400 font-bold font-mono">KCL</div>
                                        <div>
                                            <div className="text-white font-bold">Conservación de carga</div>
                                            <div className="text-sm text-slate-400">La carga no se crea ni se destruye.</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-black/20 p-4 rounded-xl">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-primary-400 font-bold font-mono">KVL</div>
                                        <div>
                                            <div className="text-white font-bold">Conservación de energía</div>
                                            <div className="text-sm text-slate-400">La energía total suministrada equivale a la disipada.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 9 */}
                            <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/5">
                                <div className="flex items-start gap-4 mb-4">
                                    <span className="text-4xl font-black text-primary-500/20 leading-none">9.</span>
                                    <h2 className="text-xl font-bold text-white pt-1">Ventaja de usar sumatorias</h2>
                                </div>
                                <p className="text-slate-300 mb-6">Permite escribir ecuaciones complejas de forma simple.</p>

                                <div className="space-y-4 text-center">
                                    <p className="text-sm text-slate-500 text-left">Por ejemplo, un nodo con muchas corrientes:</p>
                                    <div className="bg-red-500/10 border border-red-500/20 text-red-300 font-mono p-4 rounded-xl overflow-x-auto whitespace-nowrap">
                                        I₁ + I₂ + I₃ + I₄ + I₅ = 0
                                    </div>
                                    <div className="flex justify-center my-2">
                                        <span className="bg-white/10 text-xs px-3 py-1 rounded-full text-slate-400">puede escribirse como</span>
                                    </div>
                                    <div className="bg-green-500/10 border border-green-500/20 text-green-300 font-mono text-2xl font-bold p-4 rounded-xl">
                                        ∑ I = 0
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 10 */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-5">
                                <span className="text-5xl font-black text-primary-500/20 leading-none">10.</span>
                                <h2 className="text-2xl font-bold text-white pt-1">Ejemplo aplicado a circuitos</h2>
                            </div>

                            <div className="bg-slate-900/40 border border-white/5 p-8 rounded-3xl">
                                <p className="text-slate-300 mb-6">Supongamos un nodo con cuatro corrientes.</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-white/5 p-6 rounded-2xl">
                                        <h4 className="text-primary-400 font-bold mb-4 uppercase text-xs tracking-widest border-b border-primary-500/20 pb-2">Entrantes</h4>
                                        <ul className="space-y-3 font-mono text-white text-lg">
                                            <li className="flex justify-between bg-black/20 p-3 rounded-lg"><span>I₁</span> <span className="text-green-400">= 2 A</span></li>
                                            <li className="flex justify-between bg-black/20 p-3 rounded-lg"><span>I₂</span> <span className="text-green-400">= 3 A</span></li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 p-6 rounded-2xl">
                                        <h4 className="text-primary-400 font-bold mb-4 uppercase text-xs tracking-widest border-b border-primary-500/20 pb-2">Salientes</h4>
                                        <ul className="space-y-3 font-mono text-white text-lg">
                                            <li className="flex justify-between bg-black/20 p-3 rounded-lg"><span>I₃</span> <span className="text-red-400">= 4 A</span></li>
                                            <li className="flex justify-between bg-black/20 p-3 rounded-lg"><span>I₄</span> <span className="text-amber-400">= ?</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-black/30 p-6 rounded-2xl border border-white/10 space-y-4 font-mono text-lg">
                                    <div className="text-slate-400 text-sm font-sans mb-2 font-bold uppercase">Aplicamos KCL:</div>

                                    <div className="text-center text-primary-400 font-bold text-2xl border-b border-white/5 pb-4">
                                        ∑ I = 0
                                    </div>

                                    <div className="space-y-3 pt-4 text-center text-slate-300">
                                        <p>2 + 3 - 4 - I₄ = 0</p>
                                        <p className="text-sm font-sans text-slate-500 my-2">Simplificamos:</p>
                                        <p>5 - 4 - I₄ = 0</p>
                                        <p>1 - I₄ = 0</p>
                                    </div>

                                    <div className="mt-6 border-t border-white/10 pt-6">
                                        <div className="flex flex-col items-center">
                                            <span className="text-sm font-sans text-slate-500 mb-2">Entonces:</span>
                                            <span className="text-3xl font-bold text-white bg-primary-500/20 px-6 py-4 rounded-xl border border-primary-500/30 shadow-lg shadow-primary-500/10">
                                                I₄ = 1 A
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 11 & Resumen */}
                        <div className="space-y-8 border-t border-white/5 pt-12">
                            <div className="flex items-start gap-4">
                                <span className="text-4xl font-black text-primary-500/20 leading-none">11.</span>
                                <div>
                                    <h2 className="text-2xl font-bold text-white pt-1">Forma general en circuitos complejos</h2>
                                    <p className="text-slate-400 mt-2">En análisis de redes eléctricas es común escribir las sumatorias de la siguiente forma formal:</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 flex flex-col items-center justify-center min-h-[160px]">
                                    <div className="flex items-center gap-2 text-white text-3xl font-bold font-mono">
                                        <div className="flex flex-col items-center">
                                            <span className="text-xs text-slate-400">n</span>
                                            <span className="text-5xl text-primary-400">∑</span>
                                            <span className="text-xs text-slate-400">k=1</span>
                                        </div>
                                        <span className="ml-2">I<sub className="text-lg">k</sub> = 0</span>
                                    </div>
                                </div>
                                <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 flex flex-col items-center justify-center min-h-[160px]">
                                    <div className="flex items-center gap-2 text-white text-3xl font-bold font-mono">
                                        <div className="flex flex-col items-center">
                                            <span className="text-xs text-slate-400">n</span>
                                            <span className="text-5xl text-primary-400">∑</span>
                                            <span className="text-xs text-slate-400">k=1</span>
                                        </div>
                                        <span className="ml-2">V<sub className="text-lg">k</sub> = 0</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center text-slate-400 italic">Esto significa sumar todas las corrientes o voltajes del circuito.</p>

                            {/* Resumen Final */}
                            <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-[1px] rounded-3xl mt-12 shadow-2xl shadow-primary-500/20">
                                <div className="bg-slate-950 rounded-[23px] p-8 md:p-10 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-5">
                                        <BookOpen className="w-48 h-48" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                        <span className="p-2 bg-primary-500/20 text-primary-400 rounded-lg">✅</span>
                                        Resumen
                                    </h3>

                                    <div className="space-y-6 relative z-10 text-lg text-slate-300">
                                        <p>
                                            La <strong className="text-white">sumatoria (Σ)</strong> es una notación matemática que representa la suma de una serie de términos.
                                        </p>
                                        <p>En electricidad se utiliza principalmente para expresar:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                                            <div className="bg-white/5 p-6 rounded-2xl flex items-center justify-between border border-white/5">
                                                <span className="font-medium text-white">Ley de Kirchhoff de corrientes</span>
                                                <span className="font-mono text-xl text-primary-400 font-bold bg-black/40 px-3 py-1 rounded-lg">∑ I = 0</span>
                                            </div>
                                            <div className="bg-white/5 p-6 rounded-2xl flex items-center justify-between border border-white/5">
                                                <span className="font-medium text-white">Ley de Kirchhoff de voltajes</span>
                                                <span className="font-mono text-xl text-primary-400 font-bold bg-black/40 px-3 py-1 rounded-lg">∑ V = 0</span>
                                            </div>
                                        </div>

                                        <p className="text-center font-medium mt-6 text-primary-200 bg-primary-900/30 p-4 rounded-xl border border-primary-500/20">
                                            Permite modelar matemáticamente el comportamiento de los circuitos eléctricos.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default SumatoriaView;
