"use client";
import { StyledHeading } from "../common/heading";
import { Card, CardContent } from "../ui/card";

const OverviewStats = () => {

  return (
    <div className="w-full flex flex-col gap-6">
      <StyledHeading heading="Overview" />

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-4">
        <StatsCard
          title="Vocabulary"
          learned={45}
          total={1200}
          accuracy={87}
          percent={3.8}
        />
        <StatsCard
          title="Phrasal Verbs"
          learned={20}
          total={500}
          accuracy={57}
          percent={14.55556}
        />
        <StatsCard
          title="Listening"
          learned={5}
          total={50}
          accuracy={23}
          percent={10}
        />
        <StatsCard
          title="Reading"
          learned={3}
          total={20}
          accuracy={35}
          percent={15}
        />
      </div>
    </div>
  );
};

const StatsCard = ({
  title,
  learned,
  total,
  accuracy,
  percent,
}: {
  title: string;
  learned: number;
  total: number;
  accuracy: number;
  percent: number;
}) => {
  return (
    <Card className="bg-primary/10 p-0 border-2 border-primary/50">
      <div className="p-3 w-full flex flex-col">
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        <CardContent className="w-full flex items-center justify-between px-0 py-0">
          {/* Stats */}
          <div className="flex flex-col gap-2 text-sm">
            <p className="font-medium">
              Words Learned: <span className="text-primary">{learned}</span> /{" "}
              {total}
            </p>

            <p className="font-medium">
              Accuracy : <span className="text-primary">{accuracy}%</span>
            </p>
          </div>

          {/* Circular Progress */}
          <div className="flex flex-col">
            <div className="relative flex items-center justify-center">
              <svg width="70" height="70">
                <circle
                  cx="35"
                  cy="35"
                  r="30"
                  stroke="#00cdcd55"
                  strokeWidth="5"
                  fill="none"
                />
                <circle
                  cx="35"
                  cy="35"
                  r="30"
                  stroke="#d900ffff"
                  strokeWidth="5"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 30}
                  strokeDashoffset={
                    2 * Math.PI * 30 - (learned / total) * (2 * Math.PI * 30)
                  }
                  strokeLinecap="round"
                  className="transition-all duration-700"
                />
              </svg>

              <span className="absolute text-sm font-semibold text-foreground">
                {percent.toFixed(1)}%
              </span>
            </div>
            <p className="text-foreground text-xs text-center font-semibold">
              Completion
            </p>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default OverviewStats;
