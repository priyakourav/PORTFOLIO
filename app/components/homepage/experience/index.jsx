// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from "../../../assets/lottie/code.json";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Section Background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
        priority
      />

      {/* Heading */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] text-white p-2 px-5 text-xl rounded-md">
            Experience
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          {/* Left Animation */}
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-6">
            {experiences.map((experience) => (
              <GlowCard
                key={experience.id}
                identifier={`experience-${experience.id}`}
              >
                <div className="group p-5 relative transition-all duration-300 hover:-translate-y-1">
                  <Image
                    src="/blur-23.svg"
                    alt=""
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80"
                  />

                  {/* Duration */}
                  <div className="flex justify-center">
                    <p className="text-xs sm:text-sm text-[#16f2b3]">
                      {experience.duration}
                    </p>
                  </div>

                  <div className="flex items-start gap-6 px-3 py-5">
                   <div className="text-violet-500 transition-all duration-300 group-hover:scale-125 group-hover:rotate-6">
                      <BsPersonWorkspace size={36} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold uppercase text-white">
                        {experience.title}
                      </h3>

                      <p className="text-sm text-gray-300 mb-3">
                        {experience.company}
                      </p>

                     {/* Description */}
<div className="mt-4">
  <ul className="list-disc ml-5 space-y-2 text-sm text-gray-300 leading-6">
    {experience.description?.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
</div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Experience;