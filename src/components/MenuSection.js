'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { MENU, CATEGORIAS, fmtPrecio } from '@/lib/menu';
import { useCart } from '@/context/CartContext';
import ProductModal from '@/components/ProductModal';

function BurgerCard({ burger, onOpen }) {
  const variantes = Object.keys(burger.precios);
  const [variante, setVariante] = useState(variantes[0]);
  const { addItem } = useCart();

  return (
    <div className="bg-surface rounded-xl border-2 border-primary shadow-hard overflow-hidden flex flex-col">
      <button
        onClick={() => onOpen(burger)}
        className="relative w-full aspect-[4/3] bg-surface-container-high group cursor-zoom-in"
        aria-label={`Ver ${burger.nombre}`}
      >
        <Image
          src={burger.imagen}
          alt={burger.nombre}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity text-3xl">
            zoom_in
          </span>
        </div>
      </button>

      <div className="p-5 flex flex-col flex-grow">
        <button
          onClick={() => onOpen(burger)}
          className="text-left font-display text-xl font-bold text-primary mb-2 hover:underline"
        >
          {burger.nombre}
        </button>
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

const RANGOS_PRECIO = [
  { id: 'todos', nombre: 'Todos los precios' },
  { id: 'hasta-15000', nombre: 'Hasta $15.000', max: 15000 },
  { id: '15000-20000', nombre: '$15.000 - $20.000', min: 15000, max: 20000 },
  { id: 'mas-20000', nombre: 'Más de $20.000', min: 20000 },
];

const ORDENES = [
  { id: 'relevancia', nombre: 'Relevancia' },
  { id: 'menor-precio', nombre: 'Menor precio' },
  { id: 'mayor-precio', nombre: 'Mayor precio' },
];

function precioDesde(burger) {
  return Math.min(...Object.values(burger.precios));
}

export default function MenuSection() {
  const [categoriaActiva, setCategoriaActiva] = useState('todas');
  const [precioActivo, setPrecioActivo] = useState('todos');
  const [orden, setOrden] = useState('relevancia');
  const [filtrosAbiertos, setFiltrosAbiertos] = useState(false);
  const [productoActivo, setProductoActivo] = useState(null);
  const panelRef = useRef(null);

  useEffect(() => {
    function alClickearFuera(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setFiltrosAbiertos(false);
      }
    }
    document.addEventListener('mousedown', alClickearFuera);
    return () => document.removeEventListener('mousedown', alClickearFuera);
  }, []);

  const rango = RANGOS_PRECIO.find((r) => r.id === precioActivo);

  const productosFiltrados = MENU.filter((b) => {
    const coincideCategoria = categoriaActiva === 'todas' || b.categoria === categoriaActiva;
    const desde = precioDesde(b);
    const coincidePrecio =
      precioActivo === 'todos' ||
      ((rango.min === undefined || desde > rango.min) && (rango.max === undefined || desde <= rango.max));
    return coincideCategoria && coincidePrecio;
  });

  if (orden === 'menor-precio') {
    productosFiltrados.sort((a, b) => precioDesde(a) - precioDesde(b));
  } else if (orden === 'mayor-precio') {
    productosFiltrados.sort((a, b) => precioDesde(b) - precioDesde(a));
  }

  const filtrosActivos =
    (categoriaActiva !== 'todas' ? 1 : 0) +
    (precioActivo !== 'todos' ? 1 : 0) +
    (orden !== 'relevancia' ? 1 : 0);

  function limpiarFiltros() {
    setCategoriaActiva('todas');
    setPrecioActivo('todos');
    setOrden('relevancia');
  }

  return (
    <section id="menu" className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl scroll-mt-24">
      <div className="text-center mb-8">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary uppercase tracking-tight">
          Nuestro Menú
        </h2>
        <p className="text-on-surface-variant mt-2">Elegí tu categoría y armá tu pedido</p>
        <div className="w-24 h-1 bg-secondary mx-auto mt-4 rounded-full" />
      </div>

      <div ref={panelRef} className="relative flex justify-center mb-10">
        <button
          onClick={() => setFiltrosAbiertos((v) => !v)}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide border-2 transition-colors ${
            filtrosAbiertos
              ? 'bg-primary text-on-primary border-primary'
              : 'bg-surface text-on-surface-variant border-outline-variant'
          }`}
          aria-expanded={filtrosAbiertos}
        >
          <span className="material-symbols-outlined text-lg">tune</span>
          Filtros
          {filtrosActivos > 0 && (
            <span className="bg-secondary text-on-secondary text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {filtrosActivos}
            </span>
          )}
        </button>

        {filtrosAbiertos && (
          <div className="absolute top-full mt-2 z-20 w-[min(90vw,28rem)] bg-surface rounded-xl border-2 border-primary shadow-hard-lg p-md">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-primary">Filtros</h3>
              {filtrosActivos > 0 && (
                <button
                  onClick={limpiarFiltros}
                  className="text-xs font-semibold text-secondary hover:underline"
                >
                  Limpiar filtros
                </button>
              )}
            </div>

            <p className="text-xs font-bold uppercase tracking-wide text-on-surface-variant mb-2">Categoría</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                onClick={() => setCategoriaActiva('todas')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border-2 transition-colors ${
                  categoriaActiva === 'todas'
                    ? 'bg-primary text-on-primary border-primary'
                    : 'bg-surface-container-low text-on-surface-variant border-outline-variant'
                }`}
              >
                Todas
              </button>
              {CATEGORIAS.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategoriaActiva(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border-2 transition-colors ${
                    categoriaActiva === cat.id
                      ? 'bg-primary text-on-primary border-primary'
                      : 'bg-surface-container-low text-on-surface-variant border-outline-variant'
                  }`}
                >
                  {cat.nombre}
                </button>
              ))}
            </div>

            <p className="text-xs font-bold uppercase tracking-wide text-on-surface-variant mb-2">Precio</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {RANGOS_PRECIO.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setPrecioActivo(r.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border-2 transition-colors ${
                    precioActivo === r.id
                      ? 'bg-secondary text-on-secondary border-primary'
                      : 'bg-surface-container-low text-on-surface-variant border-outline-variant'
                  }`}
                >
                  {r.nombre}
                </button>
              ))}
            </div>

            <p className="text-xs font-bold uppercase tracking-wide text-on-surface-variant mb-2">Ordenar por</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {ORDENES.map((o) => (
                <button
                  key={o.id}
                  onClick={() => setOrden(o.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border-2 transition-colors ${
                    orden === o.id
                      ? 'bg-secondary text-on-secondary border-primary'
                      : 'bg-surface-container-low text-on-surface-variant border-outline-variant'
                  }`}
                >
                  {o.nombre}
                </button>
              ))}
            </div>

            <button
              onClick={() => setFiltrosAbiertos(false)}
              className="w-full bg-primary text-on-primary py-2 rounded-lg font-bold text-sm shadow-hard hover:translate-y-0.5 hover:shadow-none transition-all active:scale-95"
            >
              Ver resultados
            </button>
          </div>
        )}
      </div>

      {productosFiltrados.length === 0 ? (
        <p className="text-center text-on-surface-variant font-semibold">
          No hay productos con esos filtros.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productosFiltrados.map((burger) => (
            <BurgerCard key={burger.id} burger={burger} onOpen={setProductoActivo} />
          ))}
        </div>
      )}

      {productoActivo && (
        <ProductModal burger={productoActivo} onClose={() => setProductoActivo(null)} />
      )}
    </section>
  );
}