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
    <div className="border rounded p-4">
      <textarea defaultValue={note?.text} className="w-full resize-none" />
      <div className="flex justify-end space-x-2">
        <button className="text-blue-500">Save</button>
        <button className="text-red-500">Delete</button>
      </div>
    </div>
  );
};

export default NoteCard;
