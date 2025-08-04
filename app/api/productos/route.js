// app/api/productos/route.js
import { NextResponse } from 'next/server';
import { db } from '../../../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const categoria = searchParams.get('categoria');

  const productosRef = collection(db, 'productos');
  const q = categoria
    ? query(productosRef, where('categoria', '==', categoria))
    : query(productosRef);

  const snapshot = await getDocs(q);
  const productos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  return NextResponse.json(productos);
}
