import React from "react";

export default async function NoteDetail({ params }) {
  const res = await fetch("http://localhost:3000/api/notes", {
    cache: "no-store"
  });
  const data = await res.json();

  const note = data.data.find((n) => n.id === Number(params.id));

  if (!note) {
    return <div className="p-6 text-red-500">Note not found.</div>;
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{note.title}</h1>
      <p className="text-gray-700 leading-relaxed text-lg">{note.content}</p>
    </main>
  );
}
