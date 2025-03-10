import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Suspense } from "react";
import { Divide } from "lucide-react";

export default function Navbar() {
  return (
    <Suspense fallback={<div>Loading...</div>}>

    <header className=" flex items-center justify-between xs:flex-row py-2 border-b-2 border-accentDarkSecondary sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
      <nav className=" flex md:flex md:items-center md:justify-center md:gap-x-24 font-bold uppercase">
        <Link href={"/"} className="text-3xl text-dark dark:text-light">
          Zam<span className="text-3xl text-accentDarkPrimary">llex</span>
        </Link>
        {/* <Link href={"/blogs"} className="bg-accentDarkSecondary px-4 py-1 rounded-lg text-dark ">Blogs</Link> */}
      </nav>
      {/* <SocialMedia /> */}
      <ThemeToggle />
    </header>
    </Suspense>
  );
}
