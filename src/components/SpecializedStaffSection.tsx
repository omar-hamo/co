"use client";

import React, { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion, Variants } from "framer-motion";
import { Text } from "./ui/Text";
import {
  FaCode,
  FaSearch,
  FaMobile,
  FaServer,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";
import { SiWebflow, SiWordpress, SiShopify } from "react-icons/si";
import { MdSpeed, MdAnalytics } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";

interface StaffItem {
  icon: React.ReactNode;
  title: string;
}

const staffItems: StaffItem[] = [
  {
    icon: <FaCode className="w-8 h-8 text-primary" />,
    title: "Custom Website Development",
  },
  {
    icon: <SiWebflow className="w-8 h-8 text-primary" />,
    title: "Webflow Development",
  },
  {
    icon: <SiWordpress className="w-8 h-8 text-primary" />,
    title: "WordPress Development",
  },
  {
    icon: <SiShopify className="w-8 h-8 text-primary" />,
    title: "E-commerce Solutions",
  },
  {
    icon: <FaMobile className="w-8 h-8 text-primary" />,
    title: "Mobile-First Design",
  },
  {
    icon: <FaSearch className="w-8 h-8 text-primary" />,
    title: "SEO Optimization",
  },
  {
    icon: <MdSpeed className="w-8 h-8 text-primary" />,
    title: "Performance Optimization",
  },
  {
    icon: <FaServer className="w-8 h-8 text-primary" />,
    title: "Web Hosting",
  },
  {
    icon: <FaShieldAlt className="w-8 h-8 text-primary" />,
    title: "Security Implementation",
  },
  {
    icon: <MdAnalytics className="w-8 h-8 text-primary" />,
    title: "Analytics Integration",
  },
  {
    icon: <BsGraphUp className="w-8 h-8 text-primary" />,
    title: "Conversion Optimization",
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-primary" />,
    title: "Digital Marketing",
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
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Text variant="h2" className="text-gray-900 font-bold">
          Comprehensive Web Solutions
        </Text>
        <Text variant="body" className="text-gray-600 mt-4">
          From custom development to SEO optimization, we provide end-to-end web
          solutions to help your business grow online.
        </Text>
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
              className="flex items-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-100"
            >
              <div className="p-3 rounded-xl bg-indigo-50 mr-4">
                {item.icon}
              </div>
              <Text variant="body" className="font-semibold text-gray-900">
                {item.title}
              </Text>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="max-w-sm mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={16}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              dynamicBullets: true,
            }}
            className="pb-20"
          >
            {mobileChunks.map((group, grpIdx) => (
              <SwiperSlide key={grpIdx}>
                <div className="flex flex-col space-y-4 px-2 mb-8">
                  {group.map((item, idx) => (
                    <motion.div
                      key={idx}
                      custom={idx}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      className="flex items-center bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100"
                    >
                      <div className="p-2 sm:p-3 rounded-xl bg-indigo-50 mr-3 sm:mr-4">
                        {item.icon}
                      </div>
                      <Text
                        variant="body"
                        className="font-semibold text-gray-900 text-sm sm:text-base"
                      >
                        {item.title}
                      </Text>
                    </motion.div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination !bottom-0 mt-8" />
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default SpecializedStaffSection;
