import ProductCard from '../../../components/ProductCards';
import styles from '../../../productos.module.scss';
import { notFound } from 'next/navigation';

export default async function CategoriaPage({ params }) {
  const res = await fetch('http://localhost:3000/api/productos', {
    cache: 'no-store'
  });

  if (!res.ok) {
    console.error('Error al obtener productos:', res.statusText);
    return <p>Error al cargar productos.</p>;
  }

  const productos = await res.json();

  const categoriasValidas = ['baterias', 'guitarras', 'auriculares', 'microfonos'];
  if (!categoriasValidas.includes(params.categoria)) return notFound();

  const filtrados = productos.filter(p => p.categoria === params.categoria);

  return (
    <main className={styles.main}>
      <h1>Productos de {params.categoria}</h1>
      <div className={styles.productosGrid}>
        {filtrados.length > 0 ? (
          filtrados.map(prod => (
            <ProductCard key={prod.id} producto={prod} />
          ))
        ) : (
          <p>No hay productos en esta categoría.</p>
        )}
      </div>
    </main>
  );
}

