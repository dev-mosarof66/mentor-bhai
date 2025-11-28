"use client";

import { Card, CardContent } from "@/components/ui/card";
import { dummyDungeon } from "@/public/dungeon";
import { BookOpen, PenTool, ListChecks } from "lucide-react";
import { FaClock } from "react-icons/fa6";

const CurrentDungeonView = () => {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-6 px-2">
      {/* Dungeon Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-lg sm:text-2xl font-semibold tracking-tight text-primary">
          {dummyDungeon.dungeon_title}
        </h2>
        <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
          {dummyDungeon.description}
        </p>

        <div className="flex items-center gap-4 text-xs sm:text-sm text-foreground/70">
          <FaClock />
          <p className="font-semibold">
            Duration:
            {dummyDungeon.duration}
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {/* Vocabulary */}
        <DungeonCard
          title="Vocabulary"
          count={dummyDungeon.dungeon.vocabulary.length}
          icon={<BookOpen className="w-6 h-6 text-primary" />}
          color="from-purple-500/10 to-purple-400/10"
        />

        {/* Phrasal Verbs */}
        <DungeonCard
          title="Phrasal Verbs"
          count={dummyDungeon.dungeon.phrasal_verbs.length}
          icon={<ListChecks className="w-6 h-6 text-green-500" />}
          color="from-green-500/10 to-green-400/10"
        />

        {/* Reading */}
        <DungeonCard
          title="Reading"
          count={1}
          icon={<PenTool className="w-6 h-6 text-blue-500" />}
          color="from-blue-500/10 to-blue-400/10"
        />
      </div>
    </div>
  );
};

export default CurrentDungeonView;

const DungeonCard = ({
  title,
  count,
  icon,
  color,
}: {
  title: string;
  count: number;
  icon: React.ReactNode;
  color: string;
}) => {
  return (
    <Card className="rounded-xl shadow-sm border border-border/40  p-0 overflow-hidden">
      <CardContent className="p-0">
        <div
          className={`w-full flex items-center justify-between p-4 rounded-xl bg-linear-to-r ${color}`}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-background shadow-sm">{icon}</div>
            <h2 className="text-base font-semibold">{title}</h2>
          </div>

          <p className="text-lg font-bold text-foreground">{count}</p>
        </div>
      </CardContent>
    </Card>
  );
};
