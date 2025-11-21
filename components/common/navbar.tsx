"use client";
import ThemeSetter from "./theme";
import { useRouter } from "next/navigation";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import UserProfileButton from "./user-profile-button";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { AuthButton } from "../landing/animated-button";

const Navbar = () => {
  const router = useRouter();
  const { data, isPending } = authClient.useSession();
  const user = data?.user;
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <nav
      className={`w-full flex items-center justify-center px-4 py-3 text-foreground fixed top-0 left-0 z-50 backdrop-blur-sm`}
    >
      <header className="w-full max-w-7xl mx-auto flex items-center justify-between relative">
        <ul>
          <li className="flex items-center gap-1 font-semibold">
            <Image
              src={Logo}
              className="w-6 sm:w-7 transition-all duration-300 delay-75"
              width={30}
              height={25}
              alt="Logo"
            />
            <span className="text-base  sm:block text-primary">
              Mentor Bhai
            </span>
          </li>
        </ul>
        <ul className="flex items-center gap-2 sm:gap-4">
          <li>
            <ThemeSetter />
          </li>
          {isPending ? (
            <li className="size-7 rounded-full border border-secondary bg-primary animate-pulse">
              <Skeleton />
            </li>
          ) : (
            <li>
              {data ? (
                <div onClick={() => setShowMenu((showMenu) => !showMenu)}>
                  <UserProfileButton
                    showMenu={showMenu}
                    setLoading={() => {}}
                  />
                </div>
              ) : (
                <AuthButton
                  onClick={() =>
                    user ? router.push("/dashboard") : router.push("/auth")
                  }
                  className="w-fit py-2 px-4 cursor-pointer transition-all duration-300 delay-75"
                  gradient="bg-linear-to-r from-black via-red-400 to-blue-500 text-sm"
                >
                  <p className="text-xs sm:text-sm">Get Started</p>
                </AuthButton>
              )}
            </li>
          )}
        </ul>
      </header>
    </nav>
  );
};

export default Navbar;
