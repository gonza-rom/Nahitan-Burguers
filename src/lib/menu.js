// lib/menu.js
export const MENU = [
  {
    id: 'nahitan',
    nombre: 'Burger Nahitan',
    ingredientes: ['Triple cheddar Milkau', 'Medallón 120gr', 'Panceta ahumada', 'Cebolla caramelizada', 'Mayo Nahitan'],
    incluye: 'Con papas McCain y dip de mayo.',
    imagen: '/nahitan/nahitan.png',
    precios: { Simple: 13000, Doble: 15000, Triple: 17000 },
  },
  {
    id: 'cheese',
    nombre: 'Burger Cheese',
    ingredientes: ['Cuádruple cheddar Milkau', 'Medallón 120gr', 'Panceta ahumada', 'Barbacoa', 'Mayo Nahitan'],
    incluye: 'Con papas McCain y dip de mayo.',
    imagen: '/cheese/cheese.webp',
    precios: { Simple: 12500, Doble: 14500, Triple: 16500 },
  },
  {
    id: 'cheese-onion',
    nombre: 'Burger Cheese Onion',
    ingredientes: ['Doble cheddar Milkau', 'Medallón 120gr', 'Panceta ahumada', '3 aros de cebolla rebozados', 'Mayo Nahitan'],
    incluye: 'Con papas McCain y dip de mayo.',
    imagen: '/cheese-onion/cheese-onion.webp',
    precios: { Simple: 13150, Doble: 15150, Triple: 17150 },
  },
  {
    id: 'especial',
    nombre: 'Burger Especial',
    ingredientes: ['Triple queso Dambo La Paulina', 'Medallón 120gr', 'Jamón cocido Lario', 'Lechuga fresca', 'Tomate', 'Huevo', 'Mayo Nahitan'],
    incluye: 'Con papas McCain y dip de mayo.',
    imagen: '/especial/especial.png',
    precios: { Simple: 13000, Doble: 15000, Triple: 17000 },
  },
  {
    id: 'de-lujo',
    nombre: 'Burger De Lujo',
    ingredientes: ['Triple cheddar Milkau', 'Medallón 120gr', 'Panceta ahumada', 'Cebolla morada', 'Lechuga fresca', 'Tomate', 'Mayo Nahitan'],
    incluye: 'Con papas McCain y dip de mayo.',
    imagen: '/de-lujo/de-lujo.png',
    precios: { Simple: 14000, Doble: 16000, Triple: 18000 },
  },
  {
    id: 'oklahoma',
    nombre: 'Burger Oklahoma',
    ingredientes: ['Triple cheddar Milkau', 'Medallón smasheado con cebolla', 'Mayo Nahitan'],
    incluye: 'Con papas McCain y dip de mayo.',
    imagen: '/oklahoma/oklahoma.png',
    precios: { Simple: 12000, Doble: 14000, Triple: 16000 },
  },
  {
    id: 'roque',
    nombre: 'Burger Roque',
    ingredientes: ['Medallón 120gr (uno smasheado c/ cebolla y roquefort, otro con Dambo)', 'Panceta ahumada', 'Mayo Nahitan'],
    incluye: 'Con papas McCain y dip de mayo.',
    imagen: '/roque/roque.png',
    precios: { Simple: 15000, Doble: 17000, Triple: 19000 },
  },
  {
    id: 'argentum',
    nombre: 'Burger Argentum',
    ingredientes: ['Medallón 120gr', 'Provoleta', 'Morrones asados', 'Mayo Nahitan'],
    incluye: 'Con papas McCain y dip de mayo.',
    imagen: '/aegentum/aegentum.png',
    precios: { Simple: 13000, Doble: 15500, Triple: 17500 },
  },
];

export function fmtPrecio(n) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency', currency: 'ARS', maximumFractionDigits: 0,
  }).format(n);
}