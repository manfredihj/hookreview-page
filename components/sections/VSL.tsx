'use client';

import { useState } from 'react';

interface VSLProps {
  videoUrl: string;
  title?: string;
}

export function VSL({ videoUrl, title }: VSLProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Detectar el tipo de video
  const getVideoInfo = (url: string) => {
    // YouTube
    const youtubeRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const youtubeMatch = url.match(youtubeRegExp);
    if (youtubeMatch && youtubeMatch[2].length === 11) {
      return {
        type: 'youtube' as const,
        id: youtubeMatch[2],
        embedUrl: `https://www.youtube.com/embed/${youtubeMatch[2]}?autoplay=1&rel=0&modestbranding=1`,
        thumbnailUrl: `https://i.ytimg.com/vi/${youtubeMatch[2]}/maxresdefault.jpg`,
        useFacade: true
      };
    }

    // Loom
    const loomRegExp = /loom\.com\/share\/([a-zA-Z0-9]+)/;
    const loomMatch = url.match(loomRegExp);
    if (loomMatch && loomMatch[1]) {
      return {
        type: 'loom' as const,
        id: loomMatch[1],
        embedUrl: `https://www.loom.com/embed/${loomMatch[1]}`,
        thumbnailUrl: '',
        useFacade: false // Loom carga directo sin facade por restricciones CORS
      };
    }

    return null;
  };

  const videoInfo = getVideoInfo(videoUrl);

  if (!videoInfo) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
            {title}
          </h2>
        )}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          {!isLoaded && videoInfo.useFacade ? (
            // Facade: thumbnail + play button (solo para YouTube)
            <button
              onClick={() => setIsLoaded(true)}
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl overflow-hidden group cursor-pointer"
              aria-label="Reproducir video"
            >
              <img
                src={videoInfo.thumbnailUrl}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          ) : (
            // Iframe real (Loom carga directo, YouTube después del click)
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
              src={videoInfo.embedUrl}
              title="Video Sales Letter"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}
