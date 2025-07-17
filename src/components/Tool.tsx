import showdowIcon from "../assets/shadow.svg";
import promptIcon from "../assets/prompt.svg";
import marketIcon from "../assets/markets.svg";
import businessIcon from "../assets/business.svg";
import commerceIcon from "../assets/commerce.svg";
import pentIcon from "../assets/pen.svg";

const Tool = () => {
  return (
    <div className="flex justify-center">
      <div className="container px-[6%]">
        <div className="flex justify-between items-center relative bottom-[14rem] -mb-[14rem]">
          <div className="flex flex-col w-[450px] text-[#FFFFFF]">
            <h1
              style={{ fontFamily: "Gilda Display" }}
              className="w-[406px] font-normal text-[70px] leading-[110.00000000000001%]"
            >
              A Tool For All Everyone
            </h1>
            <p className="text-[#FFFFFF66]">
              The go-to tool for marketers, entrepreneurs, and teams who want to
              write better, faster.
            </p>
          </div>
          <img src={showdowIcon} alt={showdowIcon} />
        </div>
        <div className="flex justify-between px-[6%] gap-[40px] items-center bg-[#1C1C1C] rounded-[16px] h-[684px] relative bottom-[12rem] -mb-[8rem]">
          <div className="flex flex-col gap-4 w-[419px] text-[#FFFFFF]">
            <div className="flex gap-4 border-b border-b-[#FFFFFF1A] border-dashed pb-[40px]">
              <div className="h-[50px] w-[50px]">
                <img src={pentIcon} alt={pentIcon} />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-[18px] leading-[110.00000000000001%]">
                  Writers
                </h1>
                <p className="font-light text-[14px] leading-[130%]">
                  Step up your writing game with plagiarism-free and captivating
                  content. Keep your readers hooked
                </p>
              </div>
            </div>
            <div className="flex gap-4 border-b border-b-[#FFFFFF1A] border-dashed pb-[40px]">
              <div className="h-[50px] w-[50px]">
                <img src={marketIcon} alt={marketIcon} />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-[18px] leading-[110.00000000000001%]">
                  Marketing Teams
                </h1>
                <p className="font-light text-[14px] leading-[130%]">
                  Dominate your industry with content that converts and drives
                  revenue. See 10x profits with our AI tools
                </p>
              </div>
            </div>
            <div className="flex gap-4 border-b border-b-[#FFFFFF1A] border-dashed pb-[40px]">
              <div className="h-[50px] w-[50px]">
                <img src={businessIcon} alt={businessIcon} />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-[18px] leading-[110.00000000000001%]">
                  Business Owners
                </h1>
                <p className="font-light text-[14px] leading-[130%]">
                  Capture customers attention with product descriptions that are
                  informative, engaging, and SEO-friendly.
                </p>
              </div>
            </div>
            <div className="flex gap-4 border-b border-b-[#FFFFFF1A] border-dashed pb-[40px]">
              <div className="h-[50px] w-[50px]">
                <img src={commerceIcon} alt={commerceIcon} />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-[18px] leading-[110.00000000000001%]">
                  E-Commerce Stores
                </h1>
                <p className="font-light text-[14px] leading-[130%]">
                  Use AI technology for efficient sales copy and save time. Take
                  your business to new heights today!
                </p>
              </div>
            </div>
          </div>
          <img src={promptIcon} alt={promptIcon} />
        </div>
      </div>
    </div>
  );
};

export default Tool;
