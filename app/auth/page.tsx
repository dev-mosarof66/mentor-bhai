"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInForm from "@/components/auth/sign-in-form";
import Image from "next/image";
import Logo from "@/public/logo.png";
import SocialButton from "@/components/auth/social-button";
import BackButton from "@/components/common/back-button";
import SignUpForm from "@/components/auth/sign-up-form";

const AuthPage = () => {
  return (
    <section className="w-full max-w-md flex items-center justify-center">
      <BackButton />
      <div className="w-full flex flex-col gap-4 p-4 rounded-xl shadow-xl shadow-black/20 dark:shadow-primary/10">
        <Tabs defaultValue="signin" className="w-full flex flex-col gap-4">
          {/* Tabs Navigation */}
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col gap-1 items-center justify-center">
              <Image src={Logo} alt="logo" width={35} height={25} />
              <p>Mentor Bhai</p>
            </div>
            <TabsList className="grid grid-cols-2 w-full border border-primary/20 bg-transparent p-0">
              <TabsTrigger
                value="signin"
                className="cursor-pointer transition-all duration-300 delay-75"
              >
                Sign In
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="cursor-pointer transition-all duration-300 delay-75"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Sign In Form */}
          <TabsContent value="signin">
            <SignInForm />
          </TabsContent>

          {/* Sign Up Form */}
          <TabsContent value="signup" className="space-y-5">
            <SignUpForm />
          </TabsContent>
        </Tabs>
        <div>
          <SocialButton />
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
