"use client";

import { addNote } from "@/convex/notes";
import { useMutation } from "convex/react";

const NoteInput = () => {
  const addNoteMutation = useMutation(addNote);

  const handleAddNote = async (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      await addNoteMutation({ content: e.target.value });
      e.target.value = ""; // Clear input field
    }
  };

  return (
    <input
      type="text"
      placeholder="Add a new note..."
      onKeyPress={handleAddNote}
      className="border px-2 py-1 rounded w-full"
    />
  );
};

export default NoteInput;