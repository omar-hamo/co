// app/pricing/page.tsx
"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Banner from "../Banner";
import major from "../../assets/major.png";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const buttonVariants: Variants = {
  hover: {
    scale: 1.03,
    backgroundColor: "#1E40AF",
    transition: { duration: 0.3 },
  },
};

const plans = [
  {
    name: "Basic",
    price: "$99/mo",
    features: [
      "5 social media posts/month",
      "1 short promotional video",
      "Basic website template",
      "SEO-friendly blog setup",
    ],
    featured: false,
  },
  {
    name: "Standard",
    price: "$249/mo",
    features: [
      "15 social media posts/month",
      "3 promotional videos",
      "Custom website & e-commerce store",
      "4 SEO-optimized articles",
      "Monthly backlink report",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "$499/mo",
    features: [
      "Unlimited social media posts",
      "Weekly video production",
      "Advanced e-commerce platform",
      "Weekly SEO articles",
      "Dedicated account manager",
      "Full marketing strategy",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <>
      {/* Banner */}
      <div className="relative">
        <Banner
          title="Choose Your "
          highlightedWord="Plan"
          description="Select one of our flexible pricing packages—designed for startups, growing businesses, and enterprises. Enjoy transparent fees and the freedom to cancel anytime."
          backgroundImage={major}
          bottomTitle="Ready to Grow?"
          bottomText="Contact us now and let’s find the perfect fit for your needs."
        />
      </div>

      {/* Pricing Plans */}
      <section className="bg-gray-50 py-24 px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-extrabold text-gray-800">
            Pricing Plans
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Flexible packages for startups, growing businesses, and enterprises.
            No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              className={`relative bg-white rounded-3xl shadow-lg p-8 flex flex-col ${
                plan.featured ? "border-4 border-blue-600" : ""
              }`}
              variants={cardVariants}
              whileHover="hover"
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold uppercase px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {plan.name}
              </h2>
              <p className="text-4xl font-bold text-blue-700 mb-6">
                {plan.price}
              </p>

              <ul className="flex-1 space-y-3 text-gray-700 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="text-green-500 mt-1 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.div variants={buttonVariants} whileHover="hover">
                <Link
                  href="/contact"
                  className="w-full block text-center bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
                >
                  Choose {plan.name}
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
