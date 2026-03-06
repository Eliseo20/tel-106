import React, { useState } from 'react';
import { ArrowLeft, BookOpen, ChevronDown, ChevronRight, Zap, Target, Image as ImageIcon, Map, Component, ShieldAlert, Cpu } from 'lucide-react';

// Reusable Image Placeholder Component
const ImagePlaceholder = ({ title, height = "h-48" }) => (
    <div className={`w-full ${height} bg-slate-900/60 border-2 border-dashed border-primary-500/30 rounded-2xl flex flex-col items-center justify-center text-slate-500 hover:border-primary-500/60 hover:text-primary-400 hover:bg-slate-900/80 transition-all cursor-pointer group mt-4 mb-2`}>
        <ImageIcon className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
        <p className="text-sm font-medium uppercase tracking-widest">{title}</p>
        <p className="text-xs mt-1 opacity-60">(Espacio para imagen)</p>
    </div>
);

const SimbolosElectricosView = ({ onBack }) => {
    const [isTechnicalContentOpen, setIsTechnicalContentOpen] = useState(true);
    const [isElementsOpen, setIsElementsOpen] = useState(true);

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
                        Símbolos Eléctricos y Electrónicos
                    </h1>
                </div>
            </div>

            {/* Main Topic Introduction */}
            <section className="glass-morphism rounded-3xl p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <Map className="w-8 h-8 text-primary-400 flex-shrink-0 mt-1" />
                            <div>
                                <h2 className="text-2xl font-bold text-white">1. ¿Qué son los símbolos eléctricos?</h2>
                            </div>
                        </div>
                        <p className="text-slate-300 leading-relaxed text-lg">
                            Los símbolos eléctricos y electrónicos son <strong className="text-white">representaciones gráficas estandarizadas</strong> que se utilizan para representar componentes dentro de un circuito.
                        </p>
                        <div className="bg-primary-500/10 border border-primary-500/20 p-5 rounded-2xl">
                            <h3 className="text-primary-400 font-bold text-sm uppercase tracking-widest mb-3">En lugar del componente real, se usa un símbolo simple para:</h3>
                            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                                <li>Simplificar los diagramas</li>
                                <li>Entender rápidamente un circuito</li>
                                <li>Facilitar el diseño y análisis</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/5 space-y-4 h-full">
                            <h3 className="text-white font-bold flex items-center gap-2">
                                <Target className="w-5 h-5 text-primary-400" /> ¿Dónde se utilizan?
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white/5 px-3 py-1.5 rounded-lg text-slate-300 text-sm border border-white/10">Diagramas eléctricos</span>
                                <span className="bg-white/5 px-3 py-1.5 rounded-lg text-slate-300 text-sm border border-white/10">Planos de instalación</span>
                                <span className="bg-white/5 px-3 py-1.5 rounded-lg text-slate-300 text-sm border border-white/10">Esquemas electrónicos</span>
                                <span className="bg-white/5 px-3 py-1.5 rounded-lg text-slate-300 text-sm border border-white/10">Manuales técnicos</span>
                                <span className="bg-white/5 px-3 py-1.5 rounded-lg text-slate-300 text-sm border border-white/10">Diseño de circuitos</span>
                            </div>

                            <hr className="border-white/10" />

                            <div className="space-y-2">
                                <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold">Normas Internacionales</h4>
                                <div className="space-y-1">
                                    <p className="text-sm text-white"><strong className="text-primary-400">IEC</strong> (International Electrotechnical Commission)</p>
                                    <p className="text-sm text-white"><strong className="text-primary-400">IEEE</strong> (Institute of Electrical and Electronics Engineers)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Diagrama Esquemático */}
            <section className="glass-morphism rounded-3xl p-8 bg-gradient-to-r from-transparent to-primary-900/20">
                <div className="flex items-start gap-4">
                    <span className="text-5xl font-black text-primary-500/20 leading-none">2.</span>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white pt-1">¿Qué es un diagrama esquemático?</h2>
                        <p className="text-slate-300 text-lg">
                            Un diagrama esquemático es una representación gráfica de un circuito donde se muestran:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="bg-black/30 p-4 rounded-xl text-center border border-white/5">
                                <Component className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                                <span className="text-white font-medium">Los componentes</span>
                            </div>
                            <div className="bg-black/30 p-4 rounded-xl text-center border border-white/5">
                                <Zap className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                                <span className="text-white font-medium">Las conexiones</span>
                            </div>
                            <div className="bg-black/30 p-4 rounded-xl text-center border border-white/5">
                                <ArrowRightLeft className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                                <span className="text-white font-medium">El flujo de corriente</span>
                            </div>
                        </div>

                        <p className="text-primary-200 text-sm bg-primary-500/10 p-4 rounded-xl">
                            En este tipo de diagramas no importa la forma física del circuito, sino cómo están conectados los elementos. Esto permite analizar el funcionamiento de forma clara.
                        </p>

                        <ImagePlaceholder title="Diagrama Esquemático" height="h-64" />
                    </div>
                </div>
            </section>

            {/* Diccionario de Elementos - Collapse */}
            <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                <button
                    onClick={() => setIsElementsOpen(!isElementsOpen)}
                    className="w-full flex items-center justify-between p-6 glass-morphism rounded-2xl hover:bg-white/5 transition-all duration-300 group shadow-lg"
                >
                    <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl transition-colors duration-300 ${isElementsOpen ? 'bg-primary-500 text-white' : 'bg-white/5 text-primary-400 group-hover:bg-primary-500/20'}`}>
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <h2 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                                Diccionario de Componentes
                            </h2>
                            <p className="text-sm font-medium text-slate-500">Símbolos y definiciones de los elementos más comunes</p>
                        </div>
                    </div>
                    <div className={`p-2 rounded-full transition-all duration-300 ${isElementsOpen ? 'bg-primary-500/10 text-primary-400' : 'bg-white/5 text-slate-400'}`}>
                        {isElementsOpen ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                    </div>
                </button>

                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isElementsOpen ? 'opacity-100 max-h-[14000px] visible mt-4' : 'opacity-0 max-h-0 invisible'}`}>
                    <div className="glass-morphism rounded-[2.5rem] p-8 md:p-14 space-y-12 border border-primary-500/10">

                        {/* Component Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* 3. Conductores */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-primary-500/50 font-black">3.</span> Conductores (cables)
                                </h3>
                                <p className="text-sm text-slate-300 mb-4">Se representan como líneas rectas. Indican el camino por donde circula la corriente.</p>

                                <div className="space-y-3 font-mono text-sm text-center bg-black/30 p-4 rounded-xl mt-auto">
                                    <div>
                                        <div className="text-primary-400 tracking-[0.5em] font-bold">───────</div>
                                        <div className="text-slate-500 text-xs mt-1">Línea recta</div>
                                    </div>
                                    <div className="border-t border-white/5 pt-3">
                                        <div className="text-primary-400 tracking-[0.5em] font-bold">───●───</div>
                                        <div className="text-center">│</div>
                                        <div className="text-slate-500 text-xs leading-none">Punto de unión</div>
                                    </div>
                                </div>
                            </div>

                            {/* 4. Fuente de voltaje y 5. Batería */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-primary-500/50 font-black">4-5.</span> Fuente de Voltaje y Batería
                                </h3>
                                <p className="text-sm text-slate-300 mb-4">Proporciona la energía eléctrica. Puede ser batería, fuente de alimentación o generador. La batería es corriente continua (DC).</p>

                                <ul className="text-xs text-slate-400 space-y-1 mb-4">
                                    <li>• <strong className="text-white">Línea larga:</strong> Terminal positivo</li>
                                    <li>• <strong className="text-white">Línea corta:</strong> Terminal negativo</li>
                                </ul>

                                <ImagePlaceholder title="Símbolo Batería / Fuente" height="h-24" />
                            </div>

                            {/* 6. Resistencia */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-primary-500/50 font-black">6.</span> Resistencia
                                </h3>
                                <p className="text-sm text-slate-300 mb-4">Limita o controla la corriente eléctrica dentro del circuito. Se mide en <strong className="text-white">Ω (ohm)</strong>.</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-primary-500/10 text-primary-300 px-2 py-1 rounded text-xs border border-primary-500/20">Limitar corriente</span>
                                    <span className="bg-primary-500/10 text-primary-300 px-2 py-1 rounded text-xs border border-primary-500/20">Dividir voltaje</span>
                                    <span className="bg-primary-500/10 text-primary-300 px-2 py-1 rounded text-xs border border-primary-500/20">Proteger</span>
                                </div>

                                <ImagePlaceholder title="Símbolo Resistencia" height="h-24" />
                            </div>

                            {/* 7. Potenciómetro */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-primary-500/50 font-black">7.</span> Potenciómetro
                                </h3>
                                <p className="text-sm text-slate-300 mb-4">Es una resistencia variable. Modifica su valor girando un eje o mediante cursor.</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-white/5 text-slate-300 px-2 py-1 rounded text-xs border border-white/10">Volumen</span>
                                    <span className="bg-white/5 text-slate-300 px-2 py-1 rounded text-xs border border-white/10">Sensibilidad</span>
                                </div>

                                <ImagePlaceholder title="Símbolo Potenciómetro" height="h-24" />
                            </div>

                            {/* 8. Interruptor */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-primary-500/50 font-black">8.</span> Interruptor
                                </h3>
                                <p className="text-sm text-slate-300 mb-4">Dispositivo para abrir o cerrar un circuito.</p>

                                <div className="grid grid-cols-2 gap-2 mb-4">
                                    <div className="bg-black/30 p-2 rounded text-center text-xs text-red-300 border border-red-500/20">Abierto: No circula</div>
                                    <div className="bg-black/30 p-2 rounded text-center text-xs text-green-300 border border-green-500/20">Cerrado: Fluye</div>
                                </div>

                                <ImagePlaceholder title="Símbolo Interruptor" height="h-24" />
                            </div>

                            {/* 9. Fusible */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-primary-500/50 font-black">9.</span> Fusible
                                </h3>
                                <p className="text-sm text-slate-300 mb-4">Protección que interrumpe el circuito si la corriente supera un valor seguro (funde el filamento).</p>

                                <div className="flex items-center gap-2 text-xs text-amber-300 bg-amber-500/10 p-2 rounded mb-4">
                                    <ShieldAlert className="w-4 h-4" /> Previene daños en equipos
                                </div>

                                <ImagePlaceholder title="Símbolo Fusible" height="h-24" />
                            </div>

                            {/* 10. Tierra */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-primary-500/50 font-black">10.</span> Tierra (GND)
                                </h3>
                                <p className="text-sm text-slate-300 mb-4">Punto de referencia de 0 voltios. Se usa para seguridad y estabilización.</p>

                                <ImagePlaceholder title="Símbolo Tierra" height="h-24" />
                            </div>

                            {/* 11. Capacitor */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-primary-500/50 font-black">11.</span> Capacitor
                                </h3>
                                <p className="text-sm text-slate-300 mb-4">Almacena energía eléctrica temporalmente. Formado por dos placas. Se mide en <strong className="text-white">F (farad)</strong>.</p>

                                <ImagePlaceholder title="Símbolo Capacitor" height="h-24" />
                            </div>

                            {/* 12. Inductor */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-primary-500/50 font-black">12.</span> Inductor (Bobina)
                                </h3>
                                <p className="text-sm text-slate-300 mb-4">Almacena energía en forma de campo magnético. Se mide en <strong className="text-white">H (henry)</strong>.</p>

                                <ImagePlaceholder title="Símbolo Inductor" height="h-24" />
                            </div>

                            {/* 13. Diodo y 14. LED */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-primary-500/50 font-black">13-14.</span> Diodo y LED
                                </h3>
                                <p className="text-sm text-slate-300 mb-4">Semiconductor que permite el paso de corriente en una sola dirección. El LED emite luz.</p>

                                <ImagePlaceholder title="Símbolo Diodo / LED" height="h-24" />
                            </div>

                            {/* 15. Motor */}
                            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-primary-500/50 font-black">15.</span> Motor eléctrico
                                </h3>
                                <p className="text-sm text-slate-300 mb-4">Convierte energía eléctrica en energía mecánica mediante campos magnéticos.</p>

                                <ImagePlaceholder title="Símbolo Motor M" height="h-24" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Importancia Final */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-[1px] rounded-3xl mt-12 shadow-2xl shadow-primary-500/20">
                <div className="bg-slate-950 rounded-[23px] p-8 md:p-10 relative overflow-hidden">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4 relative z-10">
                        <span className="text-4xl text-primary-500 font-black leading-none">16.</span>
                        Importancia de conocerlos
                    </h3>

                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <p className="text-slate-300 mb-4">El conocimiento de estos símbolos es una habilidad fundamental para técnicos e ingenieros para poder:</p>
                            <ul className="space-y-2 text-primary-200 font-medium">
                                <li className="flex items-center gap-2">✓ <span className="text-white">Interpretar diagramas</span></li>
                                <li className="flex items-center gap-2">✓ <span className="text-white">Analizar circuitos</span></li>
                                <li className="flex items-center gap-2">✓ <span className="text-white">Diseñar sistemas</span></li>
                                <li className="flex items-center gap-2">✓ <span className="text-white">Diagnosticar fallas</span></li>
                                <li className="flex items-center gap-2">✓ <span className="text-white">Instalaciones seguras</span></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3">
                            <div className="bg-primary-500/20 p-6 rounded-full border border-primary-500/50 aspect-square flex flex-col items-center justify-center text-center">
                                <Cpu className="w-12 h-12 text-primary-400 mb-2" />
                                <span className="text-white font-bold uppercase tracking-widest text-xs">Lenguaje<br />Universal</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SimbolosElectricosView;
