import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Banner from "../assets/Images/banner.mp4";

import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";
import CTAButton from "../components/core/HomePage/Button";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import HighlightText from "../components/core/HomePage/HighlightText";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import TimelineSection from "../components/core/HomePage/TimelineSection";

function Home() {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white bg-richblack-900">
        {/* Become a Instructor Button */}
        <Link to={"/signup"}>
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Heading */}
        <div className="text-center text-4xl font-semibold">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        {/* Sub Heading */}
        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        {/* Video */}
        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                <HighlightText text={"coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        {/* Explore Section */}
        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px]">
          {/* Explore Full Category Section */}
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div className="">Learn More</div>
              </CTAButton>
            </div>
          </div>

          {/* Timeline Section - Section 2 */}
          <TimelineSection />

          {/* Learning Language Section - Section 3 */}
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Become a instructor section */}
        <InstructorSection />

        {/* Reviews from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        <div className="flex w-400 sm:2 md:3 lg:6 xl:7">
          <ReviewSlider />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;

// import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";

// import CTAButton from "../components/core/HomePage/Button";
// import BookDemo from "../components/core/HomePage/Button";
// import banner from "../assets/images/banner.mp4";
// import CodeBlocks from "../components/core/HomePage/CodeBlocks";
// import HighlightText from "../components/core/HomePage/HighlightText";
// import TimelineSection from "../components/core/HomePage/TimelineSection";
// import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
// import InstructorSection from "../components/core/HomePage/InstructorSection";
// import ReviewSlider from "../components/common/ReviewSlider";
// import ExploreMore from "../components/core/HomePage/ExploreMore";

// const Home = () => {
//   return (
//     <div className="relative flex flex-col items-center justify-between w-11/12 mx-auto">
//       {/* Section 1: Main CTA */}
//       <div className="mx-auto mt-16 w-fit">
//         <div className="rounded-full mx-auto text-richblack-200 bg-richblack-800 duration-200 transition-all hover:scale-95 w-fit">
//           <Link to="/signup">
//             <div className="flex flex-row gap-4 px-4 py-2 items-center group-hover:bg-richblack-900">
//               <p>Become an Instructor</p>
//               <FaArrowRight />
//             </div>
//           </Link>
//         </div>

//         {/* Hero Heading */}
//         <div className="text-center text-4xl font-bold text-richblack-200 mt-7">
//           Empower Your Future with <HighlightText text="Coding Skills" />
//         </div>

//         {/* Subtext */}
//         <div className="w-[90%] text-center text-lg font-bold text-richblack-200 mt-4 mx-auto">
//           With our online coding courses, you can learn at your own pace, from
//           anywhere in the world, and get access to a wealth of resources,
//           including hands-on projects, quizzes, and personalized feedback from
//           instructors.
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex flex-row gap-5 mt-8 mx-auto w-fit">
//           <CTAButton active={true} linkto="/signup">
//             Learn More
//           </CTAButton>
//           <BookDemo active={false} linkto="/login">
//             Book a Demo
//           </BookDemo>
//         </div>

//         {/* Banner Video */}
//         <div className="mb-10 my-14 px-3 overflow-hidden w-full">
//           <video
//             muted
//             loop
//             autoPlay
//             className="w-full h-auto max-w-7xl mx-auto object-cover rounded-md shadow-blue-200"
//           >
//             <source src={banner} type="video/mp4" />
//           </video>
//         </div>

