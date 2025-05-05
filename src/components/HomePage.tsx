"use client";

import React, { FC, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { motion, Variants } from "framer-motion";
import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaQuestionCircle,
  FaPlay,
  FaHandshake,
  FaGift,
  FaUserPlus,
  FaHandsHelping,
} from "react-icons/fa";
import { AiOutlineTeam, AiOutlineCheckCircle } from "react-icons/ai";

import solo from "../assets/solo.webp";
import SpecializedStaffSection from "./SpecializedStaffSection";
import Consultation from "./Consultation";

interface SolutionItem {
  icon: ReactNode;
  title: string;
  description: string;
}
interface Step {
  icon: ReactNode;
  label: string;
}
interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const solutions: SolutionItem[] = [
  {
    icon: <FaHtml5 className="w-8 h-8 text-black" />,
    title: "Architect your Solution",
    description:
      "Our team leverages deep tech expertise to design a strategic roadmap aligned with your business goals.",
  },
  {
    icon: <FaReact className="w-8 h-8 text-black" />,
    title: "Engineer your Solution",
    description:
      "We assemble your nearshore engineering dream team to build elegant, scalable software solutions.",
  },
  {
    icon: <FaNodeJs className="w-8 h-8 text-black" />,
    title: "ReEngineer your Process",
    description:
      "We accelerate your digital transformation, laying the foundation for efficient, scalable growth.",
  },
];

const steps: Step[] = [
  {
    icon: <FaQuestionCircle className="w-28 h-28 text-blue-900" />,
    label: "YOU ASK",
  },
  {
    icon: <FaPlay className="w-28 h-28 text-blue-900" />,
    label: "WE PROCEED",
  },
  {
    icon: <FaHandshake className="w-28 h-28 text-blue-900" />,
    label: "NEGOTIATE",
  },
  {
    icon: <FaGift className="w-28 h-28 text-blue-900" />,
    label: "YOU GET",
  },
];

const features: Feature[] = [
  {
    icon: <AiOutlineTeam className="w-8 h-8 text-black" />,
    title: "Dedicated Teams",
    description: "Find your next team member",
  },
  {
    icon: <FaUserPlus className="w-8 h-8 text-black" />,
    title: "Staff Augmentation",
    description: "Build a distributed development team",
  },
  {
    icon: <FaHandsHelping className="w-8 h-8 text-black" />,
    title: "Software Outsourcing",
    description: "End-to-End Software Development Outsourcing Solutions",
  },
  {
    icon: <AiOutlineCheckCircle className="w-8 h-8 text-black" />,
    title: "Remote Office",
    description:
      "Open your own remote development center and grow your business",
  },
];

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};
const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const HomePage: FC = () => {
  return (
    <section className="relative w-full h-fit bg-white mb-20">
      {/* Hero */}
      <div className="absolute w-full md:w-1/2 md:right-36 h-[250px] md:h-[600px]">
        <Image
          src={solo}
          alt="Background"
          fill
          className="rounded-bl-[70px] rounded-tr-4xl object-cover"
        />
      </div>
      <motion.div
        className="relative md:z-10 flex items-center justify-start top-64 md:top-5 md:left-20 w-full md:w-1/2 h-full"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full bg-white bg-opacity-90 backdrop-blur-md rounded-tr-[70px] md:p-10 m-4">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight tracking-tight"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Connect With Your Next Great Hire Today!
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            natus eius rem non quidem cum expedita magni nulla, rerum quibusdam
            fugit voluptates, dolorum fuga, itaque similique laudantium.
          </motion.p>
          <motion.div
            className="flex justify-center md:justify-start mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link
              href="/"
              className="bg-orange-500 text-white px-8 py-3 rounded-xl hover:bg-orange-600 transition flex items-center text-lg font-semibold"
            >
              Get Consultation
              <svg
                className="w-6 h-6 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Solutions Slider */}
      <motion.section
        className="bg-white py-16 px-6 mt-60 md:mt-40"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          className="text-lg text-gray-700 text-center mb-8 md:w-1/3 mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          From full-time remote engineering teams to hourly contractors, work
          with remote devs as needed
        </motion.p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{
            el: ".my-pagination",
            clickable: true,
            bulletClass: "swiper-pagination-bullet mx-3",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {solutions.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                custom={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="bg-yellow-300 rounded-lg p-6 mb-4 flex justify-center items-center"
              >
                {item.icon}
              </motion.div>
              <motion.h3
                className="text-xl font-semibold text-blue-900"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 + 0.2 }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                className="mt-2 text-gray-700 leading-relaxed text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 + 0.4 }}
              >
                {item.description}
              </motion.p>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="my-pagination flex justify-center mt-10"></div> */}
      </motion.section>

      {/* How to Start */}
      <motion.section
        className="bg-gradient-to-r from-orange-400 to-yellow-300 py-20 px-6"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="text-center md:max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white uppercase font-bold tracking-widest mb-5">
            How to Start
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Easy Process
          </h2>
          <p className="text-lg text-blue-800 w-2/3 md:w-1/2 mx-auto">
            We specialize in helping you build a team of expert developers,
            testers, and leaders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-20 mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center space-y-4"
            >
              <div className="text-white">{step.icon}</div>
              <div className="flex items-baseline space-x-2">
                <span className="text-5xl font-bold text-blue-900">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-2xl font-semibold text-blue-900 uppercase">
                  {step.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Expertise Features */}
      <motion.section
        className="bg-white py-16 px-6"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="max-w-7xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-900 font-semibold mb-6">Expertise</p>
          <h2 className="text-4xl font-bold text-blue-900 mb-8 max-w-2xl mx-auto">
            Hire Permanent and Remote Developers
          </h2>
          <p className="text-lg text-gray-700 mb-12 md:text-center text-start mx-auto md:max-w-1/3">
            From full-time remote engineering teams to hourly contractors, work
            with remote devs as needed
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center md:items-start"
            >
              <div className="bg-yellow-300 rounded-lg p-4 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-700 text-center md:text-start">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Specialized Staff & Consultation */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SpecializedStaffSection />
        <div className="mt-40">
          <Consultation backgroundImage={solo} />
        </div>
      </motion.div>
    </section>
  );
};

export default HomePage;
