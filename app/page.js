import styles from './main.module.scss';
import Link from 'next/link';

export const metadata = {
  title: "Music Speaks",
  description: "Descubrí instrumentos, equipos y accesorios que hacen vibrar tu pasión por la música.",
  keywords: ['Musica', 'Tienda', 'Cecchin', 'Kuhn'],
};
export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <h1>Music Speaks</h1>
        <p>Descubrí instrumentos, equipos y accesorios que hacen vibrar tu pasión por la música.</p>
        <Link href="/productos" className={styles.cta}>Explorar productos</Link>
      </section>

      <section className={styles.featured}>
      </section>
    </main>
  );
}
