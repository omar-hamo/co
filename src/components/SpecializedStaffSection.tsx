"use client";

import React, { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { motion, Variants } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import { IoIosCode } from "react-icons/io";
import { MdAndroid } from "react-icons/md";
import { GiCpu } from "react-icons/gi";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { SiPhp, SiWordpress, SiReact } from "react-icons/si";

interface StaffItem {
  icon: React.ReactNode;
  title: string;
}

const staffItems: StaffItem[] = [
  {
    icon: <FaHtml5 className="w-8 h-8 text-black" />,
    title: "Frontend Engineers",
  },
  {
    icon: <FaReact className="w-8 h-8 text-black" />,
    title: "Angular Developers",
  },
  {
    icon: <GiCpu className="w-8 h-8 text-black" />,
    title: "AI and ML Engineers",
  },
  {
    icon: <FaDocker className="w-8 h-8 text-black" />,
    title: "DevOps + DevSecOps Engineers",
  },
  {
    icon: <IoIosCode className="w-8 h-8 text-black" />,
    title: "Project Managers",
  },
  {
    icon: <SiPhp className="w-8 h-8 text-black" />,
    title: "Solution Architects",
  },
  {
    icon: <MdAndroid className="w-8 h-8 text-black" />,
    title: "iOS and Android Developers",
  },
  {
    icon: <SiReact className="w-8 h-8 text-black" />,
    title: "Fullstack Engineers",
  },
  { icon: <SiPhp className="w-8 h-8 text-black" />, title: "PHP Developers" },
  {
    icon: <AiOutlineSecurityScan className="w-8 h-8 text-black" />,
    title: "QA Engineers",
  },
  {
    icon: <SiWordpress className="w-8 h-8 text-black" />,
    title: "WordPress CMS Developers",
  },
  {
    icon: <FaNodeJs className="w-8 h-8 text-black" />,
    title: "Tech Leads / Team Leads",
  },
];

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

function useIsDesktop(breakpoint = 1024) {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= breakpoint);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);
  return isDesktop;
}

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

const SpecializedStaffSection: FC = () => {
  const isDesktop = useIsDesktop();
  const mobileChunks = chunkArray(staffItems, 2);

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-blue-900 font-semibold mb-2">Specialized Staff</p>
        <h2 className="text-3xl font-bold text-blue-900">
          Specialized Staff We Provide
        </h2>
      </div>

      {isDesktop ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {staffItems.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-center bg-white p-4 rounded-xl shadow-md border-l-8 border-yellow-300 hover:scale-105 transition-transform"
            >
              <div className="p-3 rounded-lg mr-4">{item.icon}</div>
              <h3 className="font-semibold text-blue-900">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="max-w-sm mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={20}
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{
              el: ".my-pagination",
              clickable: true,
              // bulletClass: "swiper-pagination-bullet mx-3",
              // bulletActiveClass: "swiper-pagination-bullet-active",
            }}
          >
            {mobileChunks.map((group, grpIdx) => (
              <SwiperSlide key={grpIdx}>
                <div className="flex flex-col space-y-4">
                  {group.map((item, idx) => (
                    <motion.div
                      key={idx}
                      custom={idx}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      className="flex items-center bg-white p-4 rounded-xl shadow-md border-l-8 border-yellow-300"
                    >
                      <div className="p-3 rounded-lg mr-4">{item.icon}</div>
                      <h3 className="font-semibold text-blue-900">
                        {item.title}
                      </h3>
                    </motion.div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className="my-pagination flex justify-center mt-10"></div> */}
        </div>
      )}
    </section>
  );
};

export default SpecializedStaffSection;
