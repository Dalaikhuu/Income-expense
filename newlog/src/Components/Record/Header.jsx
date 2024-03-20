import Image from "next/image";
import Link from "next/link";
import { Modal } from "../Modal/Modal";
import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi2";
import { CateModal } from "../Modal/CateModal";
export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [cateModal, setCateModal] = useState(false);

  const Catehandle = () => {
    if (showModal) setShowModal(false);
    setCateModal(!cateModal);
  };
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <div className="w-[1440px] bg-white py-4 px-[120px] flex justify-between">
        <div className="flex gap-6 items-center">
          <img src="vector.png" />

          <Link href="/Dashboard">Dashboard</Link>
          <p className="font-bold">Records</p>
        </div>
        <div className="flex gap-6">
          <button
            onClick={handleShowModal}
            className="flex items-center bg-[#0166FF] rounded-3xl text-white px-3 py-1"
          >
            <HiOutlinePlus size={25} />
            <h1 className="">Record</h1>
          </button>
          <div>
            <img src="Placeholder.png" />
          </div>
          <Link href="/">
            <div className=" bg-yellow-300  rounded-2xl px-4 py-2 ">
              Log out
            </div>
          </Link>
        </div>
      </div>
      {showModal && (
        <Modal handleShowModal={handleShowModal} Catehandle={Catehandle} />
      )}
      {cateModal && <CateModal setCateModal={Catehandle} />}
    </div>
  );
};