//         {/* Code Section 1 */}
//         <div className="w-full flex flex-col md:flex-row justify-center mx-auto max-w-7xl">
//           <CodeBlocks
//             position={"lg:flex-row"}
//             heading={
//               <div className="text-4xl font-semibold text-center">
//                 Unlock Your <HighlightText text="Coding Potential" /> with our
//                 online coding courses.
//               </div>
//             }
//             subheading={
//               "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
//             }
//             ctabtn1={{
//               btnText: "Try it Yourself",
//               link: "/signup",
//               active: true,
//             }}
//             ctabtn2={{
//               btnText: "Learn More",
//               link: "/login",
//               active: false,
//             }}
//             codeColor={"text-yellow-25"}
//             codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
//             backgroundGradient={<div className="codeblock1 absolute"></div>}
//           />
//         </div>
//         <ExploreMore />
//         {/* Code Section 2.1*/}
//         <div className="w-full flex flex-col md:flex-row justify-center mx-auto max-w-7xl">
//           <CodeBlocks
//             position={"lg:flex-row-reverse"}
//             heading={
//               <div className="text-4xl font-semibold text-center">
//                 Starts <HighlightText text="Coding In Seconds" />
//                 With the best courses on the market.
//               </div>
//             }
//             subheading={
//               "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
//             }
//             ctabtn1={{
//               btnText: "Continue Lesson",
//               link: "/signup",
//               active: true,
//             }}
//             ctabtn2={{
//               btnText: "Learn More",
//               link: "/login",
//               active: false,
//             }}
//             codeColor={"text-yellow-25"}
//             codeblock={`import React, { useState } from "react";

//               function Counter() {
//                 const [count, setCount] = useState(0);
//                 return (
//                   <div className="flex flex-col items-center gap-4">
//                     <h1 className="text-2xl font-bold text-white">
//                       Count: {count}
//                     </h1>
//                     <button
//                       onClick={() => setCount(count + 1)}
//                       className="bg-blue-500 text-white px-4 py-2 rounded"
//                     >
//                       Increment
//                     </button>
//                   </div>
//                 );
//               }
//               export default Counter;`}
//             backgroundGradient={<div className="codeblock1 absolute"></div>}
//           />
//         </div>
//       </div>

//       {/* SECTION 3 */}
//       <div className="bg-gray-50 w-full text-richblack-700">
//         <div className="homepage_bg h-[310px]">
//           <div className="w-full max-w-7xl max-w-maxContent flex flex-col justify-between items-center gap-4 mx-auto">
//             <div className="h-[150px]"></div>
//             <div className="flex flex-row  gap-7 text-white px-4 ">
//               <CTAButton active={true} linkto={"/signup"}>
//                 <div className="flex items-center gap-2 text-base">
//                   Explore Full Catalog
//                   <FaArrowRight />
//                 </div>
//               </CTAButton>
//               <CTAButton active={false} linkto={"/signup"}>
//                 <div className="flex items-center gap-2 text-base">
//                   Learn More...
//                 </div>
//               </CTAButton>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col mx-auto w-full max-w-7xl items-center justify-between gap-8 mb-10 px-4">
//           {/* Wrapper for heading + content */}
//           <div className="flex flex-col md:flex-row gap-8 w-full md:w-10/12 justify-between">
//             {/* Left Section - Heading */}
//             <div className="text-3xl sm:text-4xl font-semibold text-richblack-200 md:w-1/2 text-center md:text-left">
//               Get the Skills needed for a{" "}
//               <HighlightText text={"Job that is in Demand"} />
//             </div>

//             <div className="flex flex-col gap-4 md:w-1/2 text-center md:text-left">
//               <p className="text-base text-richblack-300 leading-relaxed">
//                 The modern StudyNotion dictates its own terms. Today, to be a
//                 competitive specialist requires more than professional skills —
//                 adaptability and continuous learning are key.
//               </p>

//               <div className="mx-auto md:mx-0 md:w-fit">
//                 <CTAButton active={true} linkto={"/signup"}>
//                   Learn More
//                 </CTAButton>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="px-8 py-8 mx-auto">
//           <TimelineSection />

//           <LearningLanguageSection />
//         </div>
//       </div>

//       {/* {SECTION 4} */}
//       <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
//         {/* Become a instructor section */}
//         <InstructorSection />

//         {/* Reviews from Other Learner */}
//         <h1 className="text-center text-4xl font-semibold mt-8">
//           Reviews from other learners
//         </h1>
//         {/* <ReviewSlider /> */}
//       </div>
//     </div>
//   );
// };

// export default Home;
