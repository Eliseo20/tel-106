import React from 'react';
import { Play, BookOpen, Clock } from 'lucide-react';

const HomeView = ({ labs, onSelectLab }) => {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Hero Section */}
            <div className="text-center space-y-4">
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                    Laboratorio de <span className="text-primary-500">Corriente Continua</span>
                </h1>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                    Explora los fundamentos de la electricidad a través de experimentos prácticos guiados por video.
                    Desarrolla habilidades en medición y análisis de circuitos.
                </p>
            </div>

            {/* Lab Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {labs.map((lab) => (
                    <div
                        key={lab.id}
                        onClick={() => onSelectLab(lab)}
                        className="group relative flex flex-col glass-morphism rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/10 border-white/5 hover:border-white/20"
                    >
                        {/* Thumbnail */}
                        <div className="aspect-[16/10] overflow-hidden relative">
                            <img
                                src={lab.thumbnail}
                                alt={lab.titulo}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                            <div className="absolute top-4 right-4">
                                <div className="p-3 rounded-full bg-primary-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                                    <Play className="w-5 h-5 fill-current" />
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-4 flex-grow flex flex-col">
                            <div className="flex items-center gap-2 text-primary-400 font-bold text-xs uppercase tracking-widest">
                                <BookOpen className="w-4 h-4" />
                                Lab {lab.id.replace('lab', '')}
                            </div>

                            <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                                {lab.titulo}
                            </h3>

                            <p className="text-slate-400 text-sm line-clamp-2 flex-grow">
                                {lab.descripcion}
                            </p>

                            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <span className="px-2 py-1 rounded-md bg-white/5 text-[10px] font-bold text-slate-500 uppercase">DC Circuits</span>
                                    <span className="px-2 py-1 rounded-md bg-white/5 text-[10px] font-bold text-slate-500 uppercase">Experimental</span>
                                </div>
                                <button className="text-primary-400 font-bold text-sm group-hover:translate-x-1 transition-transform">
                                    Ver Detalles →
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeView;
