"use client";
import SideBar from "@/components/dashboard/SideBar";
import Header from "@/components/dashboard/Header";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(false);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-background text-foreground">
      <div className="w-full h-full flex gap-2">
        <SideBar />
        <div className="w-full h-[91vh] md:h-[98vh] flex flex-col gap-2 overflow-y-scroll scrollbar-hidden">
          <Header setLoading={setLoading} />
          {children}
        </div>
      </div>
    </div>
  );
}
