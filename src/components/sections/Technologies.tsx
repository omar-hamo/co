"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Banner from "../Banner";
import major from "../../assets/major.png";

const techDescriptions: Record<string, string> = {
  "Next.js":
    "Next.js delivers hybrid SSG & SSR, automatic code splitting, and fast client-side navigation.",
  "React.js":
    "React.js enables component-based UI, virtual DOM diffing, and a rich ecosystem.",
  TailwindCSS:
    "TailwindCSS offers utility-first classes for rapid, consistent styling without leaving HTML.",
  HTML5:
    "HTML5 introduces semantic tags, multimedia embedding, and improved form controls.",
  CSS3: "CSS3 brings flexbox, grid, animations, and media queries for responsive design.",
  Django:
    "Django is a batteries-included Python framework with ORM, admin panel, and security features.",
  "Django CMS":
    "Django CMS provides an intuitive page editor, plugins architecture, and Python-powered flexibility.",
  WordPress:
    "WordPress powers 40% of the web with themes, plugins, and a vast community for rapid site building.",
  PostgreSQL:
    "PostgreSQL is a powerful, open-source relational database with advanced SQL support.",
  MongoDB:
    "MongoDB is a schemaless NoSQL database designed for performance, scalability, and flexibility.",
  MySQL:
    "MySQL is a popular relational database known for reliability, ease of use, and broad support.",
  "SQL Server":
    "SQL Server offers enterprise-grade features, high availability, and deep integration with Microsoft tools.",
  "SEO Best Practices":
    "SEO best practices ensure your site ranks higher with optimized content, metadata, and performance.",
  "Google Analytics Integration":
    "GA integration provides insights into user behavior, conversion tracking, and real-time analytics.",
  "Web Security Middleware":
    "Security middleware defends against XSS, CSRF, and common web threats automatically.",
  SSL: "SSL/TLS encrypts traffic to secure data in transit between client and server.",
  TLS: "TLS is the successor to SSL, ensuring robust encryption and modern security protocols.",
  Docker:
    "Docker packages apps in portable containers, ensuring consistent environments and rapid deployment.",
  AWS: "AWS offers scalable cloud services, global infrastructure, and robust security compliance.",
  Vercel:
    "Vercel specializes in front-end hosting with instant global CDN, CI/CD, and serverless functions.",
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const categories = [
  {
    title: "Frontend",
    items: ["Next.js", "React.js", "TailwindCSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    items: ["Django", "Next.js"],
  },
  {
    title: "CMS",
    items: ["Django CMS", "WordPress"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server"],
  },
  {
    title: "SEO & Analytics",
    items: ["SEO Best Practices", "Google Analytics Integration"],
  },
  {
    title: "Security",
    items: ["Web Security Middleware", "SSL", "TLS"],
  },
  {
    title: "PWAs",
    items: ["Progressive Web Apps with Service Workers and Next.js"],
  },
  {
    title: "Cloud & Deployment",
    items: ["AWS", "Vercel"],
  },
  {
    title: "Containerization",
    items: ["Docker"],
  },
];

export default function TechnologiesSection() {
  return (
    <section className="bg-white overflow-hidden">
      <Banner
        title="Technologies We Use"
        description="Robust, scalable toolkit for cutting-edge digital solutions."
        backgroundImage={major}
        bottomTitle="Ready to Innovate?"
        bottomText="Contact us and let’s build your next project."
      />

      <div className="max-w-7xl mx-auto py-20 px-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              custom={idx}
              variants={fadeIn}
              className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <h4 className="text-2xl font-bold text-indigo-600 mb-4">
                {cat.title}
              </h4>
              <ul className="space-y-2">
                {cat.items.map((tech) => (
                  <li
                    key={tech}
                    className="relative group p-2 rounded-md hover:bg-indigo-50 cursor-pointer"
                  >
                    <span className="font-medium text-gray-800">{tech}</span>
                    {techDescriptions[tech] && (
                      <div className="absolute left-0 top-full mt-2 w-64 p-3 bg-white border border-gray-200 rounded-lg shadow-lg text-sm text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        {techDescriptions[tech]}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
