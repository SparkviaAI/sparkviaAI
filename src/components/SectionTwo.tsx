import circleIcon from "../assets/circle.svg";
import logo from "../assets/brandLogo.svg";
import chatgpt from "../assets/chatgpt.svg";

const FeatureItem = ({
  text,
  color = "#49DF28",
}: {
  text: string;
  color?: string;
}) => (
  <div className="flex items-center gap-2">
   <div>
     <div className={`w-[16px] h-[16px] rounded-full`} style={{ backgroundColor: color }} />
   </div>
    <p className="font-normal text-[16px] leading-[130%] lg:w-[251px]">{text}</p>
  </div>
);

const SectionTwo = () => {
  return (
    <div>
      <div className="flex justify-center p-[6%]">
        <div className="flex flex-col lg:flex-row items-center lg:-mb-[30rem]">
          <img src={circleIcon} alt="circle icon" />
          <div className="lg:w-[508px] flex flex-col text-center items-center gap-4 relative lg:bottom-[21rem] lg:right-[43rem] lg:-mr-[43rem] bottom-[18rem] -mb-[18rem] lg:-mb-0">
            <h1
              style={{ fontFamily: "Gilda Display" }}
              className="font-normal text-4xl lg:text-[48px] leading-[110.00000000000001%] text-[#FFFFFF]"
            >
              Why Choose Sparkvia Write Over ChatGPT
            </h1>
            <p className="text-[#FFFFFF66] font-normal text-[16px] lg:text-[18px] leading-[130%] lg:w-[430px]">
              Sparkvia Write is the fastest & easiest way to get content for
              your business
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="container flex flex-col lg:flex-row justify-between gap-8 px-[6%] relative lg:bottom-[12rem] lg:-mb-[6rem]">
          <div className="bg-[#1C1C1C] rounded-[16px] lg:w-[60%] px-[30px] py-[40px] lg:py-[80px] flex flex-col gap-8">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="flex flex-wrap gap-y-6 justify-between text-[#FFFFFF]">
              {[
                "No need of prompts. You get the best possible output from our AI.",
                "High quality & structured output received every time.",
                "Web3.0 & blockchain integration.",
                "Comprehensive ad creation tools like ad copy, ad hooks, targeting helper",
                "Dedicated tools for blogs, ads, email, e-commerce, SEO, social media, websites, music. AI.",
                "Uses models like AIDA, BAB, PASTOR for structured copywriting.",
              ].map((item, i) => (
                <FeatureItem key={i} text={item} />
              ))}
            </div>
          </div>

          <div className="bg-[#D8D8D8] rounded-[16px] px-[30px] py-[40px] lg:w-[40%]">
            <div className="flex items-center gap-2 mb-[30px]">
              <img src={chatgpt} alt="chatgpt" />
              <div>
                <h1 className="text-[#000000] text-[27px] font-bold leading-[130%]">ChatGPT</h1>
                <p className="font-normal text-[12px] leading-[130%] text-[#000000]">By OpenAI</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-between text-[#00000099]">
              {[
                "Need Prompts.",
                "Low quality of output if you don’t give the right prompt.",
                "No blockchain integration.",
                "No specific ad creation tools.",
                "Generates responses based on user prompts.",
                "Only generates content using user-provided structure.",
              ].map((item, i) => (
                <FeatureItem key={i} text={item} color="#ACACAC" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
