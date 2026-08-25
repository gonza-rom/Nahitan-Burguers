'use client';

import { useEffect, useRef, useState } from 'react';

const VIDEOS = [
  {
    src: '/nahitan-burgers.mp4',
    icon: 'outdoor_grill',
    titulo: 'La smash al toque',
    descripcion: 'Medallón aplastado en la plancha y armado con los ingredientes al momento.',
  },
  {
    src: '/papas-fritas.mp4',
    icon: 'whatshot',
    titulo: 'Papas recién fritas',
    descripcion: 'Doradas y crocantes, listas para acompañar tu pedido.',
  },
];

export default function ProcessSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRef = useRef(null);
  const actual = VIDEOS[index];

  useEffect(() => {
    setPaused(false);
  }, [index]);

  function anterior() {
    setIndex((i) => (i - 1 + VIDEOS.length) % VIDEOS.length);
  }

  function siguiente() {
    setIndex((i) => (i + 1) % VIDEOS.length);
  }

  function togglePausa() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
  }

  return (
    <section id="como-hacemos" className="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pt-md scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-md md:gap-lg bg-tertiary rounded-xl p-md md:p-lg shadow-hard-lg border-4 border-primary overflow-hidden relative">

        {/* Video vertical */}
        <div className="relative w-full max-w-xs mx-auto md:mx-0 aspect-[9/16] bg-surface-container-high rounded-lg border-2 border-primary overflow-hidden">
          <video
            key={actual.src}
            ref={videoRef}
            src={actual.src}
            autoPlay
            muted
            loop
            playsInline
            onClick={togglePausa}
            className="absolute inset-0 w-full h-full object-cover cursor-pointer"
          />
          <button
            type="button"
            onClick={togglePausa}
            aria-label={paused ? 'Reproducir video' : 'Pausar video'}
            className="absolute bottom-4 right-4 bg-surface/90 text-primary rounded-full p-2 shadow-hard border-2 border-primary"
          >
            <span className="material-symbols-outlined">{paused ? 'play_arrow' : 'pause'}</span>
          </button>
        </div>

        {/* Texto + carrusel */}
        <div className="flex flex-col justify-center gap-md relative z-10">
          <div className="bg-surface p-md rounded-xl shadow-hard border-2 border-primary mt-xl md:mt-0">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-4">
              Cómo lo hacemos
            </h2>

            <div className="flex items-center gap-3 bg-surface-container-low p-3 rounded-lg border border-outline-variant">
              <span className="material-symbols-outlined text-secondary text-2xl">{actual.icon}</span>
              <div>
                <p className="font-display text-lg font-bold text-on-surface">{actual.titulo}</p>
                <p className="text-xs text-on-surface-variant">{actual.descripcion}</p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 mt-8">
              <button
                type="button"
                onClick={anterior}
                aria-label="Video anterior"
                className="shrink-0 bg-secondary text-on-secondary rounded-full p-3 shadow-hard border-2 border-primary hover:translate-y-1 hover:shadow-none transition-all active:scale-95"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>

              <div className="flex items-center gap-2">
                {VIDEOS.map((v, i) => (
                  <button
                    key={v.src}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Ir al video ${i + 1}`}
                    className={`h-3 rounded-full border-2 border-primary transition-all ${
                      i === index ? 'w-6 bg-secondary' : 'w-3 bg-surface'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={siguiente}
                aria-label="Video siguiente"
                className="shrink-0 bg-secondary text-on-secondary rounded-full p-3 shadow-hard border-2 border-primary hover:translate-y-1 hover:shadow-none transition-all active:scale-95"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-0 pointer-events-none" />
      </div>
    </section>
  );
}
