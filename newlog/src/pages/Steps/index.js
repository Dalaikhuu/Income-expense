import { Currency } from "@/Components/Steps/Currency";
import { Balance } from "@/Components/Steps/Balance";
import { Finish } from "@/Components/Steps/Finish";
import { useRouter } from "next/router";
import { useState } from "react";
import { Staepps } from "@/Components/Steps/Steps";
export default function Home() {
  const [step, setStep] = useState(0);

  const { push } = useRouter();
  const steps = [Currency, Balance, Finish];

  const Step = steps[step];

  const handlerClick = () => {
    if (step === 2) push("/Dashboard");
    setStep(step + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Staepps />

      {step < steps.length && <Step />}
      <button
        onClick={handlerClick}
        className="w-[500px] p-4 rounded-2xl text-white text-[20px] bg-[#0166FF]"
      >
        Confirm
      </button>
    </div>
  );
}
