"use client";

import { Spinner } from "@/components/ui/spinner";

const Loading = () => {
  return (
    <div className="w-full h-screen bg-background text-foreground flex items-center  justify-center">
      <Spinner />
    </div>
  );
};

export default Loading;
