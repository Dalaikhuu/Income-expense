import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { PiForkKnifeFill } from "react-icons/pi";
import { GoHomeFill } from "react-icons/go";
export const Right = () => {
  const Random = ["Last 30 Days", "3 Mounts ago", "Today", "Yesterday"];
  const [slide, setSlide] = useState(0);
  const previosSlide = () => {
    setSlide(slide - 1);
  };
  const Next = () => {
    setSlide(slide + 1);
  };
  const card = [
    {
      icon: <PiForkKnifeFill className="text-white" />,
      text: "Food & Drinks",
      money: "-1000",
      clock: "14:00",
    },
    {
      icon: <PiForkKnifeFill className="text-white" />,
      text: "Food & Drinks",
      money: "-1000",
      clock: "14:00",
    },
    {
      icon: <PiForkKnifeFill className="text-white" />,
      text: "Food & Drinks",
      money: "-1000",
      clock: "14:00",
    },
    {
      icon: <PiForkKnifeFill className="text-white" />,
      text: "Food & Drinks",
      money: "-1000",
      clock: "14:00",
    },
    {
      icon: <PiForkKnifeFill className="text-white" />,
      text: "Food & Drinks",
      money: "-1000",
      clock: "14:00",
    },
    {
      icon: <PiForkKnifeFill className="text-white" />,
      text: "Food & Drinks",
      money: "-1000",
      clock: "14:00",
    },
  ];
  const Todaycard = [
    {
      icon: <GoHomeFill className=" text-white" />,
      text: "Home",
      money: "-1000",
      clock: "14:00",
    },
    {
      icon: <PiForkKnifeFill className="text-white" />,
      text: "Food & Drinks",
      money: "-1000",
      clock: "14:00",
    },
    {
      icon: <PiForkKnifeFill className="text-white" />,
      text: "Food & Drinks",
      money: "-1000",
      clock: "14:00",
    },
    {
      icon: <PiForkKnifeFill className="text-white" />,
      text: "Food & Drinks",
      money: "-1000",
      clock: "14:00",
    },
    {
      icon: <PiForkKnifeFill className="text-white" />,
      text: "Food & Drinks",
      money: "-1000",
      clock: "14:00",
    },
    {
      icon: <PiForkKnifeFill className="text-white" />,
      text: "Food & Drinks",
      money: "-1000",
      clock: "14:00",
    },
  ];

  return (
    <div className="">
      <div className="flex gap-30 ">
        <div className="flex justify-between w-[250px] items-center gap-4 mr-4 p-4">
          <div
            disabled={slide === 0}
            onClick={previosSlide}
            className="w-8 h-8 bg-slate-200 rounded-xl flex items-center justify-center"
          >
            <FaChevronLeft />
          </div>
          <p>{Random[slide]}</p>
          <div
            disabled={slide === Random.length - 1}
            onClick={Next}
            className="w-8 h-8 bg-slate-200 rounded-xl flex items-center justify-center"
          >
            <FaChevronRight />
          </div>
        </div>

        <div>
          <select className="select select-primary w-[150px] max-w-xs px-3 py-3 ml-96 rounded-xl border-[1px]">
            <option>Newest fisrt</option>
            <option>Game of Thrones</option>
            <option>Lost</option>
            <option>Breaking Bad</option>
            <option>Walking Dead</option>
          </select>
        </div>
      </div>
      <div className="w-[894px]  rounded-2xl bg-white flex justify-between h-12 px-4 items-center mt-4">
        <div className="flex gap-4 items-center">
          <input type="checkbox" className="w-6 h-6" />
          <h1>Select all</h1>
        </div>
        <div className="text-[#94A3B8]">- 35,500₮</div>
      </div>
      <h1 className="font-bold">Today</h1>
      <div className="flex flex-col gap-4">
        {Todaycard.map((el, index) => {
          return (
            <div
              key={index}
              className="flex justify-between border-2 border-slate-200 bg-white rounded-2xl px-2 "
            >
              <div className="flex items-center gap-4">
                <input type="checkbox" className="w-6 h-6" />
                <div className="flex items-center justify-center bg-[#FF4545] rounded-full w-8 h-8">
                  {el.icon}
                </div>
                <div>
                  <div>{el.text}</div>
                  <div className="text-sm text-[#6B7280]">{el.clock}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[#EAB308]">{el.money}</p>
              </div>
            </div>
          );
        })}
      </div>

      <h1 className="font-bold">Yesterday</h1>
      <div>
        {card.map((el, index) => {
          return (
            <div
              key={index}
              className="w-[894px]  rounded-2xl bg-white flex justify-between h-12 px-4 items-center mt-4 border-[1px]"
            >
              <div className="flex items-center gap-4">
                <input type="checkbox" className="w-6 h-6" />
                <div className="flex items-center justify-center bg-[#FF4545] rounded-full w-8 h-8">
                  {el.icon}
                </div>
                <div>
                  <div>{el.text}</div>
                  <div className="text-sm text-[#6B7280]">{el.clock}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[#EAB308]">{el.money}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
