"use client";
import { Button } from "@/components/ui/button";

const UserEnglishLevel = ({
  level = "basic",
  setLevel,
}: {
  level: string | null;
  setLevel: (level: string) => void;
}) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <h2 className="text-2xl font-semibold text-orange-600 text-center">
        Select Your Current English Level
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        This helps us customize lessons and practice exercises for you.
      </p>

      <div className="flex justify-around gap-4 mt-4">
        {["Basic", "Intermediate", "Advanced"].map((lvl) => (
          <Button
            key={lvl}
            variant={level?.toLocaleLowerCase() === lvl.toLocaleLowerCase() ? "default" : "outline"}
            onClick={() => setLevel(lvl)}
          >
            {lvl}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default UserEnglishLevel;
