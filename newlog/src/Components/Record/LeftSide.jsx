import { GoPlus } from "react-icons/go";
import { BsEyeFill } from "react-icons/bs";
import { FaCaretRight } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { Slider } from "@/components/ui/slider";
import { CateModal } from "../Modal/CateModal";

import { cn } from "@/lib/utils";

export const Left = () => {
  const [showModal, setShowModal] = useState(false);
  const [cateModal, setCateModal] = useState(false);

  const random = [
    "Food & Drinks",
    "Shopping",
    "Housing",
    "Transportation",
    "Vehicle",
    "Life & Entertaiment",
    "Communication, PC",
    "Financial expenses",
    "investments",
    "Income",
    "Others",
  ];
  const Catehandle = () => {
    if (showModal) setShowModal(false);
    setCateModal(!cateModal);
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="w-[282px] py-6 px-4 bg-white rounded-xl">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-xl">Records</h1>
          <button
            onClick={handleShowModal}
            className="flex gap-2 justify-center py-1 bg-[#0166FF] w-[250px] items-center rounded-2xl text-white"
          >
            <GoPlus />
            <div>Add</div>
          </button>
          <input
            placeholder="Search"
            className="w-[250px]  rounded-xl py-1 bg-[#F3F4F6] border-[1px] px-4"
          />
        </div>
        <h1 className="font-bold text-[#1F2937] mt-10">Types</h1>
        <div className="ml-4 mt-4">
          <div className="flex gap-2">
            <input type="radio" />
            <h1>All</h1>
          </div>
          <div className="flex gap-2">
            <input type="radio" />
            <h1>Income</h1>
          </div>
          <div className="flex gap-2">
            <input type="radio" />
            <h1>Expense</h1>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="font-bold">Category</div>
          <div className="text-slate-300">Clear</div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          {random.map((el, index) => {
            return (
              <div key={index} className="flex justify-between ">
                <div className="flex items-center gap-2">
                  <BsEyeFill className="text-[#94A3B8]" />
                  <p>{el}</p>
                </div>
                <FaCaretRight />
              </div>
            );
          })}
        </div>
        <div
          onClick={Catehandle}
          className="flex gap-2 items-center -ml-1 mt-2 cursor-pointer"
        >
          <FiPlus className="text-[#0166FF] " size={20} />
          <h1>Add Category</h1>
        </div>
        <h1 className="font-bold text-[#1F2937] mt-4">Amount Range</h1>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2]">
            <input
              className="bg-slate-100 w-32 rounded-xl p-2 border-[1px] "
              placeholder="0"
            />
            <input
              className="bg-slate-100 w-32 rounded-xl p-2 border-[1px] "
              placeholder="0"
            />
          </div>

          <Slider defaultValue={[0, 500]} max={1000} min={0} step={2} />
        </div>
      </div>
      {showModal && (
        <Modal handleShowModal={handleShowModal} Catehandle={Catehandle} />
      )}
      {cateModal && <CateModal setCateModal={Catehandle} />}
    </>
  );
};
