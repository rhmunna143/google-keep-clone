import React from "react";

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
  return (
    <div className="border rounded-md p-2 w-full">
      
        <input
          defaultValue={note?.title}
          className="w-full text-lg font-medium p-4 rounded-t-md"
        />

        <textarea
          defaultValue={note?.text}
          className="w-full resize-none px-4 py-1 rounded-b-md"
        />

        <div className="flex justify-end space-x-2">
          <button className="text-blue-500">Save</button>
          <button className="text-red-500">Delete</button>
        </div>
      </div>
  
  );
};

export default NoteCard;
