"use client";

import React, { useState, useRef } from "react";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import useUserId from "../_hooks/useUserId";

const NoteInput = () => {
  const addNoteMutation = useMutation(api.notes.addNote);
  const userId = useUserId();
  const containerRef = useRef(null);

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

  // Handle when the user clicks outside the component
  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.relatedTarget)
    ) {
      handleAddNote(); // Only call handleAddNote if focus leaves the entire component
    }
  };

  return (
    <div
      className="border rounded-md p-4 w-96 md:w-[600px] mx-auto shadow-md"
      onBlur={handleBlur} // Save the note when the entire component loses focus
      ref={containerRef}
      tabIndex={-1} // Ensure that the component can track focus
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
        className="w-full resize-none border-none focus:outline-none mt-1"
        rows={isExpanded ? 3 : 1} // Expand the textarea when clicked
      />

      {/* Show the close button when expanded */}
      {isExpanded && (
        <div className="flex justify-end mt-2">
          <button
            onMouseDown={(e) => {
              e.preventDefault(); // Prevent blur event from firing
              handleAddNote();
            }} // Call handleAddNote when clicking close
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