import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const data = await req.json();
    await addDoc(collection(db, 'carrito'), data);
    return NextResponse.json({ message: 'Producto agregado al carrito' });
  } catch (error) {
    console.error('Error al agregar al carrito:', error);
    return NextResponse.json({ error: 'Error al agregar al carrito' }, { status: 500 });
  }
}

// GET:
export async function GET() {
  try {
    const snapshot = await getDocs(collection(db, 'carrito'));
    const productos = snapshot.docs.map(doc => ({
      firebaseId: doc.id,
      ...doc.data()
    }));

    return NextResponse.json(productos);
  } catch (error) {
    console.error('Error al obtener productos del carrito:', error);
    return NextResponse.json({ error: 'Error al obtener productos del carrito' }, { status: 500 });
  }
}
// DELETE:
export async function DELETE(req) {
  try {
    const id = req.nextUrl.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID requerido' }, { status: 400 });
    }

    await deleteDoc(doc(db, 'carrito', id));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al eliminar producto del carrito:', error);
    return NextResponse.json({ error: 'Error al eliminar producto' }, { status: 500 });
  }
}


