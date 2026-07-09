// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            About Me
          </p>
          <p className="text-gray-200 text-sm lg:text-lg mb-5">
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Priya Kourav"
            className="rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105"
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;