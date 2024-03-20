import Image from "next/image";
export const Balance = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-10 gap-10">
        <ul className="steps">
          <li className="step step-primary w-[200px]">Currency</li>
          <li className="step step-primary ">Balance</li>
          <li className="step">Finish</li>
        </ul>
        <div className="flex flex-col items-center justify-center gap-8 mt-[150px]">
          <img src="Frame 10.png" />

          <h1 className="font-bold text-[30px]">Set up your cash Balance</h1>
        </div>
        <input
          placeholder="Email"
          className="w-[500px] bg-slate-200 rounded-2xl p-4"
        />

        <p className="w-[500px] -mt-[30px]">
          How much cash do you have in your wallet?
        </p>
      </div>
    </div>
  );
};
