'use client';

import { useEffect } from 'react';
import { useCart } from '@/context/CartContext';

export default function CartToast() {
  const { toast, setToast } = useCart();

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 2500);
    return () => clearTimeout(timer);
  }, [toast, setToast]);

  if (!toast) return null;

  const esRemove = toast.tipo === 'remove';

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[70] animate-slide-in">
      <div
        className={`px-5 py-3 rounded-lg shadow-hard border-2 flex items-center gap-3 ${
          esRemove
            ? 'bg-surface text-on-surface border-error'
            : 'bg-primary text-on-primary border-secondary'
        }`}
      >
        <span className={`material-symbols-outlined ${esRemove ? 'text-error' : 'text-secondary'}`}>
          {esRemove ? 'remove_circle' : 'check_circle'}
        </span>
        <p className="text-sm font-semibold">
          {toast.nombre} ({toast.variante}) {esRemove ? 'eliminada del carrito' : 'agregada al carrito'}
        </p>
      </div>
    </div>
  );
}