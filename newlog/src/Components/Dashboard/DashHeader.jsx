import Image from "next/image";
import { HiOutlinePlus } from "react-icons/hi2";
import Link from "next/link";
import { Modal } from "../Modal/Modal";
import { useState } from "react";
import { CateModal } from "../Modal/CateModal";
import { FaLess } from "react-icons/fa6";
export const DashHeader = ({}) => {
  const [show, setShow] = useState(false);
  const [cateModal, setCateModal] = useState(false);

  const Catehandle = () => {
    if (show) setShow(false);
    setCateModal(!cateModal);
  };
  const handleClick = () => {
    setShow(!show);
  };

  
  return (
    <>
      <div className="w-[1440px] bg-white py-4 px-[120px] flex justify-between">
        <div className="flex gap-6 items-center">
          <img src="vector.png" />
          <h1 className="font-bold">Dashboard</h1>
          <Link href="/Record">Records</Link>
        </div>
        <div className="flex gap-6">
          <button
            onClick={handleClick}
            className="flex items-center bg-[#0166FF] rounded-3xl text-white px-3 py-1"
          >
            <HiOutlinePlus size={25} />
            <h1>Record</h1>
          </button>
          <div>
            <img src="Placeholder.png" />
          </div>
        </div>
      </div>
      {show && <Modal handleShowModal={handleClick}   Catehandle={Catehandle}/>}
      {cateModal && <CateModal setCateModal={Catehandle} />}
   
      
    </>
  );
};
