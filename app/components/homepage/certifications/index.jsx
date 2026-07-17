// @flow strict

import Image from "next/image";
import { certifications } from "@/utils/data/certifications";
import GlowCard from "../../helper/glow-card";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

function Certifications() {
  return (
    <div
      id="certifications"
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
          <span className="w-20 sm:w-24 h-[2px] bg-[#1a1443]"></span>

          <span className="bg-[#1a1443] text-white px-4 py-2 sm:px-5 rounded-md text-lg sm:text-xl">
            Certifications
          </span>

          <span className="w-20 sm:w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <p className="text-center text-sm md:text-base text-[#b6bdd8] max-w-2xl mx-auto leading-7 px-4 mb-6">
                 Certifications and workshops showcasing my continuous learning in software
                 development, AI, and emerging technologies.
        </p>

     <div className="pt-4 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {certifications.map((cert) => (

            <GlowCard
              key={cert.id}
              identifier={`cert-${cert.id}`}
            >

              <div className="group relative h-full p-6 transition-all duration-300 hover:-translate-y-1 z-10">

                <Image
                  src="/blur-23.svg"
                  alt=""
                  width={1080}
                  height={200}
                 className="absolute bottom-0 opacity-70 pointer-events-none -z-10"
                />

                <div className="flex justify-between items-start">

                  <div className="flex items-center gap-3">

                    <div className="text-[#16f2b3] transition-all duration-300 group-hover:rotate-6 group-hover:scale-125">

                      <FaAward size={28} />

                    </div>

                    <div>

                      <h3 className="text-white font-semibold text-lg leading-6">

                        {cert.title}

                      </h3>

                      <p className="text-gray-400 text-sm">

                        {cert.issuer}

                      </p>

                    </div>

                  </div>

                  <span className="text-xs bg-[#16f2b320] text-[#16f2b3] px-3 py-1 rounded-full">

                    {cert.year}

                  </span>

                </div>

                {cert.credential && (

                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-[#16f2b3] hover:gap-3 transition-all"
                  >

                    Verify Credential

                    <FaExternalLinkAlt size={12} />

                  </a>

                )}

              </div>

            </GlowCard>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Certifications;