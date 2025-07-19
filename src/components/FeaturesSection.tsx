import { motion } from "framer-motion";

const features = [
  "All tools in 1-Platform Content Suite",
  "Multiple Languages feature",
  "Generate Content on Any Topic",
  "SEO Optimized contents",
  "Speed up your Content Workflow",
  "AI-assisted writing",
  "Content Templates",
  "Creative Tone Control",
];

const colors = [
  "bg-green-200",
  "bg-blue-500 text-white",
  "bg-yellow-100",
  "bg-yellow-300",
  "bg-teal-200",
  "bg-blue-100",
  "bg-amber-400",
  "bg-emerald-400 text-white",
];

const repeatedFeatures = [...features, ...features];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-[#F8F8F8] py-10 lg:py-20 rounded-[20px] overflow-hidden mb-[3rem] lg:mb-[6rem]">
      <div className="text-center">
        <div className="flex justify-center px-[6%]">
          <div className="flex justify-center flex-col items-center lg:w-[508px]">
            <h2
              style={{ fontFamily: "Gilda Display" }}
              className="text-4xl md:text-[48px] font-normal leading-[110.00000000000001%]"
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
            {repeatedFeatures.map((text, index) => (
              <div
                key={`scroll1-${index}`}
                className={`min-w-[250px] p-4 rounded-md text-sm font-medium text-center shadow ${
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
            {repeatedFeatures.map((text, index) => (
              <div
                key={`scroll2-${index}`}
                className={`min-w-[250px] p-4 rounded-md text-sm font-medium text-center shadow ${
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
  );
};

export default FeaturesSection;
