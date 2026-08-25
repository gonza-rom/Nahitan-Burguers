'use client';

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
  return (
    <section className="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pt-md">
      <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-md text-center">
        Cómo lo hacemos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        {VIDEOS.map((v) => (
          <div
            key={v.src}
            className="bg-tertiary rounded-xl p-md shadow-hard-lg border-4 border-primary overflow-hidden"
          >
            <div className="relative w-full aspect-video bg-surface-container-high rounded-lg border-2 border-primary overflow-hidden">
              <video
                src={v.src}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-3 bg-surface p-3 mt-4 rounded-lg border-2 border-primary">
              <span className="material-symbols-outlined text-secondary text-2xl">{v.icon}</span>
              <div>
                <p className="font-display text-lg font-bold text-on-surface">{v.titulo}</p>
                <p className="text-xs text-on-surface-variant">{v.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
