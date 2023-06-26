import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoldenRetrieverSVG from "~/components/SVGs/GoldenRetriever.svg";
import { Button } from "@/components/ui/button";

const Home = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <main>Loading...</main>;
  }

  return (
    <>
      <main className="mx-auto mt-3 max-w-7xl justify-between p-5 md:flex">
        <div className="w-fit flex-col justify-evenly md:flex">
          <h1 className="scroll-m-20 text-4xl font-extrabold lg:text-5xl">
            Welcome to Care<span className="text-gradient-primary">Pet</span>,
            Where&nbsp;
            <span className="text-gradient-primary">Pets</span> Are Treated Like
            Family
          </h1>
          <p className="mt-6 border-l-2 pl-6 italic">
            This is your One-Stop Pet Care Destination for Everything You need
            for Your Pet.
          </p>

          <Button className={`buttonVariants({ size: "lg" }) mt-5 p-5 text-xl`}>
            Sign Up Now
          </Button>
        </div>
        <div>
          <GoldenRetrieverSVG />
        </div>
      </main>
    </>
  );
};

export default Home;

/* const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={
          sessionData ? () => void signOut() : () => void signIn("discord")
        }
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}; */
