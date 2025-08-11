'use client'
import React, { useState } from 'react'
import { useParams } from 'next/navigation'

export default function AdminPage() {
  const params = useParams()
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [content, setContent] = useState('')
  const [tech, setTech] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        slug,
        content,
        tech: tech.split(',').map((t) => t.trim()),
        imageUrl
      })
    })

    const data = await res.json()
    if (res.ok) {
      setMessage('Berhasil disimpan!')
      setTitle('')
      setSlug('')
      setContent('')
      setTech('')
      setImageUrl('')
    } else {
      setMessage('Gagal: ' + data.error)
    }
  }

  if (params.key !== process.env.NEXT_PUBLIC_ADMIN_KEY) {
    return <p className="p-6 text-red-500 font-bold">Akses ditolak</p>
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tambah Postingan</h1>
      {message && <p className="mb-4 text-green-500">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input placeholder="Judul" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2" required />
        <input placeholder="Slug (tanpa spasi)" value={slug} onChange={(e) => setSlug(e.target.value)} className="border p-2" required />
        <textarea placeholder="Konten" value={content} onChange={(e) => setContent(e.target.value)} className="border p-2 h-32" required />
        <input placeholder="Teknologi (pisahkan dengan koma)" value={tech} onChange={(e) => setTech(e.target.value)} className="border p-2" />
        <input placeholder="URL Gambar" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="border p-2" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Simpan</button>
      </form>
    </div>
  )
}
