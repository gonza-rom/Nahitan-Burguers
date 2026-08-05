import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-tertiary text-white mt-xl border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Marca */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/logo-nahitan.jpeg"
                alt="Nahitan Burger's"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover border-2 border-secondary"
              />
              <h3 className="font-display text-2xl font-bold text-inverse-primary">
                Nahitan Burger's
              </h3>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Smash burgers hechas al momento. Pedí online y coordinamos
              la entrega por WhatsApp.
            </p>
          </div>

          {/* Horario y contacto */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-secondary mb-3">
              Horarios
            </h4>
            <div className="flex items-center gap-2 text-sm text-white/70 mb-2">
              <span className="material-symbols-outlined text-base">schedule</span>
              Todos los días · 21:00 a 00:30hs
            </div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <span className="material-symbols-outlined text-base">moped</span>
              Delivery disponible
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-secondary mb-3">
              Menú
            </h4>
            <a
              href="#menu"
              className="text-sm text-white/70 hover:text-white transition-colors block"
            >
              Ver hamburguesas
            </a>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Nahitan Burger's. Todos los derechos reservados.
          </p>
          <a
            href="https://www.devhub.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/40 hover:text-inverse-primary transition-colors flex items-center gap-1.5"
          >
            Hecho por
            <span className="font-bold text-white/70 hover:text-inverse-primary transition-colors">
              DevHub
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}