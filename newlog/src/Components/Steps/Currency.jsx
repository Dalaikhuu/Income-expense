import Image from "next/image";
import { useRouter } from "next/router";

export const Currency = () => {
  const { push } = useRouter();

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-10 gap-10">
        <ul className="steps">
          <li className="step step-primary w-[200px]">Currency</li>
          <li className="step ">Balance</li>
          <li className="step">Finish</li>
        </ul>
        <div className="flex flex-col items-center justify-center gap-8 mt-[150px]">
          <img src="money.png" />

          <h1 className="font-bold text-[30px]">Select base currency</h1>
        </div>
        <select className="select select-ghost w-[500px] h-[60px] bg-slate-200 rounded-2xl">
          <option>MNT - Mongolian Tugriks</option>
          <option>USD - Dollar</option>
          <option>CNY - Yuan</option>
          <option>RUB - Rub</option>
        </select>
        <p className="w-[500px] -mt-[30px]">
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one{" "}
        </p>
      </div>
    </div>
  );
};
