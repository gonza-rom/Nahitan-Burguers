import { CartProvider } from '@/context/CartContext';
import './globals.css';

export const metadata = {
  title: "Nahitan Burger's",
  description: 'Pedí tu smash burger favorita y coordinamos por WhatsApp',
  openGraph: {
    title: "Nahitan Burger's",
    description: 'Pedí tu smash burger favorita y coordinamos por WhatsApp',
    url: 'https://nahitanburgers.vercel.app', // reemplazá por tu dominio real
    siteName: "Nahitan Burger's",
    images: [
      {
        url: '/logo-nahitan.jpeg', // idealmente 1200x630px para mejor preview
        width: 1200,
        height: 630,
        alt: "Nahitan Burger's",
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nahitan Burger's",
    description: 'Pedí tu smash burger favorita y coordinamos por WhatsApp',
    images: ['/logo-nahitan.jpeg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&family=Space+Grotesk:wght@400;600;700&family=Anybody:wght@400;700;800&family=Be+Vietnam+Pro:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-body bg-background text-on-background" suppressHydrationWarning>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}