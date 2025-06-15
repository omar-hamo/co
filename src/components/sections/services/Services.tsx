"use client";
import React from "react";
import { motion } from "framer-motion";
import Banner from "../../ui/Banner";
import { Text } from "../../ui/Text";
import major from "../../../assets/major.png";
import Head from "next/head";
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

// Structured data for services
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development Services",
  description:
    "Comprehensive web solutions including design, development, SEO, and maintenance services.",
  provider: {
    "@type": "Organization",
    name: "Aro Tech Vision",
  },
  offers: {
    "@type": "Offer",
    itemOffered: [
      {
        "@type": "Service",
        name: "Website Design & Development",
        description:
          "Modern and scalable websites built with Next.js, Django, and the latest web technologies.",
      },
      {
        "@type": "Service",
        name: "Search Engine Optimization (SEO)",
        description:
          "Optimize your website to rank high on search engines and reach more customers.",
      },
      // ... other services
    ],
  },
};

const services = [
  {
    title: "Website Design & Development",
    icon: <Server size={28} />,
    description:
      "Modern and scalable websites built with Next.js, Django, and the latest web technologies.",
  },
  {
    title: "Search Engine Optimization (SEO)",
    icon: <Search size={28} />,
    description:
      "Optimize your website to rank high on search engines and reach more customers.",
  },
  {
    title: "UX/UI Design",
    icon: <Layout size={28} />,
    description:
      "Crafting user-friendly and visually stunning designs to maximize engagement and satisfaction.",
  },
  {
    title: "E-commerce Solutions",
    icon: <ShoppingCart size={28} />,
    description:
      "Developing full-featured, secure, and scalable online stores.",
  },
  {
    title: "Content Management Systems (CMS)",
    icon: <FileText size={28} />,
    description:
      "Easy-to-manage websites powered by Django CMS, Sanity.io, and Next.js.",
  },
  {
    title: "Maintenance & Support",
    icon: <Settings size={28} />,
    description:
      "Continuous updates, security patches, and technical support to keep your site running smoothly.",
  },
  {
    title: "Custom API Development",
    icon: <Database size={28} />,
    description:
      "Building custom APIs to connect your website with external applications.",
  },
  {
    title: "Analytics & Reporting",
    icon: <BarChart2 size={28} />,
    description:
      "Integrating tools like Google Analytics to monitor, analyze, and improve website performance.",
  },
  {
    title: "Web Security Solutions",
    icon: <Shield size={28} />,
    description:
      "Securing websites against cyberattacks (XSS, SQL Injection, etc.).",
  },
  {
    title: "Progressive Web Apps (PWAs)",
    icon: <Smartphone size={28} />,
    description:
      "Developing high-performance PWAs that work seamlessly across all devices.",
  },
];

const additional = [
  {
    title: "Cloud Deployment (AWS, Vercel)",
    icon: <Cloud size={24} />,
  },
  { title: "Integration with Third-party Systems", icon: <Zap size={24} /> },
  { title: "Mobile Performance Optimization", icon: <Smartphone size={24} /> },
  { title: "Custom Dashboard Development", icon: <BarChart2 size={24} /> },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Web Development Services | Aro Tech Vision</title>
        <meta
          name="description"
          content="Comprehensive web development services including website design, SEO, e-commerce solutions, and more. Expert web development team ready to help your business grow."
        />
        <meta
          name="keywords"
          content="web development, website design, SEO, e-commerce, CMS, web security, PWA, API development"
        />
        <meta
          property="og:title"
          content="Web Development Services | Aro Tech Vision"
        />
        <meta
          property="og:description"
          content="Comprehensive web development services including website design, SEO, e-commerce solutions, and more."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Web Development Services | Aro Tech Vision"
        />
        <meta
          name="twitter:description"
          content="Comprehensive web development services including website design, SEO, e-commerce solutions, and more."
        />
        <script type="application/ld+json">
          {JSON.stringify(servicesSchema)}
        </script>
      </Head>

      <section
        className="relative overflow-hidden"
        role="main"
        aria-label="Our Services"
      >
        {/* Hero with diagonal SVG overlay */}
        <div className="relative">
          <Banner
            title="Our "
            highlightedWord="Services"
            description="We deliver comprehensive web solutions tailored to your business goals."
            backgroundImage={major}
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
                role="article"
                aria-label={service.title}
              >
                <div
                  className="flex-shrink-0 bg-primary text-white p-6 rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-300"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>
                <div className="mt-4 md:mt-0 md:mx-8 text-center md:text-left">
                  <Text variant="h3" className="text-gray-800 font-semibold">
                    {service.title}
                  </Text>
                  <Text variant="body" className="text-gray-600 mt-2">
                    {service.description}
                  </Text>
                </div>
              </motion.div>
            );
          })}

          {/* Decorative Divider */}
          <div
            className="border-t-2 border-dashed border-gray-200 my-16"
            aria-hidden="true"
          ></div>

          {/* Additional Capabilities Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            role="list"
            aria-label="Additional Services"
          >
            {additional.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300"
                role="listitem"
              >
                <div
                  className="p-4 bg-primary rounded-full mb-4"
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
                <Text
                  variant="body"
                  className="font-semibold text-gray-700 text-center"
                >
                  {item.title}
                </Text>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
