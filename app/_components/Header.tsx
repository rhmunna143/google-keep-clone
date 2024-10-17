"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import { useUser } from "@clerk/nextjs";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  // const { isSignedIn, user } = useUser();

  return (
    <header className="p-4 flex justify-between dark:bg-gray-900">
      <div className="text-lg font-bold text-white">KeepSion</div>

      <input
        type="text"
        placeholder="Search notes..."
        className="border px-2 py-1 rounded"
      />

      <div className="flex items-center space-x-4 text-white">

        <DarkModeToggle />

        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
