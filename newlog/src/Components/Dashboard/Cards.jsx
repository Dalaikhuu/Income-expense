import Image from "next/image";
import { Income } from "./CardIncome";
import { Exp } from "./CardExp";
export const Cards = () => {
  return (
    <div className="flex gap-8 -mt-40 ">
      <div className="w-[384px] h-[218px] bg-[url(/back.png)] rounded-2xl ">
        <Image src="/Frame 24.png" width={100} height={30} className="p-4" />
        <p className="absolute translate-x-1/2 translate-y-2/3 mt-10 text-slate-200">
          Cash
        </p>
        <p className="mt-16 text-white text-2xl p-5">1,000,000</p>
      </div>
      <Income />
      <Exp />
    </div>
  );
};
