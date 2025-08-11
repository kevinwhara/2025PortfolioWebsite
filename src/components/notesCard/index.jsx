import React from "react";
import Link from "next/link";

const NoteCard = ({ id, title, content }) => {
  return (
    <Link href={`/notes/${id}`}>
      <div className="flex flex-col gap-1 bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer">
        <h2 className="truncate max-w-96 text-lg font-semibold text-gray-800 mb-3 ">{title}</h2>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
          {content}
        </p>
      </div>
    </Link>
  );
};

export default NoteCard;
