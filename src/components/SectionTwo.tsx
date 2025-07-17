import circleIcon from "../assets/circle.svg";
import logo from "../assets/brandLogo.svg";
import chatgpt from "../assets/chatgpt.svg";

const SectionTwo = () => {
  return (
    <div>
      <div className="flex justify-center py-[90px]">
        <div className="flex items-center -mb-[30rem]">
          <img src={circleIcon} alt={circleIcon} />
          <div className="w-[508px] flex flex-col text-center items-center gap-4 relative bottom-[21rem] right-[43rem] -mr-[43rem]">
            <h1
              style={{ fontFamily: "Gilda Display" }}
              className="font-normal text-[48px] leading-[110.00000000000001%] text-[#FFFFFF]"
            >
              Why Choose Sparkvia Write Over ChatGPT
            </h1>
            <p className="text-[#FFFFFF66] font-normal text-[18px] leading-[130%] w-[430px]">
              Sparkvia Write is the fastest & easiest way to get content for
              your business
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="container flex justify-between gap-8  px-[6%] relative bottom-[12rem] -mb-[6rem]">
          <div className="bg-[#1C1C1C] rounded-[16px] w-[60%] px-[30px] py-[80px] flex flex-col gap-8">
            <div>
              <img src={logo} alt={logo} />
            </div>
            <div className="flex items-center gap-3.5 justify-between">
              <div className="flex items-center gap-2">
                <div>
                  <div className="bg-[#49DF28] rounded-full w-[16px] h-[16px]"></div>
                </div>
                <p className="font-normal text-[16px] leading-[130%] text-[#FFFFFF] w-[251px]">
                  No need of prompts. You get the best possible output from our
                  AI.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <div className="bg-[#49DF28] rounded-full w-[16px] h-[16px]"></div>
                </div>
                <p className="font-normal text-[16px] leading-[130%] text-[#FFFFFF] w-[251px]">
                  High quality & structured output received every time.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3.5 justify-between">
              <div className="flex items-center gap-2">
                <div>
                  <div className="bg-[#49DF28] rounded-full w-[16px] h-[16px]"></div>
                </div>
                <p className="font-normal text-[16px] leading-[130%] text-[#FFFFFF] w-[251px]">
                  Web3.0 & blockchain integration.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <div className="bg-[#49DF28] rounded-full w-[16px] h-[16px]"></div>
                </div>
                <p className="font-normal text-[16px] leading-[130%] text-[#FFFFFF] w-[251px]">
                  Comprehensive ad creation tools like ad copy, ad hooks,
                  targeting helper
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3.5 justify-between">
              <div className="flex items-center gap-2">
                <div>
                  <div className="bg-[#49DF28] rounded-full w-[16px] h-[16px]"></div>
                </div>
                <p className="font-normal text-[16px] leading-[130%] text-[#FFFFFF] w-[251px]">
                  Dedicated tools for blogs, ads, email, e-commerce, SEO, social
                  media, websites, music. AI.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <div className="bg-[#49DF28] rounded-full w-[16px] h-[16px]"></div>
                </div>
                <p className="font-normal text-[16px] leading-[130%] text-[#FFFFFF] w-[251px]">
                  Uses models like AIDA, BAB, PASTOR for structured copywriting.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#D8D8D8] rounded-[16px] px-[30px] py-[40px] w-[40%]">
            <div className="flex items-center gap-2 mb-[30px]">
              <img src={chatgpt} alt={chatgpt} />
              <div>
                <h1 className="text-[#000000] text-[27px] font-bold leading-[130%]">ChatGPT</h1>
                <p className="font-normal text-[12px] leading-[130%] text-[#000000]">By OpenAI</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-between text-[#00000099]">
              <div className="flex items-center gap-2">
                <div>
                  <div className="bg-[#ACACAC] rounded-full w-[16px] h-[16px]"></div>
                </div>
                <p className="font-normal text-[16px] leading-[130%] w-[251px]">
                  Need Prompts.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <div className="bg-[#ACACAC] rounded-full w-[16px] h-[16px]"></div>
                </div>
                <p className="font-normal text-[16px] leading-[130%] w-[251px]">
                  Low quality of output if you don’t give the right prompt.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <div className="bg-[#ACACAC] rounded-full w-[16px] h-[16px]"></div>
                </div>
                <p className="font-normal text-[16px] leading-[130%] w-[251px]">
                  No blockchain integration.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <div className="bg-[#ACACAC] rounded-full w-[16px] h-[16px]"></div>
                </div>
                <p className="font-normal text-[16px] leading-[130%] w-[251px]">
                  No specific ad creation tools.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <div className="bg-[#ACACAC] rounded-full w-[16px] h-[16px]"></div>
                </div>
                <p className="font-normal text-[16px] leading-[130%] w-[251px]">
                  Generates responses based on user prompts.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <div className="bg-[#ACACAC] rounded-full w-[16px] h-[16px]"></div>
                </div>
                <p className="font-normal text-[16px] leading-[130%] w-[251px]">
                  Only generates content using user-provided structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
