import React, { useState } from 'react';
import { ChevronRight, ChevronDown, BookOpen, Layers, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CURRICULUM_DATA } from '../data/curriculumData';

const ModuleSidebar = ({ isOpen, setIsOpen }) => {
    const [expandedUnits, setExpandedUnits] = useState({ u1: true, u2: false });

    const toggleUnit = (unitId) => {
        setExpandedUnits(prev => ({
            ...prev,
            [unitId]: !prev[unitId]
        }));
    };

    const navigate = useNavigate();

    const handleTopicClick = (tema) => {
        if (typeof tema !== 'string' && tema.id) {
            navigate(`/topic/${tema.id}`);
            setIsOpen(false);

            // Scroll to top
            window.scrollTo(0, 0);
        }
    };

    return (
        <>
            {/* Sidebar Overlay for Mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar Content */}
            <aside
                className={`fixed top-0 right-0 h-full z-45 transition-all duration-500 ease-out glass-morphism border-l border-white/10 w-72 md:w-80 pt-24 pb-12 px-6 overflow-y-auto ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
            >
                <div className="space-y-8">
                    <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                        <div className="p-2 rounded-xl bg-primary-500/20 text-primary-400">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-white font-bold text-lg leading-tight">Módulo de CC</h2>
                            <p className="text-slate-400 text-xs uppercase tracking-widest font-medium">Contenidos del curso</p>
                        </div>
                    </div>

                    <nav className="space-y-4">
                        {CURRICULUM_DATA.map((unit) => (
                            <div key={unit.id} className="space-y-2">
                                <button
                                    onClick={() => toggleUnit(unit.id)}
                                    className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 group ${expandedUnits[unit.id] ? 'bg-primary-500/10 border border-primary-500/30' : 'bg-white/5 border border-white/5 hover:bg-white/10'}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <Layers className={`w-5 h-5 transition-colors ${expandedUnits[unit.id] ? 'text-primary-400' : 'text-slate-500'}`} />
                                        <span className={`text-sm font-bold text-left leading-tight ${expandedUnits[unit.id] ? 'text-white' : 'text-slate-300'}`}>
                                            {unit.titulo}
                                        </span>
                                    </div>
                                    {expandedUnits[unit.id] ?
                                        <ChevronDown className="w-4 h-4 text-primary-400" /> :
                                        <ChevronRight className="w-4 h-4 text-slate-500" />
                                    }
                                </button>

                                {/* Topics List */}
                                <div className={`grid transition-all duration-500 ease-in-out ${expandedUnits[unit.id] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 overflow-hidden'}`}>
                                    <div className="min-h-0 space-y-1 pl-4 border-l border-white/10 ml-2 mt-2">
                                        {unit.temas.map((tema, idx) => (
                                            <button
                                                key={typeof tema === 'string' ? idx : tema.id}
                                                onClick={() => handleTopicClick(tema)}
                                                className="w-full text-left p-2.5 rounded-xl text-xs text-slate-400 hover:text-primary-400 hover:bg-white/5 transition-all duration-200"
                                            >
                                                {typeof tema === 'string' ? tema : tema.titulo}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default ModuleSidebar;
