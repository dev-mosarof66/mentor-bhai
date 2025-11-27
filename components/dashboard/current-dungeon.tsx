"use client";
import { dummyDungeon } from "@/public/dungeon";
import { Card, CardContent, CardHeader } from "../ui/card";
import { FaPlay } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const CurrentDungeon = () => {
  const dungeon = dummyDungeon;
  const router = useRouter();

  const sections = [
    { name: "Vocabulary", count: dungeon.dungeon.vocabulary.length },
    { name: "Phrasal Verb", count: dungeon.dungeon.phrasal_verbs.length },
    { name: "Writing", count: 0 },
    { name: "Reading", count: 1 },
    { name: "Listening", count: 0 },
    { name: "Speaking", count: 0 },
  ];

  return (
    <Card className="w-full border-2 border-primary bg-linear-to-br from-primary to-secondary text-foreground p-0 rounded-xl shadow-lg shadow-black/80 overflow-hidden">
      <div className="p-3 sm:p-4 w-full flex flex-col gap-2">
        {/* Header */}
        <CardHeader className="p-0">
          <div className="w-full flex items-center justify-between  text-background">
            <p className="text-lg font-bold truncate">
              {dungeon.dungeon_title}
            </p>
            <div className="flex items-center gap-4">
              <button
                title="Start"
                type="button"
                onClick={() => {
                  router.push("/dungeon/current");
                }}
                className="border-2 border-amber-400 rounded-full p-1 bg-transparent text-background hover:bg-amber-700 cursor-pointer hover:text-white active:scale-95 transition-all duration-300 delay-75"
              >
                <FaPlay />
              </button>
            </div>
          </div>
        </CardHeader>

        {/* Info */}
        <CardContent className="p-0">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 text-background">
            <div className="w-full flex flex-col gap-2">
              <div className="flex items-center gap-6 font-bold">
                <p className="text-sm font-bold">Level: {dungeon.rank}</p>
                <p className="text-sm font-bold">Duration: {dungeon.duration}</p>
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-white font-truncate">
                  {dungeon.description}
                </p>
              </div>
            </div>
            {/* Sections */}
            <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 gap-2">
              {sections.map((section) => (
                <div
                  key={section.name}
                  className="bg-white/20 rounded-md flex items-center gap-4 justify-center text-white text-sm p-2 shadow-md font-semibold"
                >
                  <p>{section.name} </p>
                  <p className="font-bold">{section.count}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default CurrentDungeon;
