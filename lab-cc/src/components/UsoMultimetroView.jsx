import React from 'react';
import { ArrowLeft, Search, Image as ImageIcon, Activity, Zap, Radio, AlertTriangle, ShieldCheck, Cpu, Power, Volume2 } from 'lucide-react';

const ImagePlaceholder = ({ title, height = "h-48" }) => (
    <div className={`w-full ${height} bg-slate-900/60 border-2 border-dashed border-primary-500/30 rounded-2xl flex flex-col items-center justify-center text-slate-500 hover:border-primary-500/60 hover:text-primary-400 hover:bg-slate-900/80 transition-all cursor-pointer group mt-6 mb-4 relative overflow-hidden`}>
        <ImageIcon className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform relative z-10" />
        <p className="text-sm font-medium uppercase tracking-widest text-center px-4 relative z-10">{title}</p>
        <p className="text-xs mt-1 opacity-60 flex items-center gap-1 relative z-10"><Search className="w-3 h-3" /> Buscar imagen</p>
    </div>
);

const UsoMultimetroView = ({ onBack }) => {
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
                        Uso del Multímetro
                    </h1>
                </div>
            </div>

            {/* Intro */}
            <section className="glass-morphism rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
                    <Activity className="w-80 h-80 text-primary-500" />
                </div>

                <div className="relative z-10 max-w-4xl space-y-6">
                    <p className="text-slate-300 text-lg">
                        El multímetro es uno de los instrumentos de medición más importantes en electricidad y electrónica. Reúne en un solo equipo varios instrumentos de medición.
                    </p>

                    <div className="bg-black/40 p-5 rounded-2xl border border-white/5 flex flex-wrap gap-4">
                        <span className="bg-primary-500/20 text-primary-300 border border-primary-500/30 px-4 py-2 rounded-xl flex items-center gap-2 font-bold shadow-[0_0_15px_rgba(var(--primary-500),0.2)]">
                            <Zap className="w-5 h-5" /> Voltímetro
                        </span>
                        <span className="bg-orange-500/20 text-orange-400 border border-orange-500/30 px-4 py-2 rounded-xl flex items-center gap-2 font-bold shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                            <Activity className="w-5 h-5" /> Amperímetro
                        </span>
                        <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 px-4 py-2 rounded-xl flex items-center gap-2 font-bold shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                            <Radio className="w-5 h-5" /> Ohmímetro
                        </span>
                    </div>
                </div>
            </section>

            {/* 1. Tipos */}
            <section className="space-y-6">
                <div className="flex items-start gap-4 ml-4">
                    <span className="text-4xl font-black text-primary-500/20 leading-none">1.</span>
                    <h2 className="text-2xl font-bold text-white pt-1">Tipos de Multímetros</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Analógico */}
                    <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            Analógico
                        </h3>
                        <p className="text-sm text-slate-300 mb-4 h-16">
                            Utiliza una aguja que se desplaza sobre una escala graduada. Es útil para observar variaciones continuas en mediciones.
                        </p>
                        <div className="bg-black/40 p-4 rounded-xl border border-white/5 space-y-2 text-xs text-slate-400">
                            <p>• Sistema electromecánico</p>
                            <p>• Requiere interpretación de escalas</p>
                            <p>• Sensible a golpes y vibraciones</p>
                        </div>
                        <ImagePlaceholder title="Multímetro analógico con aguja" height="h-32" />
                    </div>

                    {/* Digital */}
                    <div className="bg-gradient-to-br from-primary-900/20 to-slate-900/60 p-6 rounded-3xl border border-primary-500/20">
                        <h3 className="text-xl font-bold text-primary-300 mb-4 flex items-center gap-2">
                            Digital (El más usado)
                        </h3>
                        <p className="text-sm text-slate-300 mb-4 h-16">
                            Muestra los valores directamente en una pantalla numérica. Destaca por su facilidad de uso y mayor precisión.
                        </p>
                        <div className="bg-black/40 p-4 rounded-xl border border-primary-500/10 space-y-2 text-xs text-slate-300 font-medium">
                            <p>• Lectura directa en pantalla</p>
                            <p>• Mayor precisión (evita error de lectura)</p>
                            <p>• Fácil interpretación de resultados</p>
                        </div>
                        <ImagePlaceholder title="Multímetro digital con puntas de prueba" height="h-32" />
                    </div>
                </div>
            </section>

            {/* 2. Partes Principales */}
            <section className="space-y-6">
                <div className="flex items-start gap-4 ml-4">
                    <span className="text-4xl font-black text-blue-500/20 leading-none">2.</span>
                    <h2 className="text-2xl font-bold text-white pt-1">Partes de un Multímetro Digital</h2>
                </div>

                <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 relative overflow-hidden">
                    <Cpu className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5 pointer-events-none" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        <div className="bg-black/40 p-5 rounded-2xl border border-white/5">
                            <h3 className="text-blue-300 font-bold mb-3 uppercase tracking-widest text-xs">A) Pantalla</h3>
                            <p className="text-sm text-slate-300 mb-3 block">Muestra: Voltaje, corriente, resistencia, continuidad.</p>
                        </div>
                        <div className="bg-black/40 p-5 rounded-2xl border border-white/5">
                            <h3 className="text-blue-300 font-bold mb-3 uppercase tracking-widest text-xs">B) Selector rotatorio</h3>
                            <p className="text-sm text-slate-300">Selecciona función: V DC, V AC, medición Ampere o Resistencia (Ω).</p>
                        </div>
                        <div className="bg-black/40 p-5 rounded-2xl border border-white/5">
                            <h3 className="text-blue-300 font-bold mb-3 uppercase tracking-widest text-xs">C) Entradas (Bornes)</h3>
                            <ul className="text-xs font-mono text-slate-300 space-y-1">
                                <li><strong>COM</strong> → Común (Negro)</li>
                                <li><strong>VΩ</strong> → Volt. y Resist.</li>
                                <li><strong>A / mA</strong> → Corriente</li>
                            </ul>
                        </div>
                        <div className="bg-black/40 p-5 rounded-2xl border border-white/5">
                            <h3 className="text-blue-300 font-bold mb-3 uppercase tracking-widest text-xs">D) Puntas de Prueba</h3>
                            <div className="flex items-center gap-2 text-xs">
                                <div className="w-3 h-3 bg-black border border-white/20 rounded-full shrink-0"></div><span className="text-slate-300">Negra = Común (COM)</span>
                            </div>
                            <div className="flex items-center gap-2 mt-2 text-xs">
                                <div className="w-3 h-3 bg-red-500 border border-red-500/20 rounded-full shrink-0"></div><span className="text-slate-300">Roja = Medición Positiva</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Mediciones (Voltaje, Corriente, Resistencia, Continuidad) */}
            <section className="space-y-6">
                <div className="flex items-start gap-4 ml-4">
                    <span className="text-4xl font-black text-primary-500/20 leading-none">3.</span>
                    <h2 className="text-2xl font-bold text-white pt-1">Procedimientos de Medición</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Voltaje */}
                    <div className="bg-slate-900/80 p-6 rounded-3xl border-t-4 border-t-yellow-500 h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <Zap className="w-6 h-6 text-yellow-500" />
                            <h3 className="text-xl font-bold text-white">Medición de Voltaje</h3>
                        </div>
                        <p className="text-xs text-slate-400 mb-4 h-8">Diferencia de potencial eléctrico entre dos puntos.</p>
                        <ol className="list-decimal list-inside space-y-2 text-sm text-slate-300 mb-4 flex-grow">
                            <li>Conectar punta negra en <strong>COM</strong>.</li>
                            <li>Conectar punta roja en <strong>VΩ</strong>.</li>
                            <li>Seleccionar el selector en V DC o V AC.</li>
                            <li>Colocar puntas en <strong className="text-yellow-400">PARALELO</strong> al componente.</li>
                        </ol>
                        <div className="bg-black/40 p-3 rounded-lg border border-white/5 text-xs text-slate-400 italic mt-auto">
                            Ej: Medir batería de 12V tocando su borne (+) y (-).
                        </div>
                    </div>

                    {/* Corriente */}
                    <div className="bg-gradient-to-b from-red-900/30 to-slate-900/80 p-6 rounded-3xl border-t-4 border-t-red-500 h-full flex flex-col relative overflow-hidden">
                        <div className="flex items-center gap-3 mb-4 relative z-10">
                            <Activity className="w-6 h-6 text-red-500" />
                            <h3 className="text-xl font-bold text-white">Medición de Corriente</h3>
                        </div>
                        <p className="text-xs text-slate-400 mb-4 relative z-10 h-8">Flujo de carga eléctrica (electrones) por un conductor.</p>
                        <ol className="list-decimal list-inside space-y-2 text-sm text-slate-300 mb-4 relative z-10 flex-grow">
                            <li>Conectar punta negra en <strong>COM</strong>.</li>
                            <li>Conectar punta roja en <strong className="text-red-400">A o mA</strong>.</li>
                            <li>Seleccionar medición de corriente.</li>
                            <li><strong className="text-red-400">ABRIR</strong> el circuito eléctrico.</li>
                            <li>Conectar el multímetro en <strong className="text-red-400">SERIE</strong>.</li>
                        </ol>

                        <div className="bg-red-500/20 p-3 rounded-lg border border-red-500/40 text-xs text-red-200 mt-auto relative z-10 font-medium">
                            <AlertTriangle className="w-4 h-4 inline-block mr-1 mb-0.5" />
                            NUNCA medir en paralelo a una fuente. Causa cortocircuito o riesgo eléctrico.
                        </div>
                    </div>

                    {/* Resistencia */}
                    <div className="bg-slate-900/80 p-6 rounded-3xl border-t-4 border-t-orange-500 h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <Radio className="w-6 h-6 text-orange-500" />
                            <h3 className="text-xl font-bold text-white">Medición de Resistencia</h3>
                        </div>
                        <p className="text-xs text-slate-400 mb-4 h-8">Oposición de un material al paso de la corriente.</p>
                        <ol className="list-decimal list-inside space-y-2 text-sm text-slate-300 mb-4 flex-grow">
                            <li>Conectar punta negra en <strong>COM</strong>.</li>
                            <li>Conectar punta roja en <strong>VΩ</strong>.</li>
                            <li>Seleccionar medición <strong>Ω</strong> (Ohm).</li>
                            <li><strong className="text-orange-400">DESENERGIZAR</strong> el circuito por completo.</li>
                            <li>Colocar puntas en los extremos del componente.</li>
                        </ol>
                    </div>

                    {/* Continuidad */}
                    <div className="bg-slate-900/80 p-6 rounded-3xl border-t-4 border-t-green-500 h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <Volume2 className="w-6 h-6 text-green-500" />
                            <h3 className="text-xl font-bold text-white">Prueba de Continuidad</h3>
                        </div>
                        <p className="text-xs text-slate-400 mb-4 h-8">Verifica si existe un camino eléctrico cerrado.</p>

                        <div className="bg-green-500/10 p-4 rounded-xl mb-4 border border-green-500/20 flex-grow flex flex-col justify-center">
                            <p className="text-sm text-green-300 italic text-center mb-2">
                                "Si hay continuidad, el multímetro emite un pitido sonor (buzzer)."
                            </p>
                        </div>

                        <div className="bg-black/40 p-3 rounded-lg border border-white/5 text-xs text-slate-300 mt-auto grid grid-cols-2 gap-2">
                            <span>• Verificar cables</span>
                            <span>• Comprobar fusibles</span>
                            <span>• Detectar cortes</span>
                            <span>• Revisar conexiones</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Seguridad */}
            <section className="bg-gradient-to-r from-red-900/40 to-slate-900/80 p-[1px] rounded-3xl shadow-xl shadow-red-500/10 mt-12">
                <div className="bg-slate-950 rounded-[23px] p-8 md:p-10 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center h-full">

                    <div className="flex-1 space-y-6 relative z-10 w-full">
                        <div className="flex items-center gap-3 border-b border-red-500/30 pb-4">
                            <ShieldCheck className="w-8 h-8 text-red-500" />
                            <h2 className="text-2xl font-bold text-white">Reglas Básicas de Seguridad</h2>
                        </div>

                        <ul className="space-y-4 text-sm text-slate-300">
                            <li className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-red-500/30 transition-colors">
                                <div className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</div>
                                <div><strong className="text-white block">Selección previa:</strong> Verificar siempre que el selector rotatorio esté en la función y rango correcto antes de medir.</div>
                            </li>
                            <li className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-red-500/30 transition-colors">
                                <div className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</div>
                                <div><strong className="text-white block">Desenergizar para Ω:</strong> Nunca medir resistencia en circuitos con energía. Daña el equipo.</div>
                            </li>
                            <li className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-red-500/30 transition-colors">
                                <div className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</div>
                                <div><strong className="text-white block">Conexión de Bornes:</strong> Confirmar que las puntas estén en el agujero correcto (Ej. No dejar el rojo en Amper si vas a medir Voltaje).</div>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 space-y-4 bg-black/60 p-6 md:p-8 rounded-2xl border border-white/10 w-full relative z-10 shadow-inner h-full flex flex-col justify-center">
                        <h3 className="text-primary-400 font-bold text-lg uppercase tracking-widest flex items-center gap-2 mb-2">
                            <Power className="w-6 h-6" /> Práctica Profesional
                        </h3>
                        <p className="text-sm text-slate-300 leading-relaxed italic border-l-4 border-primary-500 pl-4 py-2 bg-primary-900/20 rounded-r-xl">
                            Todo técnico electricista debe dominar el multímetro, ya que es fundamental para el <strong className="text-white">diagnóstico de fallas, mantenimiento y comprobación diaria</strong> de circuitos electrónicos.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default UsoMultimetroView;
