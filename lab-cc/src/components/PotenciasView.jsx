import React, { useState } from 'react';
import { ArrowLeft, BookOpen, ChevronDown, ChevronRight, Zap, Target, AlertTriangle, Lightbulb, Calculator } from 'lucide-react';

const PotenciasView = ({ onBack }) => {
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
                        Potencias
                    </h1>
                </div>
            </div>

            {/* Main Topic Introduction */}
            <section className="glass-morphism rounded-3xl p-8 space-y-6">
                <div className="flex items-center gap-3 text-2xl font-bold text-white">
                    <BookOpen className="w-8 h-8 text-primary-400" />
                    <h2>1. ¿Qué es una potencia?</h2>
                </div>
                <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                    <p>
                        Una potencia es una forma abreviada de escribir multiplicaciones repetidas del mismo número.
                    </p>
                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 space-y-4">
                        <div className="text-slate-400 font-medium uppercase tracking-widest text-xs">Forma general</div>
                        <div className="flex items-end gap-2 text-primary-400 text-4xl font-bold">
                            <span>a</span>
                            <span className="text-2xl mb-4">n</span>
                        </div>
                        <ul className="space-y-2 text-sm">
                            <li><strong className="text-white">a → base</strong> (el número que se multiplica)</li>
                            <li><strong className="text-white">n → exponente</strong> (cuántas veces se multiplica)</li>
                        </ul>
                    </div>

                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 space-y-2">
                        <div className="text-slate-400 font-medium uppercase tracking-widest text-xs">Ejemplo</div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-end gap-1 text-white text-2xl font-bold">
                                <span>2</span><span className="text-sm mb-2">3</span>
                            </div>
                            <span className="text-slate-500">significa:</span>
                            <span className="text-primary-300 font-mono text-xl">2 × 2 × 2</span>
                        </div>
                        <div className="flex items-center gap-4 pt-2">
                            <span className="text-slate-500">resultado:</span>
                            <div className="flex items-end gap-1 text-white text-2xl font-bold">
                                <span>2</span><span className="text-sm mb-2">3</span> <span> = 8</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pt-4 mt-4 border-t border-white/5">
                            <div className="text-slate-400 font-medium uppercase tracking-widest text-xs">Otro ejemplo</div>
                        </div>
                        <div className="flex items-center gap-4 pt-2">
                            <div className="flex items-end gap-1 text-white text-2xl font-bold">
                                <span>5</span><span className="text-sm mb-2">4</span>
                            </div>
                            <span className="text-slate-500">significa:</span>
                            <span className="text-primary-300 font-mono text-xl">5 × 5 × 5 × 5</span>
                        </div>
                        <div className="flex items-center gap-4 pt-2">
                            <span className="text-slate-500">resultado:</span>
                            <div className="flex items-end gap-1 text-white text-2xl font-bold">
                                <span>5</span><span className="text-sm mb-2">4</span> <span> = 625</span>
                            </div>
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
                                Contenido Detallado
                            </h2>
                            <p className="text-sm font-medium text-slate-500">Cálculos, Propiedades y Aplicaciones</p>
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
                                <h2 className="text-2xl font-bold text-white pt-1">Cómo calcular una potencia paso a paso</h2>
                            </div>
                            <div className="bg-slate-900/40 rounded-3xl p-8 border border-white/5 space-y-6">
                                <div className="flex items-end gap-1 text-white text-3xl font-bold mb-4">
                                    <span>Ejemplo: 3</span><span className="text-xl mb-3">4</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="p-4 bg-black/20 rounded-xl border border-white/5">
                                        <div className="text-primary-400 font-bold mb-2">Paso 1: identificar el exponente</div>
                                        <p className="text-slate-300">El 4 indica que el 3 se multiplica 4 veces: <span className="font-mono text-primary-300 ml-2">3 × 3 × 3 × 3</span></p>
                                    </div>
                                    <div className="p-4 bg-black/20 rounded-xl border border-white/5">
                                        <div className="text-primary-400 font-bold mb-2">Paso 2: multiplicar en orden</div>
                                        <ul className="space-y-2 font-mono text-slate-300">
                                            <li>3 × 3 = <span className="text-white">9</span></li>
                                            <li>9 × 3 = <span className="text-white">27</span></li>
                                            <li>27 × 3 = <span className="text-white">81</span></li>
                                        </ul>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-white/10 text-xl text-white font-bold flex gap-4">
                                        <span className="text-slate-500">Resultado</span>
                                        <div className="flex items-end gap-1">
                                            <span>3</span><span className="text-sm mb-2">4</span> <span> = 81</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sections 3 & 4 Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Section 3 */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-5">
                                    <span className="text-5xl font-black text-primary-500/20 leading-none">3.</span>
                                    <h2 className="text-xl font-bold text-white pt-2">Potencias de exponente 1</h2>
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                    Si el exponente es 1, el número queda igual.
                                </p>
                                <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 text-center">
                                    <div className="text-3xl font-bold text-white flex items-center justify-center gap-2">
                                        <div className="flex items-end gap-1">
                                            <span>7</span><span className="text-lg mb-2 text-primary-400">1</span>
                                        </div>
                                        <span>= 7</span>
                                    </div>
                                    <p className="text-sm text-slate-500 mt-2">porque el 7 se multiplica una sola vez.</p>
                                </div>
                            </div>

                            {/* Section 4 */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-5">
                                    <span className="text-5xl font-black text-primary-500/20 leading-none">4.</span>
                                    <h2 className="text-xl font-bold text-white pt-2">Potencia con exponente 0</h2>
                                </div>
                                <div className="p-4 bg-primary-500/10 border border-primary-500/20 rounded-2xl">
                                    <div className="text-xs text-primary-400 font-bold uppercase tracking-widest mb-1">Una regla muy importante</div>
                                    <div className="text-2xl font-bold text-white flex items-center gap-2 mb-2">
                                        <div className="flex items-end gap-1">
                                            <span>a</span><span className="text-sm mb-2 text-primary-400">0</span>
                                        </div>
                                        <span>= 1</span>
                                    </div>
                                    <p className="text-sm text-slate-300">siempre que a sea distinto de cero.</p>
                                </div>
                                <div className="text-slate-300 space-y-2">
                                    <p><strong className="text-white">Ejemplos:</strong></p>
                                    <ul className="grid grid-cols-2 gap-2 text-center text-lg font-mono">
                                        <li className="bg-black/20 p-2 rounded-lg text-white">5⁰ = 1</li>
                                        <li className="bg-black/20 p-2 rounded-lg text-white">12⁰ = 1</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Section 4 Extension - Por que? */}
                        <div className="ml-12 md:ml-16 bg-slate-900/30 p-6 rounded-2xl border border-white/5 mt-4">
                            <h4 className="text-primary-400 font-bold mb-4">¿Por qué?</h4>
                            <p className="text-slate-300 mb-4 text-sm">Se debe a las propiedades de las potencias.</p>
                            <p className="text-slate-400 mb-2 font-bold text-xs uppercase">Ejemplo:</p>
                            <div className="font-mono text-sm text-slate-300 space-y-2">
                                <div className="flex justify-between max-w-xs items-center">
                                    <span>5³ = 125</span>
                                </div>
                                <div className="flex justify-between max-w-xs items-center">
                                    <span>5² = 25</span>
                                    <span className="text-slate-500 text-xs">(÷5)</span>
                                </div>
                                <div className="flex justify-between max-w-xs items-center">
                                    <span>5¹ = 5</span>
                                    <span className="text-slate-500 text-xs">(÷5)</span>
                                </div>
                                <div className="flex justify-between max-w-xs items-center text-white font-bold bg-primary-500/10 border border-primary-500/20 p-2 rounded">
                                    <span>entonces 5⁰ = 1</span>
                                    <span className="text-primary-400 text-xs">(5 ÷ 5 = 1)</span>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-4 text-center italic">Cada vez que bajamos el exponente dividimos por 5.</p>
                        </div>

                        {/* Section 5 */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-5">
                                <span className="text-5xl font-black text-primary-500/20 leading-none">5.</span>
                                <h2 className="text-2xl font-bold text-white pt-1">Potencias de 10 (muy importantes)</h2>
                            </div>
                            <p className="text-slate-300 leading-relaxed">
                                Estas aparecen mucho en electricidad y notación científica.
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-slate-900/50 p-4 rounded-xl text-center border border-white/5">
                                    <div className="text-primary-400 font-bold mb-2 text-xl">10¹</div>
                                    <div className="text-white font-mono text-xl">10</div>
                                </div>
                                <div className="bg-slate-900/50 p-4 rounded-xl text-center border border-white/5">
                                    <div className="text-primary-400 font-bold mb-2 text-xl">10²</div>
                                    <div className="text-white font-mono text-xl">100</div>
                                </div>
                                <div className="bg-slate-900/50 p-4 rounded-xl text-center border border-white/5">
                                    <div className="text-primary-400 font-bold mb-2 text-xl">10³</div>
                                    <div className="text-white font-mono text-xl">1000</div>
                                </div>
                                <div className="bg-slate-900/50 p-4 rounded-xl text-center border border-white/5">
                                    <div className="text-primary-400 font-bold mb-2 text-xl">10⁴</div>
                                    <div className="text-white font-mono text-xl">10000</div>
                                </div>
                            </div>

                            <div className="bg-primary-500/5 border-l-4 border-primary-500 p-4 rounded-r-xl">
                                <div className="flex items-center gap-2 text-primary-400 font-bold mb-2">
                                    <Lightbulb className="w-5 h-5" />
                                    <span>Truco rápido</span>
                                </div>
                                <p className="text-slate-300">
                                    El exponente indica cuántos ceros hay.
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-slate-500">Ejemplo:</span>
                                    <span className="font-mono text-white text-lg bg-black/30 px-2 py-1 rounded">10⁶</span>
                                    <span className="text-slate-400">son 6 ceros:</span>
                                    <span className="font-mono text-white text-lg bg-black/30 px-2 py-1 rounded">1 000 000</span>
                                </div>
                            </div>
                        </div>

                        {/* Section 6 - Propiedades */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <span className="text-5xl font-black text-primary-500/20 leading-none">6.</span>
                                <h2 className="text-2xl font-bold text-white pt-1">Propiedades de las potencias</h2>
                            </div>
                            <p className="text-slate-300">Estas reglas simplifican mucho los cálculos.</p>

                            <div className="space-y-6">
                                {/* Propiedad 1 */}
                                <div className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl group hover:border-primary-500/30 transition-colors">
                                    <h3 className="text-primary-400 font-bold mb-2 uppercase text-sm tracking-widest">Propiedad 1</h3>
                                    <h4 className="text-white font-bold text-lg mb-4">Multiplicación de potencias con la misma base</h4>

                                    <div className="bg-black/20 p-4 rounded-xl text-center mb-4">
                                        <span className="font-mono text-xl text-white">a<sup className="text-primary-400">m</sup> × a<sup className="text-primary-400">n</sup> = a<sup className="text-primary-400">m+n</sup></span>
                                        <p className="text-sm text-slate-500 mt-2 italic">Se suman los exponentes.</p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300 mt-4 border-t border-white/5 pt-4">
                                        <div className="space-y-1">
                                            <p><strong className="text-slate-500 uppercase text-xs">Ejemplo</strong></p>
                                            <p className="font-mono text-lg text-white">2³ × 2⁴ = 2<sup className="text-xs">3+4</sup> = <strong className="text-primary-300">2⁷</strong></p>
                                            <p className="mt-2 text-slate-400">resultado: 128</p>
                                        </div>
                                        <div className="space-y-1">
                                            <p><strong className="text-slate-500 uppercase text-xs">Explicación real</strong></p>
                                            <p className="font-mono text-xs">2³ = 2 × 2 × 2</p>
                                            <p className="font-mono text-xs">2⁴ = 2 × 2 × 2 × 2</p>
                                            <p className="text-slate-400 mt-1">si los juntamos:</p>
                                            <p className="font-mono text-lg font-bold text-white">2⁷</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Propiedad 2 */}
                                <div className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl group hover:border-primary-500/30 transition-colors">
                                    <h3 className="text-primary-400 font-bold mb-2 uppercase text-sm tracking-widest">Propiedad 2</h3>
                                    <h4 className="text-white font-bold text-lg mb-4">División de potencias con la misma base</h4>

                                    <div className="bg-black/20 p-4 rounded-xl flex flex-col items-center justify-center mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex flex-col items-center text-white font-mono text-lg">
                                                <span className="border-b border-white/30 px-2">a<sup className="text-primary-400">m</sup></span>
                                                <span className="px-2">a<sup className="text-primary-400">n</sup></span>
                                            </div>
                                            <span className="text-white font-mono text-lg">= a<sup className="text-primary-400">m-n</sup></span>
                                        </div>
                                        <p className="text-sm text-slate-500 mt-4 italic">Se restan los exponentes.</p>
                                    </div>
                                    <div className="text-sm text-slate-300 border-t border-white/5 pt-4">
                                        <p className="mb-2"><strong className="text-slate-500 uppercase text-xs">Ejemplo</strong></p>
                                        <div className="flex items-center gap-4">
                                            <div className="flex flex-col items-center text-white font-mono">
                                                <span className="border-b border-white/30 px-2">5⁶</span>
                                                <span className="px-2">5²</span>
                                            </div>
                                            <span className="text-white font-mono">= 5<sup className="text-xs">6-2</sup> = <strong className="text-primary-300 text-lg">5⁴</strong> = 625</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Propiedad 3 */}
                                    <div className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl group hover:border-primary-500/30 transition-colors">
                                        <h3 className="text-primary-400 font-bold mb-2 uppercase text-sm tracking-widest">Propiedad 3</h3>
                                        <h4 className="text-white font-bold text-md mb-4">Potencia de una potencia</h4>
                                        <div className="bg-black/20 p-4 rounded-xl text-center mb-4">
                                            <span className="font-mono text-lg text-white">(a<sup className="text-primary-400">m</sup>)<sup className="text-primary-400">n</sup> = a<sup className="text-primary-400">m×n</sup></span>
                                            <p className="text-xs text-slate-500 mt-2 italic">Se multiplican los exponentes.</p>
                                        </div>
                                        <div className="border-t border-white/5 pt-4">
                                            <p className="mb-1 text-slate-500 uppercase text-xs font-bold">Ejemplo</p>
                                            <p className="font-mono text-sm text-center text-slate-300">(2³)<sup className="text-xs">4</sup> = 2<sup className="text-xs">3×4</sup> = <strong className="text-primary-300 text-lg">2¹²</strong></p>
                                        </div>
                                    </div>

                                    {/* Propiedad 4 */}
                                    <div className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl group hover:border-primary-500/30 transition-colors">
                                        <h3 className="text-primary-400 font-bold mb-2 uppercase text-sm tracking-widest">Propiedad 4</h3>
                                        <h4 className="text-white font-bold text-md mb-4">Potencia de un producto</h4>
                                        <div className="bg-black/20 p-4 rounded-xl text-center mb-4">
                                            <span className="font-mono text-lg text-white">(a×b)<sup className="text-primary-400">n</sup> = a<sup className="text-primary-400">n</sup>×b<sup className="text-primary-400">n</sup></span>
                                        </div>
                                        <div className="border-t border-white/5 pt-4">
                                            <p className="mb-1 text-slate-500 uppercase text-xs font-bold">Ejemplo</p>
                                            <p className="font-mono text-sm text-center text-slate-300">(2×3)² = 2² × 3² = 4 × 9 = <strong className="text-primary-300 text-lg">36</strong></p>
                                        </div>
                                    </div>
                                </div>

                                {/* Propiedad 5 */}
                                <div className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl group hover:border-primary-500/30 transition-colors">
                                    <h3 className="text-primary-400 font-bold mb-2 uppercase text-sm tracking-widest">Propiedad 5</h3>
                                    <h4 className="text-white font-bold text-md mb-4">Potencia de un cociente</h4>

                                    <div className="bg-black/20 p-4 rounded-xl flex flex-col items-center justify-center mb-4">
                                        <div className="flex items-center gap-4">
                                            <span className="text-white font-mono text-lg flex items-center">
                                                (
                                                <div className="flex flex-col items-center mx-1">
                                                    <span className="border-b border-white/30 px-1">a</span>
                                                    <span className="px-1">b</span>
                                                </div>
                                                )<sup className="text-primary-400 mt-[-10px]">n</sup>
                                            </span>
                                            <span className="text-white font-mono text-lg">=</span>
                                            <div className="flex flex-col items-center text-white font-mono text-lg">
                                                <span className="border-b border-white/30 px-2">a<sup className="text-primary-400">n</sup></span>
                                                <span className="px-2">b<sup className="text-primary-400">n</sup></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-sm text-slate-300 border-t border-white/5 pt-4">
                                        <p className="mb-2"><strong className="text-slate-500 uppercase text-xs">Ejemplo</strong></p>
                                        <div className="flex items-center gap-4">
                                            <span className="text-white font-mono text-lg flex items-center">
                                                (
                                                <div className="flex flex-col items-center mx-1 text-sm">
                                                    <span className="border-b border-white/30 px-1">2</span>
                                                    <span className="px-1">3</span>
                                                </div>
                                                )<sup className="mt-[-10px]">2</sup>
                                            </span>
                                            <span className="text-white font-mono">=</span>
                                            <div className="flex flex-col items-center text-white font-mono">
                                                <span className="border-b border-white/30 px-2">2²</span>
                                                <span className="px-2">3²</span>
                                            </div>
                                            <span className="text-white font-mono">= <strong className="text-primary-300 text-lg">4/9</strong></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 7 */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-5">
                                <span className="text-5xl font-black text-primary-500/20 leading-none">7.</span>
                                <h2 className="text-2xl font-bold text-white pt-1">Potencias con exponentes negativos</h2>
                            </div>
                            <div className="bg-primary-500/10 border border-primary-500/20 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <div className="text-xs text-primary-400 font-bold uppercase tracking-widest">Regla</div>
                                    <p className="text-slate-300">Si el exponente es negativo, se toma el recíproco y el exponente cambia a positivo.</p>
                                </div>
                                <div className="text-3xl font-mono text-white flex items-center gap-4 bg-slate-900/50 px-6 py-4 rounded-xl border border-white/5">
                                    <span>a<sup className="text-primary-400">-n</sup></span>
                                    <span>=</span>
                                    <div className="flex flex-col items-center text-2xl">
                                        <span className="border-b border-white/30 px-2 w-full text-center">1</span>
                                        <span className="px-2">a<sup className="text-primary-400">n</sup></span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5 space-y-4">
                                    <div className="text-slate-500 text-sm font-bold uppercase mb-2">Ejemplo</div>
                                    <div className="flex items-center gap-4 text-white font-mono text-xl">
                                        <span>2⁻³ =</span>
                                        <div className="flex flex-col items-center">
                                            <span className="border-b border-white/30 px-2 w-full text-center">1</span>
                                            <span className="px-2">2³</span>
                                        </div>
                                        <span>=</span>
                                        <div className="flex flex-col items-center text-primary-300 font-bold">
                                            <span className="border-b border-primary-300/30 px-2 w-full text-center">1</span>
                                            <span className="px-2">8</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5 space-y-4">
                                    <div className="text-slate-500 text-sm font-bold uppercase mb-2">Otro ejemplo</div>
                                    <div className="flex items-center gap-4 text-white font-mono text-xl">
                                        <span>10⁻² =</span>
                                        <div className="flex flex-col items-center">
                                            <span className="border-b border-white/30 px-2 w-full text-center">1</span>
                                            <span className="px-2">10²</span>
                                        </div>
                                        <span>=</span>
                                        <div className="flex flex-col items-center text-primary-300 font-bold">
                                            <span className="border-b border-primary-300/30 px-2 w-full text-center">1</span>
                                            <span className="px-2">100</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 8 - Trucos mentales */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-5">
                                <span className="text-5xl font-black text-primary-500/20 leading-none">8.</span>
                                <h2 className="text-2xl font-bold text-white pt-1">Trucos mentales útiles</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Truco 1 */}
                                <div className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl">
                                    <h3 className="text-primary-400 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                                        <Calculator className="w-5 h-5" />
                                        Truco 1
                                    </h3>
                                    <h4 className="text-white font-bold mb-4">Potencias de 2 <span className="text-slate-500 font-normal text-sm block">(muy usadas)</span></h4>
                                    <ul className="space-y-2 font-mono text-sm text-slate-300 pt-2 border-t border-white/5">
                                        <li className="flex justify-between items-center"><span className="bg-black/20 p-1 rounded">2¹</span> <span className="text-white font-bold text-base">2</span></li>
                                        <li className="flex justify-between items-center"><span className="bg-black/20 p-1 rounded">2²</span> <span className="text-white font-bold text-base">4</span></li>
                                        <li className="flex justify-between items-center"><span className="bg-black/20 p-1 rounded">2³</span> <span className="text-white font-bold text-base">8</span></li>
                                        <li className="flex justify-between items-center"><span className="bg-black/20 p-1 rounded">2⁴</span> <span className="text-white font-bold text-base">16</span></li>
                                        <li className="flex justify-between items-center"><span className="bg-black/20 p-1 rounded">2⁵</span> <span className="text-white font-bold text-base">32</span></li>
                                        <li className="flex justify-between items-center"><span className="bg-black/20 p-1 rounded">2⁶</span> <span className="text-white font-bold text-base">64</span></li>
                                        <li className="flex justify-between items-center text-primary-300 bg-primary-500/10 p-1 rounded"><span className="font-bold">2⁷</span> <span className="font-bold text-base">128</span></li>
                                    </ul>
                                </div>

                                {/* Truco 2 */}
                                <div className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl">
                                    <h3 className="text-primary-400 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                                        <Target className="w-5 h-5" />
                                        Truco 2
                                    </h3>
                                    <h4 className="text-white font-bold mb-4">Cuadrados <span className="text-slate-500 font-normal text-sm block">importantes</span></h4>
                                    <ul className="space-y-2 font-mono text-sm text-slate-300 pt-2 border-t border-white/5">
                                        <li className="flex justify-between items-center"><span className="bg-black/20 p-1 rounded">2²</span> <span className="text-white font-bold text-base">4</span></li>
                                        <li className="flex justify-between items-center"><span className="bg-black/20 p-1 rounded">3²</span> <span className="text-white font-bold text-base">9</span></li>
                                        <li className="flex justify-between items-center"><span className="bg-black/20 p-1 rounded">4²</span> <span className="text-white font-bold text-base">16</span></li>
                                        <li className="flex justify-between items-center"><span className="bg-black/20 p-1 rounded">5²</span> <span className="text-white font-bold text-base">25</span></li>
                                        <li className="flex justify-between items-center"><span className="bg-black/20 p-1 rounded">6²</span> <span className="text-white font-bold text-base">36</span></li>
                                        <li className="flex justify-between items-center"><span className="bg-black/20 p-1 rounded">7²</span> <span className="text-white font-bold text-base">49</span></li>
                                        <li className="flex justify-between items-center"><span className="bg-black/20 p-1 rounded">8²</span> <span className="text-white font-bold text-base">64</span></li>
                                        <li className="flex justify-between items-center"><span className="bg-black/20 p-1 rounded">9²</span> <span className="text-white font-bold text-base">81</span></li>
                                        <li className="flex justify-between items-center text-primary-300 bg-primary-500/10 p-1 rounded"><span className="font-bold">10²</span> <span className="font-bold text-base">100</span></li>
                                    </ul>
                                </div>

                                {/* Truco 3 */}
                                <div className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl">
                                    <h3 className="text-primary-400 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                                        <Zap className="w-5 h-5" />
                                        Truco 3
                                    </h3>
                                    <h4 className="text-white font-bold mb-4">Cubos <span className="text-slate-500 font-normal text-sm block">comunes</span></h4>
                                    <ul className="space-y-2 font-mono text-sm text-slate-300 pt-2 border-t border-white/5">
                                        <li className="flex justify-between items-center"><span className="bg-black/20 p-1 rounded">2³</span> <span className="text-white font-bold text-base">8</span></li>
                                        <li className="flex justify-between items-center"><span className="bg-black/20 p-1 rounded">3³</span> <span className="text-white font-bold text-base">27</span></li>
                                        <li className="flex justify-between items-center"><span className="bg-black/20 p-1 rounded">4³</span> <span className="text-white font-bold text-base">64</span></li>
                                        <li className="flex justify-between items-center text-primary-300 bg-primary-500/10 p-1 rounded"><span className="font-bold">5³</span> <span className="font-bold text-base">125</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Section 9 - Errores */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <span className="text-5xl font-black text-primary-500/20 leading-none">9.</span>
                                <h2 className="text-2xl font-bold text-white pt-1">Errores comunes de los estudiantes</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Error 1 */}
                                <div className="border border-red-500/30 bg-red-500/5 rounded-2xl overflow-hidden flex flex-col">
                                    <div className="bg-red-500/20 p-3 flex gap-2 items-center text-red-400 font-bold text-sm uppercase">
                                        <AlertTriangle className="w-4 h-4" /> Error 1
                                    </div>
                                    <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                                        <div className="text-slate-300 text-center bg-black/20 p-4 rounded-xl">
                                            <p className="mb-2 text-sm">Muchos creen que</p>
                                            <span className="font-mono text-red-300 text-lg block bg-red-500/20 py-2 rounded">(2 + 3)² = 2² + 3²</span>
                                            <p className="mt-2 text-sm text-slate-400">pero eso es <strong className="text-red-400">incorrecto</strong>.</p>
                                        </div>
                                        <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl text-center space-y-2 mt-4">
                                            <div className="text-green-400 text-xs font-bold uppercase tracking-widest w-full border-b border-green-500/20 pb-2 mb-2">Correcto</div>
                                            <div className="font-mono text-white">(2 + 3)² = 5²</div>
                                            <div className="font-mono text-green-300 text-2xl font-bold">= 25</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Error 2 */}
                                <div className="border border-red-500/30 bg-red-500/5 rounded-2xl overflow-hidden flex flex-col">
                                    <div className="bg-red-500/20 p-3 flex gap-2 items-center text-red-400 font-bold text-sm uppercase">
                                        <AlertTriangle className="w-4 h-4" /> Error 2
                                    </div>
                                    <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                                        <div className="text-slate-300 text-center bg-black/20 p-4 rounded-xl">
                                            <span className="font-mono text-white text-lg block">2³ + 2³</span>
                                            <p className="my-2 text-sm">no es</p>
                                            <span className="font-mono text-red-300 text-lg block bg-red-500/20 py-2 rounded">2⁶</span>
                                            <p className="mt-2 text-xs text-slate-400">porque la propiedad solo funciona en multiplicación.</p>
                                        </div>
                                        <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl text-center space-y-2 mt-4">
                                            <div className="text-green-400 text-xs font-bold uppercase tracking-widest w-full border-b border-green-500/20 pb-2 mb-2">Correcto</div>
                                            <div className="font-mono text-white">8 + 8</div>
                                            <div className="font-mono text-green-300 text-2xl font-bold">= 16</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 10 - Electricidad */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-5">
                                <span className="text-5xl font-black text-primary-500/20 leading-none">10.</span>
                                <h2 className="text-2xl font-bold text-white pt-1">Ejemplo aplicado a electricidad</h2>
                            </div>
                            <p className="text-slate-300 leading-relaxed">
                                La fórmula de potencia eléctrica es:
                            </p>

                            <div className="bg-slate-900/60 border border-primary-500/30 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1 space-y-6 w-full">
                                    <div className="bg-black/30 p-4 rounded-2xl text-center border border-white/5 shadow-inner">
                                        <div className="text-primary-400 font-bold mb-2">Fórmula de Potencia</div>
                                        <div className="text-4xl font-mono text-white">P = I² × R</div>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-slate-400 border-b border-white/10 pb-2">Ejemplo:</p>
                                        <ul className="list-disc list-inside text-white space-y-2 bg-white/5 p-4 rounded-xl border border-white/5">
                                            <li>Corriente = <span className="text-primary-300 font-bold">3 A</span></li>
                                            <li>Resistencia = <span className="text-primary-300 font-bold">4 Ω</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex-1 w-full flex justify-center">
                                    <div className="bg-primary-500/10 p-8 rounded-3xl border border-primary-500/20 shadow-2xl w-full max-w-sm space-y-6 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 opacity-10">
                                            <Zap className="w-24 h-24" />
                                        </div>
                                        <div className="text-sm font-bold text-primary-400 uppercase tracking-widest border-b border-primary-500/20 pb-2 relative z-10">Cálculo de Potencia</div>
                                        <div className="font-mono text-xl text-slate-300 space-y-3 relative z-10">
                                            <p className="flex justify-between"><span className="text-slate-500">P =</span> <span><strong className="text-white">3²</strong> × 4</span></p>
                                            <p className="flex justify-between"><span className="text-slate-500">P =</span> <span><strong className="text-white">9</strong> × 4</span></p>
                                            <div className="pt-4 border-t border-white/10 mt-4">
                                                <p className="flex justify-between text-3xl font-bold text-primary-300">
                                                    <span>P =</span>
                                                    <span>36 W</span>
                                                </p>
                                            </div>
                                        </div>
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

export default PotenciasView;
