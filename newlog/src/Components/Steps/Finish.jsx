import Image from "next/image";
export const Finish = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-10 gap-10">
        <ul className="steps">
          <li className="step step-primary w-[200px]">Currency</li>
          <li className="step step-primary ">Balance</li>
          <li className="step step-primary">Finish</li>
        </ul>
        <div className="flex flex-col items-center justify-center gap-8 mt-[150px]">
          <img src="Done.png" />
          <h1 className="font-bold text-[30px]">Good job</h1>
        </div>

        <p className="w-[500px] -mt-[30px] flex text-center">
          Your very first account has been created. Now continue to dashboard
          and start tracking
        </p>
      </div>
    </div>
  );
};
