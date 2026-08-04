import { CartProvider } from '@/context/CartContext';
import './globals.css';

export const metadata = {
  title: "Nahitan Burger's",
  description: 'Pedí tu smash burger favorita y coordinamos por WhatsApp',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&family=Space+Grotesk:wght@400;600;700&family=Anybody:wght@400;700;800&family=Be+Vietnam+Pro:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-body bg-background text-on-background">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}