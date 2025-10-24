import CTAButton from "../HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  codeColor,
  backgroundGradient,
}) => {
  return (
    <div
      className={`flex flex-col ${
        position ? position : "lg:flex-row"
      } my-20 justify-between gap-10 items-center`}
    >
      {/* Section 1 - Content Card */}
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        {heading}

        {/* Sub Heading */}
        <div className="text-gray-400 text-base font-normal px-2">
          {subheading}
        </div>

        {/* Button Group */}
        <div className="flex gap-7 mt-7 px-5">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.link}>
            <div className="flex items-center gap-2">
              {ctabtn1.btnText}
              <FaArrowRight className="w-4 h-4" />
            </div>
          </CTAButton>
          <CTAButton active={ctabtn2.active} linkto={ctabtn2.link}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>

      {/* Section 2 - Code Block */}
      <div className=" w-full lg:w-1/2 h-full border border-gray-800 rounded-lg bg-gray-900/50 backdrop-blur-sm flex py-4 px-2 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative">
        {backgroundGradient}

        {/* Line Numbers */}
        <div className="text-center flex flex-col w-[10%] select-none text-gray-500 font-inter font-bold">
          {[...Array(12)].map((_, i) => (
            <p key={i}>{i + 1}</p>
          ))}
        </div>

        {/* Code */}
        <div
          className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-1`}
        >
          <TypeAnimation
            sequence={[codeblock, 1000, ""]}
            cursor={true}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
