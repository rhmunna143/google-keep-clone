import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center max-h-screen w-96 mx-auto">
      <SignUp />
    </div>
  );
}