import circleIcon from "../assets/circle1.svg";

const Support = () => {
  return (
    <div className="flex justify-center -mb-[6rem]">
      <div className="flex items-center">
        <img src={circleIcon} alt={circleIcon} />
        <div className="flex flex-col gap-6 text-center items-center w-[465px] relative right-[40rem] -mr-[40rem]">
          <h1
            style={{ fontFamily: "Gilda Display" }}
            className="text-white font-normal text-[56px] leading-[100%]"
          >
            Support & Contact
          </h1>
          <p className="font-normal text-[20px] leading-[130%] text-[#E8E8E899]">
            Got Queries? Explore our Documentation. For bespoke? AI tools
            development, kindly reach us at
          </p>
          <button className="flex justify-center items-center rounded-[5px] font-semibold text-[16.55px] leading-[130%] border border-[#EDFCEA] text-[#FFFFFF] py-[19px] px-[24px] h-[49px] mt-[20px] cursor-pointer">
            Contact@Sparkvia.ai
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
