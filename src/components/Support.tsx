import circleIcon from "../assets/circle1.svg";

const Support = () => {
  return (
    <div className="flex justify-center md:-mb-[6rem] mb-[20px] px-[6%]">
      <div className="flex items-center">
        <img src={circleIcon} alt={circleIcon} />
        <div className="flex flex-col gap-6 text-center items-center md:w-[465px] relative md:right-[40rem] right-[20rem] -mr-[20rem] md:-mr-[40rem]">
          <h1
            style={{ fontFamily: "Gilda Display" }}
            className="text-white font-normal text-4xl md:text-[56px] leading-[100%]"
          >
            Support & Contact
          </h1>
          <p className="font-normal text-[18px] md:text-[20px] leading-[130%] text-[#E8E8E899]">
            Got Queries? Explore our Documentation. For bespoke? AI tools
            development, kindly reach us at
          </p>
          <a href="mailto:contact@sparkvia.ai" className="flex justify-center items-center rounded-[5px] font-semibold text-[14px] md:text-[16.55px] leading-[130%] border border-[#EDFCEA] text-[#FFFFFF] py-[19px] px-[24px] h-[49px] mt-[20px] cursor-pointer">
            Contact@Sparkvia.ai
          </a>
        </div>
      </div>
    </div>
  );
};

export default Support;
