import Currencies from "@/components/Currency";
import { Balance } from "@/components/Balance";
import { Finish } from "@/components/Finish";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { Geld } from "@/components/Geld";
import Steps from "@/components/Steps";
 
const steps = [Currencies, Balance, Finish];
 
const Stepper = (props) => {
  const [step, setStep] = useState(0);
  const { push } = useRouter();
 
  const Step = steps[step];
 
  function handleClick() {
    if (step === 2) push("/");
    setStep(step + 1);
  }
 
  return (
    <div className="flex flex-col pt-[100px] items-center h-screen bg-white">
      <Steps />
      <div className="flex flex-col mt-[50px]">
        {step < steps.length && <Step />}
        <div className="ml-[15px] mt-[20px]">
          <Button onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};