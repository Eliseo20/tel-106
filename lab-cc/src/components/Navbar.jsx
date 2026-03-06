import React from 'react';
import { Zap, Menu, BookOpen } from 'lucide-react';

const Navbar = ({ onHomeClick, onToggleSidebar }) => {
    return (
        <nav className="sticky top-0 z-50 w-full glass-morphism border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div
                    onClick={onHomeClick}
                    className="flex items-center gap-3 cursor-pointer group"
                >
                    <div className="p-2 bg-primary-500 rounded-xl shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform">
                        <Zap className="w-6 h-6 text-white fill-current" />
                    </div>
                    <div>
                        <h1 className="text-xl font-black text-white leading-none tracking-tight">LabCC</h1>
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Corriente Continua</p>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    <button onClick={onHomeClick} className="text-sm font-bold text-slate-400 hover:text-white transition-colors cursor-pointer uppercase tracking-widest">
                        Inicio
                    </button>
                    <button
                        onClick={onToggleSidebar}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-500/10 text-primary-400 hover:bg-primary-500 hover:text-white transition-all duration-300 font-bold text-sm tracking-wide cursor-pointer"
                    >
                        <BookOpen className="w-4 h-4" />
                        CONTENIDOS
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={onToggleSidebar}
                        className="p-2 rounded-xl bg-primary-500/10 text-primary-400 hover:bg-primary-500 hover:text-white transition-colors"
                    >
                        <BookOpen className="w-5 h-5" />
                    </button>
                    <div className="p-2 text-slate-400">
                        <Menu className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
