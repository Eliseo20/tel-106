import React from 'react';
import { ArrowLeft, Settings, BookOpen, Layers, Edit3, Type, HelpCircle, Laptop, Grid, Target, Search, Image as ImageIcon } from 'lucide-react';

const ImagePlaceholder = ({ title, height = "h-48" }) => (
    <div className={`w-full ${height} bg-slate-900/60 border-2 border-dashed border-primary-500/30 rounded-2xl flex flex-col items-center justify-center text-slate-500 hover:border-primary-500/60 hover:text-primary-400 hover:bg-slate-900/80 transition-all cursor-pointer group mt-6 mb-4`}>
        <ImageIcon className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
        <p className="text-sm font-medium uppercase tracking-widest text-center px-4">{title}</p>
        <p className="text-xs mt-1 opacity-60 flex items-center gap-1"><Search className="w-3 h-3" /> Buscar y colocar aquí</p>
    </div>
);

const DisenoCircuitosView = ({ onBack }) => {
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
                        Diseño y Modelado
                    </h1>
                </div>
            </div>

            {/* 1. Introducción al Diseño y Modelado */}
            <section className="glass-morphism rounded-3xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="flex-1 space-y-6">
                        <div className="flex items-start gap-4 mb-4">
                            <span className="text-5xl font-black text-primary-500/20 leading-none">1.</span>
                            <div>
                                <h2 className="text-2xl font-bold text-white pt-1">Introducción</h2>
                                <p className="text-slate-300 mt-2 text-lg">
                                    Consiste en planificar, representar y analizar un circuito eléctrico <strong className="text-white">antes de construirlo físicamente</strong>.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-primary-500/10 p-5 rounded-2xl border border-primary-500/20">
                                <h3 className="text-primary-400 font-bold text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <Target className="w-4 h-4" /> Este proceso permite:
                                </h3>
                                <ul className="text-sm text-slate-300 space-y-2 list-disc list-inside">
                                    <li>Comprender el funcionamiento</li>
                                    <li>Predecir el comportamiento</li>
                                    <li>Calcular voltajes y corrientes</li>
                                    <li>Evitar errores antes de implementar</li>
                                </ul>
                            </div>
                            <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                                <h3 className="text-slate-400 font-bold text-sm uppercase tracking-widest mb-3">
                                    Práctica fundamental en:
                                </h3>
                                <ul className="text-sm text-slate-300 space-y-2">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div> Ingeniería eléctrica</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div> Electrónica</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div> Automatización</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div> Diseño de dispositivos</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2 y 3. Diseño vs Modelado */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 2. Diseño */}
                <section className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 space-y-6 flex flex-col">
                    <div className="flex items-start gap-4">
                        <span className="text-4xl font-black text-primary-500/20 leading-none">2.</span>
                        <h2 className="text-xl font-bold text-white pt-1">¿Qué es el diseño?</h2>
                    </div>
                    <p className="text-slate-300 text-sm">Proceso de <strong className="text-white">seleccionar y conectar componentes</strong> eléctricos para cumplir una función específica.</p>

                    <div className="bg-black/30 p-4 rounded-xl border border-white/5 flex-grow">
                        <h4 className="text-primary-400 font-bold text-xs uppercase tracking-widest mb-2">Ejemplos de funciones</h4>
                        <div className="flex flex-wrap gap-2 text-xs">
                            <span className="bg-white/5 px-2 py-1 rounded">Encender lámpara</span>
                            <span className="bg-white/5 px-2 py-1 rounded">Controlar motor</span>
                            <span className="bg-white/5 px-2 py-1 rounded">Alimentar sistema</span>
                            <span className="bg-white/5 px-2 py-1 rounded">Dividir voltajes</span>
                            <span className="bg-white/5 px-2 py-1 rounded">Limitar corriente</span>
                        </div>
                    </div>

                    <div className="text-sm text-slate-400 space-y-1">
                        <p className="text-white font-bold mb-2">Consideraciones clave:</p>
                        <p>✓ Voltaje de alimentación</p>
                        <p>✓ Consumo de corriente</p>
                        <p>✓ Potencia de los componentes</p>
                        <p>✓ Seguridad del sistema</p>
                    </div>
                </section>

                {/* 3. Modelado */}
                <section className="bg-gradient-to-br from-primary-900/30 to-transparent p-8 rounded-3xl border border-primary-500/20 space-y-6 flex flex-col">
                    <div className="flex items-start gap-4">
                        <span className="text-4xl font-black text-primary-500/20 leading-none">3.</span>
                        <h2 className="text-xl font-bold text-white pt-1">¿Qué es el modelado?</h2>
                    </div>
                    <p className="text-slate-300 text-sm">Consiste en representar <strong className="text-white">matemáticamente o gráficamente</strong> un circuito para analizar su comportamiento.</p>

                    <div className="bg-black/30 p-4 rounded-xl border border-white/5 flex-grow flex flex-col justify-center">
                        <p className="text-slate-400 text-sm mb-3 text-center">En lugar de trabajar con el circuito físico, se utilizan:</p>
                        <div className="space-y-2">
                            <div className="bg-primary-500/10 p-3 rounded-lg flex items-center gap-3 border border-primary-500/20">
                                <Edit3 className="w-5 h-5 text-primary-400" />
                                <span className="text-white text-sm font-medium">Diagramas esquemáticos</span>
                            </div>
                            <div className="bg-primary-500/10 p-3 rounded-lg flex items-center gap-3 border border-primary-500/20">
                                <Type className="w-5 h-5 text-primary-400" />
                                <span className="text-white text-sm font-medium">Ecuaciones matemáticas</span>
                            </div>
                            <div className="bg-primary-500/10 p-3 rounded-lg flex items-center gap-3 border border-primary-500/20">
                                <Laptop className="w-5 h-5 text-primary-400" />
                                <span className="text-white text-sm font-medium">Simulaciones (PC)</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* 4. Diagramas esquemáticos */}
            <section className="glass-morphism p-8 md:p-12 rounded-3xl">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/2">
                        <div className="flex items-start gap-4 mb-4">
                            <span className="text-5xl font-black text-primary-500/20 leading-none">4.</span>
                            <div>
                                <h2 className="text-2xl font-bold text-white pt-1">Diagramas esquemáticos</h2>
                                <p className="text-slate-300 mt-2 text-lg">
                                    Representación gráfica utilizando <strong className="text-white">símbolos estándar</strong>.
                                </p>
                            </div>
                        </div>
                        <ul className="text-slate-400 space-y-2 mb-6 ml-16 list-disc">
                            <li>Componentes eléctricos</li>
                            <li>Conexiones entre ellos</li>
                            <li>Fuente de alimentación</li>
                        </ul>
                        <div className="bg-primary-500/10 text-primary-300 p-4 rounded-xl text-sm border border-primary-500/20 text-center">
                            No representa la forma física del circuito, sino la relación eléctrica.
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <ImagePlaceholder title="Electronic schematic diagram simple circuit" height="h-64" />
                        <p className="text-xs text-slate-500 text-center mt-2">Debe mostrar: batería, resistencia, interruptor y cables.</p>
                    </div>
                </div>
            </section>

            {/* 5, 6, 7. Análisis Topológico (Nodos, Ramas, Mallas) */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-center text-white mb-8 border-b border-white/10 pb-4">Topología del Circuito</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Nodos */}
                    <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 shadow-lg relative overflow-hidden flex flex-col">
                        <div className="absolute top-0 right-0 p-4 opacity-5"><Target className="w-24 h-24" /></div>
                        <div className="flex items-start gap-3 mb-4">
                            <span className="text-3xl font-black text-primary-500/30 leading-none">5.</span>
                            <h3 className="text-xl font-bold text-white">Nodos</h3>
                        </div>
                        <p className="text-sm text-slate-300 mb-4 font-medium flex-grow">
                            Punto donde se conectan <strong className="text-white">dos o más conductores</strong> (ramas).
                        </p>
                        <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                            <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-2">Importancia:</h4>
                            <ul className="text-xs text-slate-400 space-y-1">
                                <li>• Puntos con igual potencial</li>
                                <li>• Ley de Corrientes de Kirchhoff</li>
                            </ul>
                        </div>
                        <ImagePlaceholder title="Electrical circuit nodes labeled" height="h-32" />
                    </div>

                    {/* Ramas */}
                    <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 shadow-lg relative overflow-hidden flex flex-col">
                        <div className="absolute top-0 right-0 p-4 opacity-5"><Layers className="w-24 h-24" /></div>
                        <div className="flex items-start gap-3 mb-4">
                            <span className="text-3xl font-black text-primary-500/30 leading-none">6.</span>
                            <h3 className="text-xl font-bold text-white">Ramas</h3>
                        </div>
                        <p className="text-sm text-slate-300 mb-4 font-medium flex-grow">
                            Sección que conecta dos nodos y que contiene <strong className="text-white">uno o más componentes</strong>.
                        </p>
                        <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                            <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-2">Ejemplos:</h4>
                            <ul className="text-xs text-slate-400 space-y-1">
                                <li>• Resistencia entre nodos</li>
                                <li>• Fuente entre nodos</li>
                            </ul>
                        </div>
                        <div className="h-32 mt-6 border-2 border-dashed border-white/10 rounded-2xl flex items-center justify-center text-slate-600 text-sm italic">
                            (Concepto de conexión directa)
                        </div>
                    </div>

                    {/* Mallas */}
                    <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 shadow-lg relative overflow-hidden flex flex-col">
                        <div className="absolute top-0 right-0 p-4 opacity-5"><Grid className="w-24 h-24" /></div>
                        <div className="flex items-start gap-3 mb-4">
                            <span className="text-3xl font-black text-primary-500/30 leading-none">7.</span>
                            <h3 className="text-xl font-bold text-white">Mallas</h3>
                        </div>
                        <p className="text-sm text-slate-300 mb-4 font-medium flex-grow">
                            Camino <strong className="text-white">cerrado</strong> dentro de un circuito. No pasa dos veces por el mismo elemento.
                        </p>
                        <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                            <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-2">Importancia:</h4>
                            <ul className="text-xs text-slate-400 space-y-1">
                                <li>• Ley de Voltajes de Kirchhoff</li>
                            </ul>
                        </div>
                        <ImagePlaceholder title="Mesh loop circuit diagram" height="h-32" />
                    </div>
                </div>
            </section>

            {/* 8. Simplificación de circuitos */}
            <section className="bg-gradient-to-br from-slate-800 to-slate-950 rounded-3xl p-8 md:p-12 border border-white/5">
                <div className="flex items-start gap-4 mb-8">
                    <span className="text-5xl font-black text-primary-500/20 leading-none">8.</span>
                    <div>
                        <h2 className="text-2xl font-bold text-white pt-1">Simplificación de circuitos</h2>
                        <p className="text-slate-300 mt-2 text-lg">
                            Antes de analizar, reducimos circuitos complejos mediante el uso de <strong className="text-white">resistencias equivalentes</strong>.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* RS Serie */}
                    <div className="bg-black/40 p-6 rounded-3xl border border-white/5 text-center">
                        <h3 className="text-primary-400 font-bold mb-4 uppercase tracking-widest text-sm">Resistencias en Serie</h3>
                        <p className="text-slate-300 text-sm mb-6">Conectadas una después de otra.</p>

                        <div className="bg-primary-500/10 py-4 px-6 rounded-xl border border-primary-500/20 font-serif italic text-2xl text-white mb-6">
                            R<sub>eq</sub> = R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub>
                        </div>

                        <ul className="text-xs text-slate-400 space-y-2 text-left bg-white/5 p-4 rounded-xl">
                            <li>✓ <strong className="text-white">Corriente:</strong> Igual en todas</li>
                            <li>✓ <strong className="text-white">Voltaje:</strong> Se divide entre ellas</li>
                        </ul>
                    </div>

                    {/* RS Paralelo */}
                    <div className="bg-black/40 p-6 rounded-3xl border border-white/5 text-center">
                        <h3 className="text-blue-400 font-bold mb-4 uppercase tracking-widest text-sm">Resistencias en Paralelo</h3>
                        <p className="text-slate-300 text-sm mb-6">Comparten los mismos dos nodos.</p>

                        <div className="bg-blue-500/10 py-4 px-6 rounded-xl border border-blue-500/20 font-serif italic text-2xl text-white mb-6">
                            <sup>1</sup>/<sub>R<sub>eq</sub></sub> = <sup>1</sup>/<sub>R<sub>1</sub></sub> + <sup>1</sup>/<sub>R<sub>2</sub></sub> + <sup>1</sup>/<sub>R<sub>3</sub></sub>
                        </div>

                        <ul className="text-xs text-slate-400 space-y-2 text-left bg-white/5 p-4 rounded-xl">
                            <li>✓ <strong className="text-white">Voltaje:</strong> Igual en todas las ramas</li>
                            <li>✓ <strong className="text-white">Corriente:</strong> Se divide entre ellas</li>
                        </ul>
                    </div>
                </div>

                <ImagePlaceholder title="Series vs parallel resistors diagram" height="h-64" />
                <p className="text-xs text-slate-500 text-center mt-2">La imagen debería comparar ambos tipos de conexión con fórmulas visuales.</p>
            </section>

            {/* 9 y 10. Software e Importancia */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 9. Software */}
                <section className="glass-morphism rounded-3xl p-8 relative overflow-hidden">
                    <div className="flex items-start gap-4 mb-4">
                        <span className="text-4xl font-black text-primary-500/20 leading-none">9.</span>
                        <h2 className="text-xl font-bold text-white pt-1">Software de Simulación</h2>
                    </div>
                    <p className="text-slate-300 text-sm mb-6">Programas para dibujar, simular y medir sin construir físicamente.</p>

                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-white/10 px-4 py-2 rounded-xl text-white font-bold font-mono text-sm border border-white/5 shadow-lg">LTspice</span>
                        <span className="bg-white/10 px-4 py-2 rounded-xl text-white font-bold font-mono text-sm border border-white/5 shadow-lg">Multisim</span>
                        <span className="bg-white/10 px-4 py-2 rounded-xl text-white font-bold font-mono text-sm border border-white/5 shadow-lg">Proteus</span>
                        <span className="bg-white/10 px-4 py-2 rounded-xl text-white font-bold font-mono text-sm border border-white/5 shadow-lg">Tinkercad</span>
                    </div>

                    <ImagePlaceholder title="Electronic circuit simulation software interface" height="h-40" />
                </section>

                {/* 10. Importancia General */}
                <section className="bg-gradient-to-t from-primary-900 p-[1px] rounded-3xl shadow-2xl shadow-primary-500/20">
                    <div className="bg-slate-950 rounded-[23px] p-8 h-full flex flex-col justify-center">
                        <div className="flex items-start gap-4 mb-6">
                            <span className="text-4xl font-black text-primary-500/20 leading-none">10.</span>
                            <h2 className="text-xl font-bold text-white pt-1">Importancia Global</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                <ul className="text-sm text-slate-300 space-y-2">
                                    <li className="flex items-center gap-2 text-white">★ Comprender sistemas</li>
                                    <li className="flex items-center gap-2 text-white">★ Evitar errores destructivos</li>
                                    <li className="flex items-center gap-2 text-white">★ Optimizar funcionamientos</li>
                                    <li className="flex items-center gap-2 text-white">★ Mejorar seguridad</li>
                                </ul>
                            </div>

                            <div>
                                <p className="text-primary-400 text-xs font-bold uppercase tracking-widest mb-3">Bases fundamentales para:</p>
                                <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
                                    <div className="bg-black/50 p-2 rounded text-center">Ley de Ohm</div>
                                    <div className="bg-black/50 p-2 rounded text-center">Kirchhoff</div>
                                    <div className="bg-black/50 p-2 rounded text-center">Análisis Eléc.</div>
                                    <div className="bg-black/50 p-2 rounded text-center">Electrónica</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default DisenoCircuitosView;
