import Image from "next/image";
import Link from "next/link";
import SignIn from "../Auth/SignIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { LogoSVG } from "../SVGs";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <header className="mx-auto flex max-w-7xl items-baseline justify-between p-5">
        <Link href={"/"} className="text-2xl font-bold">
          <div className="flex items-baseline">
            <LogoSVG className="w-10" />
            Care
            <span className="text-gradient-primary">Pet</span>
          </div>
        </Link>
        <div className="hidden space-x-5 text-xl font-medium md:block">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/support"}>Support</Link>
        </div>
        <div className="text-xl font-medium">
          <SignIn />
        </div>
      </header>
    </>
  );
}
