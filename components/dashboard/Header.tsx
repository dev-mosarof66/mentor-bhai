"use client";
import { authClient } from "@/lib/auth-client";
import ThemeSetter from "../common/theme";
import { Skeleton } from "../ui/skeleton";
import UserProfileButton from "../common/user-profile-button";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { data, isPending } = authClient.useSession();

  return (
    <header className="w-full max-w-7xl sticky top-0 z-50 p-3 sm:px-8  backdrop-blur-sm">
      <ul className=" w-full flex items-center justify-end gap-2 sm:gap-4">
        <li>
          <ThemeSetter />
        </li>
        {isPending ? (
          <li className="size-7 rounded-full border border-secondary animate-pulse">
            <Skeleton />
          </li>
        ) : (
          <li>
            {data && (
              <div
                onClick={() => setShowMenu((showMenu) => !showMenu)}
                className="border border-secondary hover:border-primary active:scale-95 rounded-full cursor-pointer transition-all duration-300 delay-75"
              >
                <UserProfileButton showMenu={showMenu} />
              </div>
            )}
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
