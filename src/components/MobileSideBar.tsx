import React from "react";
import { Modal } from "antd";
import arrowRight from "../assets/rightarrow.svg";

interface MobileSideBarProps {
  isOpen: boolean;
  handleCancel: () => void;
   scrollToSection: (id: string) => void;
}

const MobileSideBar: React.FC<MobileSideBarProps> = ({ isOpen, handleCancel, scrollToSection }) => {
  return (
      <Modal
        footer={null}
        open={isOpen}
        onCancel={handleCancel}
        className="navModal"
      >
        <div className="flex flex-col gap-10 p-[20px] text-[#FFFFFF]">
        <ul className="flex flex-col gap-10 p-[20px]">
          <li onClick={() => scrollToSection("solutions")} className="cursor-pointer text-[#000]">Solutions</li>
          <li onClick={() => scrollToSection("features")} className="cursor-pointer text-[#000]">Features</li>
          <li onClick={() => scrollToSection("faq")} className="cursor-pointer text-[#000]">FAQ</li>
        </ul>
          <button className="bg-[#050505] px-[30px] rounded-[50px] text-xs h-[55px] w-[80%] border-[2px] border-[#FFFFFF] cursor-pointer text-[#FFFFFF]">
            <div className="flex justify-between items-center">
              <span>Get Started</span>
              <div className="bg-[#49DF28] w-[40px] h-[40px] rounded-[100px] flex justify-center items-center relative left-[20px] -ml-[10px]">
                <img src={arrowRight} alt="" />
              </div>
            </div>
          </button>
        </div>
      </Modal>
  );
};

export default MobileSideBar;
