"use client";
import React, { useEffect, useState, FC } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { API_ENDPOINTS } from "@/config/api";
import Banner from "../../ui/Banner";
import { Text } from "../../ui/Text";
import major from "../../../assets/major.png";
import { StaticImageData } from "next/image";
import { CardSkeleton } from "@/components/ui/Skeleton";

interface Language {
  code: string;
  required: boolean;
}

interface Position {
  id: number;
  title: string;
  location: string;
  job_type: string;
  experience_required: number;
  languages: Language[];
  tech_stack: string[];
  responsibilities: string[];
  created_at: string;
  updated_at: string;
}

interface CareersProps {
  backgroundImage?: StaticImageData;
}

const Careers: FC<CareersProps> = ({ backgroundImage }) => {
  const [positions, setPositions] = useState<Position[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPositions = async () => {
    try {
      const { data } = await axios.get(API_ENDPOINTS.CAREER.ALL);
      setPositions(data);
      setError(null);
    } catch (error) {
      setError("Failed to load positions. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPositions();
  }, []);

  const formatJobType = (type: string) => {
    return type
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formatLanguages = (languages: Language[]) => {
    return languages
      .map(
        (lang) => `${lang.code}${lang.required ? " (Required)" : " (Optional)"}`
      )
      .join(", ");
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
        {[1, 2, 3, 4].map((i) => (
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
        title="Careers at "
        highlightedWord="Formanji"
        description="Join a team that builds high-performance, modern web applications using the latest technologies like Next.js, Django, React, and more. We're passionate about clean code, great design, and solving real business problems with smart software solutions."
        backgroundImage={backgroundImage || major}
        bottomTitle="Ready to take the next step?"
        bottomText="Discover your future with us."
      />

      <div className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Text variant="h2" className="text-center mb-12">
            💼 Open Positions
          </Text>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {positions.map((pos, idx) => (
            <motion.div
              key={pos.id}
              className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>

              <Text variant="h3" className="text-indigo-600 mb-6 relative z-10">
                {pos.title}
              </Text>
              <div className="grid grid-cols-1 gap-6 mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <Text variant="h3" className="text-gray-800 mb-3">
                    Tech Stack:
                  </Text>
                  <div className="flex flex-wrap gap-2">
                    {pos.tech_stack.map((tech, i) => (
                      <Text
                        key={i}
                        variant="caption"
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full"
                      >
                        {tech}
                      </Text>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <Text variant="h3" className="text-gray-800 mb-3">
                    Responsibilities:
                  </Text>
                  <ul className="space-y-2">
                    {pos.responsibilities.map((res, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <Text variant="body" className="text-gray-600">
                          {res}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-gray-600 mb-6">
                <div className="flex items-center">
                  <Text variant="body" className="font-medium">
                    📍 Location:
                  </Text>
                  <Text variant="body" className="ml-2">
                    {pos.location}
                  </Text>
                </div>
                <div className="flex items-center">
                  <Text variant="body" className="font-medium">
                    💼 Type:
                  </Text>
                  <Text variant="body" className="ml-2">
                    {formatJobType(pos.job_type)}
                  </Text>
                </div>
                <div className="flex items-center">
                  <Text variant="body" className="font-medium">
                    ⭐ Experience:
                  </Text>
                  <Text variant="body" className="ml-2">
                    {pos.experience_required}+ years
                  </Text>
                </div>
                <div className="flex items-center">
                  <Text variant="body" className="font-medium">
                    🌐 Languages:
                  </Text>
                  <Text variant="body" className="ml-2">
                    {formatLanguages(pos.languages)}
                  </Text>
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Text variant="body" className="text-white">
                    Apply Now
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
          ))}
        </div>

        <motion.div
          className="mt-20 text-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Text variant="h3" className="text-gray-900 mb-4 font-semibold">
            🔍 What We're Looking For
          </Text>
          <Text variant="body" className="text-gray-700 max-w-3xl mx-auto">
            Passion for building modern web applications, performance
            optimization & SEO, understanding of CMS and e-commerce
            integrations, and clean code with attention to detail.
          </Text>
        </motion.div>

        <motion.div
          className="mt-12 text-center bg-white rounded-3xl p-8 shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Text variant="h3" className="text-gray-900 mb-6 font-semibold">
            💡 What You'll Get
          </Text>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <span className="text-indigo-600 text-xl">•</span>
              <Text variant="body" className="text-gray-700">
                Work on impactful, global projects
              </Text>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-indigo-600 text-xl">•</span>
              <Text variant="body" className="text-gray-700">
                Flexible working hours and full remote culture
              </Text>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-indigo-600 text-xl">•</span>
              <Text variant="body" className="text-gray-700">
                Competitive pay and performance-based bonuses
              </Text>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-indigo-600 text-xl">•</span>
              <Text variant="body" className="text-gray-700">
                Continuous learning and career growth opportunities
              </Text>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
