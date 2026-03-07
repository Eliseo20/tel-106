import React from 'react';
import { ArrowLeft, ShieldAlert, CheckCircle2, Search, SlidersHorizontal, Settings2, Plug, Zap, AlertTriangle, AlertCircle, PackageCheck, Verified } from 'lucide-react';

const NormasInstrumentosView = ({ onBack }) => {
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
                        Normas de Buen Uso
                    </h1>
                </div>
            </div>

            {/* Intro */}
            <section className="glass-morphism rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
                    <ShieldAlert className="w-80 h-80 text-primary-500" />
                </div>

                <div className="relative z-10 max-w-4xl space-y-6">
                    <p className="text-slate-300 text-lg">
                        Los instrumentos de medición son herramientas fundamentales para analizar circuitos, verificar equipos y detectar fallas.
                        El uso correcto no solo permite mediciones precisas, sino que <strong className="text-white">evita daños, errores y riesgos</strong>.
                    </p>

                    <div className="bg-black/40 p-5 rounded-2xl border border-white/5 space-y-3">
                        <h3 className="text-primary-300 font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                            <Verified className="w-4 h-4" /> El uso adecuado permite:
                        </h3>
                        <ul className="text-sm text-white grid grid-cols-1 md:grid-cols-2 gap-3">
                            <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center shrink-0"><CheckCircle2 className="w-3 h-3" /></div> Obtener mediciones confiables</li>
                            <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center shrink-0"><CheckCircle2 className="w-3 h-3" /></div> Evitar daños en los equipos</li>
                            <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center shrink-0"><CheckCircle2 className="w-3 h-3" /></div> Prevenir accidentes eléctricos</li>
                            <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center shrink-0"><CheckCircle2 className="w-3 h-3" /></div> Prolongar vida útil</li>
                            <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center shrink-0"><CheckCircle2 className="w-3 h-3" /></div> Desarrollar hábitos profesionales</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Normas Principales (Grid Cards) */}
            <section className="space-y-6">
                <div className="flex items-start gap-4 ml-4">
                    <span className="text-4xl font-black text-primary-500/20 leading-none">1.</span>
                    <h2 className="text-2xl font-bold text-white pt-1">Reglas de Operación Segura</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* 1. Verificación */}
                    <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 hover:border-primary-500/50 transition-all flex flex-col">
                        <div className="flex items-center gap-3 mb-4 text-primary-400">
                            <Search className="w-6 h-6" />
                            <h3 className="font-bold text-white">Verificación Previa</h3>
                        </div>
                        <p className="text-xs text-slate-400 mb-4 h-12">Revisión básica del estado general del instrumento antes de cualquier uso.</p>
                        <div className="bg-black/40 p-3 rounded-lg border border-white/5 space-y-2 text-xs text-slate-300 mt-auto">
                            <p>• Sin daños visibles</p>
                            <p>• Puntas de prueba en buen estado</p>
                            <p>• Cables sin cortes o desgaste</p>
                            <p>• Batería con carga suficiente</p>
                        </div>
                    </div>

                    {/* 2. Seleccionar Función */}
                    <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 hover:border-primary-500/50 transition-all flex flex-col">
                        <div className="flex items-center gap-3 mb-4 text-primary-400">
                            <Settings2 className="w-6 h-6" />
                            <h3 className="font-bold text-white">Selector de Función</h3>
                        </div>
                        <p className="text-xs text-slate-400 mb-4 h-12">Confirmar que la perilla esté en V, A, Ω o Continuidad correcta.</p>
                        <div className="bg-red-500/10 p-3 rounded-lg border border-red-500/20 space-y-2 text-xs text-red-200 mt-auto">
                            <AlertTriangle className="w-4 h-4 inline-block mr-1 mb-0.5" />
                            Seleccionar una función incorrecta puede provocar daños internos graves o errores de medición.
                        </div>
                    </div>

                    {/* 3. Seleccionar Rango */}
                    <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 hover:border-primary-500/50 transition-all flex flex-col">
                        <div className="flex items-center gap-3 mb-4 text-primary-400">
                            <SlidersHorizontal className="w-6 h-6" />
                            <h3 className="font-bold text-white">Rango de Medición</h3>
                        </div>
                        <p className="text-xs text-slate-400 mb-4 h-12">Si no tiene Rango Automático (Autorange), se debe seleccionar manualmente.</p>
                        <div className="bg-primary-900/20 p-3 rounded-lg border border-primary-500/20 space-y-2 text-xs text-primary-200 mt-auto">
                            <strong className="block text-primary-400 uppercase tracking-widest text-[10px] mb-1">Regla de Oro:</strong>
                            Comenzar con el rango más alto e ir bajando progresivamente para proteger contra sobrecargas.
                        </div>
                    </div>

                    {/* 4. Conexión de puntas */}
                    <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 hover:border-primary-500/50 transition-all flex flex-col">
                        <div className="flex items-center gap-3 mb-4 text-primary-400">
                            <Plug className="w-6 h-6" />
                            <h3 className="font-bold text-white">Conexión de Puntas</h3>
                        </div>
                        <p className="text-xs text-slate-400 mb-4 h-12">Las puntas deben conectarse en los bornes (entradas) correctos.</p>
                        <ul className="bg-black/40 p-3 rounded-lg border border-white/5 space-y-2 text-xs font-mono text-slate-300 mt-auto">
                            <li><span className="text-white">COM</span> → Negro (Común)</li>
                            <li><span className="text-white">VΩ</span> → Voltaje / Resist.</li>
                            <li><span className="text-white">A/mA</span> → Corriente</li>
                        </ul>
                    </div>

                    {/* 5. Circuito Energizado */}
                    <div className="bg-gradient-to-br from-red-900/20 to-slate-900/60 p-6 rounded-3xl border border-red-500/20 hover:border-red-500/50 transition-all flex flex-col lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4 text-red-500">
                            <Zap className="w-6 h-6" />
                            <h3 className="font-bold text-white">Peligro: Circuitos Energizados</h3>
                        </div>
                        <p className="text-sm text-slate-300 mb-4">
                            Ciertas mediciones <strong className="text-white">jamás</strong> deben realizarse si el circuito tiene energía fluyendo:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
                            <div className="bg-black/40 p-4 rounded-xl border border-white/5 text-sm font-bold text-center text-orange-400">
                                Medición de Resistencia (Ω)
                            </div>
                            <div className="bg-black/40 p-4 rounded-xl border border-white/5 text-sm font-bold text-center text-green-400">
                                Prueba de Continuidad
                            </div>
                        </div>

                        <div className="mt-4 text-xs text-red-300 italic">
                            Consecuencias: Lecturas erróneas, daño catastrófico al instrumento, grave riesgo eléctrico para la persona.
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Conexiones Serie vs Paralelo & Límites */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Serie vs Paralelo */}
                <section className="bg-gradient-to-r from-primary-600 to-primary-800 p-[1px] rounded-3xl shadow-xl shadow-primary-500/10">
                    <div className="bg-slate-950 rounded-[23px] p-8 h-full">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                            <Plug className="w-5 h-5 text-primary-400" /> Conexión en el Circuito
                        </h2>
                        <p className="text-sm text-slate-300 mb-6">
                            Dependiendo del tipo de medición, el multímetro debe formar parte del circuito de una forma vital y específica.
                        </p>

                        <div className="space-y-4">
                            <div className="bg-black/40 p-4 rounded-xl border-l-4 border-yellow-500 flex justify-between items-center group">
                                <span className="text-white font-bold group-hover:text-yellow-400 transition-colors">Medición de Voltaje (V)</span>
                                <span className="bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 px-3 py-1 rounded text-xs font-mono font-bold uppercase tracking-widest">En Paralelo</span>
                            </div>
                            <div className="bg-black/40 p-4 rounded-xl border-l-4 border-red-500 flex justify-between items-center group">
                                <span className="text-white font-bold group-hover:text-red-400 transition-colors">Medición de Corriente (A)</span>
                                <span className="bg-red-500/20 text-red-300 border border-red-500/30 px-3 py-1 rounded text-xs font-mono font-bold uppercase tracking-widest">En Serie</span>
                            </div>
                        </div>

                        <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/20 mt-6 text-sm text-red-200 flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                            <p>Realizar una conexión <strong className="text-white">incorrecta</strong> (ej: medir corriente cruzando los cables en paralelo) genera cortocircuitos severos.</p>
                        </div>
                    </div>
                </section>

                {/* Límites de Equipo y Manejo Seguro */}
                <section className="space-y-6">
                    <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 h-full space-y-6 flex flex-col justify-between">

                        <div>
                            <h2 className="text-xl font-bold text-white mb-4">Límites del Instrumento</h2>
                            <p className="text-sm text-slate-300">
                                Todos tienen límites máximos permitidos por el fabricante. Excederlos provoca sobrecalentamiento, destrucción del equipo y riesgos eléctricos.
                            </p>
                        </div>

                        <div className="bg-black/40 p-5 rounded-2xl border border-white/5 space-y-4">
                            <h3 className="text-primary-300 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                                <ShieldAlert className="w-4 h-4" /> Manipulación Segura
                            </h3>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> No tocar las partes metálicas de las puntas</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Sostener las puntas solo por la zona aislada</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Evitar áreas o ambientes húmedos</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Manos secas en todo momento</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            {/* 3. Cuidado y Almacenamiento */}
            <section className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 flex flex-col md:flex-row gap-8 items-center mt-12">
                <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                        <PackageCheck className="w-6 h-6 text-green-400" />
                        Cuidado y Almacenaje
                    </h2>
                    <p className="text-sm text-slate-300">Un buen cuidado permite prolongar la vida útil y mantener intacta su precisión.</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Apagar el equipo ('OFF')</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Desconectar ambas puntas</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Guardar en su estuche/caja</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Evitar golpes y caídas</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Lejos de humedad y polvo</li>
                    </ul>
                </div>

                <div className="w-full md:w-1/3 bg-black/40 p-6 rounded-2xl border-l-4 border-l-primary-500 border-y border-r border-white/5">
                    <span className="block text-primary-400 font-bold uppercase tracking-widest text-xs mb-2">Conclusión</span>
                    <p className="text-sm text-slate-300 italic">
                        Estas normas desarrollan hábitos seguros, disciplina manual y responsabilidad profesional. El dominio es clave para cualquier instalación y mantenimiento.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default NormasInstrumentosView;
