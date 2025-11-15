"use client";
import { Button } from "../ui/button";
import ThemeSetter from "./theme";
import { useRouter } from "next/navigation";
import Logo from "@/public/logo.png";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav
      className={`w-full flex items-center justify-center px-4 py-3 text-foreground fixed top-0 left-0 z-50 backdrop-blur-sm`}
    >
      <header
        className="w-full max-w-7xl mx-auto flex items-center justify-between"
      >
        <ul>
          <li className="flex items-center gap-2 font-semibold">
            <Image
              src={Logo}
              className="w-7 md:w-8 transition-all duration-300 delay-75"
              width={30}
              height={25}
              alt="Logo"
            />
            <span className="text-base text-orange-400 dark:text-orange-100">
              Mentor Bhai
            </span>
          </li>
        </ul>
        <ul className="flex items-center gap-2 sm:gap-4">
          <li>
            <ThemeSetter />
          </li>
          <li onClick={() => router.push("/sign-in")}>
            <Button
              className="px-4 sm:px-6 text-white dark:text-black font-semibold"
              size="sm"
            >
              Login
            </Button>
          </li>
        </ul>
      </header>
    </nav>
  );
};

export default Navbar;
