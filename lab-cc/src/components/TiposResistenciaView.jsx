import React from 'react';
import { ArrowLeft, Search, Image as ImageIcon, Zap, Settings2, SlidersHorizontal, ThermometerSun, Sun, ShieldAlert, Cpu } from 'lucide-react';

const ImagePlaceholder = ({ title, height = "h-48" }) => (
    <div className={`w-full ${height} bg-slate-900/60 border-2 border-dashed border-primary-500/30 rounded-2xl flex flex-col items-center justify-center text-slate-500 hover:border-primary-500/60 hover:text-primary-400 hover:bg-slate-900/80 transition-all cursor-pointer group mt-6 mb-4 relative overflow-hidden`}>
        <ImageIcon className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform relative z-10" />
        <p className="text-sm font-medium uppercase tracking-widest text-center px-4 relative z-10">{title}</p>
        <p className="text-xs mt-1 opacity-60 flex items-center gap-1 relative z-10"><Search className="w-3 h-3" /> Buscar imagen</p>
    </div>
);

const TiposResistenciaView = ({ onBack }) => {
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
                        Tipos de Resistencias
                    </h1>
                </div>
            </div>

            {/* Intro */}
            <section className="glass-morphism rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute -right-20 -top-20 opacity-5 pointer-events-none">
                    <Cpu className="w-96 h-96 text-primary-500" />
                </div>

                <div className="relative z-10 max-w-4xl space-y-6">
                    <p className="text-slate-300 text-lg">
                        Las resistencias son componentes diseñados para limitar, controlar o regular el paso de la corriente eléctrica dentro de un circuito.
                    </p>

                    <div className="bg-black/40 p-5 rounded-2xl border border-white/5 space-y-4">
                        <h3 className="text-primary-300 font-bold text-sm uppercase tracking-widest">Se utilizan en circuitos para:</h3>
                        <div className="flex flex-wrap gap-2 text-sm text-white">
                            <span className="bg-primary-500/20 px-3 py-1.5 rounded-lg border border-primary-500/30">Limitar corriente</span>
                            <span className="bg-primary-500/20 px-3 py-1.5 rounded-lg border border-primary-500/30">Dividir voltaje</span>
                            <span className="bg-primary-500/20 px-3 py-1.5 rounded-lg border border-primary-500/30">Proteger componentes</span>
                            <span className="bg-primary-500/20 px-3 py-1.5 rounded-lg border border-primary-500/30">Generar calor</span>
                            <span className="bg-primary-500/20 px-3 py-1.5 rounded-lg border border-primary-500/30">Ajustar señales eléctricas</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1. Resistencias fijas */}
            <section className="space-y-6">
                <div className="flex items-start gap-4 ml-4">
                    <span className="text-4xl font-black text-blue-500/20 leading-none">1.</span>
                    <h2 className="text-2xl font-bold text-white pt-1">Resistencias Fijas</h2>
                </div>
                <p className="text-slate-300 ml-4 lg:ml-12 mb-6">Su valor de resistencia <strong className="text-blue-400">no cambia</strong> durante el funcionamiento. Está determinado de fábrica (ej. 100 Ω, 1 kΩ).</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Carbón */}
                    <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all">
                        <h3 className="text-blue-300 font-bold mb-3 flex items-center gap-2">De Carbón</h3>
                        <p className="text-xs text-slate-400 mb-3 h-12">Mezcla de polvo de carbón y aislante. Muy comunes antiguamente.</p>
                        <ul className="text-xs text-slate-500 space-y-1">
                            <li>• Bajo costo</li>
                            <li>• Uso básico</li>
                            <li>• Menor precisión</li>
                        </ul>
                    </div>
                    {/* Película Carbono */}
                    <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all">
                        <h3 className="text-blue-300 font-bold mb-3 flex items-center gap-2">Película de Carbono</h3>
                        <p className="text-xs text-slate-400 mb-3 h-12">Película delgada sobre cilindro cerámico. Muy utilizadas.</p>
                        <ul className="text-xs text-slate-500 space-y-1">
                            <li>• Mayor estabilidad</li>
                            <li>• Buena precisión</li>
                            <li>• Amplio uso</li>
                        </ul>
                    </div>
                    {/* Película Metálica */}
                    <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all">
                        <h3 className="text-blue-300 font-bold mb-3 flex items-center gap-2">Película Metálica</h3>
                        <p className="text-xs text-slate-400 mb-3 h-12">Capa muy delgada de metal resistivo. Equipos modernos.</p>
                        <ul className="text-xs text-slate-500 space-y-1">
                            <li>• Alta precisión</li>
                            <li>• Baja variación con T°</li>
                            <li>• Electrónica moderna</li>
                        </ul>
                    </div>
                    {/* Alambre */}
                    <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all">
                        <h3 className="text-blue-300 font-bold mb-3 flex items-center gap-2">De Alambre</h3>
                        <p className="text-xs text-slate-400 mb-3 h-12">Hilo enrollado en núcleo aislante. Aplicaciones industriales.</p>
                        <ul className="text-xs text-slate-500 space-y-1">
                            <li>• Alta potencia</li>
                            <li>• Gran estabilidad</li>
                            <li>• Fuentes, calefacción</li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-2xl mx-auto">
                    <ImagePlaceholder title="Resistencias de alambre en equipos industriales" height="h-32" />
                </div>
            </section>

            {/* 2. Resistencias variables */}
            <section className="space-y-6">
                <div className="flex items-start gap-4 ml-4">
                    <span className="text-4xl font-black text-orange-500/20 leading-none">2.</span>
                    <h2 className="text-2xl font-bold text-white pt-1">Resistencias Variables</h2>
                </div>
                <p className="text-slate-300 ml-4 lg:ml-12 mb-6">Su valor puede modificarse manualmente o mediante un sistema mecánico para ajustar el circuito.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Potenciómetro */}
                    <div className="bg-gradient-to-br from-orange-900/20 to-slate-900/60 p-8 rounded-3xl border border-orange-500/20 h-full">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                            <Settings2 className="w-6 h-6 text-orange-400" /> Potenciómetro
                        </h3>
                        <p className="text-sm text-slate-300 mb-4 h-16">
                            Ajusta el voltaje o la corriente. Se compone de una pista resistiva y un <strong className="text-orange-400">contacto móvil (cursor)</strong>, que al moverse cambia la resistencia. Utiliza 3 terminales.
                        </p>
                        <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                            <h4 className="text-xs text-slate-400 uppercase tracking-widest mb-2">Usos Comunes</h4>
                            <ul className="text-sm text-white space-y-1">
                                <li>• Control de volumen en audio</li>
                                <li>• Regulación de brillo</li>
                                <li>• Ajuste de sensores</li>
                            </ul>
                        </div>
                    </div>

                    {/* Reóstato */}
                    <div className="bg-gradient-to-br from-orange-900/20 to-slate-900/60 p-8 rounded-3xl border border-orange-500/20 h-full">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                            <SlidersHorizontal className="w-6 h-6 text-orange-400" /> Reóstato
                        </h3>
                        <p className="text-sm text-slate-300 mb-4 h-16">
                            Utilizada principalmente para controlar la corriente eléctrica que circula por un circuito. A diferencia del potenciómetro, normalmente utiliza solo <strong className="text-orange-400">dos terminales</strong>.
                        </p>
                        <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                            <h4 className="text-xs text-slate-400 uppercase tracking-widest mb-2">Usos Comunes</h4>
                            <ul className="text-sm text-white space-y-1">
                                <li>• Control de motores</li>
                                <li>• Regulación de corriente</li>
                                <li>• Laboratorios eléctricos</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="max-w-2xl mx-auto">
                    <ImagePlaceholder title="Potenciómetro rotatorio con 3 terminales" height="h-32" />
                </div>
            </section>

            {/* 3. Resistencias Dependientes */}
            <section className="space-y-6">
                <div className="flex items-start gap-4 ml-4">
                    <span className="text-4xl font-black text-green-500/20 leading-none">3.</span>
                    <h2 className="text-2xl font-bold text-white pt-1">Resistencias Dependientes (Sensores)</h2>
                </div>
                <p className="text-slate-300 ml-4 lg:ml-12 mb-6">Su valor <strong className="text-green-400">cambia automáticamente</strong> según condiciones físicas (temperatura, luz).</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Termistores */}
                    <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 h-full relative overflow-hidden">
                        <ThermometerSun className="absolute right-[-20px] bottom-[-20px] w-48 h-48 text-white/5" />
                        <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6 relative z-10">
                            Termistores <span className="text-xs bg-white/10 text-white px-2 py-1 rounded ml-2">T°</span>
                        </h3>

                        <div className="space-y-4 relative z-10">
                            <div className="bg-black/40 p-4 rounded-xl border-l-4 border-blue-400">
                                <h4 className="text-blue-300 font-bold mb-1">NTC (Negative Temperature Coefficient)</h4>
                                <p className="text-xs text-slate-300 mb-2">La resistencia <strong className="text-white">disminuye</strong> cuando aumenta la temperatura.</p>
                                <p className="text-[10px] text-slate-500 uppercase">Usos: Sensores T°, protección de equipos.</p>
                            </div>
                            <div className="bg-black/40 p-4 rounded-xl border-l-4 border-red-400">
                                <h4 className="text-red-300 font-bold mb-1">PTC (Positive Temperature Coefficient)</h4>
                                <p className="text-xs text-slate-300 mb-2">La resistencia <strong className="text-white">aumenta</strong> cuando aumenta la temperatura.</p>
                                <p className="text-[10px] text-slate-500 uppercase">Usos: Prevención sobrecorrientes, seguridad.</p>
                            </div>
                        </div>
                    </div>

                    {/* Fotoresistencias */}
                    <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 h-full relative overflow-hidden">
                        <Sun className="absolute right-[-20px] bottom-[-20px] w-48 h-48 text-white/5" />
                        <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6 relative z-10">
                            Fotoresistencias <span className="text-xs bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 px-2 py-1 rounded ml-2 font-mono">LDR</span>
                        </h3>

                        <div className="space-y-4 relative z-10">
                            <p className="text-sm text-slate-300">Dependen de la cantidad de luz recibida:</p>

                            <div className="flex flex-col gap-2 font-mono text-sm">
                                <div className="bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/20 text-yellow-100 flex justify-between">
                                    <span>+ Más Luz</span> <span>= Resistencia Baja ↓</span>
                                </div>
                                <div className="bg-black/40 p-3 rounded-lg border border-white/5 text-slate-400 flex justify-between">
                                    <span>- Menos Luz</span> <span>= Resistencia Alta ↑</span>
                                </div>
                            </div>

                            <p className="text-[10px] text-slate-500 uppercase mt-4 block p-3 bg-black/30 rounded-lg">
                                Usos: Iluminación automática, sensores de luz, control de brillo.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-2xl mx-auto">
                    <ImagePlaceholder title="Fotoresistencia (LDR) en sensores de luz" height="h-32" />
                </div>
            </section>

            {/* 4. Potencia y Conclusion */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {/* 4. Potencia */}
                <section className="bg-gradient-to-br from-red-900/20 to-slate-900/60 p-8 rounded-3xl border border-red-500/20">
                    <div className="flex items-start gap-4 mb-6">
                        <span className="text-4xl font-black text-red-500/20 leading-none">4.</span>
                        <h2 className="text-2xl font-bold text-white pt-1">Resistencias de Potencia</h2>
                    </div>

                    <p className="text-sm text-slate-300 mb-6">
                        Soportan altos niveles de energía y disipan grandes cantidades de calor. Fabricadas en cerámica, metal o alambre.
                    </p>

                    <div className="bg-black/40 p-5 rounded-xl border border-white/5 space-y-4">
                        <h3 className="text-red-300 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                            <ShieldAlert className="w-4 h-4" /> Potencia Nominal (W)
                        </h3>
                        <p className="text-xs text-slate-400">Es la máxima potencia que pueden disipar sin dañarse.</p>
                        <div className="flex flex-wrap gap-2 text-xs font-mono font-bold text-white">
                            <span className="bg-white/10 px-2 py-1 rounded">1/8 W</span>
                            <span className="bg-white/10 px-2 py-1 rounded">1/4 W</span>
                            <span className="bg-white/10 px-2 py-1 rounded">1/2 W</span>
                            <span className="bg-white/10 px-2 py-1 rounded">1 W</span>
                            <span className="bg-white/10 px-2 py-1 rounded">5 W</span>
                            <span className="bg-white/10 px-2 py-1 rounded">10W+</span>
                        </div>
                        <div className="bg-red-500/10 p-3 rounded-lg border-l-4 border-red-500 text-xs text-red-200 mt-2">
                            Si disipa más de lo que soporta, puede <strong className="text-white">sobrecalentarse, cambiar su valor o quemarse</strong>.
                        </div>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="bg-gradient-to-r from-primary-600 to-primary-800 p-[1px] rounded-3xl shadow-xl shadow-primary-500/10">
                    <div className="bg-slate-950 rounded-[23px] p-8 md:p-10 h-full flex flex-col justify-center">
                        <h2 className="text-2xl font-bold text-white mb-6">Importancia</h2>
                        <ul className="space-y-3 text-sm text-slate-300 mb-6">
                            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary-500"></div> Seleccionar correctamente componentes</li>
                            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary-500"></div> Diseñar circuitos seguros</li>
                            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary-500"></div> Interpretar diagramas y planos</li>
                            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary-500"></div> Diagnosticar fallas en equipos</li>
                            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary-500"></div> Entender el funcionamiento de sensores</li>
                        </ul>
                        <div className="mt-auto bg-black/40 p-4 rounded-xl border border-white/5 text-primary-300 text-sm italic">
                            Son el componente más fundamental, aparecen prácticamente en todos los circuitos.
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default TiposResistenciaView;
