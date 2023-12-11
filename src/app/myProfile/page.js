import Profile from "./profile";
import { auth } from "../auth";
import { redirect } from "next/navigation";
import Signout from "./sign-out";

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }
  return (
    <>
      <Profile user={session.user}></Profile>
      <Signout />
    </>
  );
}
