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

const allPlans = [
  {
    section: "Web Site Plans",
    plans: [
      {
        name: "Basic",
        price: "$99/mo",
        features: [
          "5 social media posts/month",
          "1 short promotional video",
          "Basic website template",
          "SEO-friendly blog setup",
        ],
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
      },
    ],
  },
  {
    section: "Marketing Plans",
    plans: [
      {
        name: "Basic",
        price: "$99/mo",
        features: [
          "5 social media posts/month",
          "1 short promotional video",
          "Basic website template",
          "SEO-friendly blog setup",
        ],
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
    ],
  },
  {
    section: "Web Hosting",
    plans: [
      {
        name: "Standard Hosting",
        price: "$150/year",
        features: [
          "Shared Hosting Server",
          "10 GB Storage",
          "Free SSL Certificate",
          "Weekly Backups",
        ],
      },
      {
        name: "Premium Hosting",
        price: "$300/year",
        features: [
          "Dedicated High-Speed Server",
          "50 GB Storage",
          "Advanced Security",
          "Daily Backups + Monitoring",
        ],
        featured: true,
      },
    ],
  },
  {
    section: "Website Maintenance",
    plans: [
      {
        name: "Basic Maintenance",
        price: "$49/mo",
        features: ["Monthly Updates", "Basic Bug Fixes", "Email Support"],
      },
      {
        name: "Premium Maintenance",
        price: "$129/mo",
        features: [
          "Weekly Updates",
          "Priority Bug Fixes",
          "Performance Monitoring",
          "24/7 Support",
        ],
        featured: true,
      },
    ],
  },
  {
    section: "SEO Services",
    plans: [
      {
        name: "SEO Starter",
        price: "$199/mo",
        features: [
          "Keyword Optimization",
          "Basic On-page SEO",
          "Google Analytics Setup",
        ],
      },
      {
        name: "Advanced SEO",
        price: "$399/mo",
        features: [
          "Full SEO Audit",
          "Technical SEO Fixes",
          "Backlink Strategy",
          "Content Recommendations",
        ],
        featured: true,
      },
    ],
  },
  {
    section: "Advertising Packages",
    plans: [
      {
        name: "Starter Ads",
        price: "$199/mo",
        features: [
          "3 Graphic Posts per Week",
          "Social Media Strategy",
          "Monthly Performance Report",
        ],
      },
      {
        name: "Pro Ads",
        price: "$399/mo",
        features: [
          "5 Graphic Posts per Week",
          "Ad Campaign Management",
          "A/B Testing",
          "Advanced Analytics",
        ],
        featured: true,
      },
    ],
  },
  {
    section: "Branding Packages",
    plans: [
      {
        name: "Basic Identity",
        price: "$149 one-time",
        features: [
          "Business Card Design",
          "Includes Company Name, Logo, Phone",
          "Print-Ready Files",
        ],
      },
      {
        name: "Full Branding",
        price: "$349 one-time",
        features: [
          "Custom Logo Design",
          "Brand Color Palette",
          "Typography Set",
          "Business Card Design Included",
        ],
        featured: true,
      },
    ],
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

      {/* Sections */}
      {allPlans.map(({ section, plans }) => {
        const id = section
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");

        return (
          <section key={section} id={id} className="bg-gray-50 py-24 px-6">
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
              <h2 className="text-4xl font-bold text-gray-800">{section}</h2>
            </motion.div>

            <motion.div
              className={`grid gap-8 mx-auto justify-center ${
                plans.length === 1
                  ? "grid-cols-1"
                  : plans.length === 2
                  ? "grid-cols-1 md:grid-cols-2 max-w-4xl"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl"
              }`}
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
            >
              {plans.map((plan) => (
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
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {plan.name}
                  </h3>
                  <p className="text-3xl font-bold text-blue-700 mb-6">
                    {plan.price}
                  </p>
                  <ul className="flex-1 space-y-3 text-gray-700 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start">
                        <span className="text-green-500 mt-1 mr-2">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.div variants={buttonVariants} whileHover="hover">
                    <Link
                      href="/pricing"
                      className="w-full block text-center bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
                    >
                      Choose {plan.name}
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        );
      })}
    </>
  );
}
