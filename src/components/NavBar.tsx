import brandLogo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <div className="flex justify-center">
      <div className="container flex items-center justify-between py-[20px] px-[6%]">
        <button>
          <img src={brandLogo} alt={brandLogo} />
        </button>
        <ul className="flex gap-[60px] font-normal text-[16px] leading-[130%] text-[#B8B8B8]">
          <li>Solutions</li>
          <li>Features</li>
          <li>FAQ</li>
        </ul>
        <button className="flex justify-center items-center font-semibold text-[16px] text-[#E8E8E8] leading-[130%] border border-[#E8E8E8] px-[24px] py-[19px] rounded-[5px] h-[49px]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NavBar;
