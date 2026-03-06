import React, { useState } from 'react';
import { ArrowLeft, BookOpen, History, ChevronDown, ChevronRight, Image as ImageIcon, Calculator, Lightbulb } from 'lucide-react';

const AlgebraView = ({ onBack }) => {
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);
    const [isTechnicalContentOpen, setIsTechnicalContentOpen] = useState(false);
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

                    </div>
                </div>
            </section>

            {/* Technical Content Section */}
            <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                <button
                    onClick={() => setIsTechnicalContentOpen(!isTechnicalContentOpen)}
                    className="w-full flex items-center justify-between p-6 glass-morphism rounded-2xl hover:bg-white/5 transition-all duration-300 group shadow-lg"
                >
                    <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl transition-colors duration-300 ${isTechnicalContentOpen ? 'bg-primary-500 text-white' : 'bg-white/5 text-primary-400 group-hover:bg-primary-500/20'}`}>
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <h2 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                                Contenido Técnico
                            </h2>
                            <p className="text-sm font-medium text-slate-500">El Álgebra como Lenguaje Fundacional</p>
                        </div>
                    </div>
                    <div className={`p-2 rounded-full transition-all duration-300 ${isTechnicalContentOpen ? 'bg-primary-500/10 text-primary-400' : 'bg-white/5 text-slate-400'}`}>
                        {isTechnicalContentOpen ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                    </div>
                </button>

                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isTechnicalContentOpen ? 'opacity-100 max-h-[14000px] visible mt-4' : 'opacity-0 max-h-0 invisible'}`}>
                    <div className="glass-morphism rounded-[2.5rem] p-10 md:p-14 space-y-16 list-none border border-primary-500/10">
                        {/* Title and Abstract */}
                        <div className="space-y-8">
                            <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
                                El Álgebra como Lenguaje Fundacional del Análisis de Circuitos de Corriente Continua
                            </h1>
                            <div className="p-8 rounded-3xl bg-primary-500/5 border border-primary-500/10 italic text-slate-400 leading-relaxed">
                                <h3 className="text-white font-bold not-italic mb-3 uppercase tracking-wider text-sm flex items-center gap-2">
                                    <span className="w-4 h-[2px] bg-primary-500"></span>
                                    Resumen
                                </h3>
                                El álgebra, en su forma elemental y aplicada, constituye la herramienta matemática esencial para el modelado y resolución de circuitos eléctricos de corriente continua (CC). Este artículo presenta una exposición pedagógica del álgebra lineal básica directamente vinculada a conceptos fundamentales de la electrotecnia.
                            </div>
                        </div>

                        {/* Section 1 */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-5">
                                <span className="text-5xl font-black text-primary-500/20 leading-none">1.</span>
                                <h2 className="text-2xl font-bold text-white pt-1">Introducción: Del problema práctico al lenguaje simbólico</h2>
                            </div>
                            <p className="text-slate-300 leading-relaxed">
                                El álgebra no surgió como abstracción teórica, sino como respuesta a necesidades concretas de medición. En la ingeniería eléctrica, permite transformar observaciones físicas en relaciones cuantitativas manipulables simbólicamente.
                            </p>
                            <div className="p-10 rounded-3xl bg-slate-900/50 border border-white/5 flex flex-col items-center justify-center gap-6 group shadow-2xl">
                                <div className="text-4xl md:text-5xl font-black text-white tracking-widest flex items-center gap-4 group-hover:scale-105 transition-transform duration-500">
                                    <span className="text-primary-400">V</span>
                                    <span className="text-slate-600">=</span>
                                    <span className="text-primary-400">I</span>
                                    <span className="text-slate-700">·</span>
                                    <span className="text-primary-400">R</span>
                                </div>
                                <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">Ley de Ohm • Relación Lineal Fundamental</div>
                            </div>
                        </div>

                        {/* Section 2 - History and Relevance */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <span className="text-5xl font-black text-primary-500/20 leading-none">2.</span>
                                <h2 className="text-2xl font-bold text-white pt-1">Orígenes históricos y su relevancia pedagógica</h2>
                            </div>
                            <p className="text-slate-300 leading-relaxed">
                                Las primeras evidencias sistemáticas de resolución algebraica aparecen en Mesopotamia hacia el 1800 a.C. La tablilla Plimpton 322 documenta triples pitagóricos y sugiere el manejo implícito de ecuaciones cuadráticas.
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
                                    Escriba babilonio trabajando con la tablilla Plimpton 322 (c. 1800 a.C.).
                                </figcaption>
                            </figure>

                            <p className="text-slate-300 leading-relaxed">
                                En el siglo IX d.C., al-Jwarizmi sistematizó el álgebra introduciendo el método de reducción y balanceo que hoy aplicamos al resolver ecuaciones de Kirchhoff.
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
                                    Muhammad ibn Musa al-Jwarizmi (c. 780-850), quien sistematizó los métodos de reducción y balanceo.
                                </figcaption>
                            </figure>
                        </div>

                        {/* Section 3 - Example 1 */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-5">
                                <span className="text-5xl font-black text-primary-500/20 leading-none">3.</span>
                                <h2 className="text-2xl font-bold text-white pt-1">Ecuaciones lineales de primer grado</h2>
                            </div>
                            <div className="bg-slate-900/40 rounded-3xl p-8 border border-white/5 space-y-4">
                                <h4 className="text-primary-400 font-bold uppercase tracking-wider text-xs">Ejemplo de Laboratorio 1</h4>
                                <p className="text-white font-medium">Un resistor de 47 Ω se conecta a una fuente de 12 V. ¿Cuál es la corriente?</p>
                                <div className="text-2xl font-mono text-primary-300 bg-white/5 p-4 rounded-xl inline-block">
                                    I = 12 / 47 ≈ 0,255 A
                                </div>
                            </div>
                        </div>

                        {/* Section 4 - Kirchhoff */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <span className="text-5xl font-black text-primary-500/20 leading-none">4.</span>
                                <h2 className="text-2xl font-bold text-white pt-1">Sistemas de ecuaciones lineales</h2>
                            </div>
                            <p className="text-slate-300">
                                Las leyes de Kirchhoff generan sistemas lineales cuando el circuito presenta múltiples ramas o mallas.
                            </p>

                            <div className="bg-slate-900/40 rounded-3xl p-8 border border-white/5 space-y-6">
                                <h4 className="text-primary-400 font-bold uppercase tracking-wider text-xs">Ejemplo 2: Circuito Serie-Paralelo</h4>
                                <p className="text-white">R₁ y R₂ en paralelo, R_eq = 6 Ω, I_t = 10 A. V = 60 V.</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-black/20 p-4 rounded-xl space-y-2 border border-white/5">
                                        <div className="text-xs text-slate-500 uppercase font-bold">Sistema:</div>
                                        <div className="text-primary-300 font-mono">I₁ + I₂ = 10</div>
                                        <div className="text-primary-300 font-mono">V = I₁R₁ = I₂R₂ = 60</div>
                                    </div>
                                    <div className="bg-black/20 p-4 rounded-xl space-y-2 border border-white/5">
                                        <div className="text-xs text-slate-500 uppercase font-bold">Solución Algebraica:</div>
                                        <div className="text-primary-300 font-mono">R₁ = 18 Ω, R₂ = 9 Ω</div>
                                    </div>
                                </div>
                            </div>

                            {/* Diagrama Kirchhoff */}
                            <figure className="space-y-3 group">
                                <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 group-hover:border-primary-500/30 transition-all duration-500 shadow-2xl">
                                    <img
                                        src="/tel-106/algebra/Diagrama Kirchhoff.jpg"
                                        alt="Diagrama Kirchhoff"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <figcaption className="text-center text-sm font-medium text-slate-500 italic">
                                    Diagrama educativo de circuito de corriente continua con resistencias en paralelo, ilustrando las leyes de Kirchhoff.
                                </figcaption>
                            </figure>
                        </div>

                        {/* Section 5 - Voltage Divider */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <span className="text-5xl font-black text-primary-500/20 leading-none">5.</span>
                                <h2 className="text-2xl font-bold text-white pt-1">El divisor de voltaje: Álgebra aplicada</h2>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <div className="bg-slate-900/60 p-6 rounded-2xl border border-primary-500/20 flex-grow text-center">
                                    <div className="text-xs text-slate-500 font-bold uppercase mb-2">Fórmula R₁</div>
                                    <div className="text-2xl font-mono text-white">V₁ = V_t · (R₁ / (R₁ + R₂))</div>
                                </div>
                                <div className="bg-slate-900/60 p-6 rounded-2xl border border-primary-500/20 flex-grow text-center">
                                    <div className="text-xs text-slate-500 font-bold uppercase mb-2">Fórmula R₂</div>
                                    <div className="text-2xl font-mono text-white">V₂ = V_t · (R₂ / (R₁ + R₁))</div>
                                </div>
                            </div>

                            {/* Foto Laboratorio Divisor */}
                            <figure className="space-y-3 group">
                                <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 group-hover:border-primary-500/30 transition-all duration-500 shadow-2xl">
                                    <img
                                        src="/tel-106/algebra/Foto Laboratorio Divisor.jpg"
                                        alt="Foto Laboratorio Divisor"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <figcaption className="text-center text-sm font-medium text-slate-500 italic">
                                    Implementación de un circuito divisor de voltaje en protoboard con medición de multímetro.
                                </figcaption>
                            </figure>
                        </div>

                        {/* Section 6 - Closure */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <span className="text-5xl font-black text-primary-500/20 leading-none">6.</span>
                                <h2 className="text-2xl font-bold text-white pt-1">Reflexión histórica yy cierre</h2>
                            </div>
                            <p className="text-slate-300 leading-relaxed italic border-l-4 border-primary-500/50 pl-6 bg-primary-500/5 py-4 rounded-r-2xl">
                                Aunque en CC predominan las relaciones lineales, comprender estos orígenes refuerza la apreciación del álgebra como puente entre lo físico y lo simbólico.
                            </p>


                        </div>

                        {/* References */}
                        <div className="pt-12 border-t border-white/5 space-y-4">
                            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Referencias para profundización</h3>
                            <ul className="space-y-2 text-sm text-slate-400 divide-y divide-white/5">
                                <li className="py-2">Boyer, C. B. (1991). <em>A History of Mathematics</em>.</li>
                                <li className="py-2">Katz, V. J. (2008). <em>The History of Mathematics: An Introduction</em>.</li>
                                <li className="py-2">All About Circuits (2025). <em>DC Circuit Projects and Kirchhoff’s Laws</em>.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Collapsible Exercises Section */}
            <section className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                
            </section>
        </div>
    );
};

export default AlgebraView;
