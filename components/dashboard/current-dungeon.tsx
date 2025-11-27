"use client";
import { dummyDungeon } from "@/public/dummy";
import { Card, CardContent, CardHeader } from "../ui/card";
import { FaPlay } from "react-icons/fa6";

const CurrentDungeon = () => {
  const dungeon = dummyDungeon[0];

  const sections = [
    { name: "Vocabulary", count: dungeon.vocabo.length },
    { name: "Phrasal Verb", count: dungeon.phrasalVerb.length },
    { name: "Writing", count: dungeon.writing.length },
    { name: "Reading", count: dungeon.reading.length },
    { name: "Listening", count: dungeon.listening.length },
    { name: "Speaking", count: dungeon.speaking.length },
  ];

  return (
    <Card className="w-full border-2 border-primary bg-linear-to-br from-primary to-secondary text-foreground p-0 rounded-xl shadow-lg shadow-black/80 overflow-hidden">
      <div className="p-3 sm:p-4 w-full flex flex-col gap-2">
        {/* Header */}
        <CardHeader className="p-0">
          <div className="w-full flex items-center justify-between">
            <p className="text-lg font-bold truncate">{dungeon.id}</p>
            <div className="flex items-center gap-4">
              <p className="font-semibold">XP : {dungeon.points}</p>
              <button
                title="Start"
                type="button"
                className="border-2 border-amber-400 rounded-full p-1 bg-transparent text-foreground hover:bg-amber-700 cursor-pointer hover:text-white active:scale-95 transition-all duration-300 delay-75"
              >
                <FaPlay />
              </button>
            </div>
          </div>
        </CardHeader>

        {/* Info */}
        <CardContent className="p-0">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="w-full flex flex-col gap-4">
              <div className="flex items-center gap-6 font-bold">
                <p className="text-sm font-bold">Level: {dungeon.level}</p>
                <p className="text-sm font-bold">
                  Duration: {dungeon.duration}
                </p>
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-white font-truncate">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci iure quo cum? Odio quasi ut enim architecto expedita
                  magnam praesentium.
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
