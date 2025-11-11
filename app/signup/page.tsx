"use client";

import { SignupForm } from "@/components/auth/signup-form";

const SignUpPage = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
      <SignupForm />
      <p className="w-full max-w-md mx-auto text-center text-gray-600 dark:text-gray-400 px-2">
        By clicking continue, you agree to our{" "}
        <a href="#" className="underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="underline">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
};

export default SignUpPage;
