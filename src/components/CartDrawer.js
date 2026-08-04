'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { fmtPrecio } from '@/lib/menu';

export default function CartDrawer() {
  const {
    items, open, setOpen, updateQty, removeItem, total,
    checkoutWhatsapp, entrega, setEntrega,
  } = useCart();
  const [nombreCliente, setNombreCliente] = useState('');
  const [direccion, setDireccion] = useState('');
  const [notas, setNotas] = useState('');

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />

      <div className="relative w-full max-w-md bg-surface h-full overflow-y-auto p-6 border-l-4 border-primary">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-display text-2xl font-bold text-primary">Tu pedido</h2>
          <button onClick={() => setOpen(false)} className="text-primary p-2">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-on-surface-variant text-center py-12">Todavía no agregaste nada 🍔</p>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {items.map((i) => (
                <div key={i.key} className="flex justify-between items-center border-b border-outline-variant pb-3">
                  <div>
                    <p className="font-bold text-sm">{i.nombre}</p>
                    <p className="text-xs text-on-surface-variant">{i.variante} · {fmtPrecio(i.precio)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQty(i.key, -1)} className="w-7 h-7 rounded-full border border-primary text-primary font-bold">−</button>
                    <span className="w-5 text-center text-sm">{i.cantidad}</span>
                    <button onClick={() => updateQty(i.key, 1)} className="w-7 h-7 rounded-full border border-primary text-primary font-bold">+</button>
                    <button onClick={() => removeItem(i.key)} className="ml-2 text-error">
                      <span className="material-symbols-outlined text-lg">delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between font-display text-lg font-bold text-primary mb-6">
              <span>Total</span>
              <span>{fmtPrecio(total)}</span>
            </div>

            {/* Selector de entrega */}
            <div className="mb-5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                Forma de entrega
              </h4>
              <div className="flex gap-2">
                <button
                  onClick={() => setEntrega('retiro')}
                  className={`flex-1 py-3 rounded-lg text-sm font-bold border-2 flex items-center justify-center gap-2 transition-colors ${
                    entrega === 'retiro'
                      ? 'bg-secondary text-on-secondary border-primary'
                      : 'bg-surface-container-low text-on-surface-variant border-outline-variant'
                  }`}
                >
                  <span className="material-symbols-outlined text-lg">storefront</span>
                  Retiro en local
                </button>
                <button
                  onClick={() => setEntrega('delivery')}
                  className={`flex-1 py-3 rounded-lg text-sm font-bold border-2 flex items-center justify-center gap-2 transition-colors ${
                    entrega === 'delivery'
                      ? 'bg-secondary text-on-secondary border-primary'
                      : 'bg-surface-container-low text-on-surface-variant border-outline-variant'
                  }`}
                >
                  <span className="material-symbols-outlined text-lg">moped</span>
                  Delivery
                </button>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <input
                type="text"
                placeholder="Tu nombre"
                value={nombreCliente}
                onChange={(e) => setNombreCliente(e.target.value)}
                className="w-full border-2 border-outline-variant rounded-lg px-3 py-2 text-sm"
              />

              {entrega === 'delivery' && (
                <input
                  type="text"
                  placeholder="Dirección de entrega"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  className="w-full border-2 border-outline-variant rounded-lg px-3 py-2 text-sm"
                />
              )}

              <textarea
                placeholder="Notas (ej: sin cebolla, punto de cocción, etc.)"
                value={notas}
                onChange={(e) => setNotas(e.target.value)}
                rows={2}
                className="w-full border-2 border-outline-variant rounded-lg px-3 py-2 text-sm"
              />
            </div>

            <button
              onClick={() => checkoutWhatsapp({ nombreCliente, direccion, notas })}
              className="w-full bg-secondary text-on-secondary font-display font-bold py-4 rounded-lg shadow-hard hover:translate-y-0.5 hover:shadow-none transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">chat</span>
              Enviar pedido por WhatsApp
            </button>
          </>
        )}
      </div>
    </div>
  );
}