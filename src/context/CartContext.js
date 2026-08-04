'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { fmtPrecio } from '@/lib/menu';

const CartContext = createContext(null);

// ⚠️ Reemplazá por el número real, formato: 549 + código de área sin 0 + número sin 15
const WHATSAPP_NUMBER = '5493834XXXXXX';

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('nahitan_carrito');
    if (saved) setItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('nahitan_carrito', JSON.stringify(items));
  }, [items]);

  function addItem(burger, variante) {
    const key = `${burger.id}-${variante}`;
    setItems((prev) => {
      const existe = prev.find((i) => i.key === key);
      if (existe) {
        return prev.map((i) => (i.key === key ? { ...i, cantidad: i.cantidad + 1 } : i));
      }
      return [
        ...prev,
        {
          key,
          burgerId: burger.id,
          nombre: burger.nombre,
          variante,
          precio: burger.precios[variante],
          cantidad: 1,
        },
      ];
    });
    setOpen(true);
  }

  function updateQty(key, delta) {
    setItems((prev) =>
      prev
        .map((i) => (i.key === key ? { ...i, cantidad: i.cantidad + delta } : i))
        .filter((i) => i.cantidad > 0)
    );
  }

  function removeItem(key) {
    setItems((prev) => prev.filter((i) => i.key !== key));
  }

  function clearCart() {
    setItems([]);
  }

  const total = items.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
  const cantidadTotal = items.reduce((acc, i) => acc + i.cantidad, 0);

  function checkoutWhatsapp({ nombreCliente = '', direccion = '', notas = '' } = {}) {
    if (items.length === 0) return;

    let msg = `🍔 *Pedido - Nahitan Burger's*\n\n`;
    items.forEach((i) => {
      msg += `${i.cantidad}x ${i.nombre} (${i.variante}) - ${fmtPrecio(i.precio * i.cantidad)}\n`;
    });
    msg += `\n*Total: ${fmtPrecio(total)}*\n`;
    if (nombreCliente) msg += `\n👤 Nombre: ${nombreCliente}`;
    if (direccion) msg += `\n📍 Dirección: ${direccion}`;
    if (notas) msg += `\n📝 Notas: ${notas}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  }

  return (
    <CartContext.Provider
      value={{ items, addItem, updateQty, removeItem, clearCart, total, cantidadTotal, open, setOpen, checkoutWhatsapp }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>');
  return ctx;
}