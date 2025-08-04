import './globals.css';
import Header from './Header';
import { CartProvider } from './context/CartContext';

export const metadata = {
  title: 'Music Speaks',
  description: 'Tienda musical online',
  keywords: ['Musica', 'Tienda', 'Cecchin', 'Kuhn'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
