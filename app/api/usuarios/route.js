
import { auth } from '../../../../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export async function POST(req) {
  const { email, password } = await req.json();
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return Response.json({ uid: userCredential.user.uid });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 400 });
  }
}
