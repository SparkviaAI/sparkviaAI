import xIcon from '../assets/x.svg'
import telegramIcon from "../assets/telegram.svg"
import discordIcon from "../assets/discord.svg"
import mediumIcon from "../assets/medium.svg"
import pageIcon from "../assets/page.svg"

const Footer = () => {
  return (
    <div className="flex justify-center px-[6%]">
      <div className="container flex flex-wrap justify-center gap-4 md:justify-between items-center border-t border-t-[#FFFFFF1A] border-dashed py-[20px] md:py-[40px]">
        <span className="text-[#EDFCEA] font-normal text-[14px] md:text-[16px] leading-[130%]">©2025 Sparkvia AI. All Right Reserved </span>
        <div className='flex items-center gap-4'>
            <a href='https://docs.sparkvia.ai/' target='_blank' rel='noreferrer'><img src={pageIcon} alt={pageIcon} /></a>
            <a href='https://x.com/sparkvia_AI' target='_blank' rel='noreferrer'><img src={xIcon} alt={xIcon} /></a>
            <a href='http://t.me/sparkvia' target='_blank' rel='noreferrer'><img src={telegramIcon} alt={telegramIcon} /></a>
            <a href='https://discord.gg/Ab5xQeCB' target='_blank' rel='noreferrer'><img src={discordIcon} alt={discordIcon} /></a>
            <a href='https://medium.com/@sparkviaai' target='_blank' rel='noreferrer'><img src={mediumIcon} alt={mediumIcon} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
