'use client';

import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { cantidadTotal, setOpen } = useCart();

  return (
    <header className="bg-surface flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 sticky top-0 z-50 border-b-2 border-primary shadow-hard">
      <div className="flex items-center gap-4">
        <Image
          src="/logo-nahitan.jpg"
          alt="Nahitan Burger's"
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover border-2 border-primary"
        />
        <h1 className="font-display text-2xl font-bold text-primary">Nahitan Burger's</h1>
      </div>

      <nav className="hidden md:flex gap-8">
        <a href="#menu" className="text-on-surface-variant font-semibold text-sm uppercase tracking-wide hover:bg-primary-fixed px-4 py-2 rounded-lg transition-colors">
          Menú
        </a>
      </nav>

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
    </header>
  );
}