"use client";

import React from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import Image from "next/image";
import NoteCard from "../_components/NoteCard";
import { useUser } from "@clerk/nextjs";
import NoteInput from "../_components/NoteInput";

export default function Home() {
  const { user } = useUser();
  const [loadedUserId, setLoadedUserId] = React.useState("");
  const notes = useQuery(api.notes.get);

  React.useEffect(() => {
    if (user?.id) {
      setLoadedUserId(user.id);
    }
  }, [user]);

  return (
    <section className="flex flex-col">
      <div className="note-input mt-2 md:mt-8 w-fit mx-auto">
        <NoteInput />
      </div>

      <main>
        <div
          className={`grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 min-h-screen lg:p-10 md:p-8 p-4 gap-10 font-[family-name:var(--font-geist-sans)]`}
        >
          {notes
            ?.filter((item) => item.userId === loadedUserId)
            ?.sort(
              (a, b) => new Date(b._creationTime).getTime() - new Date(a._creationTime).getTime()
            ) // Sort by _creationTime (newest first)
            ?.map((note) => <NoteCard key={note._id} note={note} />)}
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </section>
  );
}
