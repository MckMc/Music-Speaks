import ProductCard from '@/components/ProductCards';
import styles from '@/productos.module.scss';
import Link from 'next/link';

async function getProductos() {
  const res = await fetch('http://localhost:3000/api/productos', {
    cache: 'no-store',
  });
  return res.json();
}

export default async function ProductosPage() {
  const productos = await getProductos();
  return (
    <main className={styles.main}>
      <aside className={styles.sidebar}>
        <h3>Categorías</h3>
        <ul>
          <li><Link href="/productos/categoria/baterias">Baterías</Link></li>
          <li><Link href="/productos/categoria/guitarras">Guitarras</Link></li>
          <li><Link href="/productos/categoria/auriculares">Auriculares</Link></li>
          <li><Link href="/productos/categoria/microfonos">Micrófonos</Link></li>
        </ul>
      </aside>

      <section>
        <h1>Todos los productos</h1>
        <div className={styles.productosGrid}>
          {productos.map((prod) => (
            <ProductCard key={prod.id} producto={prod} />
          ))}
        </div>
      </section>
    </main>
  );
}

