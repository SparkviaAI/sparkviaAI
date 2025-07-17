import heroIcon from "../assets/heroIcon.svg";
import circleIcon from "../assets/circle.svg";

const HeroSection = () => {
  return (
    <div className="flex justify-center pt-[18rem]">
      <div className="flex items-center -mb-[14rem]">
        <img src={circleIcon} alt={circleIcon} />
        <div className="flex flex-col gap-6  text-center items-center w-[531px] relative bottom-[20rem] right-[43rem] -mr-[43rem]">
          <img src={heroIcon} alt={heroIcon} />
          <h1
            style={{ fontFamily: "Gilda Display" }}
            className="text-white font-normal text-[70px] leading-[100%]"
          >
            Content On Autopilot With{" "}
            <span className="text-[#49DF28]">Sparkvia AI Writing Tools</span>
          </h1>
          <p className="w-[417px] font-normal text-[18px] leading-[130%] text-[#E8E8E899]">
            Create blogs, ad copies, emails, social media posts, images, and
            more in seconds! Register and get a free 100 Spark credits
          </p>
          <button className="flex justify-center items-center rounded-[5px] font-semibold text-[16px] leading-[130%] bg-[#FFFFFF] py-[19px] px-[24px] h-[49px] mt-[20px] cursor-pointer">
            Start writing Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
