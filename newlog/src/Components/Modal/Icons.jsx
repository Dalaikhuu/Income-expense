import { AiFillPlusCircle } from "react-icons/ai";
import { FaHeartCirclePlus, IoHomes } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { HiGift } from "react-icons/hi2";
import { IoFastFood } from "react-icons/io5";
import { BiSolidDrink } from "react-icons/bi";
import { FaTaxi } from "react-icons/fa6";
import { RiShoppingCart2Fill } from "react-icons/ri";

export const Icons = ({ Catehandle }) => {
  const catIcon = [
    { text: "Home", png: <IoHome className="text-[#0166FF]" size={25} /> },
    { text: "Gift", png: <HiGift className="text-[#FF4545]" size={25} /> },
    { text: "Food", png: <IoFastFood className="text-[#FB8A22]" size={25} /> },
    {
      text: "Drink",
      png: <BiSolidDrink className="text-[#A804AB]" size={25} />,
    },
    { text: "Taxi", png: <FaTaxi className="text-[#EAB308]" size={25} /> },
    {
      text: "Shopping",
      png: <RiShoppingCart2Fill className="text-[#6F6CF3]" size={25} />,
    },
  ];

  return (
    <div className="bg-white rounded-xl absolute mt-[400px] w-[350px] -ml-6">
      <div
        onClick={Catehandle}
        className="flex gap-4 items-center border-b-[1px] cursor-pointer border-slate-300 p-4"
      >
        <AiFillPlusCircle size={30} className="text-[#0166FF]" />
        <h1 className="text-xl">Add Category</h1>
      </div>
      <div className="flex flex-col gap-4 cursor-pointer p-4">
        {catIcon.map((el, index) => {
          return (
            <div key={index} className="flex gap-4">
              <p>{el.png}</p>
              <p>{el.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
