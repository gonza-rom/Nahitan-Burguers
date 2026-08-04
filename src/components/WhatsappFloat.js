'use client';

import { WHATSAPP_NUMBER } from '@/context/CartContext';

export default function WhatsappFloat() {
  const mensaje = '¡Hola! Quiero hacer un pedido en Nahitan Burger\'s 🍔';
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float bg-secondary text-on-secondary rounded-full p-4 shadow-hard border-2 border-primary hover:translate-y-0.5 hover:shadow-none transition-all active:scale-95 flex items-center justify-center"
      aria-label="Pedir por WhatsApp"
    >
      <span className="material-symbols-outlined text-3xl">chat</span>
    </a>
  );
}