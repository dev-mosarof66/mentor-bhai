"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <div className="absolute top-4 left-4 md:top-10 md:left-20">
      <div
        onClick={() => router.push("/")}
        className="flex items-center rounded-md border border-secondary hover:bg-secondary text-foreground py-1 px-3  active:scale-95 cursor-pointer transition-all duration-300 delay-75"
      >
        <ChevronLeft />
        <p>Back</p>
      </div>
    </div>
  );
};

export default BackButton;
