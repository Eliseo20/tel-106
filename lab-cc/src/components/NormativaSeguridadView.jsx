import React from 'react';
import { ArrowLeft, ShieldCheck, AlertOctagon, FileCheck, Search, Image as ImageIcon, Flame, Zap, HardHat, FileText, Globe } from 'lucide-react';

const ImagePlaceholder = ({ title, height = "h-48" }) => (
    <div className={`w-full ${height} bg-slate-900/60 border-2 border-dashed border-primary-500/30 rounded-2xl flex flex-col items-center justify-center text-slate-500 hover:border-primary-500/60 hover:text-primary-400 hover:bg-slate-900/80 transition-all cursor-pointer group mt-6 mb-4 relative overflow-hidden`}>
        <ImageIcon className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform relative z-10" />
        <p className="text-sm font-medium uppercase tracking-widest text-center px-4 relative z-10">{title}</p>
        <p className="text-xs mt-1 opacity-60 flex items-center gap-1 relative z-10"><Search className="w-3 h-3" /> Buscar imagen</p>
        <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
);

const NormativaSeguridadView = ({ onBack }) => {
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
                        Normativa de Seguridad
                    </h1>
                </div>
            </div>

            {/* 1. Importancia de la normativa */}
            <section className="glass-morphism rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 opacity-5 pointer-events-none">
                    <ShieldCheck className="w-80 h-80 text-primary-500" />
                </div>

                <div className="flex flex-col md:flex-row gap-10 relative z-10">
                    <div className="flex-1 space-y-6">
                        <div className="flex items-start gap-4">
                            <span className="text-5xl font-black text-primary-500/20 leading-none">1.</span>
                            <div>
                                <h2 className="text-2xl font-bold text-white pt-1">Importancia de la Normativa Eléctrica</h2>
                                <p className="text-slate-300 mt-2 text-lg">
                                    El trabajo con electricidad implica <strong className="text-white">riesgos importantes</strong> para las personas, las instalaciones y los equipos.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                            <div className="bg-black/30 p-5 rounded-2xl border border-white/5 space-y-3">
                                <h3 className="text-primary-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                    <FileCheck className="w-4 h-4" /> Estas normativas establecen:
                                </h3>
                                <ul className="text-sm text-slate-300 space-y-2">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div> Requisitos mínimos de seguridad</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div> Métodos de instalación</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div> Características de materiales</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div> Sistemas de protección eléctrica</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div> Procedimientos de certificación</li>
                                </ul>
                            </div>

                            <div className="bg-primary-900/20 p-5 rounded-2xl border border-primary-500/20 space-y-3">
                                <h3 className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                    <Target className="w-4 h-4" /> El objetivo principal es:
                                </h3>
                                <ul className="text-sm text-slate-300 space-y-2">
                                    <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-400" /> Proteger la vida de las personas</li>
                                    <li className="flex items-center gap-2"><Flame className="w-4 h-4 text-red-400" /> Prevenir incendios</li>
                                    <li className="flex items-center gap-2"><AlertOctagon className="w-4 h-4 text-orange-400" /> Evitar fallas eléctricas</li>
                                    <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-yellow-400" /> Garantizar instalaciones confiables</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-sm text-slate-300 italic text-center">
                            Las normativas eléctricas aplican tanto a circuitos de <strong className="text-primary-300">corriente alterna (AC)</strong> como a circuitos de <strong className="text-primary-300">corriente continua (DC)</strong>.
                        </div>
                    </div>
                </div>
            </section>

            {/* 2 y 3. Normativa en Chile y Reglamento */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 2. Normativa en Chile */}
                <section className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10"><FileText className="w-24 h-24" /></div>
                    <div className="flex items-start gap-4">
                        <span className="text-4xl font-black text-primary-500/20 leading-none">2.</span>
                        <h2 className="text-xl font-bold text-white pt-1">Normativa eléctrica en Chile</h2>
                    </div>

                    <div className="bg-blue-600/20 border border-blue-500/30 p-4 rounded-xl text-center">
                        <p className="text-slate-300 text-sm mb-1">Regulación a cargo de la:</p>
                        <h3 className="text-white font-bold text-lg">Superintendencia de Electricidad y Combustibles (SEC)</h3>
                    </div>

                    <div className="space-y-3">
                        <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">Responsabilidades:</p>
                        <div className="grid grid-cols-2 gap-3 text-sm text-slate-300">
                            <div className="bg-black/30 p-3 rounded-lg text-center border border-white/5">Fiscalizar instalaciones</div>
                            <div className="bg-black/30 p-3 rounded-lg text-center border border-white/5">Verificar cumplimiento</div>
                            <div className="bg-black/30 p-3 rounded-lg text-center border border-white/5">Certificar instalaciones</div>
                            <div className="bg-red-500/10 text-red-400 p-3 rounded-lg text-center border border-red-500/20">Sancionar incumplimientos</div>
                        </div>
                    </div>
                </section>

                {/* 3. Reglamento de Seguridad */}
                <section className="bg-gradient-to-br from-primary-900/30 to-transparent p-8 rounded-3xl border border-primary-500/20 space-y-6">
                    <div className="flex items-start gap-4">
                        <span className="text-4xl font-black text-primary-500/20 leading-none">3.</span>
                        <h2 className="text-xl font-bold text-white pt-1">Reglamento de Seguridad</h2>
                    </div>

                    <div className="bg-primary-500/10 border border-primary-500/30 p-4 rounded-xl text-center">
                        <p className="text-primary-300 text-sm mb-1">Normativa principal:</p>
                        <h3 className="text-white font-bold text-base">Reglamento de Seguridad de las Instalaciones de Consumo de Energía Eléctrica</h3>
                    </div>

                    <p className="text-slate-300 text-sm">Establece las exigencias mínimas que deben considerarse en:</p>

                    <div className="flex flex-wrap gap-2 text-xs font-bold text-white uppercase tracking-wider">
                        <span className="bg-white/10 px-3 py-1.5 rounded-full">Diseño</span>
                        <span className="bg-white/10 px-3 py-1.5 rounded-full">Construcción</span>
                        <span className="bg-white/10 px-3 py-1.5 rounded-full">Puesta en servicio</span>
                        <span className="bg-white/10 px-3 py-1.5 rounded-full">Operación</span>
                        <span className="bg-white/10 px-3 py-1.5 rounded-full">Mantenimiento</span>
                    </div>

                    <div className="mt-auto bg-black/30 p-3 rounded-xl border border-white/5 text-xs text-slate-400 italic text-center">
                        * Este reglamento reemplazó a la antigua norma NCh Elec. 4/2003 – Instalaciones de Baja Tensión.
                    </div>
                </section>
            </div>

            {/* 4. Pliegos Técnicos RIC */}
            <section className="space-y-6">
                <div className="bg-slate-900/80 rounded-3xl p-8 border border-white/5">
                    <div className="flex items-start gap-4 mb-6">
                        <span className="text-4xl font-black text-primary-500/20 leading-none">4.</span>
                        <div>
                            <h2 className="text-2xl font-bold text-white pt-1">Pliegos Técnicos Normativos (RIC)</h2>
                            <p className="text-slate-400 text-sm mt-1">Actualmente existen 19 pliegos técnicos que regulan diferentes áreas.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-black/40 p-5 rounded-2xl border border-white/5 hover:border-primary-500/50 transition-colors group">
                            <h4 className="text-primary-400 font-bold mb-2 flex items-center gap-2"><span className="bg-primary-500/20 text-primary-300 px-2 py-0.5 rounded text-xs">RIC 01</span> Empalmes</h4>
                            <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">Condiciones técnicas para la conexión de una instalación eléctrica a la red de distribución.</p>
                        </div>

                        <div className="bg-black/40 p-5 rounded-2xl border border-white/5 hover:border-primary-500/50 transition-colors group">
                            <h4 className="text-primary-400 font-bold mb-2 flex items-center gap-2"><span className="bg-primary-500/20 text-primary-300 px-2 py-0.5 rounded text-xs">RIC 02</span> Tableros</h4>
                            <p className="text-xs text-slate-400 mb-2">Requisitos de seguridad para tableros eléctricos. Incluye:</p>
                            <ul className="text-xs text-slate-500 list-disc list-inside">
                                <li>Protecciones</li>
                                <li>Distribución de circuitos</li>
                                <li>Identificación</li>
                            </ul>
                        </div>

                        <div className="bg-black/40 p-5 rounded-2xl border border-white/5 hover:border-primary-500/50 transition-colors group">
                            <h4 className="text-primary-400 font-bold mb-2 flex items-center gap-2"><span className="bg-primary-500/20 text-primary-300 px-2 py-0.5 rounded text-xs">RIC 03</span> Protecciones</h4>
                            <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">Regula dispositivos de protección (interruptores automáticos y diferenciales).</p>
                        </div>

                        <div className="bg-black/40 p-5 rounded-2xl border border-white/5 hover:border-primary-500/50 transition-colors group">
                            <h4 className="text-primary-400 font-bold mb-2 flex items-center gap-2"><span className="bg-primary-500/20 text-primary-300 px-2 py-0.5 rounded text-xs">RIC 04</span> Conductores</h4>
                            <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">Define tipos de cables permitidos, métodos de instalación y canalizaciones.</p>
                        </div>

                        <div className="bg-black/40 p-5 rounded-2xl border border-white/5 hover:border-primary-500/50 transition-colors group">
                            <h4 className="text-primary-400 font-bold mb-2 flex items-center gap-2"><span className="bg-primary-500/20 text-primary-300 px-2 py-0.5 rounded text-xs">RIC 06</span> Puesta a tierra</h4>
                            <p className="text-xs text-slate-400 mb-2">Fundamentales para:</p>
                            <ul className="text-xs text-slate-500 list-disc list-inside">
                                <li>Seguridad eléctrica</li>
                                <li>Protección contra fallas</li>
                                <li>Disipación de corrientes</li>
                            </ul>
                        </div>

                        <div className="bg-black/40 p-5 rounded-2xl border border-white/5 hover:border-primary-500/50 transition-colors group">
                            <h4 className="text-primary-400 font-bold mb-2 flex items-center gap-2"><span className="bg-primary-500/20 text-primary-300 px-2 py-0.5 rounded text-xs">RIC 09</span> Instalaciones</h4>
                            <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">Requisitos para instalaciones interiores en viviendas, comercios y edificios.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5, 6, 7. Certificación, Normativas Internacionales y Seguridad Laboral */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* 5. Certificación */}
                <div className="bg-gradient-to-b from-blue-900/20 to-slate-900/60 p-6 rounded-3xl border border-blue-500/20 flex flex-col">
                    <div className="flex items-start gap-3 mb-4">
                        <span className="text-3xl font-black text-blue-500/30 leading-none">5.</span>
                        <h3 className="text-lg font-bold text-white pt-1">Certificación SEC</h3>
                    </div>
                    <p className="text-sm text-slate-300 mb-4 flex-grow">Muchas instalaciones eléctricas deben ser declaradas y certificadas ante la SEC en Chile.</p>

                    <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/30 text-center mb-4">
                        <span className="text-blue-400 font-black text-2xl tracking-widest">TE-1</span>
                        <p className="text-xs text-blue-200 mt-1">Certificado de Instalación Eléctrica Interior</p>
                    </div>

                    <div className="text-xs text-slate-400 bg-black/30 p-3 rounded-lg flex items-start gap-2 border border-white/5">
                        <AlertOctagon className="w-4 h-4 text-blue-400 shrink-0" />
                        Solo pueden emitir esta declaración los instaladores eléctricos autorizados.
                    </div>
                </div>

                {/* 6. Internacionales */}
                <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 flex flex-col">
                    <div className="flex items-start gap-3 mb-4">
                        <span className="text-3xl font-black text-primary-500/30 leading-none">6.</span>
                        <h3 className="text-lg font-bold text-white pt-1">Normas Internacionales</h3>
                    </div>

                    <div className="space-y-4 flex-grow">
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                            <h4 className="text-primary-300 font-bold text-sm mb-1 flex items-center justify-between">IEC <Globe className="w-4 h-4 text-slate-500" /></h4>
                            <p className="text-xs text-slate-400 mb-2">International Electrotechnical Commission</p>
                            <p className="text-[10px] text-slate-500">Ej: IEC 60364 (baja tensión), IEC 60947 (interruptores).</p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                            <h4 className="text-primary-300 font-bold text-sm mb-1 flex items-center justify-between">IEEE <Globe className="w-4 h-4 text-slate-500" /></h4>
                            <p className="text-[10px] text-slate-500">Ej: IEEE 1584 (análisis de arco eléctrico).</p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                            <h4 className="text-primary-300 font-bold text-sm mb-1 flex items-center justify-between">NFPA <Globe className="w-4 h-4 text-slate-500" /></h4>
                            <p className="text-[10px] text-slate-500">Seguridad contra incendios. Ej: NFPA 70 (NEC).</p>
                        </div>
                    </div>
                </div>

                {/* 7. Seguridad Laboral */}
                <div className="bg-gradient-to-b from-orange-900/20 to-slate-900/60 p-6 rounded-3xl border border-orange-500/20 flex flex-col">
                    <div className="flex items-start gap-3 mb-4">
                        <span className="text-3xl font-black text-orange-500/30 leading-none">7.</span>
                        <h3 className="text-lg font-bold text-white pt-1">Seguridad Laboral</h3>
                    </div>
                    <p className="text-sm text-slate-300 mb-4">Normas enfocadas en la seguridad del trabajador.</p>

                    <ul className="text-xs text-slate-400 space-y-2 mb-4 bg-black/30 p-3 rounded-xl">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> NFPA 70E (en el trabajo)</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Protección personal (EPP)</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Bloqueo y etiquetado (LOTO)</li>
                    </ul>

                    <div className="mt-auto bg-orange-500/10 p-3 rounded-lg border border-orange-500/20">
                        <p className="text-[10px] text-orange-300 font-bold uppercase mb-1">Buscan reducir riesgos:</p>
                        <p className="text-xs text-orange-200/70">Electrocución, arco eléctrico, quemaduras, incendios.</p>
                    </div>
                </div>

            </div>

            {/* 8 y 9. Aplicación AC/DC y Responsabilidad */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 8. AC / DC */}
                <section className="glass-morphism rounded-3xl p-8">
                    <div className="flex items-start gap-4 mb-6">
                        <span className="text-4xl font-black text-primary-500/20 leading-none">8.</span>
                        <h2 className="text-xl font-bold text-white pt-1">Aplicación en AC y DC</h2>
                    </div>

                    <p className="text-sm text-slate-300 mb-6">Ambos sistemas pueden generar riesgos eléctricos, por lo que deben cumplir las mismas exigencias de seguridad.</p>

                    <div className="flex flex-col gap-4">
                        <div className="bg-blue-500/10 p-4 rounded-xl border-l-4 border-blue-500">
                            <h3 className="text-blue-400 font-bold mb-2">Corriente Alterna (AC)</h3>
                            <p className="text-xs text-slate-400">Utilizada en redes eléctricas, viviendas e industrias.</p>
                        </div>
                        <div className="bg-green-500/10 p-4 rounded-xl border-l-4 border-green-500">
                            <h3 className="text-green-400 font-bold mb-2">Corriente Continua (DC)</h3>
                            <p className="text-xs text-slate-400">Sistemas electrónicos, baterías, telecomunicaciones, vehículos y fotovoltaicos.</p>
                        </div>
                    </div>
                </section>

                {/* 9. Responsabilidad */}
                <section className="bg-gradient-to-br from-red-900/20 to-slate-900/80 rounded-3xl p-8 border border-red-500/20">
                    <div className="flex items-start gap-4 mb-6">
                        <span className="text-4xl font-black text-red-500/20 leading-none">9.</span>
                        <h2 className="text-xl font-bold text-white pt-1">Responsabilidad del Electricista</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                            <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2"><HardHat className="w-4 h-4 text-slate-400" /> Responsabilidades:</h4>
                            <ul className="text-xs text-slate-400 space-y-1 ml-6 list-disc">
                                <li>Utilizar materiales certificados</li>
                                <li>Respetar métodos de instalación</li>
                                <li>Aplicar protecciones adecuadas</li>
                                <li>Realizar instalaciones seguras</li>
                                <li>Declarar instalaciones</li>
                            </ul>
                        </div>

                        <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/30">
                            <h4 className="text-sm font-bold text-red-400 mb-2 flex items-center gap-2"><AlertOctagon className="w-4 h-4" /> El incumplimiento provoca:</h4>
                            <p className="text-xs text-red-200">Accidentes eléctricos, incendios, daños a equipos y sanciones legales.</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* 10. Conclusión */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-[1px] rounded-3xl mt-12 shadow-2xl shadow-primary-500/20">
                <div className="bg-slate-950 rounded-[23px] p-8 md:p-10 relative overflow-hidden">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4 relative z-10">
                        <span className="text-4xl text-primary-500 font-black leading-none">10.</span>
                        Conclusión
                    </h3>

                    <div className="relative z-10 space-y-4">
                        <p className="text-slate-300 text-lg">
                            Todo técnico o profesional del área eléctrica debe <strong className="text-white">conocer y aplicar la normativa vigente</strong> durante el diseño, construcción y mantenimiento.
                        </p>
                        <p className="text-primary-300 font-medium italic">
                            El conocimiento de estas normativas es una competencia fundamental para el ejercicio responsable de la profesión eléctrica.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NormativaSeguridadView;
