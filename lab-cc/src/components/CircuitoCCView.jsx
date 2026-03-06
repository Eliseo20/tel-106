import React from 'react';
import { ArrowLeft, Zap, Battery, Cable, Lightbulb, MoveRight, RefreshCcw, LayoutTemplate, Layers, AlertTriangle, Image as ImageIcon, Search } from 'lucide-react';

// Reusable Image Placeholder Component
const ImagePlaceholder = ({ title, height = "h-48" }) => (
    <div className={`w-full ${height} bg-slate-900/60 border-2 border-dashed border-primary-500/30 rounded-2xl flex flex-col items-center justify-center text-slate-500 hover:border-primary-500/60 hover:text-primary-400 hover:bg-slate-900/80 transition-all cursor-pointer group mt-6 mb-4`}>
        <ImageIcon className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
        <p className="text-sm font-medium uppercase tracking-widest text-center px-4">{title}</p>
        <p className="text-xs mt-1 opacity-60 flex items-center gap-1"><Search className="w-3 h-3" /> {title}</p>
    </div>
);

const CircuitoCCView = ({ onBack }) => {
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
                        Circuitos de Corriente Continua (DC)
                    </h1>
                </div>
            </div>

            {/* 1. ¿Qué es la corriente continua? */}
            <section className="glass-morphism rounded-[2.5rem] p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-6">
                        <div className="flex items-start gap-4">
                            <span className="text-5xl font-black text-primary-500/20 leading-none">1.</span>
                            <div>
                                <h2 className="text-2xl font-bold text-white pt-1">¿Qué es la corriente continua?</h2>
                                <p className="text-slate-300 mt-2 text-lg">
                                    La corriente continua (DC, Direct Current) es un tipo de corriente eléctrica en la cual los electrones se desplazan <strong className="text-white">siempre en una sola dirección</strong> dentro del circuito.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col justify-center items-center text-center">
                                <span className="text-primary-400 font-bold mb-1">Voltaje constante</span>
                                <span className="text-slate-400 text-sm">No varía en el tiempo</span>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col justify-center items-center text-center">
                                <span className="text-primary-400 font-bold mb-1">Dirección única</span>
                                <span className="text-slate-400 text-sm">La corriente no cambia de sentido</span>
                            </div>
                        </div>

                        <div className="bg-primary-500/10 border border-primary-500/20 p-5 rounded-2xl">
                            <h3 className="text-white font-bold text-sm mb-3">Es común en dispositivos que funcionan con:</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-black/30 px-3 py-1.5 rounded-lg text-slate-300 text-sm">Baterías</span>
                                <span className="bg-black/30 px-3 py-1.5 rounded-lg text-slate-300 text-sm">Pilas</span>
                                <span className="bg-black/30 px-3 py-1.5 rounded-lg text-slate-300 text-sm">Fuentes DC</span>
                                <span className="bg-black/30 px-3 py-1.5 rounded-lg text-slate-300 text-sm">Paneles solares</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white font-bold text-sm mb-2">Equipos que la utilizan:</h3>
                            <p className="text-slate-400 text-sm">Teléfonos móviles, computadores portátiles, sistemas electrónicos, vehículos eléctricos.</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-5/12">
                        <ImagePlaceholder title="Gráfico comparativo corriente continua vs corriente alterna" height="h-64" />
                        <div className="text-xs text-slate-500 text-center space-y-1">
                            <p>Debe mostrar:</p>
                            <p><strong className="text-slate-300">Corriente continua:</strong> línea recta constante</p>
                            <p><strong className="text-slate-300">Corriente alterna:</strong> onda senoidal</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Componentes básicos */}
            <section className="space-y-6">
                <div className="flex items-start gap-4 ml-4">
                    <span className="text-4xl font-black text-primary-500/20 leading-none">2.</span>
                    <h2 className="text-xl font-bold text-white pt-1">Componentes básicos de un circuito DC</h2>
                </div>
                <p className="text-slate-300 ml-4 lg:ml-12 mb-6">Un circuito de corriente continua necesita tres elementos básicos para funcionar.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Fuente */}
                    <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 space-y-4">
                        <div className="bg-primary-500/20 w-12 h-12 rounded-xl flex items-center justify-center text-primary-400 mb-4">
                            <Battery className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-bold text-lg">Fuente de energía</h3>
                        <p className="text-slate-400 text-sm">Proporciona el voltaje que impulsa la corriente. Crea una diferencia de potencial eléctrico entre dos puntos.</p>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-sm space-y-2">
                            <p className="font-mono text-primary-300 text-center">Unidad: V (volt)</p>
                            <p className="text-slate-400 text-xs text-center border-t border-white/10 pt-2">Batería, pila, fuente, panel solar</p>
                        </div>
                    </div>

                    {/* Conductores */}
                    <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 space-y-4">
                        <div className="bg-primary-500/20 w-12 h-12 rounded-xl flex items-center justify-center text-primary-400 mb-4">
                            <Cable className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-bold text-lg">Conductores</h3>
                        <p className="text-slate-400 text-sm">Materiales que permiten el flujo de corriente. Su función es conectar los componentes.</p>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-sm space-y-2">
                            <p className="text-center text-slate-300">Cables de cobre o aluminio</p>
                        </div>
                    </div>

                    {/* Carga */}
                    <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 space-y-4">
                        <div className="bg-primary-500/20 w-12 h-12 rounded-xl flex items-center justify-center text-primary-400 mb-4">
                            <Lightbulb className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-bold text-lg">Carga</h3>
                        <p className="text-slate-400 text-sm">Dispositivo que consume la energía eléctrica, transformándola en luz, calor o movimiento.</p>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-sm space-y-2">
                            <p className="text-center text-slate-300 text-xs">Resistencias, motores, lámparas, circuitos</p>
                        </div>
                    </div>
                </div>

                <div className="glass-morphism p-6 rounded-3xl max-w-2xl mx-auto mt-6">
                    <ImagePlaceholder title="Circuito básico batería resistencia diagrama" height="h-48" />
                    <p className="text-xs text-slate-500 text-center mt-2">Debe mostrar: batería → cables → resistencia → retorno a la batería.</p>
                </div>
            </section>

            {/* 3. Flujo de corriente */}
            <section className="bg-gradient-to-br from-slate-900/80 to-slate-950 p-8 md:p-12 rounded-3xl border border-white/5">
                <div className="flex items-start gap-4 mb-8">
                    <span className="text-5xl font-black text-primary-500/20 leading-none">3.</span>
                    <div>
                        <h2 className="text-2xl font-bold text-white pt-1">Flujo de corriente</h2>
                        <p className="text-slate-300 mt-2 text-lg">
                            La corriente eléctrica es el movimiento de electrones a través de un conductor.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
                    <div className="text-center space-y-2">
                        <span className="text-slate-500 uppercase tracking-widest text-xs font-bold">Representación</span>
                        <div className="w-20 h-20 bg-primary-500/20 rounded-2xl border border-primary-500/50 flex items-center justify-center mx-auto">
                            <span className="text-4xl font-serif italic text-primary-400">I</span>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-16 bg-white/10"></div>
                    <div className="text-center space-y-2">
                        <span className="text-slate-500 uppercase tracking-widest text-xs font-bold">Unidad de medida</span>
                        <div className="h-20 bg-primary-500/20 rounded-2xl border border-primary-500/50 flex items-center justify-center px-6 mx-auto">
                            <span className="text-2xl font-mono text-primary-400">A <span className="text-sm opacity-60">(ampere)</span></span>
                        </div>
                    </div>
                </div>

                <h3 className="text-center text-white font-bold mb-6">Dos formas de interpretar el flujo en los circuitos:</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-black/30 p-6 rounded-2xl border border-white/5 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5"><MoveRight className="w-20 h-20" /></div>
                        <h4 className="text-lg font-bold text-white mb-4 relative z-10">Flujo electrónico</h4>
                        <p className="text-slate-400 text-sm mb-4 relative z-10">Describe el movimiento real de los electrones. Se mueven desde el terminal negativo hacia el terminal positivo.</p>
                        <div className="flex items-center justify-center gap-2 text-primary-300 font-bold bg-white/5 py-2 rounded-lg relative z-10">
                            <span className="px-3 bg-red-500/20 text-red-400 rounded-md">(-) Negativo</span>
                            <MoveRight className="w-4 h-4" />
                            <span className="px-3 bg-blue-500/20 text-blue-400 rounded-md">(+) Positivo</span>
                        </div>
                    </div>

                    <div className="bg-black/30 p-6 rounded-2xl border border-white/5 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5"><RefreshCcw className="w-20 h-20" /></div>
                        <h4 className="text-lg font-bold text-white mb-4 relative z-10">Corriente convencional</h4>
                        <p className="text-slate-400 text-sm mb-4 relative z-10">Convención histórica, y <strong className="text-white">la más utilizada en análisis</strong>. Asume el flujo desde positivo a negativo.</p>
                        <div className="flex items-center justify-center gap-2 text-primary-300 font-bold bg-white/5 py-2 rounded-lg relative z-10">
                            <span className="px-3 bg-blue-500/20 text-blue-400 rounded-md">(+) Positivo</span>
                            <MoveRight className="w-4 h-4" />
                            <span className="px-3 bg-red-500/20 text-red-400 rounded-md">(-) Negativo</span>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <ImagePlaceholder title="Electron flow vs conventional current diagram" height="h-48" />
                    <p className="text-xs text-slate-500 text-center mt-2">La imagen debe mostrar ambas direcciones para evitar confusiones.</p>
                </div>
            </section>

            {/* 4. Circuito abierto vs cerrado */}
            <section className="glass-morphism rounded-3xl p-8 space-y-6">
                <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl font-black text-primary-500/20 leading-none">4.</span>
                    <h2 className="text-xl font-bold text-white pt-1">Circuito cerrado y circuito abierto</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-2xl h-full flex flex-col justify-center">
                            <h3 className="text-green-400 font-bold text-lg mb-2 flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
                                Circuito Cerrado
                            </h3>
                            <p className="text-slate-300 text-sm mb-4">El camino de la corriente está <strong className="text-white">completo</strong>.</p>
                            <ul className="text-sm text-slate-400 space-y-2 mb-4 list-disc list-inside">
                                <li>La corriente puede circular.</li>
                                <li>El dispositivo funciona.</li>
                            </ul>
                            <div className="mt-auto bg-black/30 p-3 rounded-xl font-mono text-center text-xs text-slate-300 border border-white/5">
                                Ejemplo: Interruptor cerrado → Lámpara encendida
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-slate-900/60 border border-white/5 p-6 rounded-2xl h-full flex flex-col justify-center">
                            <h3 className="text-slate-400 font-bold text-lg mb-2 flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-slate-600"></span>
                                Circuito Abierto
                            </h3>
                            <p className="text-slate-300 text-sm mb-4">El camino de la corriente está <strong className="text-white">interrumpido</strong>.</p>
                            <ul className="text-sm text-slate-400 space-y-2 mb-4 list-disc list-inside">
                                <li>La corriente NO circula.</li>
                                <li>El dispositivo NO funciona.</li>
                            </ul>
                            <div className="mt-auto bg-black/30 p-3 rounded-xl font-mono text-center text-xs text-slate-300 border border-white/5">
                                Ejemplo: Interruptor abierto → Lámpara apagada
                            </div>
                        </div>
                    </div>
                </div>

                <ImagePlaceholder title="Open circuit vs closed circuit diagram" height="h-48" />
                <p className="text-xs text-slate-500 text-center mt-2">La imagen debe contrastar el interruptor abierto vs cerrado y el estado de la lámpara.</p>
            </section>

            {/* 5, 6 - Serie y Paralelo */}
            <section className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Circuito en Serie */}
                    <div className="bg-gradient-to-br from-primary-900/30 to-transparent p-8 rounded-3xl border border-primary-500/20 flex flex-col">
                        <div className="flex items-start gap-4 mb-6">
                            <span className="text-4xl font-black text-primary-500/20 leading-none">5.</span>
                            <h2 className="text-xl font-bold text-white pt-1">Circuitos en serie</h2>
                        </div>
                        <p className="text-slate-300 text-sm mb-6">Los componentes están conectados <strong className="text-white">uno después de otro</strong>.</p>

                        <div className="space-y-3 flex-grow">
                            <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                                <h4 className="text-primary-400 font-bold text-xs uppercase tracking-widest mb-2">Características</h4>
                                <ul className="text-sm text-slate-300 space-y-2 list-disc list-inside">
                                    <li>Existe una sola trayectoria de corriente.</li>
                                    <li>La corriente es <strong className="text-white">igual</strong> en todos los componentes.</li>
                                    <li>El voltaje <strong className="text-white">se divide</strong> entre las resistencias.</li>
                                </ul>
                            </div>

                            <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                                <h4 className="text-red-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2 mb-1"><AlertTriangle className="w-4 h-4" /> Propiedad Crítica</h4>
                                <p className="text-sm text-slate-300">Si un componente se interrumpe, <strong className="text-white">todo el circuito deja de funcionar</strong>.</p>
                            </div>
                        </div>

                        <ImagePlaceholder title="Series circuit resistors diagram" height="h-40" />
                        <p className="text-xs text-slate-500 text-center mt-2">Debe mostrar varias resistencias conectadas en línea.</p>
                    </div>

                    {/* Circuito en Paralelo */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-white/10 flex flex-col">
                        <div className="flex items-start gap-4 mb-6">
                            <span className="text-4xl font-black text-primary-500/20 leading-none">6.</span>
                            <h2 className="text-xl font-bold text-white pt-1">Circuitos en paralelo</h2>
                        </div>
                        <p className="text-slate-300 text-sm mb-6">Los componentes están conectados <strong className="text-white">en ramas separadas</strong>.</p>

                        <div className="space-y-3 flex-grow">
                            <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                                <h4 className="text-primary-400 font-bold text-xs uppercase tracking-widest mb-2">Características</h4>
                                <ul className="text-sm text-slate-300 space-y-2 list-disc list-inside">
                                    <li>Existen <strong className="text-white">varias trayectorias</strong> de corriente.</li>
                                    <li>El voltaje es <strong className="text-white">igual</strong> en cada rama.</li>
                                    <li>La corriente <strong className="text-white">se divide</strong> entre las ramas.</li>
                                </ul>
                            </div>

                            <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                                <h4 className="text-green-400 font-bold text-xs uppercase tracking-widest mb-1">Propiedad Importante</h4>
                                <p className="text-sm text-slate-300">Si una rama falla, <strong className="text-white">las otras pueden seguir funcionando</strong>.</p>
                                <p className="text-xs text-slate-400 mt-2 opacity-80">(Así funcionan las instalaciones domésticas).</p>
                            </div>
                        </div>

                        <ImagePlaceholder title="Parallel circuit resistors diagram" height="h-40" />
                        <p className="text-xs text-slate-500 text-center mt-2">Debe mostrar resistencias en ramas paralelas.</p>
                    </div>
                </div>
            </section>

            {/* 7. Potencia Eléctrica en DC */}
            <section className="glass-morphism rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute -right-20 -top-20 opacity-5 pointer-events-none">
                    <Zap className="w-96 h-96" />
                </div>

                <div className="flex items-start gap-4 mb-8 relative z-10">
                    <span className="text-5xl font-black text-primary-500/20 leading-none">7.</span>
                    <div>
                        <h2 className="text-2xl font-bold text-white pt-1">Potencia eléctrica en DC</h2>
                        <p className="text-slate-300 mt-2 text-lg">
                            Representa la rapidez con la que un dispositivo consume energía eléctrica.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="bg-black/40 p-8 rounded-3xl border border-white/5 flex flex-col justify-center items-center">
                        <p className="text-slate-400 text-sm uppercase tracking-widest font-bold mb-4">Fórmula Principal</p>
                        <div className="text-5xl font-serif italic text-white mb-2">P = V × I</div>
                        <p className="text-primary-400 font-mono text-sm tracking-widest mt-4">UNIDAD: W (WATT)</p>
                    </div>

                    <div className="bg-slate-900/80 p-6 rounded-3xl border border-primary-500/20">
                        <h3 className="text-white font-bold mb-4 border-b border-white/10 pb-2">Ejemplo de cálculo</h3>
                        <p className="text-slate-300 text-sm mb-4">Si un dispositivo funciona con <strong className="text-primary-300 text-base">12 V</strong> y consume <strong className="text-primary-300 text-base">2 A</strong>:</p>

                        <div className="space-y-2 font-mono text-slate-300 bg-black/50 p-4 rounded-xl">
                            <p>P = 12 × 2</p>
                            <p className="text-2xl text-white font-bold border-t border-white/10 pt-2 mt-2">P = 24 W</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Importancia */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-[1px] rounded-3xl mt-12 shadow-2xl shadow-primary-500/20">
                <div className="bg-slate-950 rounded-[23px] p-8 md:p-10 relative overflow-hidden">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4 relative z-10">
                        <span className="text-4xl text-primary-500 font-black leading-none">8.</span>
                        Importancia de los circuitos DC
                    </h3>

                    <div className="relative z-10">
                        <p className="text-slate-300 mb-6 text-lg">El estudio de los circuitos de corriente continua es fundamental porque permite comprender:</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                            <div className="bg-primary-900/30 border border-primary-500/30 p-4 rounded-xl flex items-center justify-center text-center">
                                <span className="text-primary-100 font-bold text-sm">Ley de Ohm</span>
                            </div>
                            <div className="bg-primary-900/30 border border-primary-500/30 p-4 rounded-xl flex items-center justify-center text-center">
                                <span className="text-primary-100 font-bold text-sm">Leyes de Kirchhoff</span>
                            </div>
                            <div className="bg-primary-900/30 border border-primary-500/30 p-4 rounded-xl flex items-center justify-center text-center">
                                <span className="text-primary-100 font-bold text-sm">Análisis de resistencias</span>
                            </div>
                            <div className="bg-primary-900/30 border border-primary-500/30 p-4 rounded-xl flex items-center justify-center text-center">
                                <span className="text-primary-100 font-bold text-sm">Fuentes de poder</span>
                            </div>
                            <div className="bg-primary-900/30 border border-primary-500/30 p-4 rounded-xl flex items-center justify-center text-center sm:col-span-2 md:col-span-1">
                                <span className="text-primary-100 font-bold text-sm">Diseño de circuitos electrónicos</span>
                            </div>
                        </div>

                        <p className="text-center text-primary-300 font-medium italic">
                            Estos conceptos constituyen la base para el análisis de circuitos eléctricos y electrónicos más complejos.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CircuitoCCView;
