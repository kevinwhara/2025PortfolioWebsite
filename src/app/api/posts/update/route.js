import { db } from '@/lib/firebaseConfig'
import { doc, updateDoc } from 'firebase/firestore'

export async function POST(req) {
  const { id, title, content } = await req.json()
  const ref = doc(db, 'posts', id)
  await updateDoc(ref, { title, content })
  return Response.json({ status: 'updated' })
}
