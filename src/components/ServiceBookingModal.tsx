"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { contactEmails } from "@/config/email";

interface ServiceBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  services: Array<{ id: number; title: string }>;
}

interface BookingFormData {
  service: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ServiceBookingModal: React.FC<ServiceBookingModalProps> = ({
  isOpen,
  onClose,
  services,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormData>();

  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const onSubmit = async (data: BookingFormData) => {
    try {
      const selectedService = services.find(
        (s) => s.id === parseInt(data.service)
      );

      // Get CC emails (all except primary)
      const ccEmails = contactEmails.all
        .filter((email) => email !== contactEmails.primary)
        .join(",");

      const templateParams = {
        service: selectedService?.title || "Not specified",
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone,
        message: data.message,
        subject: `Service Booking: ${selectedService?.title || "General Inquiry"}`,
        to_email: contactEmails.primary, // Send TO primary email
        cc_email: ccEmails || undefined, // CC other emails
        reply_to: data.email,
      };

      // Send single email with CC
      const result = await emailjs.send(
        "service_kk9enic",
        "template_w35npys",
        templateParams,
        "M5loi_Mue6YL6n2Ce"
      );

      if (result.status === 200) {
        setStatus({
          type: "success",
          message:
            "Booking request sent successfully! We will get back to you shortly.",
        });
        reset();
        setTimeout(() => {
          onClose();
          setStatus({ type: null, message: "" });
        }, 2000);
      } else {
        throw new Error("Email failed to send");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send booking request. Please try again.",
      });
      console.error("EmailJS error:", error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
                <h2 className="text-2xl cursor-pointer md:text-3xl font-bold text-[#48484A]">
                  Book a Service
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 cursor-pointer hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <FiX className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
                {status.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      status.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                {/* Service Selection */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-[#48484A] mb-2"
                  >
                    Select Service <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    {...register("service", {
                      required: "Please select a service",
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E7BF44] focus:border-[#E7BF44] outline-none transition-all"
                  >
                    <option value="">Choose a service...</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold text-[#48484A] mb-2"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E7BF44] focus:border-[#E7BF44] outline-none transition-all"
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold text-[#48484A] mb-2"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E7BF44] focus:border-[#E7BF44] outline-none transition-all"
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-[#48484A] mb-2"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E7BF44] focus:border-[#E7BF44] outline-none transition-all"
                      placeholder="john.doe@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-[#48484A] mb-2"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[\d\s\-\+\(\)]+$/,
                          message: "Invalid phone number",
                        },
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E7BF44] focus:border-[#E7BF44] outline-none transition-all"
                      placeholder="+234 906 123 4567"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#48484A] mb-2"
                  >
                    Project Details / Message{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message", {
                      required: "Please provide project details",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E7BF44] focus:border-[#E7BF44] outline-none transition-all resize-none"
                    placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-6 py-3 cursor-pointer border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 bg-[#E7BF44] cursor-pointer text-white font-semibold rounded-lg hover:bg-[#D4A93A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ServiceBookingModal;
