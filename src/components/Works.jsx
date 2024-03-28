import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { logo, tripguide, doctor } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
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
      <div className="grid md:grid-row-3 items-center sm:w-[380px] w-full justify-center mx-auto  md:gap-1 ">
        <div className="text-black m-2 bg-[#F0FFF0] shadow-xl rounded-xl  w-auto text-center">
          <div className="relative w-auto h-auto">
            <video
              src={video}
              alt="project_image"
              className="w-full h-[220px] rounded-xl object-cover opacity-90"
              autoPlay
              loop
              muted
            />

            <div className="absolute inset-0 flex justify-end p-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="green-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
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
                className={`text-[14px] p-2 font-ubuntu ${tag.color}`}
              >
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
      <div className="">
        <div className=" flex-row hidden md:block flex-wrap mb-10 gap-10">
          <div className="bg-[#F0FFF0] shadow-lg rounded-lg p-5 mx-auto w-full ">
            <div className="flex flex-col  flex-wrap max-w-screen-xl mx-auto  ">
              <div className="w-auto  border-l-[5px]  border-[#417D41] border-opacity-50 pl-2  text-start ml-3">
                <h1 className="text-slate-900/50 font-ubuntu font-extrabold text-[28px]">
                  DISCOVER{" "}
                  <span className="text-[#417D41] font-ubuntu">POPULAR</span>
                </h1>
                <p className="text-gray-500 font-ubuntu text-[16px] font-medium">
                  Popular Diagnostic Centre Ltd. Popular Diagnostic Centre Ltd.
                  Popular Diagnostic Centre Ltd. Popular Diagnostic Centre Ltd.
                  exists to provide a better patient experience. We are a
                  one-stop-shop for your health, offering caring doctors,
                  world-class diagnostics and much more world-class diagnostics
                  and much more world-class diagnostics and much more
                  world-class diagnostics and much more.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center mx-auto ">
                <div className="flex flex-col items-start mx-auto">
                  <h6 className="text-slate-900 font-bold font-ubuntu text-[60px]">
                    27
                  </h6>
                  <p className="text-gray-500 font-bold font-ubuntu text-[20px]">
                    DEPARTMENTS
                  </p>
                </div>
                <div className="flex items-start flex-col mx-auto ml-20">
                  <h6 className="text-slate-900 font-bold font-ubuntu text-[60px]">
                    5K+
                  </h6>
                  <p className="text-gray-500 font-bold font-ubuntu text-[20px]">
                    DOCTORS
                  </p>
                </div>
                <div className="flex flex-col items-start mx-auto ml-20">
                  <h6 className="text-slate-900 font-bold font-ubuntu text-[60px]">
                    270K+
                  </h6>
                  <p className="text-gray-500  font-bold font-ubuntu text-[20px]">
                    PATIENTS SERVED
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex-col sm:hidden flex-wrap mb-10 gap-10">
          <div className="bg-[#F0FFF0]/5 shadow p-5 mx-auto w-full ">
            <div className="flex flex-col  flex-wrap max-w-screen-xl mx-auto  ">
              <div className="w-full  border-l-[5px]  border-[#417D41] border-opacity-50 pl-2  text-start ml-3">
                <h1 className="text-slate-900/50 font-ubuntu font-extrabold text-[28px]">
                  DISCOVER{" "}
                  <span className="text-[#417D41] font-ubuntu">POPULAR</span>
                </h1>
                <p className="text-gray-500 font-ubuntu text-[16px] font-medium">
                  Popular Diagnostic Centre Ltd. exists to provide a better
                  patient experience. We are a one-stop-shop for your health,
                  offering caring doctors, world-class diagnostics and much more
                  world-class diagnostics and much more.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center mx-auto ">
                <div className="flex flex-col items-center mx-auto">
                  <h6 className="text-slate-900 font-bold font-ubuntu text-[60px]">
                    27
                  </h6>
                  <p className="text-gray-500 font-bold font-ubuntu text-[20px]">
                    DEPARTMENTS
                  </p>
                </div>
                <div className="flex items-center flex-col mx-auto ">
                  <h6 className="text-slate-900 font-bold font-ubuntu text-[60px]">
                    5K+
                  </h6>
                  <p className="text-gray-500 font-bold font-ubuntu text-[20px]">
                    DOCTORS
                  </p>
                </div>
                <div className="flex flex-col items-center mx-auto ">
                  <h6 className="text-slate-900 font-bold font-ubuntu text-[60px]">
                    270K+
                  </h6>
                  <p className="text-gray-500  font-bold font-ubuntu text-[20px]">
                    PATIENTS SERVED
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-[50px] max-w-7xl">
          <h2 className="text-gray-500/50 pb-2 text-start pl-2 text-[28px] font-bold font-ubuntu">
            EXPLORE HEALTH PLUS
          </h2>
        </div>

        <div className="flex  mx-auto p-0 justify-center  justify-items-center flex-wrap  gap-0">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <a href="/">
          <p className="text-gray-500 pt-1 text-end pr-2 text-[20px] font-medium font-ubuntu">
            View More.....
          </p>
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
