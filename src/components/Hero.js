'use client';

export default function Hero() {
  return (
    <section className="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pt-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg bg-tertiary rounded-xl p-md md:p-lg shadow-hard-lg border-4 border-primary overflow-hidden relative">

        {/* Video vertical */}
        <div className="relative w-full aspect-[9/16] md:aspect-auto md:h-full bg-surface-container-high rounded-lg border-2 border-primary overflow-hidden group">
          <video
            src="/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-error text-on-error font-bold text-xs px-4 py-2 rounded-full shadow-hard uppercase tracking-wider -rotate-2">
            Nahitan Burger's
          </div>
        </div>

        {/* Texto + CTA */}
        <div className="flex flex-col justify-center gap-md relative z-10">
          <div className="bg-surface p-md rounded-xl shadow-hard border-2 border-primary mt-xl md:mt-0">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-primary mb-4">
              Tu nuevo antojo favorito
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-surface-container-low p-3 rounded-lg border border-outline-variant">
                <span className="material-symbols-outlined text-secondary text-2xl">schedule</span>
                <p className="font-semibold text-xs text-on-surface-variant uppercase tracking-wide">
                  Abierto todos los días | 21:00 a 00:30hs
                </p>
              </div>
              <div className="flex items-center gap-3 bg-secondary-container p-3 rounded-lg border-2 border-secondary">
                <span className="material-symbols-outlined text-on-secondary-container text-2xl">moped</span>
                <p className="font-display text-lg text-on-secondary-container font-bold">
                  Delivery disponible
                </p>
              </div>
            </div>

            <a
              href="#menu"
              className="mt-8 w-full bg-secondary text-on-secondary font-display text-lg font-bold py-4 px-8 rounded-lg shadow-hard hover:translate-y-1 hover:shadow-none transition-all active:scale-95 border-2 border-primary flex items-center justify-center gap-2 group"
            >
              Pedir ahora
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-0" />
      </div>
    </section>
  );
}