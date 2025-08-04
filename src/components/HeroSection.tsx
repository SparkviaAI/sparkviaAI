import heroIcon from "../assets/heroIcon.svg";
import circleIcon from "../assets/circle.svg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex justify-center lg:pt-[18rem] px-[6%] scroll-mt-[120px]" id="home">
      <div className="flex flex-col lg:flex-row items-center lg:-mb-[14rem]">
        <img src={circleIcon} alt={circleIcon} className="relative top-20 lg:top-0" />
        <div className="flex flex-col gap-6 text-center items-center lg:w-[531px] relative lg:bottom-[20rem] lg:right-[43rem] lg:-mr-[43rem] bottom-[20rem] -mb-[10rem] lg:-mb-0">
          <img src={heroIcon} alt={heroIcon} />
          <h1
            style={{ fontFamily: "Gilda Display" }}
            className="text-white font-normal text-4xl lg:text-[70px] leading-[100%]"
          >
            Content On Autopilot With{" "}
            <span className="text-[#49DF28]">Sparkvia AI Writing Tools</span>
          </h1>
          <p className="lg:w-[417px] font-normal text-[14px] lg:text-[18px] leading-[130%] text-[#E8E8E899]">
            Create blogs, ad copies, emails, social media posts, images, and
            more in seconds! Register and get a free 100 Spark credits
          </p>
          <Link to="https://auth.sparkvia.ai/user-login">          
          <button className="flex justify-center items-center rounded-[5px] font-semibold text-[14px] lg:text-[16px] leading-[130%] bg-[#FFFFFF] py-[19px] px-[24px] h-[49px] mt-[20px] cursor-pointer">
            Start writing Now!
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
