"use client";

import { addNote } from "@/convex/notes";
import { useMutation } from "convex/react";

const NoteInput = () => {
  const addNoteMutation = useMutation(addNote);

  const handleAddNote = async (noteContent) => {
    await addNoteMutation({ content: noteContent });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a note..."
        onKeyPress={(e) => {
          if (e.key === "Enter") handleAddNote(e.target.value);
        }}
      />
    </div>
  );
};

export default NoteInput;
