import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "lucide-react";
import React, { useState } from "react";
import SignIn from "../Auth/SignIn";
import { LogoSVG } from "../SVGs";

export default function DashboardNav() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <header className="mx-auto flex max-w-7xl items-baseline justify-between p-5">
        <Link href={"/"} className="text-3xl font-bold">
          <div className="flex items-baseline">
            <LogoSVG className="w-10" />
            Care
            <span className="text-gradient-primary">Pet</span>
          </div>
        </Link>
        <div
          className={`transition-all duration-500 ${
            menuVisible ? "block" : "hidden"
          } space-x-5 text-2xl font-medium md:block`}
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/support"}>Support</Link>
        </div>
        <div
          className={`transition-all duration-500 ${
            menuVisible ? "block" : "hidden"
          } text-2xl font-medium md:block`}
        >
          <SignIn />
        </div>
        <div
          className="cursor-pointer lg:hidden"
          onClick={() => setMenuVisible(!menuVisible)}
        >
          <FontAwesomeIcon
            icon={faBars}
            size="2xl"
            className="active:text-xl"
          />
        </div>
      </header>
    </>
  );
}
