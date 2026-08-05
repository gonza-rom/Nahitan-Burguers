'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MENU, CATEGORIAS, fmtPrecio } from '@/lib/menu';
import { useCart } from '@/context/CartContext';

function BurgerCard({ burger }) {
  const variantes = Object.keys(burger.precios);
  const [variante, setVariante] = useState(variantes[0]);
  const { addItem } = useCart();

  return (
    <div className="bg-surface rounded-xl border-2 border-primary shadow-hard overflow-hidden flex flex-col">
      <div className="relative w-full aspect-[4/3] bg-surface-container-high">
        <Image src={burger.imagen} alt={burger.nombre} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-display text-xl font-bold text-primary mb-2">{burger.nombre}</h3>
        <p className="text-sm text-on-surface-variant mb-2 flex-grow">
          {burger.ingredientes.join(' · ')}
        </p>
        <p className="text-xs font-semibold text-secondary mb-4">
          {burger.incluye}
        </p>

        <div className="flex gap-2 mb-4">
          {variantes.map((v) => (
            <button
              key={v}
              onClick={() => setVariante(v)}
              className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wide border-2 transition-colors ${
                variante === v
                  ? 'bg-secondary text-on-secondary border-primary'
                  : 'bg-surface-container-low text-on-surface-variant border-outline-variant'
              }`}
            >
              {v}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="font-price text-lg font-bold text-primary">
            {fmtPrecio(burger.precios[variante])}
          </span>
          <button
            onClick={() => addItem(burger, variante)}
            className="bg-primary text-on-primary px-4 py-2 rounded-lg font-bold text-sm shadow-hard hover:translate-y-0.5 hover:shadow-none transition-all active:scale-95"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MenuSection() {
  const [categoriaActiva, setCategoriaActiva] = useState('todas');

  const productosFiltrados =
    categoriaActiva === 'todas'
      ? MENU
      : MENU.filter((b) => b.categoria === categoriaActiva);

  return (
    <section id="menu" className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
      <div className="text-center mb-8">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary uppercase tracking-tight">
          Nuestro Menú
        </h2>
        <p className="text-on-surface-variant mt-2">Elegí tu categoría y armá tu pedido</p>
        <div className="w-24 h-1 bg-secondary mx-auto mt-4 rounded-full" />
      </div>

      {/* Tabs de categoría */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        <button
          onClick={() => setCategoriaActiva('todas')}
          className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide border-2 transition-colors ${
            categoriaActiva === 'todas'
              ? 'bg-primary text-on-primary border-primary'
              : 'bg-surface text-on-surface-variant border-outline-variant'
          }`}
        >
          Todas
        </button>
        {CATEGORIAS.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategoriaActiva(cat.id)}
            className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide border-2 transition-colors ${
              categoriaActiva === cat.id
                ? 'bg-primary text-on-primary border-primary'
                : 'bg-surface text-on-surface-variant border-outline-variant'
            }`}
          >
            {cat.nombre}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productosFiltrados.map((burger) => (
          <BurgerCard key={burger.id} burger={burger} />
        ))}
      </div>
    </section>
  );
}