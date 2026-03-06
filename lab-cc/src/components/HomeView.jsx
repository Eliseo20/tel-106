import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Layers, ChevronLeft } from 'lucide-react';
import TopicCard from './TopicCard';

const HomeView = ({ units }) => {
    // Initialize state so the first unit is expanded by default
    const [expandedUnits, setExpandedUnits] = useState({
        [units[0]?.id]: true
    });

    const toggleUnit = (unitId) => {
        setExpandedUnits(prev => ({
            ...prev,
            [unitId]: !prev[unitId]
        }));
    };

    const scroll = (elementId, direction) => {
        const element = document.getElementById(elementId);
        if (element) {
            const scrollAmount = direction === 'left' ? -350 : 350;
            element.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
            {/* Hero Section */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                    Fundamentos de <span className="text-primary-500">Corriente Continua</span>
                </h1>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                    Explora los conceptos fundamentales de la electricidad a través de nuestros módulos interactivos de aprendizaje.
                </p>
            </div>

            {/* Accordion Units */}
            <div className="space-y-6">
                {units.map((unit) => {
                    const isExpanded = expandedUnits[unit.id] || false;

                    return (
                        <div key={unit.id} className="space-y-4">
                            {/* Header Toggle */}
                            <button
                                onClick={() => toggleUnit(unit.id)}
                                className="w-full flex items-center justify-between p-6 glass-morphism rounded-2xl hover:bg-white/5 transition-all duration-300 group shadow-lg shadow-black/20"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-xl transition-colors duration-300 ${isExpanded ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20' : 'bg-white/5 text-primary-400 group-hover:bg-primary-500/20'}`}>
                                        <Layers className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <h2 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                                            {unit.titulo}
                                        </h2>
                                        <p className="text-sm tracking-widest uppercase font-bold text-slate-500 mt-1">{unit.temas.length} Temas Disponibles</p>
                                    </div>
                                </div>
                                <div className={`p-2 rounded-full transition-all duration-300 ${isExpanded ? 'bg-primary-500/10 text-primary-400' : 'bg-white/5 text-slate-400 group-hover:bg-white/10'}`}>
                                    {isExpanded ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                                </div>
                            </button>

                            {/* Horizontal Scroll Content with Navigation Arrows */}
                            <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100 max-h-[2000px] visible' : 'opacity-0 max-h-0 invisible overflow-hidden'}`}>
                                <div className="relative group/slider mt-4">
                                    {/* Left Arrow */}
                                    <button
                                        onClick={() => scroll(`slider-${unit.id}`, 'left')}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 p-3 rounded-full bg-slate-900 border border-primary-500/30 text-primary-400 hover:bg-primary-500 hover:text-white hover:scale-110 transition-all opacity-0 group-hover/slider:opacity-100 shadow-xl hidden md:block"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>

                                    {/* Scroll Container */}
                                    <div id={`slider-${unit.id}`} className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar px-2 py-4 scroll-smooth">
                                        {unit.temas.map((topic) => (
                                            <TopicCard key={topic.id} topic={topic} />
                                        ))}
                                    </div>

                                    {/* Right Arrow */}
                                    <button
                                        onClick={() => scroll(`slider-${unit.id}`, 'right')}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 p-3 rounded-full bg-slate-900 border border-primary-500/30 text-primary-400 hover:bg-primary-500 hover:text-white hover:scale-110 transition-all opacity-0 group-hover/slider:opacity-100 shadow-xl hidden md:block"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HomeView;
