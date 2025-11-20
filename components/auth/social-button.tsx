"use client";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { Spinner } from "../ui/spinner";

const SocialButton = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const handleSocialLogin = () => {
    authClient.signIn.social(
      {
        provider: "google",
        callbackURL: "/",
      },
      {
        onRequest: () => {
          setLoading(true);
        },
        onSuccess: () => {
          setLoading(false);
        },
        onError: () => {
          setLoading(false);
        },
      }
    );
  };
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full flex items-center justify-between gap-2">
        <span className="w-full h-px bg-secondary " />
        <p className="text-sm ">OR</p>
        <span className="w-full h-px bg-secondary " />
      </div>
      <Button
        variant="outline"
        disabled={loading}
        onClick={handleSocialLogin}
        className="w-full flex items-center justify-center gap-2 mt-1"
      >
        {loading ? (
          <Spinner />
        ) : (
          <>
            <FcGoogle className="size-5" />
            Sign Up with Google
          </>
        )}
      </Button>
    </div>
  );
};

export default SocialButton;
