import brandLogo from "../assets/logo.svg";
import { useState } from "react";
import MobileSideBar from "./MobileSideBar";
import menuIcon from "../assets/menu.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const handleCancel = () => setIsOpenModal(false);

    const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      handleCancel();
    }
  };

  return (
    <div className="flex justify-center sticky top-0 bg-[#111111] z-10">
      <div className="container flex items-center justify-between py-[20px] px-[6%]">
        <button onClick={() => scrollToSection("home")}>
          <img src={brandLogo} alt={brandLogo} />
        </button>
          <ul className="lg:flex hidden gap-[60px] font-medium text-[16px] leading-[130%] text-[#B8B8B8]">
          <li onClick={() => scrollToSection("solutions")} className="cursor-pointer">Solutions</li>
          <li onClick={() => scrollToSection("features")} className="cursor-pointer">Features</li>
          <li onClick={() => scrollToSection("faq")} className="cursor-pointer">FAQ</li>
        </ul>
        <Link to="https://cardanostaging.trickywebsolutions.com/registerr">        
        <button className="lg:flex hidden justify-center items-center font-semibold text-[16px] text-[#E8E8E8] leading-[130%] border border-[#E8E8E8] px-[24px] py-[19px] rounded-[5px] h-[49px] cursor-pointer">
          Get Started
        </button>
        </Link>
        <button onClick={openModal} className="lg:hidden block text-white">
          <img src={menuIcon} alt="menuIcon" />
        </button>
      </div>
      <MobileSideBar isOpen={isOpenModal} handleCancel={handleCancel} scrollToSection={scrollToSection} />
    </div>
  );
};

export default NavBar;
