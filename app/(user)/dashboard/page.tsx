import CurrentDungeon from "@/components/dashboard/current-dungeon";
import LearningGraph from "@/components/dashboard/learning-graph";
import OverviewStats from "@/components/dashboard/overview-stats";

const UserDashboard = () => {
  return (
    <div className="w-full h-full max-w-6xl mx-auto flex flex-col gap-6 p-2">
      <div className="w-full grid grid-cols-1 gap-6 lg:px-4">
        <CurrentDungeon />
        <OverviewStats />
        <LearningGraph />
      </div>
    </div>
  );
};

export default UserDashboard;
