// src/app/api/posts/route.js
import { db } from '@/lib/firebaseConfig'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export async function POST(req) {
  try {
    const body = await req.json()

    const docRef = await addDoc(collection(db, 'posts'), {
      ...body,
      createdAt: serverTimestamp()
    })

    return new Response(JSON.stringify({ id: docRef.id }), {
      status: 200
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500
    })
  }
}
