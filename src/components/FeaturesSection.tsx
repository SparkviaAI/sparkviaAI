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

const FeaturesSection = () => {
  return (
    <section className="bg-[#F8F8F8] py-20 rounded-[20px] overflow-hidden mb-[6rem]">
      <div className="text-center">
        <div className="flex justify-center">
          <div className="flex justify-center flex-col items-center w-[508px]">
            <h2
              style={{ fontFamily: "Gilda Display" }}
              className="text-3xl md:text-[48px] font-normal leading-[110.00000000000001%]"
            >
              Our Worldclass <br className="md:hidden" /> Features
            </h2>
            <p className="text-[#000000E5] mt-4 font-normal text-[20px] leading-[130%] w-[448px] mx-auto">
              We built the best for the best. Below are some of our amazing
              features that makes us world-class.
            </p>
          </div>
        </div>

        <div className="mt-12 overflow-hidden">
          <motion.div
            className="flex gap-4 w-max"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            }}
          >
            {[...features, ...features].map((text, index) => (
              <div
                key={`left-${index}`}
                className={`min-w-[250px] p-4 rounded-md text-sm font-medium text-center shadow ${
                  colors[index % colors.length]
                }`}
              >
                {text}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 overflow-hidden">
          <motion.div
            className="flex gap-4 w-max"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            }}
          >
            {[...features, ...features].map((text, index) => (
              <div
                key={`right-${index}`}
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
