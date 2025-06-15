// components/Banner.tsx
"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface BannerProps {
  title: string;
  highlightedWord?: string;
  description: string;
  backgroundImage: StaticImageData;
  bottomTitle?: string;
  bottomText?: string;
}

const bannerVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Banner({
  title,
  highlightedWord,
  description,
  backgroundImage,
  bottomTitle,
  bottomText,
}: BannerProps) {
  return (
    <section>
      {/* Top Section */}
      <motion.div
        className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={bannerVariants}
      >
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt="Banner Background"
          fill
          sizes="100vw"
          className="object-cover "
          priority
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}{" "}
            {highlightedWord && (
              <span className="text-primary">{highlightedWord}</span>
            )}
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mb-8">{description}</p>

          {/* CTA Button */}
          <motion.div
            className="mt-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-primary-100 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition"
            >
              Let’s Talk Business
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Separator */}
      <div className="h-8 bg-gradient-to-b from-white to-transparent" />

      {/* Optional Bottom Section */}
      {(bottomTitle || bottomText) && (
        <motion.div
          className="mx-auto px-6 py-12 text-center max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={bannerVariants}
        >
          {bottomTitle && (
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {bottomTitle}
            </h2>
          )}
          {bottomText && <p className="text-lg text-gray-600">{bottomText}</p>}
        </motion.div>
      )}
    </section>
  );
}
