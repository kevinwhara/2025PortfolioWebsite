import { db } from '@/lib/firebaseConfig'
import { doc, deleteDoc } from 'firebase/firestore'

export async function POST(req) {
  const { id } = await req.json()
  const ref = doc(db, 'posts', id)
  await deleteDoc(ref)
  return Response.json({ status: 'deleted' })
}
