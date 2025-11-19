"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Logo from "@/public/logo.png";

const WelcomeScreen = () => {
  const { data: session } = authClient.useSession();
  const userName = session?.user?.name || "there";

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Logo and Name */}
      <div className="flex flex-col items-center gap-1">
        <Image src={Logo} alt="Logo" width={45} height={45} />
        <p className="text-2xl font-bold text-orange-600">Mentor Bhai</p>
      </div>

      {/* Greeting */}
      <div className="w-full flex flex-col gap-2 py-3">
        <h1 className="text-xl">
          Welcome,{" "}
          <span className="text-orange-700 dark:text-orange-600">
            {userName}!
          </span>
        </h1>
        <p>
          We&apos;re excited to have you on our platform. Please provide the
          informations to continue with use.
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
