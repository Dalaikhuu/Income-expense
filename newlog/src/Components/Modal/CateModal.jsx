import { useState } from "react";
import { IoHome } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Wrap } from "./Allicons";
export const CateModal = ({ setCateModal }) => {
  const [cate, setCate] = useState(false);

  const hanleClick = () => {
    setCate(!cate);
  };

  return (
    <div
    
      stCateModal
      className="flex absolute inset-0 bg-black/30 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  justify-center items-center"
    >
      <div className="w-[480px] h-[200px] bg-white rounded-2xl  ">
        <div className="border-b-[2px] border-slate-200  font-bold p-4 flex justify-between">
          <div className="">Add Category</div>
          <div onClick={setCateModal} className="w-10 h-10 cursor-pointer">
            <IoClose size={30} />
          </div>
        </div>

        <div className="flex p-4 relative  gap-8">
          <div
            onClick={hanleClick}
            className="flex gap-4 items-center bg-slate-100 p-3 rounded-xl border-[2px] border-slate-300"
          >
            <IoHome size={30} />
            <FaCaretDown />
          </div>
          <input
            className="flex items-center bg-slate-100 p-3 rounded-xl border-[2px] border-slate-300 w-[300px]"
            placeholder="Name"
          />
        </div>
      </div>
      {cate && <Wrap />}
    </div>
  );
};
