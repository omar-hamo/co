"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";
import Banner from "../../ui/Banner";
import { Text } from "../../ui/Text";
import major from "../../../assets/major.png";
// import { API_ENDPOINTS } from "@/config/api";
import { CardSkeleton } from "@/components/ui/Skeleton";

// Types
interface PricingPackage {
  id: number;
  category: string;
  name: string;
  price: string;
  features: string[];
  is_most_popular: boolean;
}

interface GroupedPackages {
  [key: string]: PricingPackage[];
}

const PricingCard = ({ pkg }: { pkg: PricingPackage }) => (
  <motion.div
    key={pkg.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`relative bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 ${
      pkg.is_most_popular ? "ring-2 ring-primary" : ""
    }`}
  >
    {pkg.is_most_popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      </div>
    )}
    <div className="text-center mb-8">
      <Text variant="h2" className="text-gray-900 mb-4 font-semibold">
        {pkg.name}
      </Text>
      <div className="flex items-center justify-center">
        <Text variant="h2" className="text-primary">
          ${pkg.price}
        </Text>
      </div>
    </div>
    <ul className="space-y-4 mb-8">
      {pkg.features.map((feature, i) => (
        <li key={i} className="flex items-start">
          <svg
            className="h-6 w-6 text-primary mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <Text variant="body" className="text-gray-600">
            {feature}
          </Text>
        </li>
      ))}
    </ul>
    <div className="text-center">
      <a
        href="#"
        className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
          pkg.is_most_popular
            ? "bg-primary text-white hover:bg-primary-100"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        <Text
          variant="body"
          className={pkg.is_most_popular ? "text-white" : "text-gray-900"}
        >
          Get Started
        </Text>
        <svg
          className="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </div>
  </motion.div>
);

const CustomSolutionBanner = () => (
  <motion.div
    className="mt-20 text-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.3 }}
  >
    <Text variant="h3" className="text-gray-900 mb-4 font-semibold">
      💡 Need a Custom Solution?
    </Text>
    <Text variant="body" className="text-gray-700 max-w-3xl mx-auto">
      Contact us for a tailored package that perfectly fits your business
      requirements. We're here to help you achieve your goals.
    </Text>
  </motion.div>
);

export default function Pricing() {
  const [packages, setPackages] = useState<PricingPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        // console.log("Fetching from:", API_ENDPOINTS.PRICING.ALL);
        // const response = await axios.get(API_ENDPOINTS.PRICING.ALL);
        const response = await axios.get(
          "http://aro-tech-vision.nl/api/pricing/all"
        );
        if (response?.data) {
          setPackages(response.data);
        } else {
          setError("No data received from the server");
        }
      } catch (error) {
        console.error("Error fetching packages:", error);
        setError("Failed to load pricing packages");
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  // Group packages by category
  const groupedPackages = packages.reduce((acc, pkg) => {
    if (!acc[pkg.category]) {
      acc[pkg.category] = [];
    }
    acc[pkg.category].push(pkg);
    return acc;
  }, {} as GroupedPackages);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {[1, 2, 3].map((i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Banner
        title="Our "
        highlightedWord="Pricing"
        description="Choose the perfect plan for your business needs. We offer flexible pricing options to help you grow your online presence."
        backgroundImage={major}
        bottomTitle="Ready to get started?"
        bottomText="Select a plan that works for you."
      />

      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {Object.entries(groupedPackages).map(
          ([category, categoryPackages], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="mb-20"
            >
              <Text variant="h1" className="text-center mb-12 capitalize">
                {category}
              </Text>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryPackages.map((pkg) => (
                  <PricingCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </motion.div>
          )
        )}

        <CustomSolutionBanner />
      </div>
    </section>
  );
}
