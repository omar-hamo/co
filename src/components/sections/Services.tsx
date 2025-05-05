"use client";
import React from "react";
import { motion } from "framer-motion";
import Banner from "../Banner";
import programmer from "../../assets/programmer.jpg";
import {
  Server,
  Search,
  Layout,
  ShoppingCart,
  FileText,
  Settings,
  Database,
  BarChart2,
  Shield,
  Smartphone,
  Cloud,
  Zap,
} from "lucide-react";

const services = [
  { title: "Website Design & Development", icon: <Server size={28} /> },
  { title: "Search Engine Optimization (SEO)", icon: <Search size={28} /> },
  { title: "UX/UI Design", icon: <Layout size={28} /> },
  { title: "E-commerce Solutions", icon: <ShoppingCart size={28} /> },
  { title: "Content Management Systems (CMS)", icon: <FileText size={28} /> },
  { title: "Maintenance & Support", icon: <Settings size={28} /> },
  { title: "Custom API Development", icon: <Database size={28} /> },
  { title: "Analytics & Reporting", icon: <BarChart2 size={28} /> },
  { title: "Web Security Solutions", icon: <Shield size={28} /> },
  { title: "Progressive Web Apps (PWAs)", icon: <Smartphone size={28} /> },
];

const additional = [
  {
    title: "Cloud Deployment (AWS, Vercel, DigitalOcean)",
    icon: <Cloud size={24} />,
  },
  { title: "Integration with Third-party Systems", icon: <Zap size={24} /> },
  { title: "Mobile Performance Optimization", icon: <Smartphone size={24} /> },
  { title: "Custom Dashboard Development", icon: <BarChart2 size={24} /> },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero with diagonal SVG overlay */}
      <div className="relative">
        <Banner
          title="Our Services"
          highlightedWord=""
          description="We deliver comprehensive web solutions tailored to your business goals."
          backgroundImage={programmer}
          bottomTitle="How to Get Started"
          bottomText="Reach us through social media or our website!"
        />
      </div>

      {/* Zigzag Services Layout */}
      <div className="max-w-6xl mx-auto py-20 px-4">
        {services.map((service, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } items-center mb-12 md:mb-20`}
            >
              <div className="flex-shrink-0 bg-indigo-600 text-white p-6 rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                {service.icon}
              </div>
              <div className="mt-4 md:mt-0 md:mx-8 text-center md:text-left">
                <h3 className="text-2xl font-extrabold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">
                  {
                    // Detailed descriptions now included inline for extra emphasis
                    {
                      0: "Modern and scalable websites built with Next.js, Django, and the latest web technologies.",
                      1: "Optimize your website to rank high on search engines and reach more customers.",
                      2: "Crafting user-friendly and visually stunning designs to maximize engagement and satisfaction.",
                      3: "Developing full-featured, secure, and scalable online stores.",
                      4: "Easy-to-manage websites powered by Django CMS, Sanity.io, and Next.js.",
                      5: "Continuous updates, security patches, and technical support to keep your site running smoothly.",
                      6: "Building custom APIs to connect your website with external applications.",
                      7: "Integrating tools like Google Analytics to monitor, analyze, and improve website performance.",
                      8: "Securing websites against cyberattacks (XSS, SQL Injection, etc.).",
                      9: "Developing high-performance PWAs that work seamlessly across all devices.",
                    }[i]
                  }
                </p>
              </div>
            </motion.div>
          );
        })}

        {/* Decorative Divider */}
        <div className="border-t-2 border-dashed border-gray-200 my-16"></div>

        {/* Additional Capabilities Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {additional.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300"
            >
              <div className="p-4 bg-indigo-100 rounded-full mb-4">
                {item.icon}
              </div>
              <span className="font-semibold text-gray-700 text-center">
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
