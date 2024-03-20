import { IoHome } from "react-icons/io5";
import { HiGift } from "react-icons/hi2";
import { IoFastFood } from "react-icons/io5";
import { BiSolidDrink } from "react-icons/bi";
import { FaTaxi } from "react-icons/fa6";
import { RiShoppingCart2Fill } from "react-icons/ri";

export const Wrap = () => {
  const catIcon = [
    { png: <IoHome size={25} /> },
    { png: <IoHome size={25} /> },
    { png: <HiGift size={25} /> },
    { png: <IoFastFood size={25} /> },
    {
      png: <BiSolidDrink size={25} />,
    },
    { png: <FaTaxi size={25} /> },
    {
      png: <RiShoppingCart2Fill size={25} />,
    },
    { png: <IoHome size={25} /> },
    { png: <IoHome size={25} /> },
    { png: <HiGift size={25} /> },
    { png: <IoFastFood /> },
    {
      png: <BiSolidDrink size={25} />,
    },
    { png: <FaTaxi size={25} /> },
    {
      png: <RiShoppingCart2Fill size={25} />,
    },
    { png: <IoHome size={25} /> },
    { png: <IoHome size={25} /> },
    { png: <HiGift size={25} /> },
    { png: <IoFastFood size={25} /> },
    {
      png: <BiSolidDrink size={25} />,
    },
    { png: <FaTaxi size={25} /> },
    {
      png: <RiShoppingCart2Fill size={25} />,
    },
    {
      png: <RiShoppingCart2Fill size={25} />,
    },
    {
      png: <RiShoppingCart2Fill size={25} />,
    },
    {
      png: <RiShoppingCart2Fill size={25} />,
    },
  ];
  return (
    <div className="bg-blue-50 rounded-xl w-[390px] absolute  mt-[439px] p-6 shadow-2xl shadow-black -ml-12   h-[340px] gap-6 px-4">
      <div className="  flex w-[360px] flex-wrap justify-center h-[260px] gap-5 border-b-2">
        {catIcon.map((el, index) => {
          return (
            <div className="  flex gap-4 p-2" key={index}>
              <p>{el.png}</p>
            </div>
          );
        })}
      </div>
      <div className="flex p-2 gap-4 ml-4">
        <div className="w-[40px] h-[40px] bg-red-500 rounded-full"></div>
        <div className="w-[40px] h-[40px] bg-yellow-500 rounded-full"></div>
        <div className="w-[40px] h-[40px] bg-blue-500 rounded-full"></div>
        <div className="w-[40px] h-[40px] bg-slate-500 rounded-full"></div>
        <div className="w-[40px] h-[40px] bg-purple-500 rounded-full"></div>
        <div className="w-[40px] h-[40px] bg-orange-500 rounded-full"></div>
      </div>
    </div>
  );
};
