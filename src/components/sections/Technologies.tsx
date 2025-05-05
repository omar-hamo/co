"use client";
import React from "react";
import { motion } from "framer-motion";
import Banner from "../Banner";
import codeBg from "../../assets/programmer.jpg"; // reuse background image or swap to tech-specific

const categories = [
  {
    title: "Frontend",
    items: ["Next.js", "React.js", "Vue.js", "TailwindCSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    items: ["Django", "Node.js", "Express.js", "Laravel", "Spring Boot"],
  },
  {
    title: "CMS",
    items: ["Django CMS", "Sanity.io", "WordPress"],
  },
  {
    title: "E-commerce",
    items: ["Shopify", "WooCommerce", "Custom E-commerce Solutions"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    title: "SEO & Analytics",
    items: ["SEO Best Practices", "Google Analytics Integration"],
  },
  {
    title: "Security",
    items: ["Web Security Middleware", "SSL", "Attack Protection"],
  },
  {
    title: "PWAs",
    items: ["Progressive Web Apps with Service Workers and Next.js"],
  },
  {
    title: "Cloud & Deployment",
    items: ["AWS", "Vercel", "DigitalOcean", "Netlify"],
  },
];

export default function TechnologiesSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative">
        <Banner
          title="Technologies We Use"
          highlightedWord=""
          description="We rely on the best and latest technologies to deliver outstanding results."
          backgroundImage={codeBg}
          bottomTitle="Ready to Innovate?"
          bottomText="Talk to us about your next project."
        />
        <svg
          className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 opacity-10"
          width="400"
          height="400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="200" r="200" fill="#4F46E5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <h4 className="text-xl font-bold text-indigo-600 mb-4">
                {cat.title}
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {cat.items.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
