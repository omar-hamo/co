"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Text } from "@/components/ui/Text";
import Head from "next/head";

import Banner from "../../ui/Banner";
import Consultation from "../../Consultation";

import roony from "../../../assets/roony.png";
import omar from "../../../assets/omar.jpg";
import ayman from "../../../assets/ayman.jpg";
import Amsterdam from "../../../assets/Amsterdam-location.webp";
import major from "../../../assets/major.png";

const owners = [
  {
    name: "Omar Hamo",
    // role: "Co-Founder & CTO",
    bio: "A seasoned full-stack developer with 3+ years of experience designing responsive frontends and building robust backend services, I blend technical precision with strategic insight to optimize user journeys.",
    email: "omar.hamo04942@gmail.com",
    phone: "+963 944 974 828",
    photo: omar,
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
    name: "Ayman Almousa",
    // role: "Co-Founder & CEO",
    bio: "Senior data analyst and data scientist with 5+ years of hands-on work in ETL pipelines, interactive dashboards, and machine learning applications. I leverage AI and statistical methods to transform raw data into actionable insights.",
    email: "almousa_ayman@yahoo.com",
    phone: "+31-20-1234567",
    photo: ayman,
  },
];

const contactInfo = {
  email: "arotechvision@gmail.com",
  phone: "+31-20-1234567",
  address: "123 Tech Park, Amsterdam, Netherlands",
};

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
    desc: "Our clients' success is our top priority.",
  },
];

interface ContactInfoItem {
  icon: string;
  title: string;
  content: string;
}

const contactInfoItems: ContactInfoItem[] = [
  {
    icon: "📍",
    title: "Address",
    content: contactInfo.address,
  },
  {
    icon: "📧",
    title: "Email",
    content: contactInfo.email,
  },
  {
    icon: "📞",
    title: "Phone",
    content: contactInfo.phone,
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
    <>
      <Head>
        <title>Contact Us | Aro Tech Vision</title>
        <meta
          name="description"
          content="Get in touch with our expert team at Aro Tech Vision. We offer web development, digital marketing, and custom software solutions. Contact us for a free consultation."
        />
        <meta
          name="keywords"
          content="contact Aro Tech Vision, web development contact, digital marketing agency, software development contact"
        />
      </Head>

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
        <section className="bg-white py-16 px-4" aria-label="Our Values">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Text variant="h2" className="text-gray-800">
                Our Values
              </Text>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Text variant="body" className="mt-4 text-gray-600">
                The guiding principles that shape our culture and drive our
                work.
              </Text>
            </motion.div>
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
                <Text variant="h3" className="text-primary mb-2">
                  {val.title}
                </Text>
                <Text variant="body" className="text-gray-600">
                  {val.desc}
                </Text>
              </motion.div>
            ))}
          </div>
        </section>

        {/* What We Offer */}
        <section className="bg-gray-50 py-16 px-4" aria-label="What We Offer">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Text variant="h2" className="text-gray-800">
                What We Offer
              </Text>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Text variant="body" className="mt-4 text-gray-600">
                Our services are tailored to help your brand grow and succeed
                online.
              </Text>
            </motion.div>
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
              <motion.div
                key={idx}
                custom={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Text variant="body" className="text-gray-700 font-medium">
                  {service}
                </Text>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Leadership */}
        <section className="bg-gray-50 py-16 px-4" aria-label="Our Leadership">
          <motion.div
            className="max-w-5xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Text variant="h2" className="text-gray-800">
              Our Leadership
            </Text>
            <Text variant="body" className="mt-4 text-gray-600">
              Meet the visionaries and experts driving our mission to empower
              businesses.
            </Text>
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
                    alt={`${owner.name} - Team Member`}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <Text variant="h3" className="text-gray-800 font-semibold">
                  {owner.name}
                </Text>
                <Text variant="body" className="text-gray-600 mt-4 text-center">
                  {owner.bio}
                </Text>
                <div className="mt-4 text-center space-y-1">
                  <Text variant="caption" className="text-gray-600 block">
                    📧{" "}
                    <a
                      href={`mailto:${owner.email}`}
                      className="text-blue-600 hover:underline"
                      aria-label={`Email ${owner.name}`}
                    >
                      {owner.email}
                    </a>
                  </Text>
                  <Text variant="caption" className="text-gray-600">
                    📞{" "}
                    <a
                      href={`tel:${owner.phone}`}
                      className="text-blue-600 hover:underline"
                      aria-label={`Call ${owner.name}`}
                    >
                      {owner.phone}
                    </a>
                  </Text>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section
          className="bg-white py-16 px-4"
          aria-label="Contact Information"
        >
          <motion.div
            className="max-w-5xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Text variant="h2" className="text-gray-800">
              Contact Information
            </Text>
            <Text variant="body" className="mt-4 text-gray-600">
              Get in touch with us through any of these channels.
            </Text>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfoItems.map((info: ContactInfoItem, idx: number) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4" aria-hidden="true">
                  {info.icon}
                </div>
                <Text variant="h3" className="text-gray-800">
                  {info.title}
                </Text>
                <Text variant="body" className="text-gray-600 mt-2">
                  {info.content}
                </Text>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Consultation Banner */}
        <Consultation backgroundImage={Amsterdam} />
      </main>
    </>
  );
};

export default ContactUs;
