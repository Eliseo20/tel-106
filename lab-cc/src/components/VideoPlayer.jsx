import React from 'react';
import { PlayCircle } from 'lucide-react';

const VideoPlayer = ({ videoUrl, title, thumbnail }) => {
    return (
        <div className="relative group rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl">
            {videoUrl ? (
                <div className="aspect-video w-full">
                    {videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') ? (
                        <iframe
                            className="w-full h-full"
                            src={videoUrl.replace('watch?v=', 'embed/')}
                            title={title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <video
                            controls
                            className="w-full h-full"
                            poster={thumbnail}
                        >
                            <source src={videoUrl} type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                    )}
                </div>
            ) : (
                <div className="aspect-video w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
                    {thumbnail && (
                        <img
                            src={thumbnail}
                            alt={title}
                            className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
                        />
                    )}
                    <PlayCircle className="w-16 h-16 text-primary-400 mb-4 opacity-50 group-hover:scale-110 group-hover:text-primary-300 transition-all duration-300" />
                    <p className="text-slate-400 font-medium tracking-wide">Video del laboratorio pendiente</p>
                    <p className="text-slate-500 text-sm mt-1 italic">Proximamente disponible</p>
                </div>
            )}

            <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary-600/90 text-white rounded-full backdrop-blur-sm border border-white/10 shadow-lg">
                    Explicación en Video
                </span>
            </div>
        </div>
    );
};

export default VideoPlayer;
