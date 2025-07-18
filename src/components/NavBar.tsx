import brandLogo from "../assets/logo.svg";
import { useState } from "react";
import MobileSideBar from "./MobileSideBar";
import menuIcon from "../assets/menu.svg";

const NavBar = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => setIsOpenModal(true);
    const handleCancel = () => setIsOpenModal(false);

  return (
    <div className="flex justify-center">
      <div className="container flex items-center justify-between py-[20px] px-[6%]">
        <button>
          <img src={brandLogo} alt={brandLogo} />
        </button>
        <ul className="lg:flex hidden gap-[60px] font-medium text-[16px] leading-[130%] text-[#B8B8B8]">
          <li className="cursor-pointer">Solutions</li>
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">FAQ</li>
        </ul>
        <button className="lg:flex hidden justify-center items-center font-semibold text-[16px] text-[#E8E8E8] leading-[130%] border border-[#E8E8E8] px-[24px] py-[19px] rounded-[5px] h-[49px] cursor-pointer">
          Get Started
        </button>
          <button onClick={openModal} className="lg:hidden block text-white">
            <img src={menuIcon} alt="menuIcon" />
          </button>
      </div>
       <MobileSideBar isOpen={isOpenModal} handleCancel={handleCancel} />
    </div>
  );
};

export default NavBar;
