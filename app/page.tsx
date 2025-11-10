"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/theme";

const LandingPage = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full min-h-screen py-20 flex flex-col bg-background gap-2 font-roboto text-foreground`}
    >
      <Button variant={"pink"}>Log In</Button>
      {theme}
    </div>
  );
};

export default LandingPage;
