"use client";

import React, { useState } from "react";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import useUserId from "../_hooks/useUserId";

const NoteInput = () => {
  const addNoteMutation = useMutation(api.notes.addNote);
  const userId = useUserId();

  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({ title: "", text: "" });

  // Function to handle adding a note
  const handleAddNote = async () => {
    if (note.text.trim() || note.title.trim()) {
      // Ensure the note is not empty
      await addNoteMutation({ ...note, userId });
    }
    setNote({ title: "", text: "" }); // Clear the input fields
    setIsExpanded(false); // Collapse the input area
  };

  // Expand the input field when clicking
  const handleExpand = () => {
    setIsExpanded(true);
  };

  // Handle input field changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  return (
    <div
      className="border rounded-md p-4 w-full max-w-md mx-auto shadow-md"
      onBlur={handleAddNote} // Save the note when the component loses focus
    >
      {/* Only show the title input when expanded */}
      {isExpanded && (
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={handleInputChange}
          placeholder="Title"
          className="w-full text-lg font-medium border-none focus:outline-none"
        />
      )}

      <textarea
        name="text"
        value={note.text}
        onChange={handleInputChange}
        onClick={handleExpand} // Expand on click
        placeholder="Take a note..."
        className="w-full resize-none border-none focus:outline-none"
        rows={isExpanded ? 3 : 1} // Expand the textarea when clicked
      />

      {/* Show the close button when expanded */}
      {isExpanded && (
        <div className="flex justify-end mt-2">
          <button
            onClick={handleAddNote} // Call handleAddNote when clicking close
            className="text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default NoteInput;