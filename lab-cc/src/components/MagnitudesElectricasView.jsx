import React from 'react';
import { ArrowLeft, Zap, Battery, Activity, Search, Image as ImageIcon, Droplets, MoveRight, Layers, Lightbulb } from 'lucide-react';

const ImagePlaceholder = ({ title, height = "h-48" }) => (
    <div className={`w-full ${height} bg-slate-900/60 border-2 border-dashed border-primary-500/30 rounded-2xl flex flex-col items-center justify-center text-slate-500 hover:border-primary-500/60 hover:text-primary-400 hover:bg-slate-900/80 transition-all cursor-pointer group mt-6 mb-4 relative overflow-hidden`}>
        <ImageIcon className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform relative z-10" />
        <p className="text-sm font-medium uppercase tracking-widest text-center px-4 relative z-10">{title}</p>
        <p className="text-xs mt-1 opacity-60 flex items-center gap-1 relative z-10"><Search className="w-3 h-3" /> Buscar imagen</p>
    </div>
);

const MagnitudesElectricasView = ({ onBack }) => {
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
                        Magnitudes Eléctricas Principales
                    </h1>
                </div>
            </div>

            {/* Intro */}
            <section className="glass-morphism rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute -right-20 -top-20 opacity-5 pointer-events-none">
                    <Zap className="w-80 h-80 text-primary-500" />
                </div>

                <div className="relative z-10 max-w-3xl">
                    <p className="text-slate-300 text-lg mb-6">
                        Existen magnitudes físicas fundamentales que permiten describir, analizar y calcular el comportamiento de los circuitos eléctricos. Estas forman la base del análisis de circuitos y son esenciales para comprender leyes fundamentales.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-primary-500/20 text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2 border border-primary-500/30">Voltaje (V)</span>
                        <span className="bg-primary-500/20 text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2 border border-primary-500/30">Intensidad (I)</span>
                        <span className="bg-primary-500/20 text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2 border border-primary-500/30">Resistencia (R)</span>
                        <span className="bg-primary-500/20 text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2 border border-primary-500/30">Potencia (P)</span>
                    </div>
                </div>
            </section>

            {/* 1. Voltaje */}
            <section className="bg-gradient-to-br from-blue-900/20 to-slate-900/60 p-8 rounded-3xl border border-blue-500/20">
                <div className="flex items-start gap-4 mb-6">
                    <span className="text-5xl font-black text-blue-500/20 leading-none">1.</span>
                    <h2 className="text-2xl font-bold text-white pt-1">Voltaje (Tensión Eléctrica)</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <p className="text-slate-300">
                            Es la diferencia de energía eléctrica entre dos puntos de un circuito. Se puede entender como la <strong className="text-blue-400">fuerza que impulsa</strong> a los electrones a moverse.
                        </p>

                        <div className="bg-black/30 p-5 rounded-2xl border border-white/5 space-y-3 relative overflow-hidden">
                            <Droplets className="absolute right-4 bottom-4 w-12 h-12 text-blue-500/10" />
                            <h3 className="text-blue-400 font-bold uppercase tracking-widest text-xs">Analogía Hidráulica</h3>
                            <p className="text-sm text-slate-300">Comparado con el agua en una tubería:</p>
                            <ul className="text-sm text-slate-400 list-disc list-inside">
                                <li>El voltaje sería la <strong className="text-white">presión del agua</strong>.</li>
                                <li>Esa presión empuja el agua a moverse.</li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-blue-500/10 p-4 rounded-xl text-center border border-blue-500/20">
                                <span className="block text-slate-500 text-xs mb-1 uppercase tracking-widest">Símbolo</span>
                                <span className="font-serif italic text-2xl text-blue-400">V</span>
                            </div>
                            <div className="bg-blue-500/10 p-4 rounded-xl text-center border border-blue-500/20">
                                <span className="block text-slate-500 text-xs mb-1 uppercase tracking-widest">Unidad (SI)</span>
                                <span className="font-mono font-bold text-2xl text-blue-400">V (Voltio)</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                            <h3 className="text-white font-bold text-sm mb-3">Ejemplos comunes:</h3>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li className="flex justify-between items-center"><span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Pila común</span> <span className="font-mono text-white">1,5 V</span></li>
                                <li className="flex justify-between items-center"><span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Batería de auto</span> <span className="font-mono text-white">12 V</span></li>
                                <li className="flex justify-between items-center"><span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Red domiciliaria (Chile)</span> <span className="font-mono text-white">220 V</span></li>
                            </ul>
                        </div>

                        <div className="text-sm text-slate-400 p-3 bg-black/40 rounded-xl">
                            <span className="text-blue-300 font-bold">Mide con:</span> Voltímetro o multímetro (modo voltaje).
                        </div>
                        <div className="text-sm text-slate-400 p-3 bg-black/40 rounded-xl">
                            <span className="text-blue-300 font-bold">Se representa en diagramas:</span> Baterías, fuentes, generadores.
                        </div>

                        <ImagePlaceholder title="Batería mostrando polos (+/-) y diferencia de potencial" height="h-28" />
                    </div>
                </div>
            </section>

            {/* 2. Intensidad */}
            <section className="bg-gradient-to-br from-green-900/20 to-slate-900/60 p-8 rounded-3xl border border-green-500/20">
                <div className="flex items-start gap-4 mb-6">
                    <span className="text-5xl font-black text-green-500/20 leading-none">2.</span>
                    <h2 className="text-2xl font-bold text-white pt-1">Intensidad de Corriente (I)</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4 max-md:order-2">
                        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                            <h3 className="text-white font-bold text-sm mb-3">Ejemplos comunes:</h3>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li className="flex justify-between items-center"><span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> LED pequeño</span> <span className="font-mono text-white">10 - 20 mA</span></li>
                                <li className="flex justify-between items-center"><span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Cargador celular</span> <span className="font-mono text-white">1 A - 3 A</span></li>
                                <li className="flex justify-between items-center"><span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Electrodoméstico</span> <span className="font-mono text-white">Varios amperes</span></li>
                            </ul>
                        </div>

                        <div className="text-sm text-slate-400 p-3 bg-black/40 rounded-xl">
                            <span className="text-green-300 font-bold">Mide con:</span> Amperímetro o multímetro (modo corriente).
                        </div>
                        <div className="text-sm text-slate-400 p-3 bg-black/40 rounded-xl">
                            <span className="text-green-300 font-bold">Representación en esquemas:</span> Flecha indicando dirección de flujo.
                        </div>

                        <ImagePlaceholder title="Diagrama de un conductor mostrando electrones moviéndose" height="h-28" />
                    </div>

                    <div className="space-y-4 max-md:order-1">
                        <p className="text-slate-300">
                            Es el <strong className="text-green-400">flujo de electrones</strong> que circula a través de un conductor. Describe cuántos electrones pasan por un punto en un tiempo determinado.
                        </p>

                        <div className="bg-black/30 p-5 rounded-2xl border border-white/5 space-y-3 relative overflow-hidden">
                            <MoveRight className="absolute right-4 bottom-4 w-12 h-12 text-green-500/10" />
                            <h3 className="text-green-400 font-bold uppercase tracking-widest text-xs">Analogía Hidráulica</h3>
                            <ul className="text-sm text-slate-400 list-disc list-inside">
                                <li>Sería la <strong className="text-white">cantidad de agua</strong> que circula por la tubería.</li>
                                <li>Mucha agua = Corriente alta.</li>
                                <li>Poca agua = Corriente baja.</li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-green-500/10 p-4 rounded-xl text-center border border-green-500/20">
                                <span className="block text-slate-500 text-xs mb-1 uppercase tracking-widest">Símbolo</span>
                                <span className="font-serif italic text-2xl text-green-400">I</span>
                            </div>
                            <div className="bg-green-500/10 p-4 rounded-xl text-center border border-green-500/20">
                                <span className="block text-slate-500 text-xs mb-1 uppercase tracking-widest">Unidad (SI)</span>
                                <span className="font-mono font-bold text-2xl text-green-400">A (Ampere)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Resistencia */}
            <section className="bg-gradient-to-br from-orange-900/20 to-slate-900/60 p-8 rounded-3xl border border-orange-500/20">
                <div className="flex items-start gap-4 mb-6">
                    <span className="text-5xl font-black text-orange-500/20 leading-none">3.</span>
                    <h2 className="text-2xl font-bold text-white pt-1">Resistencia Eléctrica (R)</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <p className="text-slate-300">
                            Es la <strong className="text-orange-400">oposición que presenta un material</strong> al paso de la corriente eléctrica. Todos los conductores tienen cierta resistencia.
                        </p>

                        <div className="bg-black/30 p-5 rounded-2xl border border-white/5 space-y-3 relative overflow-hidden">
                            <Activity className="absolute right-4 bottom-4 w-12 h-12 text-orange-500/10" />
                            <h3 className="text-orange-400 font-bold uppercase tracking-widest text-xs">Analogía Hidráulica</h3>
                            <ul className="text-sm text-slate-400 list-disc list-inside">
                                <li>Una <strong className="text-white">tubería muy delgada</strong> ofrece más dificultad al paso del agua.</li>
                                <li>Esa dificultad es equivalente a la resistencia.</li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-orange-500/10 p-4 rounded-xl text-center border border-orange-500/20">
                                <span className="block text-slate-500 text-xs mb-1 uppercase tracking-widest">Símbolo</span>
                                <span className="font-serif italic text-2xl text-orange-400">R</span>
                            </div>
                            <div className="bg-orange-500/10 p-4 rounded-xl text-center border border-orange-500/20">
                                <span className="block text-slate-500 text-xs mb-1 uppercase tracking-widest">Unidad (SI)</span>
                                <span className="font-mono font-bold text-2xl text-orange-400">Ω (Ohm)</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                            <h3 className="text-white font-bold text-sm mb-3">Ejemplos y componentes:</h3>
                            <ul className="space-y-2 text-sm text-slate-400 mb-4">
                                <li>• Resistencias: 100 Ω, 1 kΩ, 10 kΩ</li>
                                <li>• Filamento de una ampolleta</li>
                                <li>• Cableado eléctrico</li>
                            </ul>

                            <h4 className="text-orange-300 font-bold text-xs uppercase tracking-widest mb-2 mt-4">Factores que la afectan:</h4>
                            <div className="flex flex-wrap gap-2 text-xs text-white">
                                <span className="bg-orange-500/20 px-2 py-1 rounded">Longitud</span>
                                <span className="bg-orange-500/20 px-2 py-1 rounded">Área (sección)</span>
                                <span className="bg-orange-500/20 px-2 py-1 rounded">Material</span>
                                <span className="bg-orange-500/20 px-2 py-1 rounded">Temperatura</span>
                            </div>
                        </div>

                        <div className="text-sm text-slate-400 p-3 bg-black/40 rounded-xl">
                            <span className="text-orange-300 font-bold">Mide con:</span> Ohmímetro o multímetro.
                        </div>

                        <ImagePlaceholder title="Símbolo eléctrico y fotografía de resistencias" height="h-28" />
                    </div>
                </div>
            </section>

            {/* 4. Potencia */}
            <section className="bg-gradient-to-br from-yellow-900/20 to-slate-900/60 p-8 rounded-3xl border border-yellow-500/20">
                <div className="flex items-start gap-4 mb-6">
                    <span className="text-5xl font-black text-yellow-500/20 leading-none">4.</span>
                    <h2 className="text-2xl font-bold text-white pt-1">Potencia Eléctrica (P)</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4 max-md:order-2">
                        <div className="bg-black/30 p-5 rounded-2xl border border-white/5 relative overflow-hidden text-center">
                            <h3 className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-3">Fórmula Fundamental</h3>
                            <div className="text-4xl font-serif italic text-white mb-2">
                                P = V × I
                            </div>
                            <p className="text-xs text-slate-500">P = potencia, V = voltaje, I = corriente</p>
                        </div>

                        <div className="bg-white/5 p-4 rounded-xl border border-white/10 mt-4 text-sm">
                            <h4 className="text-yellow-300 font-bold mb-2">Ejemplo de cálculo:</h4>
                            <p className="text-slate-400 mb-2">Si un equipo trabaja con <span className="text-white font-mono">V = 220 V</span> y <span className="text-white font-mono">I = 5 A</span>:</p>
                            <div className="font-mono text-center bg-black/50 py-2 rounded">
                                <p className="text-slate-300">P = 220 × 5</p>
                                <p className="text-yellow-400 font-bold mt-1 text-lg">P = 1100 W</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 max-md:order-1">
                        <p className="text-slate-300 mb-4 h-16">
                            Es la cantidad de energía eléctrica que <strong className="text-yellow-400">se consume o se entrega por unidad de tiempo</strong>.
                            Indica qué tan rápido se transforma la energía eléctrica en: <em>calor, luz o movimiento</em>.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-yellow-500/10 p-4 rounded-xl text-center border border-yellow-500/20">
                                <span className="block text-slate-500 text-xs mb-1 uppercase tracking-widest">Símbolo</span>
                                <span className="font-serif italic text-2xl text-yellow-400">P</span>
                            </div>
                            <div className="bg-yellow-500/10 p-4 rounded-xl text-center border border-yellow-500/20">
                                <span className="block text-slate-500 text-xs mb-1 uppercase tracking-widest">Unidad (SI)</span>
                                <span className="font-mono font-bold text-2xl text-yellow-400">W (Watt)</span>
                            </div>
                        </div>

                        <div className="bg-white/5 p-4 rounded-xl border border-white/10 mt-4">
                            <h3 className="text-white font-bold text-sm mb-3">Ejemplos comunes (Consumos):</h3>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li className="flex justify-between"><span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div> LED</span> <span className="font-mono text-white">5 W</span></li>
                                <li className="flex justify-between"><span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div> Televisor</span> <span className="font-mono text-white">80 W – 150 W</span></li>
                                <li className="flex justify-between"><span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div> Hervidor eléctrico</span> <span className="font-mono text-white">1800 W – 2200 W</span></li>
                                <li className="flex justify-between"><span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div> Aire acondicionado</span> <span className="font-mono text-white">+1000 W</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Relación y Conclusión */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Ley de Ohm Relación */}
                <section className="glass-morphism rounded-3xl p-8 text-center flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Relación de Ley de Ohm</h2>
                    <p className="text-slate-300 text-sm mb-6">Esta relación permite calcular cualquier variable cuando se conocen las otras dos.</p>

                    <div className="bg-primary-500/10 border border-primary-500/30 p-8 rounded-3xl w-full flex justify-center shadow-lg">
                        <div className="text-5xl font-serif italic text-white flex gap-4">
                            <span className="text-blue-400">V</span> = <span className="text-green-400">I</span> × <span className="text-orange-400">R</span>
                        </div>
                    </div>
                </section>

                {/* Importancia global */}
                <section className="bg-gradient-to-t from-primary-900/50 p-8 rounded-3xl border border-primary-500/20 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Importancia Práctica</h2>
                    <p className="text-slate-300 text-sm mb-4">Dominar estos conceptos es fundamental porque permite:</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300 mb-6">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Analizar circuitos</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Diseñar instalaciones seguras</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Calcular consumo</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Determinar protecciones</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Diagnosticar fallas</li>
                    </ul>
                    <div className="bg-black/40 p-3 rounded-lg text-primary-300 text-xs italic text-center">
                        Se usan constantemente en electrónica, instalaciones, mantenimiento industrial y energías renovables.
                    </div>
                </section>
            </div>

        </div>
    );
};

export default MagnitudesElectricasView;
