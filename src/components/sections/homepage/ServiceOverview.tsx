"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Text } from "../../ui/Text";
import {
  FaGlobe,
  FaServer,
  FaCogs,
  FaSearch,
  FaBullhorn,
  FaPalette,
} from "react-icons/fa";

const services = [
  {
    title: "Website Plans",
    icon: <FaGlobe size={32} className="text-primary" />,
    description:
      "Affordable and scalable website plans for startups and enterprises.",
    href: "/pricing#web-site-plans",
  },
  {
    title: "Web Hosting",
    icon: <FaServer size={32} className="text-primary" />,
    description:
      "Reliable and secure hosting solutions tailored to your business.",
    href: "/pricing#web-hosting",
  },
  {
    title: "Website Maintenance",
    icon: <FaCogs size={32} className="text-primary" />,
    description:
      "Keep your website up-to-date and running smoothly with our plans.",
    href: "/pricing#website-maintenance",
  },
  {
    title: "SEO Services",
    icon: <FaSearch size={32} className="text-primary" />,
    description: "Boost your visibility on search engines and drive traffic.",
    href: "/pricing#seo-services",
  },
  {
    title: "Advertising Packages",
    icon: <FaBullhorn size={32} className="text-primary" />,
    description: "Expand your reach with professionally designed ad campaigns.",
    href: "/pricing#advertising-packages",
  },
  {
    title: "Branding Packages",
    icon: <FaPalette size={32} className="text-primary" />,
    description: "Give your brand a unique identity with logo and card design.",
    href: "/pricing#branding-packages",
  },
];

export default function ServiceOverview() {
  return (
    <section className="py-24 bg-white px-6" id="services">
      <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Text variant="h1" className="text-gray-800 mb-4">
          Our Core Services
        </Text>
        <Text variant="body" className="text-gray-600">
          Explore our six main service categories designed to grow your digital
          presence.
        </Text>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              {service.icon}
              <Text variant="h3" className="text-gray-800 ml-3 font-semibold">
                {service.title}
              </Text>
            </div>
            <Text variant="body" className="text-gray-600 mb-4">
              {service.description}
            </Text>
            <Link
              href={service.href}
              className="text-primary font-medium hover:underline"
            >
              <Text variant="body">Learn More →</Text>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
