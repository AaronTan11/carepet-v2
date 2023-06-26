import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signIn, signOut, useSession } from "next-auth/react";

export default function SignUp() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <main>Loading...</main>;
  }
  return (
    <>
      {session ? (
        <>
          <Avatar>
            <AvatarImage src={session.user.image!} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <button
            onClick={() => {
              signOut().catch(console.log);
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <Button
          onClick={() => {
            signIn("discord").catch(console.log);
          }}
          className="w-fit px-3 text-base font-semibold"
        >
          Sign In
        </Button>
      )}
    </>
  );
}
