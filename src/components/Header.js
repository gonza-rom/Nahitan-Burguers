'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

const ENLACES = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#como-hacemos', label: 'Cómo lo hacemos' },
  { href: '#menu', label: 'Menú' },
];

export default function Header() {
  const { cantidadTotal, setOpen } = useCart();
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="bg-surface w-full sticky top-0 z-50 border-b-2 border-primary shadow-hard">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4">
        <div className="flex items-center gap-4">
          <Image
            src="/logo-nahitan.jpeg"
            alt="Nahitan Burger's"
            width={60}
            height={60}
            className="h-15 w-15 rounded-full object-cover border-2 border-primary"
          />
          <h1 className="font-display text-2xl font-bold text-primary">Nahitan Burger's</h1>
        </div>

        <nav className="hidden md:flex gap-8">
          {ENLACES.map((enlace) => (
            <a
              key={enlace.href}
              href={enlace.href}
              className="text-on-surface-variant font-semibold text-sm uppercase tracking-wide hover:bg-primary-fixed px-4 py-2 rounded-lg transition-colors"
            >
              {enlace.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            className="relative text-primary hover:bg-primary-fixed transition-colors p-2 rounded-full"
            aria-label="Ver carrito"
          >
            <span className="material-symbols-outlined">shopping_cart</span>
            {cantidadTotal > 0 && (
              <span className="absolute -top-1 -right-1 bg-error text-on-error text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cantidadTotal}
              </span>
            )}
          </button>

          <button
            onClick={() => setMenuAbierto((v) => !v)}
            className="md:hidden text-primary hover:bg-primary-fixed transition-colors p-2 rounded-full"
            aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuAbierto}
          >
            <span className="material-symbols-outlined">{menuAbierto ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {menuAbierto && (
        <nav className="md:hidden flex flex-col border-t-2 border-primary bg-surface px-margin-mobile py-2">
          {ENLACES.map((enlace) => (
            <a
              key={enlace.href}
              href={enlace.href}
              onClick={() => setMenuAbierto(false)}
              className="text-on-surface-variant font-semibold text-sm uppercase tracking-wide hover:bg-primary-fixed px-4 py-3 rounded-lg transition-colors"
            >
              {enlace.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}