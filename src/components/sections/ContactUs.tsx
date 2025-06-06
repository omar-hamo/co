"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import Banner from "../Banner";
import Consultation from "../Consultation";

import roony from "../../assets/roony.png";
import omar from "../../assets/omar.jpg";
import ayman from "../../assets/ayman.jpg";
import Amsterdam from "../../assets/Amsterdam-location.webp";
import major from "../../assets/major.png";

import { FaRocket, FaCode, FaChartLine } from "react-icons/fa";

const owners = [
  {
    name: "Ayman Almousa",
    // role: "Co-Founder & CEO",
    bio: "Senior data analyst and data scientist with 5+ years of hands-on work in ETL pipelines, interactive dashboards, and machine learning applications. I leverage AI and statistical methods to transform raw data into actionable insights.",
    email: "aymanalmousa@gmail.com",
    phone: "+31 631 104 755",
    photo: ayman,
  },
  {
    name: "Roony Zen Alden",
    // role: "Co-Founder & CEO",
    bio: "With over 4 years of hands-on experience in mobile application development and backend engineering, I specialize in crafting scalable, high-performance systems that drive visibility and engagement.",
    email: "ronizenalden@gmail.com",
    phone: "+963 981 705 334",
    photo: roony,
  },
  {
    name: "Omar Hamo",
    // role: "Co-Founder & CTO",
    bio: "A seasoned full-stack developer with 3+ years of experience designing responsive frontends and building robust backend services, I blend technical precision with strategic insight to optimize user journeys.",
    email: "omar.hamo04942@gmail.com",
    phone: "+963 944 974 828",
    photo: omar,
  },
];

// معلومات التواصل العامة
const contactInfo = {
  email: "info@formanji.com",
  phone: "+44 20 7946 0958",
  address: "123 Tech Park, Amsterdam, Netherlands",
};

// القيم الأساسية
const values = [
  {
    title: "Innovation",
    desc: "We embrace new ideas and technologies to stay ahead.",
  },
  {
    title: "Integrity",
    desc: "We conduct our business with honesty and transparency.",
  },
  {
    title: "Customer Focus",
    desc: "Our clients’ success is our top priority.",
  },
];

// خطوات البدء
const steps = [
  {
    icon: <FaRocket />,
    title: "01. Request a Consultation",
    text: "Tell us about your idea or project. We’ll analyze your technical needs in detail.",
  },
  {
    icon: <FaCode />,
    title: "02. Technical Interview",
    text: "We’ll discuss your project in depth and suggest the best solutions (Next.js, Django, SEO, UX/UI, etc.).",
  },
  {
    icon: <FaChartLine />,
    title: "03. Start the Project",
    text: "After signing the agreement, we start building your project using the latest modern technologies.",
  },
];

// Variants مشترك للانيميشن
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const ContactUs: React.FC = () => {
  return (
    <main>
      {/* Banner */}
      <Banner
        title="Contact "
        highlightedWord="Us"
        description="At Formanji, we transform ideas into digital realities. Our expert team combines innovation, design, and technology to deliver exceptional web applications."
        backgroundImage={major}
        bottomTitle="Join Our Story"
        bottomText="Learn more about our journey and values."
      />

      {/* Our Values */}
      <section className="bg-white py-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold text-gray-800"
          >
            Our Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-gray-600"
          >
            The guiding principles that shape our culture and drive our work.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                {val.title}
              </h3>
              <p className="text-gray-600">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="bg-gray-50 py-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold text-gray-800"
          >
            What We Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-gray-600"
          >
            Our services are tailored to help your brand grow and succeed
            online.
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4 text-left">
          {[
            "✅ Social media account management",
            "✅ Short & promotional video design and editing",
            "✅ Website and e-commerce store design",
            "✅ SEO-friendly article writing",
            "✅ High-quality backlink building",
            "✅ Complete and professional marketing strategy",
            "✓ Trusted by over 9,000 clients",
            "✓ Cancel anytime — no commitment!",
          ].map((service, idx) => (
            <motion.p
              key={idx}
              custom={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-gray-700 text-lg font-medium"
            >
              {service}
            </motion.p>
          ))}
        </div>
      </section>
      {/* Our Leadership */}
      <section className="bg-gray-50 py-16 px-4">
        <motion.div
          className="max-w-5xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-gray-800">
            Our Leadership
          </h2>
          <p className="mt-4 text-gray-600">
            Meet the visionaries and experts driving our mission to empower
            businesses.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {owners.map((owner, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition"
            >
              <div className="w-32 h-32 mb-4 rounded-full overflow-hidden">
                <Image
                  src={owner.photo}
                  alt={owner.name}
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {owner.name}
              </h3>
              {/* <p className="text-indigo-600 font-medium mt-1">{owner.role}</p> */}
              <p className="text-gray-600 mt-4 text-center">{owner.bio}</p>
              <div className="mt-4 text-center space-y-1">
                <p className="text-sm text-gray-600">
                  📧{" "}
                  <a
                    href={`mailto:${owner.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {owner.email}
                  </a>
                </p>
                <p className="text-sm text-gray-600">
                  📞{" "}
                  <a
                    href={`tel:${owner.phone}`}
                    className="text-blue-600 hover:underline"
                  >
                    {owner.phone}
                  </a>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Details */}
      <section className="bg-white py-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Whether you have a question or want to start a project, we're here
            to help.
          </p>

          <motion.div
            className="space-y-2 text-gray-700 inline-block text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>📍 {contactInfo.address}</p>
            <p>
              📧{" "}
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-blue-600 hover:underline"
              >
                {contactInfo.email}
              </a>
            </p>
            <p>
              📞{" "}
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-blue-600 hover:underline"
              >
                {contactInfo.phone}
              </a>
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Consultation Banner */}
      <Consultation backgroundImage={Amsterdam} />
    </main>
  );
};

export default ContactUs;
