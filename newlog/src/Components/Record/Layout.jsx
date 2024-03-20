import { Left } from "./LeftSide";
import { Right } from "./RightSide";
import { Modal } from "../Modal/Modal";
export const Layout = () => {
  return (
    <div className="bg-[#F3F4F6] w-full py-4 px-[120px] flex gap-10 items-center justify-center h-[1100px]">
      <div className="flex gap-10 ">
        <Left />
        <Right />
      </div>
    </div>
  );
};
