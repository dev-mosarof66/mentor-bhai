"use client";
import { Button } from "../ui/button";
import ThemeSetter from "./theme";
import { useRouter } from "next/navigation";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import UserProfileButton from "./user-profile-button";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";

const Navbar = () => {
  const router = useRouter();
  const { data, isPending } = authClient.useSession();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <nav
      className={`w-full flex items-center justify-center px-4 py-3 text-foreground fixed top-0 left-0 z-50 backdrop-blur-sm`}
    >
      <header className="w-full max-w-7xl mx-auto flex items-center justify-between relative">
        <ul>
          <li className="flex items-center gap-2 font-semibold">
            <Image
              src={Logo}
              className="w-7 md:w-8 transition-all duration-300 delay-75"
              width={30}
              height={25}
              alt="Logo"
            />
            <span className="text-base  sm:block text-orange-400 dark:text-orange-100">
              Mentor Bhai
            </span>
          </li>
        </ul>
        <ul className="flex items-center gap-2 sm:gap-4">
          <li>
            <ThemeSetter />
          </li>
          {isPending ? (
            <li className="size-8 rounded-full border border-amber-300 bg-purple-950 animate-pulse">
              <Skeleton />
            </li>
          ) : (
            <li>
              {data ? (
                <div
                  onClick={() => setShowMenu((showMenu) => !showMenu)}
                  className="border border-orange-600 hover:border-orange-700 active:scale-95 rounded-full cursor-pointer transition-all duration-300 delay-75"
                >
                  <UserProfileButton showMenu={showMenu} />
                </div>
              ) : (
                <Button
                  onClick={() => router.push("/auth")}
                  className="px-4 sm:px-6 text-xs sm:text-sm text-white dark:text-black font-semibold"
                  size="sm"
                >
                  Get Started
                </Button>
              )}
            </li>
          )}
        </ul>
      </header>
    </nav>
  );
};

export default Navbar;
