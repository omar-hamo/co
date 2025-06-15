"use client";

import React, {
  useState,
  ChangeEvent,
  FC,
  FormEvent,
  ReactElement,
} from "react";
import Image, { StaticImageData } from "next/image";
import axios from "axios";
import { API_ENDPOINTS } from "@/config/api";
import { motion } from "framer-motion";
import { FormSkeleton } from "@/components/ui/Skeleton";
import { Text } from "@/components/ui/Text";

// Types
interface FormData {
  company: string;
  name: string;
  phone: string;
  email: string;
  prject_detail: string;
}

interface FormErrors {
  company?: string;
  name?: string;
  phone?: string;
  email?: string;
  prject_detail?: string;
}

type SubmitStatusType = "idle" | "submitting" | "success" | "error";

interface SubmitStatus {
  type: SubmitStatusType;
  message?: string;
}

interface ConsultationProps {
  backgroundImage: StaticImageData | string;
}

const initialFormData: FormData = {
  company: "",
  name: "",
  phone: "",
  email: "",
  prject_detail: "",
};

const initialErrors: FormErrors = {};

// Validation regex patterns
const VALIDATION_PATTERNS = {
  phone: /^\+?[\d\s-]{10,}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

const Consultation: FC<ConsultationProps> = ({
  backgroundImage,
}): ReactElement => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>(initialErrors);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: "idle",
  });

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!VALIDATION_PATTERNS.email.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.prject_detail.trim()) {
      newErrors.prject_detail = "Project details are required";
    } else if (formData.prject_detail.length < 10) {
      newErrors.prject_detail =
        "Please provide more details about your project";
    }
    return newErrors;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitStatus({ type: "submitting" });

    try {
      // Transform the form data to match the API requirements
      const apiData = {
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        prject_detail: formData.prject_detail,
      };

      console.log("Submitting form data:", apiData);

      const response = await axios.post(API_ENDPOINTS.CONTACT.CREATE, apiData);

      console.log("API Response:", response.data);

      // If we get a response
      if (response?.data) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! We'll contact you soon to discuss your project.",
        });
        setFormData(initialFormData);
        setErrors({});
      } else {
        setSubmitStatus({
          type: "error",
          message: "Failed to submit form. Please try again.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);

      // Handle axios specific errors
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.message ||
          error.response?.data?.error ||
          error.message ||
          "Failed to submit form. Please try again.";
        setSubmitStatus({
          type: "error",
          message: errorMessage,
        });
      } else {
        // Handle other types of errors
        setSubmitStatus({
          type: "error",
          message:
            "An error occurred while submitting the form. Please try again.",
        });
      }
    }
  };

  const isSubmitting = submitStatus.type === ("submitting" as const);

  const renderInput = (
    name: keyof FormData,
    type: string,
    placeholder: string
  ): ReactElement => (
    <div>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full p-4 border ${
          errors[name] ? "border-red-500" : "border-gray-200"
        } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-700`}
      />
      {errors[name] && (
        <Text variant="caption" className="mt-1 text-red-500">
          {errors[name]}
        </Text>
      )}
    </div>
  );

  if (isSubmitting) {
    return (
      <section
        className="py-20 relative"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Text variant="h1" className="text-gray-900 mb-4">
                Request a Consultation
              </Text>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Text variant="body" className="text-gray-600">
                Let's discuss your project
              </Text>
            </motion.div>
          </div>
          <FormSkeleton />
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full h-screen bg-white mb-20">
      {/* Background Image */}
      <div className="absolute inset-0 w-full md:w-1/2 md:ml-32 h-[250px] md:h-full">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="rounded-bl-[70px] rounded-tr-4xl object-cover"
        />
      </div>

      {/* Form Content */}
      <div className="relative md:z-10 md:top-0 top-64 flex items-center justify-start md:justify-end md:right-20 w-full h-full">
        <div className="w-full md:w-1/2 bg-white bg-opacity-90 backdrop-blur-md rounded-3xl md:shadow-xl p-10 m-4">
          <Text
            variant="h1"
            className="text-blue-900 mb-6 leading-tight tracking-tight"
          >
            Connect With Your Next Great Hire Today!
          </Text>

          {submitStatus.type === "error" && (
            <Text variant="body" className="text-center text-red-500">
              {submitStatus.message}
            </Text>
          )}

          {submitStatus.type === "success" && (
            <Text variant="body" className="text-center text-green-500">
              {submitStatus.message}
            </Text>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderInput("company", "text", "Company")}
              {renderInput("name", "text", "Your Name")}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderInput("phone", "tel", "Phone Number")}
              {renderInput("email", "email", "Email")}
            </div>

            <div>
              <textarea
                name="prject_detail"
                value={formData.prject_detail}
                onChange={handleChange}
                placeholder="Project Detail"
                rows={4}
                className={`w-full p-4 border ${
                  errors.prject_detail ? "border-red-500" : "border-gray-200"
                } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-700`}
              />
              {errors.prject_detail && (
                <Text variant="caption" className="mt-1 text-red-500">
                  {errors.prject_detail}
                </Text>
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={submitStatus.type === "submitting"}
                className={`bg-orange-500 mx-auto text-white px-8 py-3 rounded-xl transition flex items-center text-lg font-semibold ${
                  submitStatus.type === "submitting"
                    ? "opacity-75 cursor-not-allowed"
                    : "hover:bg-orange-600"
                }`}
              >
                {submitStatus.type === "submitting" ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <Text variant="body" className="text-white">
                      Submitting...
                    </Text>
                  </>
                ) : (
                  <Text variant="body" className="text-white">
                    Submit Request
                  </Text>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
