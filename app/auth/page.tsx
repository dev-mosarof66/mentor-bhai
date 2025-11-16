"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SignInForm from "@/components/auth/sign-in-form";
import Image from "next/image";
import Logo from "@/public/logo.png";
import SocialButton from "@/components/auth/social-button";

const AuthPage = () => {
  return (
    <section className="w-full max-w-md flex items-center justify-center">
      <div className="w-full h-full flex flex-col gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-neutral-900">
        <Tabs defaultValue="signin" className="w-full flex flex-col gap-4">
          {/* Tabs Navigation */}
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col items-center justify-center">
              <Image src={Logo} alt="logo" width={35} height={25} />
              <p>Mentor Bhai</p>
            </div>
            <TabsList className="grid grid-cols-2 w-full">
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
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <Input type="text" placeholder="John Doe" className="mt-1" />
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Password</label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="mt-1"
                />
              </div>
            </div>

            <Button className="w-full bg-orange-600 hover:bg-orange-700">
              Create Account
            </Button>
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
