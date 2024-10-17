"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const { isSignedIn, user } = useUser();

  return (
    <header className="p-4 flex justify-between bg-gray-100 dark:bg-gray-800">
      <div className="text-lg font-bold">Keep Clone</div>
      <input
        type="text"
        placeholder="Search notes..."
        className="border px-2 py-1 rounded"
      />
      <div className="flex items-center space-x-4">
        <DarkModeToggle />
        {/* {isSignedIn ? <div>{user?.username}</div> : <button>Login</button>} */}

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
