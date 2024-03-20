import { Records } from "./LastRecords";
import { Cards } from "./Cards";
import { BarChart } from "./ChartCol";
import { Doughnut } from "react-chartjs-2";
import { RightChart } from "./ChartRight";
export const DashLayout = () => {
  return (
    <div className="bg-[#F3F4F6] w-full  py-4 px-[120px] flex flex-col gap-8 items-center justify-center h-[1500px]">
      <div className="w-[1440px] items-center  flex flex-col">
        <Cards />
        <div className="flex gap-[65px] items-center justify-center">
          <BarChart />
          <RightChart />
        </div>

        <Records />
      </div>
    </div>
  );
};
