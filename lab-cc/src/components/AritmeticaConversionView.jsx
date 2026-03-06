import React, { useState } from 'react';
import { ArrowLeft, BookOpen, ChevronDown, ChevronRight, Zap, Target, Lightbulb, Calculator, GitCommit, Layers, AlertCircle, Cpu, Hash, ArrowRightLeft } from 'lucide-react';

const AritmeticaConversionView = ({ onBack }) => {
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
                        Aritmética y Conversión
                    </h1>
                </div>
            </div>

            {/* Main Topic Introduction */}
            <section className="glass-morphism rounded-3xl p-8 space-y-8">
                <div className="flex items-start gap-4 mb-4">
                    <Calculator className="w-10 h-10 text-primary-400 mt-1" />
                    <div>
                        <h2 className="text-2xl font-bold text-white">1. ¿Qué es la aritmética?</h2>
                        <p className="text-slate-300 mt-2 leading-relaxed text-lg">
                            La aritmética es la rama de las matemáticas que estudia las operaciones básicas entre números.
                        </p>
                    </div>
                </div>

                <div className="bg-primary-500/10 border border-primary-500/20 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-300">
                            Estas operaciones son <strong className="text-white">fundamentales</strong> para casi todos los cálculos en ingeniería, electricidad y electrónica.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="bg-white/10 px-3 py-1 rounded-full text-white text-sm">Suma</span>
                            <span className="bg-white/10 px-3 py-1 rounded-full text-white text-sm">Resta</span>
                            <span className="bg-white/10 px-3 py-1 rounded-full text-white text-sm">Multiplicación</span>
                            <span className="bg-white/10 px-3 py-1 rounded-full text-white text-sm">División</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary-400" /> Permite resolver:
                    </h3>
                    <ul className="grid grid-cols-2 gap-3">
                        <li className="bg-slate-900/50 p-3 rounded-xl flex items-center gap-3 text-sm text-slate-300 border border-white/5"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span> Ecuaciones</li>
                        <li className="bg-slate-900/50 p-3 rounded-xl flex items-center gap-3 text-sm text-slate-300 border border-white/5"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span> Análisis de circuitos</li>
                        <li className="bg-slate-900/50 p-3 rounded-xl flex items-center gap-3 text-sm text-slate-300 border border-white/5"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span> Cálculos eléctricos</li>
                        <li className="bg-slate-900/50 p-3 rounded-xl flex items-center gap-3 text-sm text-slate-300 border border-white/5"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span> Conversiones de unidades</li>
                    </ul>
                </div>
            </section>

            {/* Operaciones Fundamentales & Jerarquía */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 2. Operaciones Fundamentales */}
                <section className="bg-slate-900/60 rounded-3xl p-8 border border-white/5 space-y-6">
                    <div className="flex items-start gap-4 mb-6">
                        <span className="text-4xl font-black text-primary-500/20 leading-none">2.</span>
                        <h2 className="text-xl font-bold text-white pt-1">Operaciones fundamentales</h2>
                    </div>

                    <div className="space-y-4">
                        {/* Suma */}
                        <div className="bg-black/20 p-4 rounded-2xl border border-white/5">
                            <h3 className="text-primary-400 font-bold uppercase text-xs tracking-widest mb-2 flex items-center gap-2">Suma <span className="bg-white/10 w-5 h-5 flex items-center justify-center rounded-full text-white">+</span></h3>
                            <p className="text-sm text-slate-300 mb-2">Consiste en agregar cantidades. <em>(A 8 se le agregan 5 unidades)</em></p>
                            <div className="font-mono text-center text-lg text-white bg-black/40 py-2 rounded-lg">8 + 5 = <strong className="text-primary-300">13</strong></div>
                        </div>
                        {/* Resta */}
                        <div className="bg-black/20 p-4 rounded-2xl border border-white/5">
                            <h3 className="text-primary-400 font-bold uppercase text-xs tracking-widest mb-2 flex items-center gap-2">Resta <span className="bg-white/10 w-5 h-5 flex items-center justify-center rounded-full text-white">-</span></h3>
                            <p className="text-sm text-slate-300 mb-2">Consiste en quitar una cantidad a otra. <em>(A 15 se le quitan 6 unidades)</em></p>
                            <div className="font-mono text-center text-lg text-white bg-black/40 py-2 rounded-lg">15 - 6 = <strong className="text-primary-300">9</strong></div>
                        </div>
                        {/* Multiplicación */}
                        <div className="bg-black/20 p-4 rounded-2xl border border-white/5">
                            <h3 className="text-primary-400 font-bold uppercase text-xs tracking-widest mb-2 flex items-center gap-2">Multiplicación <span className="bg-white/10 w-5 h-5 flex items-center justify-center rounded-full text-white">×</span></h3>
                            <p className="text-sm text-slate-300 mb-2">Representa una suma repetida. <em>(3 + 3 + 3 + 3)</em></p>
                            <div className="font-mono text-center text-lg text-white bg-black/40 py-2 rounded-lg">4 × 3 = <strong className="text-primary-300">12</strong></div>
                        </div>
                        {/* División */}
                        <div className="bg-black/20 p-4 rounded-2xl border border-white/5">
                            <h3 className="text-primary-400 font-bold uppercase text-xs tracking-widest mb-2 flex items-center gap-2">División <span className="bg-white/10 w-5 h-5 flex items-center justify-center rounded-full text-white">÷</span></h3>
                            <p className="text-sm text-slate-300 mb-2">Repartir una cantidad en partes iguales. <em>(¿Cuántas veces cabe 4 dentro de 20?)</em></p>
                            <div className="font-mono text-center text-lg text-white bg-black/40 py-2 rounded-lg">20 ÷ 4 = <strong className="text-primary-300">5</strong></div>
                        </div>
                    </div>
                </section>

                {/* 3. Jerarquía de Operaciones */}
                <section className="bg-gradient-to-br from-primary-900/20 to-transparent rounded-3xl p-8 border border-primary-500/10 space-y-6">
                    <div className="flex items-start gap-4 mb-6">
                        <span className="text-4xl font-black text-primary-500/20 leading-none">3.</span>
                        <h2 className="text-xl font-bold text-white pt-1">Jerarquía de operaciones</h2>
                    </div>

                    <p className="text-slate-300 text-sm">Cuando una expresión tiene varias operaciones, existe un orden específico para resolverlas.</p>

                    <ol className="space-y-3">
                        <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                            <span className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                            <span className="text-white font-medium">Paréntesis <span className="text-primary-400 font-mono">() []</span></span>
                        </li>
                        <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                            <span className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                            <span className="text-white font-medium">Potencias y raíces <span className="text-primary-400 font-mono">x² √</span></span>
                        </li>
                        <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                            <span className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                            <span className="text-white font-medium">Multiplicaciones y divisiones <span className="text-primary-400 font-mono">× ÷</span></span>
                        </li>
                        <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                            <span className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                            <span className="text-white font-medium">Sumas y restas <span className="text-primary-400 font-mono">+ -</span></span>
                        </li>
                    </ol>

                    <div className="bg-black/30 p-5 rounded-2xl border border-white/5 mt-4">
                        <h4 className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-3">Ejemplo: Resolver</h4>
                        <div className="font-mono text-center text-2xl text-white mb-4">6 + 4 × 3</div>

                        <div className="space-y-2 text-sm text-slate-300">
                            <div className="flex justify-between items-center"><span className="text-slate-500">1. Multiplicación:</span> <span className="font-mono">4 × 3 = 12</span></div>
                            <div className="flex justify-between items-center"><span className="text-slate-500">2. Suma:</span> <span className="font-mono">6 + 12 = <strong className="text-primary-300">18</strong></span></div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Technical Content Section - Sistemas Numéricos */}
            <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                <button
                    onClick={() => setIsTechnicalContentOpen(!isTechnicalContentOpen)}
                    className="w-full flex items-center justify-between p-6 glass-morphism rounded-2xl hover:bg-white/5 transition-all duration-300 group shadow-lg"
                >
                    <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl transition-colors duration-300 ${isTechnicalContentOpen ? 'bg-primary-500 text-white' : 'bg-white/5 text-primary-400 group-hover:bg-primary-500/20'}`}>
                            <Hash className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <h2 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                                Sistemas Numéricos y Conversiones
                            </h2>
                            <p className="text-sm font-medium text-slate-500">Decimal, binario, octal, hexadecimal y métodos</p>
                        </div>
                    </div>
                    <div className={`p-2 rounded-full transition-all duration-300 ${isTechnicalContentOpen ? 'bg-primary-500/10 text-primary-400' : 'bg-white/5 text-slate-400'}`}>
                        {isTechnicalContentOpen ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                    </div>
                </button>

                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isTechnicalContentOpen ? 'opacity-100 max-h-[14000px] visible mt-4' : 'opacity-0 max-h-0 invisible'}`}>
                    <div className="glass-morphism rounded-[2.5rem] p-8 md:p-14 space-y-16 list-none border border-primary-500/10">

                        {/* 4. Sistemas de numeración */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <span className="text-5xl font-black text-primary-500/20 leading-none">4.</span>
                                <div>
                                    <h2 className="text-2xl font-bold text-white pt-1">Sistemas de numeración</h2>
                                    <p className="text-slate-300 mt-2 text-lg">Un sistema de numeración es una forma de representar números usando símbolos.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h3 className="text-primary-400 font-bold text-sm uppercase tracking-widest">Los más utilizados:</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-white/10 border border-white/5 px-4 py-2 rounded-lg text-white font-medium">10 Decimal</span>
                                        <span className="bg-white/10 border border-white/5 px-4 py-2 rounded-lg text-white font-medium">2 Binario</span>
                                        <span className="bg-white/10 border border-white/5 px-4 py-2 rounded-lg text-white font-medium">8 Octal</span>
                                        <span className="bg-white/10 border border-white/5 px-4 py-2 rounded-lg text-white font-medium">16 Hexadecimal</span>
                                    </div>
                                </div>
                                <div className="bg-primary-900/20 border-l-4 border-primary-500 p-5 rounded-r-2xl h-full flex flex-col justify-center">
                                    <h3 className="text-white font-bold text-sm mb-2 flex items-center gap-2"><Cpu className="w-4 h-4 text-primary-400" /> Importantes en:</h3>
                                    <ul className="text-sm text-slate-300 space-y-1 list-disc list-inside">
                                        <li>Computación</li>
                                        <li>Electrónica digital</li>
                                        <li>Programación de microcontroladores</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 5, 6, 7, 8 - Cuatro Sistemas */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Decimal */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-primary-500/50 font-black">5.</span> Sistema Decimal
                                </h3>
                                <p className="text-sm text-slate-400 mb-4">Es el que usamos a diario. Consta de 10 símbolos y usa potencias de 10.</p>
                                <div className="bg-black/30 p-3 rounded-xl font-mono text-center text-primary-300 tracking-widest mb-4">0,1,2,3...8,9</div>

                                <div className="mt-auto bg-white/5 p-4 rounded-xl font-mono text-sm space-y-2">
                                    <div className="text-center text-white text-xl font-bold border-b border-white/10 pb-2">345</div>
                                    <div className="text-center text-slate-400">3×10² + 4×10¹ + 5×10⁰</div>
                                </div>
                            </div>

                            {/* Binario */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-primary-500/50 font-black">6.</span> Sistema Binario
                                </h3>
                                <p className="text-sm text-slate-400 mb-4">Utilizado por computadores y circuitos digitales. Solo tiene 2 símbolos, usa potencias de 2.</p>
                                <div className="bg-black/30 p-3 rounded-xl font-mono text-center text-primary-300 tracking-widest mb-4">0, 1</div>

                                <div className="mt-auto bg-white/5 p-4 rounded-xl font-mono text-sm space-y-2">
                                    <div className="flex items-baseline justify-center border-b border-white/10 pb-2 gap-1">
                                        <span className="text-white text-xl font-bold">1011</span><sub className="text-primary-400">2</sub>
                                    </div>
                                    <div className="text-center text-slate-400 flex flex-col items-center">
                                        <span>1×2³ + 0×2² + 1×2¹ + 1×2⁰</span>
                                        <span>8 + 0 + 2 + 1 = <strong className="text-white">11</strong> en decimal</span>
                                    </div>
                                </div>
                            </div>

                            {/* Octal */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-primary-500/50 font-black">7.</span> Sistema Octal
                                </h3>
                                <p className="text-sm text-slate-400 mb-4">Utiliza 8 símbolos y cada posición representa una potencia de 8.</p>
                                <div className="bg-black/30 p-3 rounded-xl font-mono text-center text-primary-300 tracking-widest mb-4">0,1,2...6,7</div>

                                <div className="mt-auto bg-white/5 p-4 rounded-xl font-mono text-sm space-y-2">
                                    <div className="flex items-baseline justify-center border-b border-white/10 pb-2 gap-1">
                                        <span className="text-white text-xl font-bold">25</span><sub className="text-primary-400">8</sub>
                                    </div>
                                    <div className="text-center text-slate-400 flex flex-col items-center">
                                        <span>2×8¹ + 5×8⁰</span>
                                        <span>16 + 5 = <strong className="text-white">21</strong> en decimal</span>
                                    </div>
                                </div>
                            </div>

                            {/* Hexadecimal */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-primary-500/50 font-black">8.</span> Sistema Hexadecimal
                                </h3>
                                <p className="text-sm text-slate-400 mb-4">Utiliza 16 símbolos. Muy usado en memoria y colores informáticos.</p>
                                <div className="bg-black/30 p-3 rounded-xl font-mono text-center text-primary-300 tracking-widest mb-2 text-xs">
                                    0...9, A, B, C, D, E, F
                                </div>
                                <div className="flex justify-center gap-2 text-[10px] text-slate-500 uppercase font-mono mb-4 text-center">
                                    <span>A=10</span> <span>B=11</span> <span>C=12</span> <span>D=13</span> <span>E=14</span> <span>F=15</span>
                                </div>

                                <div className="mt-auto bg-white/5 p-4 rounded-xl font-mono text-sm space-y-2">
                                    <div className="flex items-baseline justify-center border-b border-white/10 pb-2 gap-1">
                                        <span className="text-white text-xl font-bold">2F</span><sub className="text-primary-400">16</sub>
                                    </div>
                                    <div className="text-center text-slate-400 flex flex-col items-center">
                                        <span>2×16¹ + F(15)×16⁰</span>
                                        <span>32 + 15 = <strong className="text-white">47</strong> en decimal</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="border-white/10 my-8" />

                        {/* Conversiones */}
                        <div className="space-y-10">
                            <div className="flex items-start gap-4">
                                <span className="text-5xl font-black text-primary-500/20 leading-none block mt-2">9.</span>
                                <div>
                                    <h2 className="text-2xl font-bold text-white pt-1">Conversión entre sistemas numéricos</h2>
                                    <p className="text-slate-300 mt-2">
                                        En electrónica y computación es común convertir números. Los flujos más utilizados son <span className="text-white font-mono bg-white/10 px-2 rounded-md">Binario ↔ Decimal</span> y <span className="text-white font-mono bg-white/10 px-2 rounded-md">Binario ↔ Hexadecimal</span>.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Binario a Decimal */}
                                <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 h-full flex flex-col">
                                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                        <span className="bg-primary-500/20 text-primary-400 w-8 h-8 flex items-center justify-center rounded-lg text-sm">10</span>
                                        De Binario a Decimal
                                    </h3>
                                    <p className="text-sm text-slate-400 mb-6">Para convertir un número binario a decimal se utilizan las potencias de 2 correspondientes a cada posición (empezando de derecha a izquierda desde 0).</p>

                                    <div className="bg-black/30 p-6 rounded-2xl flex-grow flex flex-col justify-center">
                                        <div className="text-center font-mono text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">1101₂</div>

                                        <div className="space-y-2 text-center font-mono text-sm text-slate-300">
                                            <p className="flex justify-center gap-8 border-b border-white/5 pb-2">
                                                <span>1×2³</span> <span>1×2²</span> <span>0×2¹</span> <span>1×2⁰</span>
                                            </p>
                                            <p className="flex justify-center gap-12 font-bold text-lg text-primary-200 py-2">
                                                <span>8</span> <span className="text-slate-500">+</span> <span>4</span> <span className="text-slate-500">+</span> <span>0</span> <span className="text-slate-500">+</span> <span>1</span>
                                            </p>
                                        </div>

                                        <div className="mt-8 bg-primary-500/10 py-3 rounded-xl flex items-center justify-center gap-3">
                                            <span className="text-xs uppercase text-slate-500 font-bold">Resultado</span>
                                            <span className="text-2xl font-bold text-primary-400 font-mono">13</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Decimal a Binario */}
                                <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 h-full flex flex-col">
                                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                        <span className="bg-primary-500/20 text-primary-400 w-8 h-8 flex items-center justify-center rounded-lg text-sm">11</span>
                                        De Decimal a Binario
                                    </h3>
                                    <p className="text-sm text-slate-400 mb-6">Se utiliza el método de <strong>divisiones sucesivas por 2</strong>, guardando los residuos para formar el número desde abajo hacia arriba.</p>

                                    <div className="bg-black/30 p-6 rounded-2xl flex-grow flex flex-col justify-center">
                                        <div className="text-center font-mono text-xl font-bold text-white mb-4 border-b border-white/10 pb-4">Ejemplo: Convertir 13</div>

                                        <ul className="space-y-3 font-mono text-sm text-slate-300">
                                            <li className="flex justify-between items-center bg-white/5 py-2 px-4 rounded-lg">
                                                <span>13 ÷ 2 = 6</span> <span className="text-primary-300 font-bold border-l border-white/10 pl-4">Residuo: 1</span>
                                            </li>
                                            <li className="flex justify-between items-center bg-white/5 py-2 px-4 rounded-lg">
                                                <span>6 ÷ 2 = 3</span> <span className="text-primary-300 font-bold border-l border-white/10 pl-4">Residuo: 0</span>
                                            </li>
                                            <li className="flex justify-between items-center bg-white/5 py-2 px-4 rounded-lg">
                                                <span>3 ÷ 2 = 1</span> <span className="text-primary-300 font-bold border-l border-white/10 pl-4">Residuo: 1</span>
                                            </li>
                                            <li className="flex justify-between items-center bg-white/5 py-2 px-4 rounded-lg">
                                                <span>1 ÷ 2 = 0</span> <span className="text-primary-300 font-bold border-l border-white/10 pl-4">Residuo: 1</span>
                                            </li>
                                        </ul>

                                        <div className="mt-6 bg-primary-500/10 py-3 rounded-xl flex flex-col items-center justify-center gap-1">
                                            <span className="text-[10px] uppercase text-slate-400">Leído de abajo hacia arriba</span>
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs uppercase text-slate-500 font-bold">Resultado</span>
                                                <span className="text-2xl font-bold text-primary-400 font-mono">1101₂</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 12. Importancia final */}
                        <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-[1px] rounded-3xl mt-12 shadow-2xl shadow-primary-500/20">
                            <div className="bg-slate-950 rounded-[23px] p-8 md:p-10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Layers className="w-48 h-48" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4 relative z-10">
                                    <span className="text-4xl text-primary-500 font-black leading-none">12.</span>
                                    Importancia en electricidad y electrónica
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                    <div>
                                        <p className="text-slate-300 mb-4">Los métodos de conversión y la aritmética sólida son fundamentales para:</p>
                                        <ul className="space-y-2 text-primary-200">
                                            <li className="flex items-center gap-2">✓ <span className="text-white">Programación de microcontroladores</span></li>
                                            <li className="flex items-center gap-2">✓ <span className="text-white">Electrónica digital (puertas lógicas)</span></li>
                                            <li className="flex items-center gap-2">✓ <span className="text-white">Análisis de señales</span></li>
                                            <li className="flex items-center gap-2">✓ <span className="text-white">Sistemas de control</span></li>
                                            <li className="flex items-center gap-2">✓ <span className="text-white">Comunicaciones digitales</span></li>
                                        </ul>
                                    </div>
                                    <div className="bg-primary-900/30 border border-primary-500/20 p-6 rounded-2xl flex items-center">
                                        <p className="text-lg font-medium text-primary-100 text-center">
                                            Comprender estos sistemas permite interpretar correctamente cómo funcionan los dispositivos electrónicos y los computadores al más bajo nivel.
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

export default AritmeticaConversionView;
