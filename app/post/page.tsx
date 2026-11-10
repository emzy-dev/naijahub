import { auth } from "@/auth";
import Post from "./post";
import { redirect } from "next/navigation";

export default async function ServerPage () {
  const session = await auth();
  
  if(!session) {
    redirect("/signin");
  }

  return (
    <main>
      <Post session={session} />
    </main>
  );
}