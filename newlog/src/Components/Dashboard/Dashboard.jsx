import { DashHeader } from "./DashHeader";
import { DashLayout } from "./DashLayout";
export const Dashboard = () => {
  return (
    <div className="flex items-center justify-center flex-col ">
      <DashHeader />
      <DashLayout />
    </div>
  );
};
