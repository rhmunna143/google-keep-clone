import { UserButton } from "@clerk/nextjs";

const Profile = () => {
  return (
    <div className="p-4">
      <h2>Your Profile</h2>
      <UserButton />
    </div>
  );
};

export default Profile;
