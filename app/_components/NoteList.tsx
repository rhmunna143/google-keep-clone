"use client";

import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';

const NotesList = () => {
  const notes = useQuery(api.notes.get);

  return (
    <div className="grid grid-cols-1 gap-4 mt-4">
      {notes?.map((note) => (
        <div key={note._id} className="p-4 bg-white shadow rounded">
          {note?.title}
          {note?.text}
        </div>
      ))}
    </div>
  );
};

export default NotesList;
