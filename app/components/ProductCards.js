'use client';
import { useState } from 'react';
import styles from './ProductCards.module.scss';
import Link from 'next/link';

export default function ProductCard({ producto }) {
  const [cantidad, setCantidad] = useState(1);

  const incrementar = () => setCantidad(c => c + 1);
  const decrementar = () => setCantidad(c => (c > 1 ? c - 1 : 1));

  const agregarAlCarrito = async () => {
    const item = { ...producto, cantidad };
    await fetch('/api/carrito', {
      method: 'POST',
      body: JSON.stringify(item)
    });
    alert(`${cantidad} ${producto.nombre} agregado(s) al carrito`);
  };

  return (
    <div className={styles.card}>
    <Link href={`/productos/detalle/${producto.id}`}>
    <div>
      <img className='img' src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p><strong>${producto.precio}</strong></p>
      </div>
    </Link>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
        <button onClick={decrementar}>-</button>
        <span>{cantidad}</span>
        <button onClick={incrementar}>+</button>
      </div>

      <button onClick={agregarAlCarrito} style={{ marginTop: '0.5rem' }}>
        Agregar al carrito
      </button>
    </div>
  );
}
