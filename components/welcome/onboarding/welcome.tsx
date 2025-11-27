"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { greet } from "@/utils/greet";

const WelcomeScreen = () => {
  const { data: session } = authClient.useSession();
  const userName = session?.user?.name || "username";

  return (
    <div className="w-full px-6 py-6 max-w-2xl mx-auto">
      {/* Logo + App Name */}
      <div className="flex flex-col items-center gap-2 mb-4">
        <Image
          src={Logo}
          alt="Logo"
          width={60}
          height={60}
          className="animate-[fadeIn_0.6s_ease]"
        />
        <p className="text-3xl font-bold text-primary">Mentor Bhai</p>
      </div>

      {/* Greeting */}
      <div className="flex flex-col gap-3 animate-[fadeIn_0.8s_ease]">
        <h1 className="text-2xl font-semibold">
          {`${greet()}, `}
          <span className="text-secondary">{userName}!</span>
        </h1>

        <p className="text-foreground/90 leading-relaxed">
          Welcome to the assessment onboarding process. This step helps us to
          understand your proficiency level so we can guide you more accurately.
          Please provide all required information to get started.
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
