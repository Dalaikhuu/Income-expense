import { FaCaretDown } from "react-icons/fa";
import { Icons } from "./Icons";
import { useState } from "react";

export const Category = ({ Catehandle }) => {
  const [see, setSee] = useState(false);

  const handleClick = () => {
    setSee(!see);
  };
  

  return (
    <div className="relative cursor-pointer">
      <h1>Category</h1>
      <div
        onClick={handleClick}
        className="flex justify-between bg-[#F3F4F6] rounded-md border-2 items-center h-10 px-4 mt-2"
      >
        <input
          placeholder="Choose"
          className="bg-[#F3F4F6] cursor-pointer py-1 p-1 rounded-xl hover:bg-slate-300"
        />
        <div className="w-4 h-4 px-10">
          <FaCaretDown />
        </div>
        {see && <Icons Catehandle={Catehandle} />}
      </div>
    </div>
  );
};
