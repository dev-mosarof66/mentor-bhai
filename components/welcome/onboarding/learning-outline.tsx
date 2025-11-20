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

      <div className="flex items-center gap-4">
        <Button
          variant={preference === "IELTS" ? "default" : "outline"}
          onClick={() => setPreference("IELTS")}
          className="relative"
        >
          IELTS
          <span className="">upcoming</span>
        </Button>
        <Button
          variant={preference === "Academic" ? "default" : "outline"}
          onClick={() => setPreference("Academic")}
        >
          Academic English
        </Button>
      </div>
    </div>
  );
};

export default LearningOutline;
