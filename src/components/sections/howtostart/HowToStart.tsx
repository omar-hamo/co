"use client";

import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Text } from "../../ui/Text";
import { motion, Variants } from "framer-motion";

import { FaRocket, FaCode, FaChartLine } from "react-icons/fa";
import {
  FaCogs,
  FaMobileAlt,
  FaSyncAlt,
  FaLifeRing,
  FaPalette,
} from "react-icons/fa";

import major from "../../../assets/major.png";
import Banner from "@/components/ui/Banner";

// Variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const HowToStart: React.FC = () => {
  const steps = [
    {
      icon: <FaRocket />,
      title: "01. Request a Consultation",
      text: "Tell us about your idea or project. We'll analyze your technical needs in detail.",
    },
    {
      icon: <FaCode />,
      title: "02. Technical Interview",
      text: "We'll discuss your project in depth and suggest the best solutions (Next.js, Django, SEO, UX/UI, etc.).",
    },
    {
      icon: <FaChartLine />,
      title: "03. Start the Project",
      text: "After signing the agreement, we start building your project using the latest modern technologies.",
    },
  ];

  const reasons = [
    {
      icon: <FaCogs />,
      title: "Cutting-Edge Expertise",
      text: "Skilled in the latest web technologies to ensure future-ready solutions.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Fast & SEO-Optimized",
      text: "We build fast, responsive, and SEO-optimized websites to boost your presence.",
    },
    {
      icon: <FaSyncAlt />,
      title: "Full Optimization",
      text: "We optimize every aspect of your site for maximum speed and performance.",
    },
    {
      icon: <FaLifeRing />,
      title: "Ongoing Support",
      text: "Our team provides continuous support, updates, and improvements.",
    },
    {
      icon: <FaPalette />,
      title: "Professional UX/UI",
      text: "Exceptional UX/UI design to enhance user experience and engagement.",
    },
  ];

  return (
    <section className="bg-white mb-36">
      {/* Banner */}
      <Banner
        title="Start Your Journey with Us"
        highlightedWord="Today!"
        description="Kickstart your digital project with our expert team through a simple and clear process."
        backgroundImage={major}
        bottomTitle="How to Get Started"
        bottomText="Reach us through social media or our website!"
      />

      {/* Steps */}
      <div className="container mx-auto px-4 py-16 text-center">
        <Text variant="h2" className="text-gray-800 mb-8">
          Steps to Get Started:
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <div className="flex justify-center mb-4 text-primary text-4xl">
                {step.icon}
              </div>
              <Text variant="h3" className="text-gray-800 mb-2 font-semibold">
                {step.title}
              </Text>
              <Text variant="body" className="text-gray-600">
                {step.text}
              </Text>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-4 text-center">
        <Text variant="h2" className="text-gray-800 mb-8">
          Why Choose Us?
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <div className="flex justify-center mb-4 text-primary text-4xl">
                {item.icon}
              </div>
              <Text variant="h3" className="text-gray-800 mb-2 font-semibold">
                {item.title}
              </Text>
              <Text variant="body" className="text-gray-600">
                {item.text}
              </Text>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToStart;
