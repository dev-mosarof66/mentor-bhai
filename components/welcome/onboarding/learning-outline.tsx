import { Button } from "@/components/ui/button";

const LearningOutline = ({
  preference,
  setPreference,
}: {
  preference: string | null;
  setPreference: (prev: string) => void;
}) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <h2 className="text-2xl font-semibold text-primary text-center">
        Choose Your Learning Path
      </h2>
      <p className="text-foreground/80">
        Select whether you want to focus on IELTS preparation or Academic
        English.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* IELTS Button */}
        <Button
          variant={preference === "IELTS" ? "default" : "outline"}
          onClick={() => setPreference("IELTS")}
          className="relative flex items-center gap-2 px-3"
          disabled
        >
          IELTS
          <span className="text-xs bg-yellow-500 text-white px-2 py-0.5 rounded-full">
            Upcoming
          </span>
        </Button>

        {/* Academic English Button */}
        <Button
          variant={preference === "Academic" ? "default" : "outline"}
          onClick={() => setPreference("Academic")}
          className="px-3"
        >
          Academic English
        </Button>
      </div>
    </div>
  );
};

export default LearningOutline;
