import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, BookOpen } from 'lucide-react';

const TopicCard = ({ topic }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/topic/${topic.id}`);
        window.scrollTo(0, 0);
    };

    return (
        <div
            onClick={handleClick}
            className="group relative flex flex-col glass-morphism rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/10 border-white/5 hover:border-white/20 w-80 md:w-96 shrink-0 snap-center"
        >
            {/* Thumbnail */}
            <div className="aspect-[16/10] overflow-hidden relative">
                <img
                    src={topic.thumbnail}
                    alt={topic.titulo}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute top-4 right-4">
                    <div className="p-3 rounded-full bg-primary-500 text-white shadow-lg group-hover:scale-110 transition-transform flex items-center justify-center">
                        <Play className="w-5 h-5 fill-current" />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 flex-grow flex flex-col">
                <div className="flex items-center gap-2 text-primary-400 font-bold text-xs uppercase tracking-widest">
                    <BookOpen className="w-4 h-4" />
                    {topic.id.toUpperCase()}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors leading-tight">
                    {topic.titulo}
                </h3>
                <p className="text-slate-400 text-sm line-clamp-2 flex-grow">
                    {topic.descripcion}
                </p>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                    <div className="flex gap-2">
                        <span className="px-2 py-1 rounded-md bg-white/5 text-[10px] font-bold text-slate-500 uppercase">Teoría</span>
                        <span className="px-2 py-1 rounded-md bg-white/5 text-[10px] font-bold text-slate-500 uppercase">Lectura</span>
                    </div>
                    <button className="text-primary-400 font-bold text-sm group-hover:translate-x-1 transition-transform">
                        Estudiar →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopicCard;
