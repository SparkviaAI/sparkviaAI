import sendIcon from "../assets/send.svg";
import FeaturesSection from "./FeaturesSection";
import SparkviaSection from "./SparkviaSection";

const SectionOne = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-[20px] flex justify-center w-full">
      <div className="flex flex-col container px-[6%]">
        <div className="flex flex-col items-center -mb-[60px] lg:-mb-0">
          <div className="bg-[#111111] flex flex-col items-center text-center gap-4 h-[250px] lg:h-[276px] lg:w-[606px] rounded-[10px] shad relative bottom-[8rem] p-[20px] lg:p-[40px]">
            <h1 className="text-[#FFFFFF66] font-bold text-[24px] leading-[130%]">
              AI Prompt System
            </h1>
            <p className="lg:w-[487px] font-light text-[14px] text-[#FFFFFF66] leading-[130%]">
              Use our models to generate content from history, technology,
              science, politics and lots more and start getting responses today.
            </p>
            <div className="border border-[#292929] flex justify-between items-center w-full h-[50px] rounded-[100px] p-[10px] mt-6">
              <input
                type="text"
                readOnly
                className="w-[90%] h-full outline-none px-[5px] lg:px-[10px] text-[#DADADA] font-medium text-[12px] lg:text-[14px] leading-[110.00000000000001%]"
                placeholder="Prompt with our “Copywriting Tool”"
              />
              <button className="cursor-pointer">
                <img src={sendIcon} alt={sendIcon} />
              </button>
            </div>
          </div>
          <div id="solutions" className="lg:w-[546px] flex flex-col gap-4 text-center relative bottom-3.5 lg:bottom-0 scroll-mt-[120px]">
            <h1
              style={{ fontFamily: "Gilda Display" }}
              className="text-[#111111] font-normal text-4xl lg:text-[48px] leading-[110.00000000000001%] lg:w-[508px]"
            >
              Say Goodbye To Writer’s Block. Create AI Content in Seconds.
            </h1>
            <p className="font-normal text-[16px] lg:text-[18px] leading-[130%] text-[#00000066]">
              That's why we built Sparkvia writing platform - an AI powered
              content generating tools that creates customized, optimized
              content for any business with just a few clicks.
            </p>
          </div>
        </div>
        <SparkviaSection />
        <FeaturesSection />
      </div>
    </div>
  );
};

export default SectionOne;
