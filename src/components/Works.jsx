import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { logo } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";

function Number({ n }){
   const countRef = useRef(null);
   useEffect(() => {
     const observer = new IntersectionObserver((entries) => {
       const entry = entries[0];
       if (entry.isIntersecting) {
         // Start the animation when the element is visible
         setIsVisible(true);
       }
     });

     if (countRef.current) {
       observer.observe(countRef.current);
     }

     return () => {
       if (observer) {
         observer.disconnect();
       }
     };
   }, [countRef.current]);

   const [isVisible, setIsVisible] = useState(false);
  const { number } = useSpring({
    from: { number: 0},
    number: n,
    delay: 500,
    config: { mass: 1, tension: 10, friction: 10},
  });
  return (
  <div ref={countRef} className="count-section">
    {isVisible && <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>}
  </div>
  )
}


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  video,
  source_code_link,
}) => {
  return (
    <div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="m grid md:grid-row-3 items-center w-full  justify-center mx-auto md:gap-0 ">
        <div className="bg-gradient-to-b from-white to-[#f0fff0] hover:bg-gray-100 p-0 shadow-2xl rounded-2xl w-auto text-center">
          <div className="relative w-auto h-auto">
            <video
              src={video}
              alt="project_image"
              className="w-full shadow-xl rounded-3xl object-cover opacity-95 p-2"
              autoPlay
              loop
              muted
            />

            <div className="absolute inset-0 flex justify-end p-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="green-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <img
                  src={logo}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-0 p-5">
            <h3 className="text-gray-900 font-medium p-2 font-ubuntu text-[24px]">
              {name}
            </h3>
            <p className="mt-2 text-gray-500 font-medium font-ubuntu p-2 text-[16px]">
              {description}
            </p>
          </div>

          <div className="mt-0 font-medium flex font-ubuntu flex-wrap p-2 gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] p-2 font-ubuntu ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
 
  return (
    <>
      <div className="fontFamily-ubuntu custom-gradient rounded-2xl shadow-top-2xl">
        <div className="mt-[-140px] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-rows-1 border-[#417D41] border-[4px] rounded-2xl shadow-2xl mt-[-130px] pt-5 bg-[#B2D8B2] gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-rows-1">
              <div className="lg:pr-8 lg:pt-4">
              <div className="w-full border-l-[5px] border-[#417D41] px-10 border-opacity-50 pl-2 text-start ml-3">
               <h1 className="text-slate-900/50 font-ubuntu font-extrabold text-[28px]">
                 DISCOVER{" "}
                 <span className="text-[#417D41] font-ubuntu">POPULAR</span>
               </h1>
               <p className="text-gray-700 font-ubuntu text-[16px] font-medium">
                 Popular Diagnostic Centre Ltd. exists to provide a better
                 patient experience. We are a one-stop-shop for your health,
                 offering caring doctors, world-class diagnostics and much more
                 world-class diagnostics and much more.
               </p>
             </div>
                <div className="flex flex-wrap items-center justify-center mx-auto ">
                  <div className="flex flex-col items-center  mx-auto">
                    <div className="p-5 items-center mx-auto text-center">
                      <h6 className="text-[#417D41]  font-bold font-ubuntu text-[60px]">
                        <Number n={27} />
                      </h6>
                      <p className="text-gray-500 font-bold font-ubuntu text-[20px]">
                        DEPARTMENTS
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center flex-col mx-auto ml-20">
                    <div className="p-5 items-center mx-auto text-center">
                      <h6 className="text-[#417D41] flex flex-row font-bold font-ubuntu text-[60px]">
                        <Number n={5} />
                        <span>k+</span>
                      </h6>
                      <p className="text-gray-500 font-bold font-ubuntu text-[20px]">
                        DOCTORS
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center mx-auto ml-20">
                    <div className="p-5 items-center mx-auto text-center">
                      <h6 className="text-[#417D41] flex flex-row font-bold font-ubuntu text-[60px]">
                        <Number n={27} />
                        <span>k+</span>
                      </h6>
                      <p className="text-gray-500  font-bold font-ubuntu text-[20px]">
                        PATIENTS SERVED
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-auto">
          <h2 className="text-gray-500/50 pb-2 text-center pl-2 text-[28px] font-bold font-ubuntu">
            EXPLORE HEALTH PLUS
          </h2>
        </div>

        <div className="flex  mx-auto justify-center justify-items-center flex-wrap gap-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <a href="/">
          <p className="text-gray-500 pt-1 text-end pr-20 text-[20px] font-medium font-ubuntu">
            View More.....
          </p>
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
