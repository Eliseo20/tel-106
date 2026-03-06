import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronRight, Calculator, Lightbulb } from 'lucide-react';

const EcuacionesView = ({ onBack }) => {
    const [isExercisesOpen, setIsExercisesOpen] = useState(true);
    const [openExercises, setOpenExercises] = useState([]);

    const toggleExercise = (id) => {
        setOpenExercises(prev =>
            prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
        );
    };

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
                        Ecuaciones de primer grado
                    </h1>
                </div>
            </div>

            <section className="space-y-4">
<button
                    onClick={() => setIsExercisesOpen(!isExercisesOpen)}
                    className="w-full flex items-center justify-between p-6 glass-morphism rounded-2xl hover:bg-white/5 transition-all duration-300 group shadow-lg"
                >
                    <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl transition-colors duration-300 ${isExercisesOpen ? 'bg-primary-500 text-white' : 'bg-white/5 text-primary-400 group-hover:bg-primary-500/20'}`}>
                            <Calculator className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <h2 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                                Ejercicios Resueltos
                            </h2>
                            <p className="text-sm font-medium text-slate-500">Paso a paso para dominar las ecuaciones</p>
                        </div>
                    </div>
                    <div className={`p-2 rounded-full transition-all duration-300 ${isExercisesOpen ? 'bg-primary-500/10 text-primary-400' : 'bg-white/5 text-slate-400'}`}>
                        {isExercisesOpen ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                    </div>
                </button>

                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isExercisesOpen ? 'opacity-100 max-h-[14000px] visible mt-4' : 'opacity-0 max-h-0 invisible'}`}>
                    <div className="glass-morphism rounded-[2.5rem] p-10 md:p-14 space-y-12 list-none border border-primary-500/10">
                        {/* Title */}
                        <div className="space-y-6">
                            <h1 className="text-3xl font-black text-white leading-tight flex items-center gap-3">
                                <Lightbulb className="w-8 h-8 text-primary-400" />
                                Práctica Guiada
                            </h1>
                            <p className="text-slate-300 text-lg">
                                Despliega cada paso para ver la solución detallada. Intenta resolverlo por tu cuenta antes de revelar la respuesta.
                            </p>
                        </div>

                        {/* Exercise 1 */}
                        <div className="bg-slate-900/60 rounded-3xl border border-white/5 overflow-hidden">
                            <button
                                onClick={() => toggleExercise(1)}
                                className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-primary-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                        Ejercicio 1
                                    </h3>
                                    <div className="text-3xl font-mono text-white tracking-widest bg-black/30 px-6 py-4 rounded-xl border border-white/10 shadow-inner inline-block">
                                        x + 8 = 15
                                    </div>
                                </div>
                                <div className={`p-3 rounded-full bg-white/5 text-slate-400 transition-transform duration-300 ${openExercises.includes(1) ? 'rotate-180 bg-primary-500/20 text-primary-400' : ''}`}>
                                    <ChevronDown className="w-6 h-6" />
                                </div>
                            </button>

                            <div className={`px-8 pb-8 space-y-8 transition-all duration-500 ease-in-out ${openExercises.includes(1) ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden pb-0'}`}>
                                <div className="h-px bg-white/10 w-full mb-6 relative">
                                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-slate-900 text-xs text-slate-500 px-4 font-bold uppercase tracking-widest">Solución Paso a Paso</span>
                                </div>

                                <div className="space-y-6 text-slate-300">
                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 1:</span> Identificar la incógnita</h4>
                                        <p>La letra <span className="text-primary-300 font-mono">x</span> representa un número que no conocemos. Nuestro objetivo es dejar la <span className="text-primary-300 font-mono">x</span> sola en un lado de la ecuación.</p>
                                        <p>La ecuación dice: <em>"x más 8 es igual a 15"</em></p>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 2:</span> Eliminar el número que acompaña a la x</h4>
                                        <p>El 8 está sumando, por lo tanto debemos hacer la operación contraria, que es <strong>restar 8</strong>.</p>
                                        <p>Pero en una ecuación todo lo que hacemos en un lado debemos hacerlo en el otro, para mantener el equilibrio.</p>
                                        <p>Restamos 8 en ambos lados:</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">x + 8 <span className="text-red-400">- 8</span> = 15 <span className="text-red-400">- 8</span></div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 3:</span> Simplificar</h4>
                                        <p>En el lado izquierdo: <span className="font-mono text-white">8 - 8 = 0</span></p>
                                        <p>Entonces queda: <span className="font-mono text-white">x + 0 = 7</span></p>
                                        <p>Como sumar 0 no cambia el valor...</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">x = 7</div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-primary-500/20 text-center">
                                        <h4 className="text-xs uppercase tracking-widest text-primary-500 font-bold mb-2">Resultado Final</h4>
                                        <div className="inline-block border-2 border-primary-500 text-white font-bold font-mono text-2xl px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                            x = 7
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Exercise 2 */}
                        <div className="bg-slate-900/60 rounded-3xl border border-white/5 overflow-hidden">
                            <button
                                onClick={() => toggleExercise(2)}
                                className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-primary-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                        Ejercicio 2
                                    </h3>
                                    <div className="text-3xl font-mono text-white tracking-widest bg-black/30 px-6 py-4 rounded-xl border border-white/10 shadow-inner inline-block">
                                        2x = 18
                                    </div>
                                </div>
                                <div className={`p-3 rounded-full bg-white/5 text-slate-400 transition-transform duration-300 ${openExercises.includes(2) ? 'rotate-180 bg-primary-500/20 text-primary-400' : ''}`}>
                                    <ChevronDown className="w-6 h-6" />
                                </div>
                            </button>

                            <div className={`px-8 pb-8 space-y-8 transition-all duration-500 ease-in-out ${openExercises.includes(2) ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden pb-0'}`}>
                                <div className="h-px bg-white/10 w-full mb-6 relative">
                                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-slate-900 text-xs text-slate-500 px-4 font-bold uppercase tracking-widest">Solución Paso a Paso</span>
                                </div>

                                <div className="space-y-6 text-slate-300">
                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 1:</span> Interpretar la ecuación</h4>
                                        <p>El <span className="font-mono text-white">2x</span> significa 2 multiplicado por x.</p>
                                        <p>Es decir: <span className="font-mono text-primary-200">2 × x = 18</span></p>
                                        <p>Queremos saber qué número multiplicado por 2 da 18.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 2:</span> Aplicar la operación inversa</h4>
                                        <p>La operación que está afectando a x es una multiplicación por 2. La operación contraria es <strong>dividir por 2</strong>.</p>
                                        <p>Dividimos ambos lados por 2:</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5 flex gap-4 items-center">
                                            <div className="flex flex-col items-center">
                                                <span className="border-b border-white/30 px-2 pb-1">2x</span>
                                                <span className="text-red-400 pt-1">2</span>
                                            </div>
                                            <span>=</span>
                                            <div className="flex flex-col items-center">
                                                <span className="border-b border-white/30 px-2 pb-1">18</span>
                                                <span className="text-red-400 pt-1">2</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 3:</span> Simplificar</h4>
                                        <p>En el lado izquierdo: <span className="font-mono text-white">(2/2)x = 1x = x</span></p>
                                        <p>En el lado derecho: <span className="font-mono text-white">18 ÷ 2 = 9</span></p>
                                        <p>Entonces queda:</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">x = 9</div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-primary-500/20 text-center">
                                        <h4 className="text-xs uppercase tracking-widest text-primary-500 font-bold mb-2">Resultado Final</h4>
                                        <div className="inline-block border-2 border-primary-500 text-white font-bold font-mono text-2xl px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                            x = 9
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Exercise 3 */}
                        <div className="bg-slate-900/60 rounded-3xl border border-white/5 overflow-hidden">
                            <button
                                onClick={() => toggleExercise(3)}
                                className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-primary-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                        Ejercicio 3
                                    </h3>
                                    <div className="text-3xl font-mono text-white tracking-widest bg-black/30 px-6 py-4 rounded-xl border border-white/10 shadow-inner inline-block">
                                        3x + 4 = 19
                                    </div>
                                </div>
                                <div className={`p-3 rounded-full bg-white/5 text-slate-400 transition-transform duration-300 ${openExercises.includes(3) ? 'rotate-180 bg-primary-500/20 text-primary-400' : ''}`}>
                                    <ChevronDown className="w-6 h-6" />
                                </div>
                            </button>

                            <div className={`px-8 pb-8 space-y-8 transition-all duration-500 ease-in-out ${openExercises.includes(3) ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden pb-0'}`}>
                                <div className="h-px bg-white/10 w-full mb-6 relative">
                                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-slate-900 text-xs text-slate-500 px-4 font-bold uppercase tracking-widest">Solución Paso a Paso</span>
                                </div>

                                <div className="space-y-6 text-slate-300">
                                    <p className="italic bg-white/5 p-4 rounded-xl border border-white/10">Aquí aparecen dos operaciones sobre x: <strong>multiplicación</strong> y <strong>suma</strong>.</p>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 1:</span> Identificar el orden de eliminación</h4>
                                        <p>La ecuación dice: <em>"3x más 4 es igual a 19"</em></p>
                                        <p>Primero debemos eliminar el 4, porque está sumando al término completo 3x.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 2:</span> Restar 4 en ambos lados</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">3x + 4 <span className="text-red-400">- 4</span> = 19 <span className="text-red-400">- 4</span></div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 3:</span> Simplificar</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">3x = 15</div>
                                        <p>Ahora tenemos una ecuación de un solo paso, una multiplicación.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 4:</span> Eliminar el 3</h4>
                                        <p>El 3 está multiplicando a x, por lo que debemos <strong>dividir por 3</strong>.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5 flex gap-4 items-center">
                                            <div className="flex flex-col items-center">
                                                <span className="border-b border-white/30 px-2 pb-1">3x</span>
                                                <span className="text-red-400 pt-1">3</span>
                                            </div>
                                            <span>=</span>
                                            <div className="flex flex-col items-center">
                                                <span className="border-b border-white/30 px-2 pb-1">15</span>
                                                <span className="text-red-400 pt-1">3</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 5:</span> Resolver</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">x = 5</div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-primary-500/20 text-center">
                                        <h4 className="text-xs uppercase tracking-widest text-primary-500 font-bold mb-2">Resultado Final</h4>
                                        <div className="inline-block border-2 border-primary-500 text-white font-bold font-mono text-2xl px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                            x = 5
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Exercise 4 */}
                        <div className="bg-slate-900/60 rounded-3xl border border-white/5 overflow-hidden">
                            <button
                                onClick={() => toggleExercise(4)}
                                className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-primary-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                        Ejercicio 4
                                    </h3>
                                    <div className="text-3xl font-mono text-white tracking-widest bg-black/30 px-6 py-4 rounded-xl border border-white/10 shadow-inner inline-block">
                                        5x - 7 = 18
                                    </div>
                                </div>
                                <div className={`p-3 rounded-full bg-white/5 text-slate-400 transition-transform duration-300 ${openExercises.includes(4) ? 'rotate-180 bg-primary-500/20 text-primary-400' : ''}`}>
                                    <ChevronDown className="w-6 h-6" />
                                </div>
                            </button>

                            <div className={`px-8 pb-8 space-y-8 transition-all duration-500 ease-in-out ${openExercises.includes(4) ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden pb-0'}`}>
                                <div className="h-px bg-white/10 w-full mb-6 relative">
                                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-slate-900 text-xs text-slate-500 px-4 font-bold uppercase tracking-widest">Solución Paso a Paso</span>
                                </div>

                                <div className="space-y-6 text-slate-300">
                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 1:</span> Interpretar la ecuación</h4>
                                        <p>La ecuación dice: <em>"5 veces x menos 7 es igual a 18"</em></p>
                                        <p>Debemos dejar el término con x solo.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 2:</span> Eliminar el -7</h4>
                                        <p>El número 7 está restando, por lo tanto debemos hacer la operación contraria: <strong>sumar 7</strong>.</p>
                                        <p>Sumamos 7 a ambos lados:</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">5x - 7 <span className="text-emerald-400">+ 7</span> = 18 <span className="text-emerald-400">+ 7</span></div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 3:</span> Simplificar</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">5x = 25</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 4:</span> Eliminar el 5</h4>
                                        <p>El 5 está multiplicando, entonces debemos <strong>dividir por 5</strong>.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5 flex gap-4 items-center">
                                            <div className="flex flex-col items-center">
                                                <span className="border-b border-white/30 px-2 pb-1">5x</span>
                                                <span className="text-red-400 pt-1">5</span>
                                            </div>
                                            <span>=</span>
                                            <div className="flex flex-col items-center">
                                                <span className="border-b border-white/30 px-2 pb-1">25</span>
                                                <span className="text-red-400 pt-1">5</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 5:</span> Resolver</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">x = 5</div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-primary-500/20 text-center">
                                        <h4 className="text-xs uppercase tracking-widest text-primary-500 font-bold mb-2">Resultado Final</h4>
                                        <div className="inline-block border-2 border-primary-500 text-white font-bold font-mono text-2xl px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                            x = 5
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Exercise 5 */}
                        <div className="bg-slate-900/60 rounded-3xl border border-white/5 overflow-hidden">
                            <button
                                onClick={() => toggleExercise(5)}
                                className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-primary-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                        Ejercicio 5
                                    </h3>
                                    <div className="text-3xl font-mono text-white tracking-widest bg-black/30 px-6 py-4 rounded-xl border border-white/10 shadow-inner inline-block">
                                        4x + 3 = 2x + 11
                                    </div>
                                </div>
                                <div className={`p-3 rounded-full bg-white/5 text-slate-400 transition-transform duration-300 ${openExercises.includes(5) ? 'rotate-180 bg-primary-500/20 text-primary-400' : ''}`}>
                                    <ChevronDown className="w-6 h-6" />
                                </div>
                            </button>

                            <div className={`px-8 pb-8 space-y-8 transition-all duration-500 ease-in-out ${openExercises.includes(5) ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden pb-0'}`}>
                                <div className="h-px bg-white/10 w-full mb-6 relative">
                                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-slate-900 text-xs text-slate-500 px-4 font-bold uppercase tracking-widest">Solución Paso a Paso</span>
                                </div>

                                <div className="space-y-6 text-slate-300">
                                    <p className="italic bg-white/5 p-4 rounded-xl border border-white/10 border-l-4 border-l-primary-500">
                                        Este tipo de ecuación es importante porque aparece mucho al resolver circuitos. ¡Aquí la x aparece en ambos lados!
                                    </p>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 1:</span> Reunir todas las x en un mismo lado</h4>
                                        <p>Restamos 2x a ambos lados para moverlas a la izquierda.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">4x <span className="text-red-400">- 2x</span> + 3 = 2x <span className="text-red-400">- 2x</span> + 11</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 2:</span> Simplificar</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">2x + 3 = 11</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 3:</span> Eliminar el 3</h4>
                                        <p>Restamos 3 en ambos lados para dejar solo el término con x.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">2x + 3 <span className="text-red-400">- 3</span> = 11 <span className="text-red-400">- 3</span></div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 4:</span> Simplificar</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">2x = 8</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 5:</span> Eliminar el 2</h4>
                                        <p>Dividimos por 2 en ambos lados.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5 flex gap-4 items-center">
                                            <div className="flex flex-col items-center">
                                                <span className="border-b border-white/30 px-2 pb-1">2x</span>
                                                <span className="text-red-400 pt-1">2</span>
                                            </div>
                                            <span>=</span>
                                            <div className="flex flex-col items-center">
                                                <span className="border-b border-white/30 px-2 pb-1">8</span>
                                                <span className="text-red-400 pt-1">2</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 6:</span> Resolver</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">x = 4</div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-primary-500/20 text-center">
                                        <h4 className="text-xs uppercase tracking-widest text-primary-500 font-bold mb-2">Resultado Final</h4>
                                        <div className="inline-block border-2 border-primary-500 text-white font-bold font-mono text-2xl px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                            x = 4
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Exercise 6 */}
                        <div className="bg-slate-900/60 rounded-3xl border border-white/5 overflow-hidden">
                            <button
                                onClick={() => toggleExercise(6)}
                                className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-primary-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                        Ejercicio 6
                                    </h3>
                                    <div className="text-3xl font-mono text-white tracking-widest bg-black/30 px-6 py-4 rounded-xl border border-white/10 shadow-inner inline-block">
                                        2(x + 3) = 14
                                    </div>
                                </div>
                                <div className={`p-3 rounded-full bg-white/5 text-slate-400 transition-transform duration-300 ${openExercises.includes(6) ? 'rotate-180 bg-primary-500/20 text-primary-400' : ''}`}>
                                    <ChevronDown className="w-6 h-6" />
                                </div>
                            </button>

                            <div className={`px-8 pb-8 space-y-8 transition-all duration-500 ease-in-out ${openExercises.includes(6) ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden pb-0'}`}>
                                <div className="h-px bg-white/10 w-full mb-6 relative">
                                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-slate-900 text-xs text-slate-500 px-4 font-bold uppercase tracking-widest">Solución Paso a Paso</span>
                                </div>

                                <div className="space-y-6 text-slate-300">
                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 1:</span> Identificar el paréntesis</h4>
                                        <p>El 2 está multiplicando todo lo que está dentro del paréntesis.</p>
                                        <p>Esto significa: <span className="font-mono text-primary-200">2 × (x + 3)</span></p>
                                        <p>Para eliminar el paréntesis debemos multiplicar el 2 por cada término que está dentro.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 2:</span> Aplicar la propiedad distributiva</h4>
                                        <p>Multiplicamos:</p>
                                        <p><span className="font-mono text-white">2 × x = 2x</span></p>
                                        <p><span className="font-mono text-white">2 × 3 = 6</span></p>
                                        <p>Entonces la ecuación queda:</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">2x + 6 = 14</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 3:</span> Eliminar el 6</h4>
                                        <p>El 6 está sumando, por lo tanto restamos 6 en ambos lados.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">2x + 6 <span className="text-red-400">- 6</span> = 14 <span className="text-red-400">- 6</span></div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 4:</span> Simplificar</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">2x = 8</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 5:</span> Eliminar el 2</h4>
                                        <p>El 2 está multiplicando a x, por lo tanto dividimos por 2.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5 flex gap-4 items-center">
                                            <div className="flex flex-col items-center">
                                                <span className="border-b border-white/30 px-2 pb-1">2x</span>
                                                <span className="text-red-400 pt-1">2</span>
                                            </div>
                                            <span>=</span>
                                            <div className="flex flex-col items-center">
                                                <span className="border-b border-white/30 px-2 pb-1">8</span>
                                                <span className="text-red-400 pt-1">2</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 6:</span> Resolver</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">x = 4</div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-primary-500/20 text-center">
                                        <h4 className="text-xs uppercase tracking-widest text-primary-500 font-bold mb-2">Resultado Final</h4>
                                        <div className="inline-block border-2 border-primary-500 text-white font-bold font-mono text-2xl px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                            x = 4
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Exercise 7 */}
                        <div className="bg-slate-900/60 rounded-3xl border border-white/5 overflow-hidden">
                            <button
                                onClick={() => toggleExercise(7)}
                                className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-primary-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                        Ejercicio 7
                                    </h3>
                                    <div className="text-3xl font-mono text-white tracking-widest bg-black/30 px-6 py-4 rounded-xl border border-white/10 shadow-inner inline-block">
                                        3x + 5 = x + 17
                                    </div>
                                </div>
                                <div className={`p-3 rounded-full bg-white/5 text-slate-400 transition-transform duration-300 ${openExercises.includes(7) ? 'rotate-180 bg-primary-500/20 text-primary-400' : ''}`}>
                                    <ChevronDown className="w-6 h-6" />
                                </div>
                            </button>

                            <div className={`px-8 pb-8 space-y-8 transition-all duration-500 ease-in-out ${openExercises.includes(7) ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden pb-0'}`}>
                                <div className="h-px bg-white/10 w-full mb-6 relative">
                                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-slate-900 text-xs text-slate-500 px-4 font-bold uppercase tracking-widest">Solución Paso a Paso</span>
                                </div>

                                <div className="space-y-6 text-slate-300">
                                    <p className="italic bg-white/5 p-4 rounded-xl border border-white/10 border-l-4 border-l-primary-500">
                                        Aquí la x aparece en ambos lados de la ecuación.
                                    </p>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 1:</span> Reunir todas las x en un lado</h4>
                                        <p>Restamos x en ambos lados.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">3x <span className="text-red-400">- x</span> + 5 = x <span className="text-red-400">- x</span> + 17</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 2:</span> Simplificar</h4>
                                        <p><span className="font-mono text-white">3x - x = 2x</span></p>
                                        <p>Entonces queda:</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">2x + 5 = 17</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 3:</span> Eliminar el 5</h4>
                                        <p>Restamos 5 en ambos lados.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">2x + 5 <span className="text-red-400">- 5</span> = 17 <span className="text-red-400">- 5</span></div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 4:</span> Simplificar</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">2x = 12</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 5:</span> Eliminar el 2</h4>
                                        <p>Dividimos ambos lados por 2.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5 flex gap-4 items-center">
                                            <div className="flex flex-col items-center">
                                                <span className="border-b border-white/30 px-2 pb-1">2x</span>
                                                <span className="text-red-400 pt-1">2</span>
                                            </div>
                                            <span>=</span>
                                            <div className="flex flex-col items-center">
                                                <span className="border-b border-white/30 px-2 pb-1">12</span>
                                                <span className="text-red-400 pt-1">2</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 6:</span> Resolver</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">x = 6</div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-primary-500/20 text-center">
                                        <h4 className="text-xs uppercase tracking-widest text-primary-500 font-bold mb-2">Resultado Final</h4>
                                        <div className="inline-block border-2 border-primary-500 text-white font-bold font-mono text-2xl px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                            x = 6
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Exercise 8 */}
                        <div className="bg-slate-900/60 rounded-3xl border border-white/5 overflow-hidden">
                            <button
                                onClick={() => toggleExercise(8)}
                                className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-primary-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                        Ejercicio 8
                                    </h3>
                                    <div className="text-3xl font-mono text-white tracking-widest bg-black/30 px-6 py-4 rounded-xl border border-white/10 shadow-inner inline-block">
                                        4(x - 2) = 2x + 8
                                    </div>
                                </div>
                                <div className={`p-3 rounded-full bg-white/5 text-slate-400 transition-transform duration-300 ${openExercises.includes(8) ? 'rotate-180 bg-primary-500/20 text-primary-400' : ''}`}>
                                    <ChevronDown className="w-6 h-6" />
                                </div>
                            </button>

                            <div className={`px-8 pb-8 space-y-8 transition-all duration-500 ease-in-out ${openExercises.includes(8) ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden pb-0'}`}>
                                <div className="h-px bg-white/10 w-full mb-6 relative">
                                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-slate-900 text-xs text-slate-500 px-4 font-bold uppercase tracking-widest">Solución Paso a Paso</span>
                                </div>

                                <div className="space-y-6 text-slate-300">
                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 1:</span> Eliminar el paréntesis</h4>
                                        <p>Aplicamos la propiedad distributiva. Multiplicamos el 4 por cada término:</p>
                                        <p><span className="font-mono text-white">4 × x = 4x</span></p>
                                        <p><span className="font-mono text-white">4 × (-2) = -8</span></p>
                                        <p>Entonces queda:</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">4x - 8 = 2x + 8</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 2:</span> Reunir las x en un lado</h4>
                                        <p>Restamos 2x en ambos lados.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">4x <span className="text-red-400">- 2x</span> - 8 = 2x <span className="text-red-400">- 2x</span> + 8</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 3:</span> Simplificar</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">2x - 8 = 8</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 4:</span> Eliminar el -8</h4>
                                        <p>Sumamos 8 en ambos lados.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">2x - 8 <span className="text-emerald-400">+ 8</span> = 8 <span className="text-emerald-400">+ 8</span></div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 5:</span> Simplificar</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">2x = 16</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 6:</span> Eliminar el 2</h4>
                                        <p>Dividimos por 2.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5 flex gap-4 items-center">
                                            <div className="flex flex-col items-center">
                                                <span className="border-b border-white/30 px-2 pb-1">2x</span>
                                                <span className="text-red-400 pt-1">2</span>
                                            </div>
                                            <span>=</span>
                                            <div className="flex flex-col items-center">
                                                <span className="border-b border-white/30 px-2 pb-1">16</span>
                                                <span className="text-red-400 pt-1">2</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 7:</span> Resolver</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">x = 8</div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-primary-500/20 text-center">
                                        <h4 className="text-xs uppercase tracking-widest text-primary-500 font-bold mb-2">Resultado Final</h4>
                                        <div className="inline-block border-2 border-primary-500 text-white font-bold font-mono text-2xl px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                            x = 8
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Exercise 9 */}
                        <div className="bg-slate-900/60 rounded-3xl border border-white/5 overflow-hidden">
                            <button
                                onClick={() => toggleExercise(9)}
                                className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-primary-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                        Ejercicio 9
                                    </h3>
                                    <div className="text-3xl font-mono text-white tracking-widest bg-black/30 px-6 py-4 rounded-xl border border-white/10 shadow-inner flex items-center gap-3 w-fit">
                                        <div className="flex flex-col items-center text-xl">
                                            <span className="border-b-2 border-white/50 px-1">x</span>
                                            <span>3</span>
                                        </div>
                                        <span>+ 4 = 10</span>
                                    </div>
                                </div>
                                <div className={`p-3 rounded-full bg-white/5 text-slate-400 transition-transform duration-300 ${openExercises.includes(9) ? 'rotate-180 bg-primary-500/20 text-primary-400' : ''}`}>
                                    <ChevronDown className="w-6 h-6" />
                                </div>
                            </button>

                            <div className={`px-8 pb-8 space-y-8 transition-all duration-500 ease-in-out ${openExercises.includes(9) ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden pb-0'}`}>
                                <div className="h-px bg-white/10 w-full mb-6 relative">
                                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-slate-900 text-xs text-slate-500 px-4 font-bold uppercase tracking-widest">Solución Paso a Paso</span>
                                </div>

                                <div className="space-y-6 text-slate-300">
                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 1:</span> Identificar la fracción</h4>
                                        <p>La expresión <span className="font-mono text-white">x/3</span> significa x dividido por 3.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 2:</span> Eliminar el 4</h4>
                                        <p>Restamos 4 en ambos lados.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5 flex items-center gap-2">
                                            <span>(x/3) + 4</span> <span className="text-red-400">- 4</span> <span>= 10</span> <span className="text-red-400">- 4</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 3:</span> Simplificar</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">x/3 = 6</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 4:</span> Eliminar el 3 del denominador</h4>
                                        <p>La operación contraria de dividir por 3 es <strong>multiplicar por 3</strong>.</p>
                                        <p>Multiplicamos ambos lados por 3.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">
                                            <span className="text-emerald-400">3 ×</span> (x/3) = 6 <span className="text-emerald-400">× 3</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 5:</span> Simplificar</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">x = 18</div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-primary-500/20 text-center">
                                        <h4 className="text-xs uppercase tracking-widest text-primary-500 font-bold mb-2">Resultado Final</h4>
                                        <div className="inline-block border-2 border-primary-500 text-white font-bold font-mono text-2xl px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                            x = 18
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Exercise 10 */}
                        <div className="bg-slate-900/60 rounded-3xl border border-white/5 overflow-hidden">
                            <button
                                onClick={() => toggleExercise(10)}
                                className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-primary-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                        Ejercicio 10
                                    </h3>
                                    <div className="text-3xl font-mono text-white tracking-widest bg-black/30 px-6 py-4 rounded-xl border border-white/10 shadow-inner flex items-center gap-3 w-fit">
                                        <span>2x + 6 =</span>
                                        <div className="flex flex-col items-center text-xl">
                                            <span className="border-b-2 border-white/50 px-1">x</span>
                                            <span>2</span>
                                        </div>
                                        <span>+ 12</span>
                                    </div>
                                </div>
                                <div className={`p-3 rounded-full bg-white/5 text-slate-400 transition-transform duration-300 ${openExercises.includes(10) ? 'rotate-180 bg-primary-500/20 text-primary-400' : ''}`}>
                                    <ChevronDown className="w-6 h-6" />
                                </div>
                            </button>

                            <div className={`px-8 pb-8 space-y-8 transition-all duration-500 ease-in-out ${openExercises.includes(10) ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden pb-0'}`}>
                                <div className="h-px bg-white/10 w-full mb-6 relative">
                                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-slate-900 text-xs text-slate-500 px-4 font-bold uppercase tracking-widest">Solución Paso a Paso</span>
                                </div>

                                <div className="space-y-6 text-slate-300">
                                    <p className="italic bg-white/5 p-4 rounded-xl border border-white/10 border-l-4 border-l-primary-500">
                                        Este ejercicio es más interesante porque tiene fracción y x en ambos lados.
                                    </p>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 1:</span> Eliminar la fracción</h4>
                                        <p>La fracción es <span className="font-mono text-white">x/2</span>.</p>
                                        <p>Para eliminarla multiplicamos <strong>toda la ecuación</strong> por 2.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5 flex items-center gap-2">
                                            <span className="text-emerald-400">2(</span>2x + 6<span className="text-emerald-400">)</span> = <span className="text-emerald-400">2(</span>(x/2) + 12<span className="text-emerald-400">)</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 2:</span> Multiplicar cada término</h4>
                                        <p>Lado izquierdo:</p>
                                        <p><span className="font-mono text-white">2 × 2x = 4x</span> | <span className="font-mono text-white">2 × 6 = 12</span></p>
                                        <p>Lado derecho:</p>
                                        <p><span className="font-mono text-white">2 × (x/2) = x</span> | <span className="font-mono text-white">2 × 12 = 24</span></p>
                                        <p>La ecuación queda:</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">4x + 12 = x + 24</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 3:</span> Reunir las x</h4>
                                        <p>Restamos x en ambos lados.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">4x <span className="text-red-400">- x</span> + 12 = x <span className="text-red-400">- x</span> + 24</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 4:</span> Simplificar</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">3x + 12 = 24</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 5:</span> Eliminar el 12</h4>
                                        <p>Restamos 12.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">3x + 12 <span className="text-red-400">- 12</span> = 24 <span className="text-red-400">- 12</span></div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 6:</span> Simplificar</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">3x = 12</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 7:</span> Eliminar el 3</h4>
                                        <p>Dividimos por 3.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5 flex gap-4 items-center">
                                            <div className="flex flex-col items-center">
                                                <span className="border-b border-white/30 px-2 pb-1">3x</span>
                                                <span className="text-red-400 pt-1">3</span>
                                            </div>
                                            <span>=</span>
                                            <div className="flex flex-col items-center">
                                                <span className="border-b border-white/30 px-2 pb-1">12</span>
                                                <span className="text-red-400 pt-1">3</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 8:</span> Resolver</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">x = 4</div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-primary-500/20 text-center">
                                        <h4 className="text-xs uppercase tracking-widest text-primary-500 font-bold mb-2">Resultado Final</h4>
                                        <div className="inline-block border-2 border-primary-500 text-white font-bold font-mono text-2xl px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                            x = 4
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Exercise 11 */}
                        <div className="bg-slate-900/60 rounded-3xl border border-white/5 overflow-hidden">
                            <button
                                onClick={() => toggleExercise(11)}
                                className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-primary-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                        Ejercicio 11
                                    </h3>
                                    <div className="text-3xl font-mono text-white tracking-widest bg-black/30 px-6 py-4 rounded-xl border border-white/10 shadow-inner flex items-center gap-3 w-fit">
                                        <div className="flex flex-col items-center text-xl">
                                            <span className="border-b-2 border-white/50 px-1">x</span>
                                            <span>4</span>
                                        </div>
                                        <span>= 6</span>
                                    </div>
                                </div>
                                <div className={`p-3 rounded-full bg-white/5 text-slate-400 transition-transform duration-300 ${openExercises.includes(11) ? 'rotate-180 bg-primary-500/20 text-primary-400' : ''}`}>
                                    <ChevronDown className="w-6 h-6" />
                                </div>
                            </button>

                            <div className={`px-8 pb-8 space-y-8 transition-all duration-500 ease-in-out ${openExercises.includes(11) ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden pb-0'}`}>
                                <div className="h-px bg-white/10 w-full mb-6 relative">
                                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-slate-900 text-xs text-slate-500 px-4 font-bold uppercase tracking-widest">Solución Paso a Paso</span>
                                </div>

                                <div className="space-y-6 text-slate-300">
                                    <p className="italic bg-white/5 p-4 rounded-xl border border-white/10 border-l-4 border-l-primary-500">
                                        Este tipo de ecuación aparece mucho cuando una variable queda dividida por una resistencia o una constante.
                                    </p>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 1:</span> Interpretar la fracción</h4>
                                        <p>La expresión <span className="font-mono text-white">x/4</span> significa x dividido por 4.</p>
                                        <p>La ecuación dice: x dividido por 4 es igual a 6.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 2:</span> Eliminar la división</h4>
                                        <p>La operación que afecta a x es dividir por 4. La operación contraria es multiplicar por 4.</p>
                                        <p>Multiplicamos ambos lados por 4:</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">
                                            <span className="text-emerald-400">4 ×</span> (x/4) = <span className="text-emerald-400">4 ×</span> 6
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 3:</span> Simplificar</h4>
                                        <p>En el lado izquierdo: <span className="font-mono text-white">4 × (x/4) = x</span></p>
                                        <p>En el lado derecho: <span className="font-mono text-white">4 × 6 = 24</span></p>
                                        <p>Entonces queda:</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">x = 24</div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-primary-500/20 text-center">
                                        <h4 className="text-xs uppercase tracking-widest text-primary-500 font-bold mb-2">Resultado Final</h4>
                                        <div className="inline-block border-2 border-primary-500 text-white font-bold font-mono text-2xl px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                            x = 24
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Exercise 12 */}
                        <div className="bg-slate-900/60 rounded-3xl border border-white/5 overflow-hidden">
                            <button
                                onClick={() => toggleExercise(12)}
                                className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-primary-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                        Ejercicio 12
                                    </h3>
                                    <div className="text-3xl font-mono text-white tracking-widest bg-black/30 px-6 py-4 rounded-xl border border-white/10 shadow-inner flex items-center gap-3 w-fit">
                                        <div className="flex flex-col items-center text-xl">
                                            <span className="border-b-2 border-white/50 px-1">x</span>
                                            <span>5</span>
                                        </div>
                                        <span>+ 3 = 11</span>
                                    </div>
                                </div>
                                <div className={`p-3 rounded-full bg-white/5 text-slate-400 transition-transform duration-300 ${openExercises.includes(12) ? 'rotate-180 bg-primary-500/20 text-primary-400' : ''}`}>
                                    <ChevronDown className="w-6 h-6" />
                                </div>
                            </button>

                            <div className={`px-8 pb-8 space-y-8 transition-all duration-500 ease-in-out ${openExercises.includes(12) ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden pb-0'}`}>
                                <div className="h-px bg-white/10 w-full mb-6 relative">
                                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-slate-900 text-xs text-slate-500 px-4 font-bold uppercase tracking-widest">Solución Paso a Paso</span>
                                </div>

                                <div className="space-y-6 text-slate-300">
                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 1:</span> Identificar qué eliminar primero</h4>
                                        <p>El término +3 está sumando, por lo que debemos eliminarlo primero.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 2:</span> Restar 3 en ambos lados</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5 flex items-center gap-2">
                                            <span>(x/5) + 3</span> <span className="text-red-400">- 3</span> <span>= 11</span> <span className="text-red-400">- 3</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 3:</span> Simplificar</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">x/5 = 8</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 4:</span> Eliminar el denominador</h4>
                                        <p>La operación contraria de dividir por 5 es multiplicar por 5. Multiplicamos ambos lados:</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">
                                            <span className="text-emerald-400">5 ×</span> (x/5) = 8 <span className="text-emerald-400">× 5</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 5:</span> Simplificar</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">x = 40</div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-primary-500/20 text-center">
                                        <h4 className="text-xs uppercase tracking-widest text-primary-500 font-bold mb-2">Resultado Final</h4>
                                        <div className="inline-block border-2 border-primary-500 text-white font-bold font-mono text-2xl px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                            x = 40
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Exercise 13 */}
                        <div className="bg-slate-900/60 rounded-3xl border border-white/5 overflow-hidden">
                            <button
                                onClick={() => toggleExercise(13)}
                                className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-primary-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                        Ejercicio 13
                                    </h3>
                                    <div className="text-3xl font-mono text-white tracking-widest bg-black/30 px-6 py-4 rounded-xl border border-white/10 shadow-inner inline-block">
                                        2(x + 5) = x + 17
                                    </div>
                                </div>
                                <div className={`p-3 rounded-full bg-white/5 text-slate-400 transition-transform duration-300 ${openExercises.includes(13) ? 'rotate-180 bg-primary-500/20 text-primary-400' : ''}`}>
                                    <ChevronDown className="w-6 h-6" />
                                </div>
                            </button>

                            <div className={`px-8 pb-8 space-y-8 transition-all duration-500 ease-in-out ${openExercises.includes(13) ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden pb-0'}`}>
                                <div className="h-px bg-white/10 w-full mb-6 relative">
                                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-slate-900 text-xs text-slate-500 px-4 font-bold uppercase tracking-widest">Solución Paso a Paso</span>
                                </div>

                                <div className="space-y-6 text-slate-300">
                                    <p className="italic bg-white/5 p-4 rounded-xl border border-white/10 border-l-4 border-l-primary-500">
                                        Este tipo de ecuación aparece mucho cuando se expanden ecuaciones de malla o balance de voltajes.
                                    </p>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 1:</span> Eliminar el paréntesis</h4>
                                        <p>Aplicamos la propiedad distributiva. Multiplicamos el 2 por cada término dentro del paréntesis.</p>
                                        <p><span className="font-mono text-white">2 × x = 2x</span> | <span className="font-mono text-white">2 × 5 = 10</span></p>
                                        <p>Entonces queda:</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">2x + 10 = x + 17</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 2:</span> Reunir las x en un lado</h4>
                                        <p>Restamos x en ambos lados.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">2x <span className="text-red-400">- x</span> + 10 = x <span className="text-red-400">- x</span> + 17</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 3:</span> Simplificar</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">x + 10 = 17</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 4:</span> Eliminar el 10</h4>
                                        <p>Restamos 10 en ambos lados.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">x + 10 <span className="text-red-400">- 10</span> = 17 <span className="text-red-400">- 10</span></div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 5:</span> Resolver</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">x = 7</div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-primary-500/20 text-center">
                                        <h4 className="text-xs uppercase tracking-widest text-primary-500 font-bold mb-2">Resultado Final</h4>
                                        <div className="inline-block border-2 border-primary-500 text-white font-bold font-mono text-2xl px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                            x = 7
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Exercise 14 */}
                        <div className="bg-slate-900/60 rounded-3xl border border-white/5 overflow-hidden">
                            <button
                                onClick={() => toggleExercise(14)}
                                className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-primary-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                        Ejercicio 14
                                    </h3>
                                    <div className="text-3xl font-mono text-white tracking-widest bg-black/30 px-6 py-4 rounded-xl border border-white/10 shadow-inner inline-block">
                                        3x + 8 = 5x - 4
                                    </div>
                                </div>
                                <div className={`p-3 rounded-full bg-white/5 text-slate-400 transition-transform duration-300 ${openExercises.includes(14) ? 'rotate-180 bg-primary-500/20 text-primary-400' : ''}`}>
                                    <ChevronDown className="w-6 h-6" />
                                </div>
                            </button>

                            <div className={`px-8 pb-8 space-y-8 transition-all duration-500 ease-in-out ${openExercises.includes(14) ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden pb-0'}`}>
                                <div className="h-px bg-white/10 w-full mb-6 relative">
                                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-slate-900 text-xs text-slate-500 px-4 font-bold uppercase tracking-widest">Solución Paso a Paso</span>
                                </div>

                                <div className="space-y-6 text-slate-300">
                                    <p className="italic bg-white/5 p-4 rounded-xl border border-white/10 border-l-4 border-l-primary-500">
                                        Este tipo aparece cuando dos ecuaciones de corriente o voltaje se igualan.
                                    </p>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 1:</span> Llevar todas las x al mismo lado</h4>
                                        <p>Restamos 3x en ambos lados.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">3x <span className="text-red-400">- 3x</span> + 8 = 5x <span className="text-red-400">- 3x</span> - 4</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 2:</span> Simplificar</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">8 = 2x - 4</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 3:</span> Eliminar el -4</h4>
                                        <p>Sumamos 4 en ambos lados.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">8 <span className="text-emerald-400">+ 4</span> = 2x - 4 <span className="text-emerald-400">+ 4</span></div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 4:</span> Simplificar</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">12 = 2x</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 5:</span> Eliminar el 2</h4>
                                        <p>Dividimos ambos lados por 2.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5 flex gap-4 items-center">
                                            <div className="flex flex-col items-center">
                                                <span className="border-b border-white/30 px-2 pb-1">12</span>
                                                <span className="text-red-400 pt-1">2</span>
                                            </div>
                                            <span>=</span>
                                            <div className="flex flex-col items-center">
                                                <span className="border-b border-white/30 px-2 pb-1">2x</span>
                                                <span className="text-red-400 pt-1">2</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 6:</span> Resolver</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">x = 6</div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-primary-500/20 text-center">
                                        <h4 className="text-xs uppercase tracking-widest text-primary-500 font-bold mb-2">Resultado Final</h4>
                                        <div className="inline-block border-2 border-primary-500 text-white font-bold font-mono text-2xl px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                            x = 6
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Exercise 15 */}
                        <div className="bg-slate-900/60 rounded-3xl border border-white/5 overflow-hidden">
                            <button
                                onClick={() => toggleExercise(15)}
                                className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-primary-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                        Ejercicio 15
                                    </h3>
                                    <div className="text-3xl font-mono text-white tracking-widest bg-black/30 px-6 py-4 rounded-xl border border-white/10 shadow-inner inline-block">
                                        4(x - 3) + 2 = 2x + 10
                                    </div>
                                </div>
                                <div className={`p-3 rounded-full bg-white/5 text-slate-400 transition-transform duration-300 ${openExercises.includes(15) ? 'rotate-180 bg-primary-500/20 text-primary-400' : ''}`}>
                                    <ChevronDown className="w-6 h-6" />
                                </div>
                            </button>

                            <div className={`px-8 pb-8 space-y-8 transition-all duration-500 ease-in-out ${openExercises.includes(15) ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden pb-0'}`}>
                                <div className="h-px bg-white/10 w-full mb-6 relative">
                                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-slate-900 text-xs text-slate-500 px-4 font-bold uppercase tracking-widest">Solución Paso a Paso</span>
                                </div>

                                <div className="space-y-6 text-slate-300">
                                    <p className="italic bg-white/5 p-4 rounded-xl border border-white/10 border-l-4 border-l-primary-500">
                                        Este ejercicio ya mezcla distribución y simplificación, muy parecido a lo que pasa en ecuaciones de circuitos.
                                    </p>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 1:</span> Eliminar el paréntesis</h4>
                                        <p>Aplicamos la propiedad distributiva. Multiplicamos el 4 por cada término.</p>
                                        <p><span className="font-mono text-white">4 × x = 4x</span> | <span className="font-mono text-white">4 × (-3) = -12</span></p>
                                        <p>La ecuación queda:</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">4x - 12 + 2 = 2x + 10</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 2:</span> Simplificar términos semejantes</h4>
                                        <p>En el lado izquierdo: <span className="font-mono text-white">-12 + 2 = -10</span></p>
                                        <p>Entonces queda:</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">4x - 10 = 2x + 10</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 3:</span> Reunir las x</h4>
                                        <p>Restamos 2x en ambos lados.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">4x <span className="text-red-400">- 2x</span> - 10 = 2x <span className="text-red-400">- 2x</span> + 10</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 4:</span> Simplificar</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">2x - 10 = 10</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 5:</span> Eliminar el -10</h4>
                                        <p>Sumamos 10 en ambos lados.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">2x - 10 <span className="text-emerald-400">+ 10</span> = 10 <span className="text-emerald-400">+ 10</span></div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 6:</span> Simplificar</h4>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5">2x = 20</div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-white font-bold flex items-center gap-2"><span className="text-primary-500">Paso 7:</span> Eliminar el 2</h4>
                                        <p>Dividimos por 2.</p>
                                        <div className="font-mono text-primary-200 bg-black/20 p-3 rounded-lg border border-white/5 flex gap-4 items-center">
                                            <div className="flex flex-col items-center">
                                                <span className="border-b border-white/30 px-2 pb-1">2x</span>
                                                <span className="text-red-400 pt-1">2</span>
                                            </div>
                                            <span>=</span>
                                            <div className="flex flex-col items-center">
                                                <span className="border-b border-white/30 px-2 pb-1">20</span>
                                                <span className="text-red-400 pt-1">2</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-primary-500/20 text-center">
                                        <h4 className="text-xs uppercase tracking-widest text-primary-500 font-bold mb-2">Resultado Final</h4>
                                        <div className="inline-block border-2 border-primary-500 text-white font-bold font-mono text-2xl px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                            x = 10
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

export default EcuacionesView;
