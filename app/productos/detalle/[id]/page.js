import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../firebase/config';
import styles from './detalle.module.scss';

export default async function ProductoDetalle({ params }) {
  const docRef = doc(db, 'productos', params.id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return <p>Producto no encontrado</p>;
  }

  const producto = docSnap.data();

  return (
    <div className={styles.detalle}>
      <img src={producto.imagen} alt={producto.nombre} />
      <h1>{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
      <strong>${producto.precio}</strong>

      {producto.colores?.length > 0 && (
        <div className={styles.colores}>
          <p>Colores disponibles:</p>
          {producto.colores.map((color, i) => (
            <button key={i} style={{ backgroundColor: color.hex }}>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


