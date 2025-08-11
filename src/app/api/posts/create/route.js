import { db } from '@/lib/firebaseConfig'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

export async function POST(req) {
  const { title, content } = await req.json()
  const docRef = await addDoc(collection(db, 'posts'), {
    title,
    content,
    createdAt: Timestamp.now(),
  })
  return Response.json({ id: docRef.id })
}
