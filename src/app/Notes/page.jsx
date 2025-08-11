import React from "react";
import NoteCard from "@/components/notesCard";

export default async function NotesPage() {
  const res = await fetch("http://localhost:3000/api/notes", {
    cache: "no-store"
  });
  const data = await res.json();

  return (
    <main className="flex flex-col gap-10 py-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl text-gray-400 cursor-pointer">./<span className="text-blue-700"> notes</span></h1>
        <p className="">This is my journey of trying to be perfect man...</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.data.map((note) => (
          <NoteCard
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
          />
        ))}
      </div>
    </main>
  );
}
