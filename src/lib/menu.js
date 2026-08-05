// lib/menu.js
export const CATEGORIAS = [
  { id: 'burgers', nombre: "Burger's" },
  { id: 'zapping', nombre: 'Zapping' },
  { id: 'lomito', nombre: 'Lomitos' },
];

export const MENU = [
  {
    id: 'nahitan',
    categoria: 'burgers',
    nombre: 'Burger Nahitan',
    ingredientes: ['Triple cheddar Milkau', 'Medallón 120gr', 'Panceta ahumada', 'Cebolla caramelizada', 'Mayo Nahitan'],
    incluye: 'Con papas McCain y dip de mayo.',
    imagen: '/sin-imagen.png',
    precios: { Simple: 13000, Doble: 15000, Triple: 17000 },
  },
  {
    id: 'cheese',
    categoria: 'burgers',
    nombre: 'Burger Cheese',
    ingredientes: ['Cuádruple cheddar Milkau', 'Medallón 120gr', 'Panceta ahumada', 'Barbacoa', 'Mayo Nahitan'],
    incluye: 'Con papas McCain y dip de mayo.',
    imagen: '/sin-imagen.png',
    precios: { Simple: 12500, Doble: 14500, Triple: 16500 },
  },
  {
    id: 'cheese-onion',
    categoria: 'burgers',
    nombre: 'Burger Cheese Onion',
    ingredientes: ['Doble cheddar Milkau', 'Medallón 120gr', 'Panceta ahumada', '3 aros de cebolla rebozados', 'Mayo Nahitan'],
    incluye: 'Con papas McCain y dip de mayo.',
    imagen: '/sin-imagen.png',
    precios: { Simple: 13150, Doble: 15150, Triple: 17150 },
  },
  {
    id: 'especial',
    categoria: 'burgers',
    nombre: 'Burger Especial',
    ingredientes: ['Triple queso Dambo La Paulina', 'Medallón 120gr', 'Jamón cocido Lario', 'Lechuga fresca', 'Tomate', 'Huevo', 'Mayo Nahitan'],
    incluye: 'Con papas McCain y dip de mayo.',
    imagen: '/sin-imagen.png',
    precios: { Simple: 13000, Doble: 15000, Triple: 17000 },
  },
  {
    id: 'de-lujo',
    categoria: 'burgers',
    nombre: 'Burger De Lujo',
    ingredientes: ['Triple cheddar Milkau', 'Medallón 120gr', 'Panceta ahumada', 'Cebolla morada', 'Lechuga fresca', 'Tomate', 'Mayo Nahitan'],
    incluye: 'Con papas McCain y dip de mayo.',
    imagen: '/sin-imagen.png',
    precios: { Simple: 14000, Doble: 16000, Triple: 18000 },
  },
  {
    id: 'oklahoma',
    categoria: 'burgers',
    nombre: 'Burger Oklahoma',
    ingredientes: ['Triple cheddar Milkau', 'Medallón smasheado con cebolla', 'Mayo Nahitan'],
    incluye: 'Con papas McCain y dip de mayo.',
    imagen: '/sin-imagen.png',
    precios: { Simple: 12000, Doble: 14000, Triple: 16000 },
  },
  {
    id: 'roque',
    categoria: 'burgers',
    nombre: 'Burger Roque',
    ingredientes: ['Medallón 120gr (uno smasheado c/ cebolla y roquefort, otro con Dambo)', 'Panceta ahumada', 'Mayo Nahitan'],
    incluye: 'Con papas McCain y dip de mayo.',
    imagen: '/roque/roque-pro.png',
    precios: { Simple: 15000, Doble: 17000, Triple: 19000 },
  },
  {
    id: 'argentum',
    categoria: 'burgers',
    nombre: 'Burger Argentum',
    ingredientes: ['Medallón 120gr', 'Provoleta', 'Morrones asados', 'Mayo Nahitan'],
    incluye: 'Con papas McCain y dip de mayo.',
    imagen: '/sin-imagen.png',
    precios: { Simple: 13000, Doble: 15500, Triple: 17500 },
  },
  {
    id: 'zapping-especial',
    categoria: 'zapping',
    nombre: 'Zapping Especial',
    ingredientes: ['Medallón de carne', 'Lechuga fresca', 'Tomate', 'Jamón cocido Lario', 'Queso cremoso', 'Huevo', 'Mayo Nahitan'],
    incluye: 'Con papas McCain y dip de mayo.',
    imagen: '/sin-imagen.png',
    precios: { Simple: 15000, Doble: 19000 },
  },
  {
    id: 'zapping-cheddar',
    categoria: 'zapping',
    nombre: 'Zapping Cheddar',
    ingredientes: ['Medallón de carne', 'Cheddar Milkau', 'Panceta ahumada', 'Cebolla caramelizada', 'Barbacoa', 'Mayo Nahitan'],
    incluye: 'Con papas McCain y dip de mayo.',
    imagen: '/sin-imagen.png',
    precios: { Simple: 18500, Doble: 22000 },
  },
  {
    id: 'lomito-especial',
    categoria: 'lomito',
    nombre: 'Lomito Especial',
    ingredientes: ['Medallón de carne', 'Lechuga fresca', 'Tomate', 'Jamón cocido Lario', 'Queso Dambo La Paulina', 'Huevo', 'Mayo Nahitan'],
    incluye: 'Con papas McCain y dip de mayo.',
    imagen: '/sin-imagen.png',
    precios: { Simple: 13000 },
  },
];

export function fmtPrecio(n) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency', currency: 'ARS', maximumFractionDigits: 0,
  }).format(n);
}