'use client';

import { useEffect, useState } from 'react';
import styles from './carrito.module.scss';
import Link from 'next/link';

function formatARS(n) {
  return n.toLocaleString('es-AR', { minimumFractionDigits: 0 });
}

export default function CarritoPage() {
  const [carrito, setCarrito] = useState([]);

  const fetchCarrito = async () => {
    const res = await fetch('/api/carrito');
    const data = await res.json();
    setCarrito(data);
  };

  useEffect(() => {
    fetchCarrito();
  }, []);


  const eliminarProducto = async (id) => {
    await fetch(`/api/carrito?id=${id}`, { method: 'DELETE' });
    await fetchCarrito();
  };

  const subtotal = carrito.reduce((acc, i) => acc + i.precio * i.cantidad, 0);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>🛒 Tu carrito</h1>

      {carrito.length === 0 ? (
        <>
          <p className={styles.empty}>Tu carrito está vacío.</p>
          <Link href="/productos" className={styles.backLink}>
            ← Volver a productos
          </Link>
        </>
      ) : (
        <div className={styles.grid}>
          {/* Lista de items */}
          <ul className={styles.itemsList}>
            {carrito.map((item) => (
              <li key={item.firebaseId} className={styles.item}>
                <div className="info">
                  <div className="name">{item.nombre}</div>
                  <div className="meta">
                    Cantidad: {item.cantidad} · Precio unitario: ${formatARS(item.precio)}
                  </div>
                </div>
                <div className="price">
                  ${formatARS(item.precio * item.cantidad)}
                </div>
                <button
                  onClick={() => eliminarProducto(item.firebaseId)}
                  style={{
                    marginLeft: '1rem',
                    background: 'transparent',
                    border: 'none',
                    color: '#d9534f',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                  title="Eliminar producto"
                >
                  ✖
                </button>
              </li>
            ))}
          </ul>

          {}
          <aside className={styles.summary}>
            <div className={styles.row}>
              <span>Subtotal</span>
              <span>${formatARS(subtotal)}</span>
            </div>
            <div className={styles.total}>
              <span>Total</span>
              <span>${formatARS(subtotal)}</span>
            </div>
            <button className={styles.cta}>Finalizar compra</button>
            <Link href="/productos" className={styles.backLink}>
              ← Seguir comprando
            </Link>
          </aside>
        </div>
      )}
    </main>
  );
}
