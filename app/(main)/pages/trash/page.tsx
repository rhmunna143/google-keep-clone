"use client";

import { useQuery } from "convex/react";
import React from "react";

interface Note {
  _id: string;
  title?: string;
  text?: string;
  _creationTime: string;
}

interface TrashPageProps {
  note: Note;
}

const TrashPage: React.FC<TrashPageProps> = () => {
  const trashNotes = useQuery(getDeletedNotes);

  return (
    <div className="p-4">
      {trashNotes?.map((note: Note) => (
        <div key={note._id} className="border p-4 bg-gray-50">
          {note.text}
          <div className="flex justify-end space-x-2">
            <button className="text-green-500">Restore</button>
            <button className="text-red-500">Delete Forever</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrashPage;
