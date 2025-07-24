import { motion } from "framer-motion";

const features = [
  "Get Content for Multiple Platforms",
  "All tools in 1-Platform Content Suite",
  "Multiple Languages feature",
  "Cheaper than Hiring Pro Writers",
  "Get Engaging & Human-Like Content",
  "Generate Content on Any Topic",
  "SEO Optimizatized contents",
  "Speed up your Content Creation",
];

const colors = [
  "bg-[#01A338]",
  "bg-[#2EDB6633]",
  "bg-[#11ACEC]",
  "bg-[#E0E09833]",
  "bg-[#E0E098]",
  "bg-[#01BD9733]",
  "bg-[#E6DC0B]",
  "bg-[#122410] text-white",
  "bg-[#11ACEC33]",
  "bg-[#DFAC28]",
];

const repeatedFeatures = [...features, ...features];

const alternatingFeatures = repeatedFeatures.map((text, index) =>
  index % 2 === 0 ? text : ""
);

const FeaturesSection = () => {
  return (
    <div id="features" className="scroll-mt-[120px]">
      <section className="bg-[#F8F8F8] py-10 lg:py-20 rounded-[20px] overflow-hidden mb-[3rem] lg:mb-[6rem]">
        <div className="text-center">
          <div className="flex justify-center px-[6%]">
            <div className="flex justify-center flex-col items-center lg:w-[508px]">
              <h2
                style={{ fontFamily: "Gilda Display" }}
                className="text-4xl md:text-[48px] font-normal leading-[110%]"
              >
                Our Worldclass <br className="md:hidden" /> Features
              </h2>
              <p className="text-[#000000E5] mt-4 font-normal text-[18px] lg:text-[20px] leading-[130%] lg:w-[448px] mx-auto">
                We built the best for the best. Below are some of our amazing
                features that makes us world-class.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden mt-12">
            <motion.div
              className="flex gap-4 w-max"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                repeat: Infinity,
                duration: 60,
                ease: "linear",
              }}
            >
              {alternatingFeatures.map((text, index) => (
                <div
                  key={`scroll1-${index}`}
                  className={`min-w-[150px] p-4 rounded-md text-[13px] font-semibold leading-[130%] text-center shadow whitespace-nowrap ${
                    colors[index % colors.length]
                  }`}
                >
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative overflow-hidden mt-4 lg:mt-8">
            <motion.div
              className="flex gap-4 w-max"
              initial={{ x: "-50%" }}
              animate={{ x: "0%" }}
              transition={{
                repeat: Infinity,
                duration: 60,
                ease: "linear",
              }}
            >
              {alternatingFeatures.map((text, index) => (
                <div
                  key={`scroll2-${index}`}
                  className={`min-w-[150px] p-4 rounded-md text-[13px] font-semibold leading-[130%] text-center shadow whitespace-nowrap ${
                    colors[(index + 3) % colors.length]
                  }`}
                >
                  {text}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
