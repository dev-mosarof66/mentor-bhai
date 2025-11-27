"use client";
import { LearningGrowthChart, MonthlyLearningChart } from "../common/graph";
import { StyledHeading } from "../common/heading";

const LearningGraph = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <StyledHeading heading="Learning Growth" />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-2">
        <LearningGrowthChart />
        <MonthlyLearningChart />
      </div>
    </div>
  );
};

export default LearningGraph;
