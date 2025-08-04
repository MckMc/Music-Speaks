'use client';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logo}>
              <img
                src="/Logo_MusicSpeaks_Transparente.png"
                alt="Music Speaks Logo"
                className={styles.logoImage}
              />
        </Link>

      </div>
      <nav>
        <ul className={styles.navList}>
          <li><Link href="/" className={styles.navItem}>Home</Link></li>
          <li><Link href="/productos" className={styles.navItem}>Productos</Link></li>
          <li>
            <Link href="/carrito" className={styles.navItem}>
              <FaShoppingCart className={styles.cartIcon} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
