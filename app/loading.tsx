"use client";

import { Spinner } from "@/components/ui/spinner";

const Loading = () => {
  return (
    <div className="w-full h-screen bg-white dark:bg-gray-950 text-black dark:text-white flex items-center  justify-center">
      <Spinner />
    </div>
  );
};

export default Loading;
