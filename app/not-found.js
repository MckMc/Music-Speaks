'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import styles from './not-found.module.scss'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className={styles.notFound}>
      <h1 className={styles.title}>Página no encontrada</h1>
      <p className={styles.description}>
        Lo sentimos, no pudimos encontrar la página que buscabas.
      </p>
      <div className={styles.buttonGroup}>
        <button onClick={() => router.back()} className={styles.button}>
          Volver atrás
        </button>
        <Link href="/" className={styles.button}>
          Ir al inicio
        </Link>
      </div>
    </div>
  )
}
