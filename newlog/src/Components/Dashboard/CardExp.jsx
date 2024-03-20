import { MdOutlineArrowDownward } from "react-icons/md";
export const Exp = () => {
  return (
    <div className="w-[384px] h-[216px] rounded-xl bg-white ">
      <div className="flex items-center gap-4 p-4">
        <div className="bg-[#0166FF] w-2 h-2 rounded-full"></div>
        <div className="font-bold">Total Expenses</div>
      </div>
      <hr className="flex" />
      <div className="p-4 flex flex-col gap-4">
        <div>
          <h1 className="font-bold text-3xl">-1,200,000₮</h1>
          <p className="text-[#64748B]">Your Income Amount</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-[#84CC16] w-6 rounded-full ">
            <MdOutlineArrowDownward size={25} className="text-white" />
          </div>
          <div>32% from last month</div>
        </div>
      </div>
    </div>
  );
};
