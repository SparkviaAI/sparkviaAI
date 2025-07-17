import xIcon from '../assets/x.svg'
import telegramIcon from "../assets/telegram.svg"
import discordIcon from "../assets/discord.svg"
import mediumIcon from "../assets/medium.svg"
import pageIcon from "../assets/page.svg"

const Footer = () => {
  return (
    <div className="flex justify-center px-[6%]">
      <div className="container flex justify-between items-center border-t border-t-[#FFFFFF1A] border-dashed py-[40px]">
        <span className="text-[#EDFCEA] font-normal text-[16px] leading-[130%]">©2025 Sparkvia AI. All Right Reserved </span>
        <div className='flex items-center gap-4'>
            <button><img src={pageIcon} alt={pageIcon} /></button>
            <button><img src={xIcon} alt={xIcon} /></button>
            <button><img src={telegramIcon} alt={telegramIcon} /></button>
            <button><img src={discordIcon} alt={discordIcon} /></button>
            <button><img src={mediumIcon} alt={mediumIcon} /></button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
