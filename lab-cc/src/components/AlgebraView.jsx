import React, { useState } from 'react';
import { ArrowLeft, BookOpen, History, ChevronDown, ChevronRight, Image as ImageIcon } from 'lucide-react';

const AlgebraView = ({ onBack }) => {
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);

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
                        Álgebra
                    </h1>
                </div>
            </div>

            {/* Main Topic Introduction */}
            <section className="glass-morphism rounded-3xl p-8 space-y-6">
                <div className="flex items-center gap-3 text-2xl font-bold text-white">
                    <BookOpen className="w-8 h-8 text-primary-400" />
                    <h2>Introducción al Álgebra</h2>
                </div>
                <p className="text-slate-300 leading-relaxed text-lg">
                    El álgebra es la rama de las matemáticas que utiliza letras y símbolos para representar números en fórmulas y ecuaciones. En el contexto de la electricidad, es nuestra herramienta principal para calcular voltajes, corrientes y resistencias.
                </p>
            </section>

            {/* Collapsible History Section */}
            <section className="space-y-4">
                <button
                    onClick={() => setIsHistoryOpen(!isHistoryOpen)}
                    className="w-full flex items-center justify-between p-6 glass-morphism rounded-2xl hover:bg-white/5 transition-all duration-300 group shadow-lg"
                >
                    <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl transition-colors duration-300 ${isHistoryOpen ? 'bg-primary-500 text-white' : 'bg-white/5 text-primary-400 group-hover:bg-primary-500/20'}`}>
                            <History className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <h2 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                                La Historia del Álgebra
                            </h2>
                            <p className="text-sm font-medium text-slate-500">Un viaje de 4000 años que transformó el pensamiento humano</p>
                        </div>
                    </div>
                    <div className={`p-2 rounded-full transition-all duration-300 ${isHistoryOpen ? 'bg-primary-500/10 text-primary-400' : 'bg-white/5 text-slate-400'}`}>
                        {isHistoryOpen ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                    </div>
                </button>

                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isHistoryOpen ? 'opacity-100 max-h-[12000px] visible' : 'opacity-0 max-h-0 invisible'}`}>
                    <div className="glass-morphism rounded-3xl p-8 md:p-12 space-y-12 text-slate-300 leading-relaxed text-lg border-primary-500/10 border">

                        <p className="font-medium text-white italic border-l-4 border-primary-500 pl-6 py-2 bg-primary-500/5 rounded-r-xl">
                            "Queridos estudiantes: antes de que resolvamos ecuaciones como V = I·R... detengámonos un momento en la fascinante historia del álgebra."
                        </p>

                        <div className="space-y-6">
                            <p>
                                Esta disciplina no nació en un aula moderna ni en un libro de texto; surgió de la necesidad práctica de los seres humanos por resolver problemas cotidianos: repartir cosechas, medir tierras, calcular impuestos o predecir eclipses. Hoy, el álgebra es la herramienta invisible que permite diseñar circuitos, simular resistencias y entender cómo fluye la electricidad.
                            </p>
                            <figure className="space-y-3 group">
                                <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 group-hover:border-primary-500/30 transition-all duration-500 shadow-2xl">
                                    <img
                                        src="/tel-106/algebra/Muhammad ibn Musa al-Jwarizmi (c. 780-850).jpg"
                                        alt="Al-Jwarizmi"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <figcaption className="text-center text-sm font-medium text-slate-500 italic">
                                    Muhammad ibn Musa al-Jwarizmi (c. 780-850), el sabio persa cuyo nombre dio origen a la palabra "algoritmo".
                                </figcaption>
                            </figure>
                        </div>

                        <p>
                            La palabra “álgebra” proviene del árabe <strong>al-jabr</strong>, que significa “restauración” o “completación”. Aparece por primera vez en el título de un libro escrito alrededor del año 820 d.C. por el matemático persa <strong>Muhammad ibn Musa al-Jwarizmi</strong>: <em>Al-kitāb al-mukhtaṣar fī ḥisāb al-ŷabr wa-l-muqābala</em>.
                        </p>

                        <div className="space-y-6">
                            <p>
                                Sus orígenes se remontan a la antigua Mesopotamia, alrededor del 2000 a.C. Los babilonios, en tablillas de arcilla escritas en cuneiforme, resolvían ecuaciones cuadráticas de forma sorprendentemente avanzada. Una tablilla famosa, <strong>Plimpton 322</strong> (c. 1800 a.C.), contiene una lista de triples pitagóricos que demuestran que ya manejaban relaciones como a² + b² = c².
                            </p>
                            <figure className="space-y-3 group">
                                <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 group-hover:border-primary-500/30 transition-all duration-500 shadow-2xl">
                                    <img
                                        src="/tel-106/algebra/Escriba babilonio con la tablilla Plimpton 322 (c. 1800 a.C.).jpg"
                                        alt="Tablilla Plimpton 322"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <figcaption className="text-center text-sm font-medium text-slate-500 italic">
                                    Escriba babilonio trabajando con la tablilla Plimpton 322, evidencia de álgebra avanzada hace 4000 años.
                                </figcaption>
                            </figure>
                        </div>

                        <div className="space-y-6">
                            <p>
                                En el antiguo Egipto, hacia 1650 a.C., el <strong>Papiro de Rhind</strong> presenta 87 problemas. Aquí aparece el famoso “método de la falsa posición” para ecuaciones lineales: se supone un valor para la incógnita (“aha”, que significa “montón”), se calcula el resultado y se ajusta proporcionalmente.
                            </p>
                            <figure className="space-y-3 group">
                                <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 group-hover:border-primary-500/30 transition-all duration-500 shadow-2xl">
                                    <img
                                        src="/tel-106/algebra/Ahmes, copista del Papiro de Rhind (c. 1650 a.C.).jpg"
                                        alt="Papiro de Rhind"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <figcaption className="text-center text-sm font-medium text-slate-500 italic">
                                    Ahmes, el escriba egipcio que nos legó el Papiro de Rhind, una de las fuentes matemáticas más antiguas.
                                </figcaption>
                            </figure>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p>
                                    Paralelamente, en India y China se desarrollaban tradiciones independientes. <strong>Brahmagupta</strong> (628 d.C.), dio la primera solución general a ecuaciones cuadráticas, aceptando números negativos y cero.
                                </p>
                                <figure className="space-y-3 group">
                                    <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 group-hover:border-primary-500/30 transition-all duration-500 shadow-xl">
                                        <img
                                            src="/tel-106/algebra/Brahmagupta (628 d.C.).jpg"
                                            alt="Brahmagupta"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <figcaption className="text-center text-xs font-medium text-slate-500 italic">
                                        Brahmagupta, quien formalizó el uso del cero y los números negativos.
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="space-y-4">
                                <p>
                                    En China, <em>Los Nueve Capítulos del Arte Matemático</em> resuelve sistemas de ecuaciones lineales simultáneas.
                                </p>
                                <figure className="space-y-3 group">
                                    <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 group-hover:border-primary-500/30 transition-all duration-500 shadow-xl">
                                        <img
                                            src="/tel-106/algebra/Zhu Shijie (siglo XIII-XIV).jpg"
                                            alt="Zhu Shijie"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <figcaption className="text-center text-xs font-medium text-slate-500 italic">
                                        Zhu Shijie, autor de importantes tratados de álgebra en la China medieval.
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="space-y-6 text-slate-300">
                            <p>
                                Los griegos aportaron rigor geométrico. <strong>Euclides</strong> (c. 300 a.C.) tradujo álgebra a geometría. Pero el gran salto lo dio <strong>Diofanto de Alejandría</strong> (siglo III d.C.), considerado “el padre del álgebra”.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <figure className="space-y-2 group">
                                    <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                                        <img src="/tel-106/algebra/Euclides de Alejandría (c. 300 a.C.).jpg" className="w-full h-full object-cover" alt="Euclides" />
                                    </div>
                                    <figcaption className="text-[10px] text-center text-slate-500 font-bold uppercase tracking-widest">Euclides</figcaption>
                                </figure>
                                <figure className="space-y-2 group">
                                    <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                                        <img src="/tel-106/algebra/Diofanto de Alejandría (siglo III d.C.).jpg" className="w-full h-full object-cover" alt="Diofanto" />
                                    </div>
                                    <figcaption className="text-[10px] text-center text-slate-500 font-bold uppercase tracking-widest">Diofanto</figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p>
                                La verdadera sistematización llegó con la <strong>Edad de Oro Islámica</strong>. Al-Jwarizmi escribió su tratado como manual práctico. <strong>Omar Jayam</strong> clasificó 25 tipos de cúbicas y las resolvió geométricamente.
                            </p>
                            <figure className="space-y-3 group">
                                <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 group-hover:border-primary-500/30 transition-all duration-500 shadow-2xl">
                                    <img
                                        src="/tel-106/algebra/Omar Jayam (Omar Khayyam, 1048-1131).jpg"
                                        alt="Omar Jayam"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <figcaption className="text-center text-sm font-medium text-slate-500 italic">
                                    Omar Jayam, el genio persa que resolvió ecuaciones cúbicas usando secciones cónicas.
                                </figcaption>
                            </figure>
                        </div>

                        <div className="space-y-6">
                            <p>
                                Este conocimiento llegó a Europa a través de traducciones en Toledo. En el Renacimiento italiano, <strong>Cardano, Tartaglia y Ferrari</strong> resolvieron las ecuaciones cúbicas y cuárticas. <strong>Rafael Bombelli</strong> explicó los números complejos, y <strong>François Viète</strong> introdujo el simbolismo moderno.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <figure className="space-y-3 group">
                                    <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary-500/30 transition-all duration-500">
                                        <img src="/tel-106/algebra/Leonardo de Pisa (Fibonacci, c. 1170-1250).jpg" className="w-full h-full object-cover" alt="Fibonacci" />
                                    </div>
                                    <figcaption className="text-center text-xs font-medium text-slate-500 italic">Leonardo de Pisa (Fibonacci)</figcaption>
                                </figure>
                                <figure className="space-y-3 group">
                                    <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary-500/30 transition-all duration-500">
                                        <img src="/tel-106/algebra/Gerolamo Cardano (1501-1576).jpg" className="w-full h-full object-cover" alt="Cardano" />
                                    </div>
                                    <figcaption className="text-center text-xs font-medium text-slate-500 italic">Gerolamo Cardano</figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p>
                                <strong>René Descartes</strong> (1637) unió álgebra y geometría creando la geometría analítica. En el siglo XIX, el álgebra se volvió abstracta con <strong>Gauss, Abel y Ruffini</strong>. <strong>Évariste Galois</strong> fundó la teoría de grupos antes de morir en un duelo a los 20 años.
                            </p>
                            <figure className="space-y-3 group">
                                <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 group-hover:border-primary-500/30 transition-all duration-500 shadow-2xl">
                                    <img
                                        src="/tel-106/algebra/René Descartes (1596-1650).jpg"
                                        alt="René Descartes"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <figcaption className="text-center text-sm font-medium text-slate-500 italic">
                                    René Descartes, creador de la geometría analítica y los ejes de coordenadas.
                                </figcaption>
                            </figure>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <figure className="space-y-3 group">
                                <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-xl">
                                    <img src="/tel-106/algebra/Carl Friedrich Gauss (1777-1855).jpg" className="w-full h-full object-cover" alt="Gauss" />
                                </div>
                                <figcaption className="text-center text-xs font-medium text-slate-500 italic">Carl Friedrich Gauss, "El Príncipe de las Matemáticas".</figcaption>
                            </figure>
                            <figure className="space-y-3 group">
                                <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-xl">
                                    <img src="/tel-106/algebra/Évariste Galois (1811-1832).jpg" className="w-full h-full object-cover" alt="Galois" />
                                </div>
                                <figcaption className="text-center text-xs font-medium text-slate-500 italic">Évariste Galois, genio rebelde de la teoría de grupos.</figcaption>
                            </figure>
                        </div>

                        <div className="space-y-6">
                            <p>
                                Finalmente, <strong>George Boole</strong> creó el álgebra booleana (1847), base de la lógica digital. En el siglo XX, <strong>Emmy Noether</strong> sentó las bases del álgebra moderna. Hoy, el álgebra es esencial en criptografía, informática e ingeniería eléctrica.
                            </p>
                            <figure className="space-y-3 group">
                                <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 group-hover:border-primary-500/30 transition-all duration-500 shadow-2xl">
                                    <img
                                        src="/tel-106/algebra/Emmy Noether (1882-1935).jpg"
                                        alt="Emmy Noether"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <figcaption className="text-center text-sm font-medium text-slate-500 italic">
                                    Emmy Noether, pionera del álgebra abstracta moderna cuyo legado perdura en la física y matemática contemporánea.
                                </figcaption>
                            </figure>
                        </div>

                        <div className="p-8 rounded-2xl bg-primary-500/10 border border-primary-500/20 mt-12 shadow-inner shadow-primary-500/5">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                                Conclusión para nuestro curso
                            </h3>
                            <p className="text-slate-300">
                                En nuestro laboratorio de corriente continua, cada vez que escribimos una ecuación como I₁ + I₂ = I₃ estamos usando 4000 años de historia. El álgebra es un puente entre culturas y épocas. ¡Excelente inicio de estudio!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AlgebraView;
