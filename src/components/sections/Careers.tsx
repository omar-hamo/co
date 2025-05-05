"use client";
import React from "react";
import { motion } from "framer-motion";
import Banner from "../Banner";
import programmer from "../../assets/programmer.jpg";

const positions = [
  {
    title: "Senior Full Stack Developer",
    techStack: [
      "Next.js",
      "Django",
      "TailwindCSS",
      "PostgreSQL",
      "REST APIs",
      "Git",
      "SEO principles",
      "CMS (Sanity/Django CMS)",
    ],
    responsibilities: [
      "Build and maintain responsive web applications",
      "Collaborate with the design team on UI/UX improvements",
      "Develop secure, scalable backends",
      "Integrate analytics and third-party APIs",
      "Write clean, maintainable, testable code",
    ],
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    language: "English (bonus: Arabic or Spanish)",
    applyLink: "#",
    learnLink: "#",
  },
];

export default function Careers() {
  return (
    <section className="bg-gray-50">
      {/* Hero Banner */}
      <Banner
        title="Careers at Formanji"
        highlightedWord=""
        description="Join a team that builds high-performance, modern web applications using the latest technologies like Next.js, Django, React, and more. We’re passionate about clean code, great design, and solving real business problems with smart software solutions."
        backgroundImage={programmer}
        bottomTitle="Ready to take the next step?"
        bottomText="Discover your future with us."
      />

      <div className="max-w-5xl mx-auto py-16 px-4">
        <motion.h2
          className="text-3xl font-extrabold text-gray-800 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          💼 Open Positions
        </motion.h2>

        <div className="space-y-12">
          {positions.map((pos, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Decorative gradient blob */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>

              <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                {pos.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="font-semibold text-gray-700">Tech Stack:</p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    {pos.techStack.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">
                    Responsibilities:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    {pos.responsibilities.map((res, i) => (
                      <li key={i}>{res}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between text-gray-600 mb-6">
                <span>
                  <strong>Location:</strong> {pos.location}
                </span>
                <span>
                  <strong>Type:</strong> {pos.type}
                </span>
                <span>
                  <strong>Experience:</strong> {pos.experience}
                </span>
                <span>
                  <strong>Language:</strong> {pos.language}
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href={pos.applyLink}
                  className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition"
                >
                  Apply Now
                </a>
                {/* <a
                  href={pos.learnLink}
                  className="inline-block px-6 py-2 border border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition"
                >
                  Learn More
                </a> */}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center text-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          🔍 <strong>What We’re Looking For</strong>
          <p className="mt-2">
            Passion for building modern web applications, performance
            optimization & SEO, understanding of CMS and e-commerce
            integrations, and clean code with attention to detail.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="text-2xl font-semibold text-gray-800">
            💡 What You’ll Get
          </h4>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>• Work on impactful, global projects</li>
            <li>• Flexible working hours and full remote culture</li>
            <li>• Competitive pay and performance-based bonuses</li>
            <li>• Continuous learning and career growth opportunities</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
