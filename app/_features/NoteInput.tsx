"use client";

import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";

const NoteInput = () => {
  const addNoteMutation = useMutation(api.notes.addNote);

  const handleAddNote = async (noteContent: string) => {
    await addNoteMutation({
      userId: "default", // Replace with actual user ID
      title: "",
      text: noteContent
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a note..."
        onKeyPress={(e) => {
          if (e.key === "Enter") handleAddNote((e.target as HTMLInputElement).value);
        }}
      />
    </div>
  );
};

export default NoteInput;
