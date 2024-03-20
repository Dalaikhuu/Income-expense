import { Inputs } from "./Inputs";
import { Button } from "./ButtonLog";
import Link from "next/link";
export const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex justify-center items-center gap-2 mb-7">
        <div className="w flex flex-col items-center justify-center  ">
          <div className="w-3 h-3 bg-[#0166FF]"></div>
          <div className="flex justify-between gap-3">
            <div className="w-3 h-3 bg-[#0166FF]"></div>
            <div className="w-3 h-3 bg-[#0166FF]"></div>
          </div>
          <div className="w-3 h-3 bg-[#0166FF]"></div>
        </div>
        <div className="font-bold text-3xl">Geld</div>
      </div>
      <div className="flex flex-col items-center mb-7">
        <h1 className="font-bold text-2xl">Welcome Back</h1>
        <p className="text-[#334155]">
          Welcome back, Please enter your details
        </p>
      </div>
      <Inputs />
      <Button />
      <div className="flex  gap-3 mt-7 ">
        <div>Don’t have account?</div>
        <Link href="/Sign">
          <div className="text-[#0166FF]">Sign Up</div>
        </Link>
      </div>
    </div>
  );
};
