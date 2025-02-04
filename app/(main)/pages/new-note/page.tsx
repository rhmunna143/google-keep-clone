import * as React from "react";
import NoteInput from "@/app/_components/NoteInput";

const NewNotePage: React.FunctionComponent = () => {
  return (
    <div className="w-fit mx-auto flex flex-col items-center justify-center">
      <NoteInput />
    </div>
  );
};

export default NewNotePage;
