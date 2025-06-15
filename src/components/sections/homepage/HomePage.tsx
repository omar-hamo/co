"use client";

import React, { FC, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Text } from "../../ui/Text";

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
import solo from "../../../assets/solo.webp";
import drmicheladib from "../../../assets/drmicheladib.png";
import realEstate from "../../../assets/real-estate.png";
import shoper from "../../../assets/shoper.png";
import ServiceOverview from "./ServiceOverview";
import SpecializedStaffSection from "@/components/SpecializedStaffSection";

const MotionImage = motion(Image);

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

const projects = [
  // {
  //   title: "Elite Fitness Club Platform",
  //   description:
  //     "Responsive website design and development for a professional gym—featuring weight-loss tracking, customized workout and nutrition plans, and a comprehensive dashboard.",
  //   image: drmicheladib,
  // },
  {
    title: "Real Estate Platform",
    description:
      "A smart real estate platform where users can list rental properties with features like elevators, lighting, and type (house, studio, etc.). Includes advanced search, filtering, and role-based access for users and admins.",
    image: realEstate,
  },
  {
    title: "Shoper E-Commerce Store",
    description:
      "An e-commerce app with product search, category filters, cart, and address-based delivery. Features an admin dashboard to manage users, track orders, and monitor earnings.",
    image: shoper,
  },
];
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const HomePage: FC = () => {
  return (
    <>
      <Head>
        <title>Aro Tech Vision | Web Development & Digital Solutions</title>
        <meta
          name="description"
          content="Expert web development and digital solutions. We build high-performance websites, e-commerce platforms, and custom software solutions. Get a free consultation today."
        />
        <meta
          name="keywords"
          content="web development, e-commerce, software development, digital solutions, custom websites, remote development team"
        />
        <meta
          property="og:title"
          content="Aro Tech Vision | Web Development & Digital Solutions"
        />
        <meta
          property="og:description"
          content="Expert web development and digital solutions. We build high-performance websites, e-commerce platforms, and custom software solutions."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Aro Tech Vision | Web Development & Digital Solutions"
        />
        <meta
          name="twitter:description"
          content="Expert web development and digital solutions. We build high-performance websites, e-commerce platforms, and custom software solutions."
        />
      </Head>

      <section className="relative w-full h-fit bg-white mb-20">
        {/* Hero */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Column */}
          <div className="relative w-full md:w-1/2 h-64 sm:h-96 md:h-[600px]">
            <Image
              src={solo}
              alt="Aro Tech Vision - Professional Web Development Services"
              fill
              className="object-cover rounded-bl-[70px] rounded-tr-[70px]"
              priority
            />
          </div>

          {/* Text Column */}
          <motion.div
            className="w-full md:w-1/2 p-6 sm:p-8 lg:p-12 bg-opacity-90 backdrop-blur-md rounded-tr-[70px] m-4 shadow-lg"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <Text
              variant="h1"
              className="text-blue-900 mb-4 sm:mb-6 leading-tight"
            >
              Let's Build a Website That Works as Hard as You Do
            </Text>

            <Text variant="body" className="text-gray-700 mb-4 sm:mb-6">
              Boost your online presence with expert web design and development.
              We build sleek, high-performance websites and e-commerce platforms
              combining style, speed, and usability.
            </Text>

            <motion.div
              className="flex justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-primary hover:bg-primary-100 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                aria-label="Get a free consultation"
              >
                Get Consultation
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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
          </motion.div>
        </div>

        {/* Portfolio Section */}
        <motion.section
          className="bg-white py-16 px-6 mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-label="Our Portfolio"
        >
          <Text variant="h2" className="text-center text-blue-900 mb-4">
            Here's Our Work
          </Text>

          <Text variant="body" className="text-center mb-12 md:w-2/3 mx-auto">
            Discover a selection of our past projects—each crafted to showcase
            our expertise in building powerful, modern websites and e-commerce
            platforms.
          </Text>

          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={0}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed={1000}
            pagination={{
              el: ".my-pagination",
              clickable: true,
              bulletClass: "swiper-pagination-bullet mx-1",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center text-center">
                  <MotionImage
                    src={project.image}
                    alt={`${project.title} - Project Showcase`}
                    className="w-full max-w-6xl h-auto rounded-lg mb-6 object-cover mx-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                  />

                  <motion.h3
                    className="text-2xl md:text-3xl font-semibold text-blue-900 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-700 leading-relaxed max-w-6xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    {project.description}
                  </motion.p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            className="my-pagination flex justify-center mt-8"
            aria-label="Project navigation"
          ></div>
        </motion.section>

        {/* Solutions Section */}
        <motion.section
          className="bg-white py-16 px-6 md:mt-10"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-label="Our Solutions"
        >
          <Text
            variant="h2"
            className="text-blue-900 text-center mb-8 md:w-2/3 mx-auto"
          >
            From full-time remote engineering teams to hourly contractors, work
            with remote devs as needed
          </Text>

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
                className="flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow duration-300 mb-2 rounded-2xl"
              >
                <motion.div
                  custom={idx}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-primary rounded-lg p-6 mb-4 flex justify-center items-center"
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
                  className="my-2 text-gray-700 leading-relaxed text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1 + 0.4 }}
                >
                  {item.description}
                </motion.p>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.section>

        <ServiceOverview />

        {/* Process Section */}
        <motion.section
          className="bg-gradient-to-r from-primary-100 to-primary py-20 px-6"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-label="Our Process"
        >
          <motion.div
            className="text-center md:max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Text
              variant="caption"
              className="text-white uppercase font-bold tracking-widest mb-5"
            >
              How to Start
            </Text>
            <Text variant="h2" className="text-blue-900 mb-4">
              Easy Process
            </Text>
            <Text
              variant="body"
              className="text-blue-800 w-2/3 md:w-1/2 mx-auto"
            >
              We specialize in helping you build a team of expert developers,
              testers, and leaders.
            </Text>
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
                <div className="text-white" aria-hidden="true">
                  {step.icon}
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl font-semibold text-blue-900 uppercase">
                    {step.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <SpecializedStaffSection />

        {/* Features Section */}
        <motion.section
          className="bg-white pb-16 md:pt-16 pt-6 px-6"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-label="Our Features"
        >
          <motion.div
            className="max-w-7xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Text
              variant="caption"
              className="text-blue-900 font-semibold mb-6"
            >
              Expertise
            </Text>
            <Text variant="h2" className="text-blue-900 mb-8 max-w-2xl mx-auto">
              Hire Permanent and Remote Developers
            </Text>
            <Text
              variant="body"
              className="text-gray-700 mb-12 md:text-center text-start mx-auto md:max-w-1/3"
            >
              From full-time remote engineering teams to hourly contractors,
              work with remote devs as needed
            </Text>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mx-16">
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
                <div
                  className="bg-primary rounded-lg p-4 mb-4"
                  aria-hidden="true"
                >
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

        {/* CTA Section */}
        <section className="mt-10 px-6" aria-label="Contact Us">
          <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-6 max-w-xl mx-auto text-center border border-gray-200">
            <Text variant="h2" className="text-gray-900 mb-2">
              Let's talk!
            </Text>
            <Text
              variant="body"
              className="text-gray-700 mb-4 text-sm leading-relaxed"
            >
              Schedule a free 20-minute call with one of our team members and
              ask us anything, we're here to help.
            </Text>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-400 transition"
              aria-label="Contact us for a free consultation"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePage;
