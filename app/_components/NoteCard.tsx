"use client";

import React from "react";
import { FaTrash } from "react-icons/fa";

interface Note {
  title?: string;
  text?: string;
  _id: string;
  _creationTime: string;
}

interface NoteCardProps {
  note: Note;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const [isShowOptions, setIsShowOptions] = React.useState(false);

  return (
    <div
      className="border rounded-md p-2 md:p-4 w-full relative"
      onMouseEnter={() => setIsShowOptions(true)}
      onMouseLeave={() => setIsShowOptions(false)}
    >
      <input
        defaultValue={note?.title}
        className="w-full text-lg font-medium px-4 py-1 rounded-t-md"
      />

      <textarea
        defaultValue={note?.text}
        className="w-full resize-none px-4 pt-1 rounded-b-md"
      />

      {/* Option buttons with visibility/opacity transition */}
      <div
        className={`relative right-1 bottom-1 top-1 flex space-x-2 transition-opacity duration-200 ${
          isShowOptions ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button className="text-blue-500"></button>
        <button className="text-red-500">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
