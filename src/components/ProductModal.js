'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { fmtPrecio } from '@/lib/menu';
import { useCart } from '@/context/CartContext';

export default function ProductModal({ burger, onClose }) {
  const variantes = Object.keys(burger.precios);
  const [variante, setVariante] = useState(variantes[0]);
  const { addItem } = useCart();

  // Cerrar con tecla Escape
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Bloquear scroll del body mientras el modal está abierto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  function handleAgregar() {
    addItem(burger, variante);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative bg-surface rounded-xl border-2 border-primary shadow-hard-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-surface text-primary rounded-full p-2 shadow-hard border-2 border-primary hover:bg-primary hover:text-on-primary transition-colors"
          aria-label="Cerrar"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Imagen grande — vista previa */}
        <div className="relative w-full aspect-[4/3] bg-surface-container-high">
          <Image
            src={burger.imagen}
            alt={burger.nombre}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 700px"
            priority
          />
        </div>

        <div className="p-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-3">
            {burger.nombre}
          </h2>

          <ul className="space-y-1.5 mb-4">
            {burger.ingredientes.map((ing, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-base">check</span>
                {ing}
              </li>
            ))}
          </ul>

          <p className="text-sm font-semibold text-secondary mb-6">
            {burger.incluye}
          </p>

          <div className="flex gap-2 mb-5">
            {variantes.map((v) => (
              <button
                key={v}
                onClick={() => setVariante(v)}
                className={`flex-1 py-3 rounded-lg text-sm font-bold uppercase tracking-wide border-2 transition-colors ${
                  variante === v
                    ? 'bg-secondary text-on-secondary border-primary'
                    : 'bg-surface-container-low text-on-surface-variant border-outline-variant'
                }`}
              >
                {v}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="font-price text-2xl font-bold text-primary">
              {fmtPrecio(burger.precios[variante])}
            </span>
            <button
              onClick={handleAgregar}
              className="bg-primary text-on-primary px-6 py-3 rounded-lg font-bold text-sm shadow-hard hover:translate-y-0.5 hover:shadow-none transition-all active:scale-95 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}