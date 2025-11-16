"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";

const SocialButton = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full flex items-center justify-between gap-2">
        <span className="w-full h-px bg-amber-600 " />
        <p className="text-sm ">OR</p>
        <span className="w-full h-px bg-amber-600 " />
      </div>
      <Button
        variant="outline"
        className="w-full flex items-center justify-center gap-2 mt-1"
      >
        <FcGoogle className="size-5" />
        Sign Up with Google
      </Button>
    </div>
  );
};

export default SocialButton;
