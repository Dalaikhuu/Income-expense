import { Category } from "./Category";
import { IoClose } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";
export const Modal = ({ handleShowModal, Catehandle,  }) => {
  const [color, setColor] = useState();
  return (
    <>
      <div className="absolute inset-0 bg-black/30" onClick={handleShowModal} />
      <div
        id="Modal"
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center"
      >
        <div className="w-[792px] h-[500px] bg-white rounded-xl ">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-[20px] text-[#0F172A] p-4">
              Add Record
            </h2>
            <div className="w-10 h-8" onClick={handleShowModal}>
              <IoClose size={25} className="mr-4" />
            </div>
          </div>
          <hr className="flex  w-[792px] " />
          <div className="flex p-4 gap-10 ">
            <div className="flex flex-col gap-6">
              <div className="w-[344px] h-[40px] flex bg-[#F3F4F6] text-white rounded-3xl">
                <button
                  onClick={() => {
                    setColor(true);
                  }}
                  className={`w-1/2 py-2 rounded-[25px] ${
                    color
                      ? "text-[F9FAFB] bg-[#0166FF]"
                      : "text-black bg-[#F3F4F6]"
                  }`}
                >
                  Expense
                </button>
                <button
                  onClick={() => {
                    setColor(false);
                  }}
                  className={`w-1/2 py-2 rounded-[25px] ${
                    color
                      ? "text-black bg-[#F3F4F6]"
                      : "text-[#00000] bg-[#16A34A]"
                  }`}
                >
                  Income
                </button>
              </div>
              <div className="bg-[#F3F4F6] w-[348px] h-[78px] rounded-md py-4 px-6">
                <p>Amount</p>
                <input className="bg-[#F3F4F6]" placeholder="₮ 000.00" />
              </div>
              <Category Catehandle={Catehandle} />
              <div className="flex  gap-10">
                <div>
                  <h1>Date</h1>
                  <input
                    type="date"
                    className="bg-[#F3F4F6] p-2 border-2 rounded-xl w-[164px]"
                  />
                </div>
                <div>
                  <h1>Date</h1>
                  <input
                    type="time"
                    className="bg-[#F3F4F6] p-2 border-2 rounded-xl px-8"
                  />
                </div>
              </div>
              <button
                className={`w-[346px] py-2 rounded-[25px] ${
                  color ? "text-white bg-[#0166FF]" : "text-white bg-[#16A34A]"
                }`}
              >
                Add Record
              </button>
            </div>
            <div>
              <div>
                <h1>Payee</h1>
                <div className="flex justify-between bg-[#F3F4F6] w-[348px] py-4 rounded-xl border-2 px-4">
                  <input placeholder="Write here" className="bg-[#F3F4F6]" />
                  <FaCaretDown />
                </div>
              </div>
              <div>
                <h1>Note</h1>
                <textarea
                  placeholder="Write here"
                  className="w-[348px] h-[280px] bg-[#F3F4F6] rounded-xl p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
