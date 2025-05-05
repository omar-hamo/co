"use client";

import React, { useState, ChangeEvent, FC } from "react";
import Image, { StaticImageData } from "next/image";

interface FormData {
  company: string;
  name: string;
  phone: string;
  email: string;
  projectDetail: string;
  privacyAccepted: boolean;
}

interface ConsultationProps {
  backgroundImage: StaticImageData | string;
}

const initialFormData: FormData = {
  company: "",
  name: "",
  phone: "",
  email: "",
  projectDetail: "",
  privacyAccepted: false,
};

const Consultation: FC<ConsultationProps> = ({ backgroundImage }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value, type } = e.target;
    // For checkboxes, use checked property from HTMLInputElement
    const checked =
      type === "checkbox" && (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (): void => {
    if (formData.privacyAccepted) {
      console.log("Form submitted:", formData);
    } else {
      alert("Please accept the Privacy Policy to proceed.");
    }
  };

  return (
    <section className="relative w-full h-screen bg-white mb-20">
      {/* Background Image */}
      <div className="absolute inset-0 w-full  md:w-1/2 md:ml-32 h-[250px] md:h-full">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="rounded-bl-[70px] rounded-tr-4xl object-cover"
        />
      </div>

      {/* Form Content */}
      <div className="relative md:z-10 md:top-0 top-64 flex items-center justify-start md:justify-end md:right-20 w-full h-full">
        {/* <div className="relative md:z-10 flex items-center justify-start top-64 md:top-5 md:left-20 w-full md:w-1/2 h-full"> */}

        <div className="w-full md:w-1/2 bg-white bg-opacity-90 backdrop-blur-md rounded-3xl md:shadow-xl p-10 m-4">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-6 leading-tight tracking-tight">
            Connect With Your Next Great Hire Today!
          </h2>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-700"
              />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-700"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-700"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-700"
              />
            </div>

            <textarea
              name="projectDetail"
              value={formData.projectDetail}
              onChange={handleChange}
              placeholder="Project Detail"
              rows={4}
              className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-700"
            />

            <div className="flex items-start">
              <input
                type="checkbox"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleChange}
                className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
              />
              <label
                htmlFor="privacyAccepted"
                className="ml-3 text-blue-900 text-sm"
              >
                By sending this form I confirm that I have read and accept the{" "}
                <a
                  href="/privacy-policy"
                  className="underline hover:text-blue-700"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={handleSubmit}
                className="bg-orange-500 mx-auto text-white px-8 py-3 rounded-xl hover:bg-orange-600 transition flex items-center text-lg font-semibold"
              >
                Get Consultation
                <svg
                  className="w-6 h-6 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
