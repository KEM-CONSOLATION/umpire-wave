"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import EmailIcon from "@assets/sms-tracking.svg";
import CallIcon from "@assets/call-calling.svg";
import GlobalIcon from "@assets/global-search.svg";
// import LinkedIn from "@assets/LInkedIn2.svg";
import Facebook from "@assets/Facebook2.svg";
// import X from "@assets/X.svg";
import Image from "next/image";
import Link from "next/link";
import Youtube from "@assets/YouTubeIcon_.svg";
import Tiktok from "@assets/TikTokIcon_.svg";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import { contactEmails } from "@/config/email";
interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  description: string;
}

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<FormData>();
  const [charCount, setCharCount] = useState(0);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "description") {
        const words = value.description?.trim()
          ? value.description.trim().split(/\s+/).length
          : 0;
        setCharCount(words);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = async (data: FormData) => {
    try {
      const baseTemplateParams = {
        name: `${data.first_name} ${data.last_name}`,
        email: data.email,
        message: data.description,
        subject: data.description.slice(0, 20),
        to_email: contactEmails.all.join(","), // Include both emails
        reply_to: data.email,
      };

      // Send emails to both addresses
      const emailPromises = contactEmails.all.map((toEmail) =>
        emailjs.send(
          "service_kk9enic",
          "template_w35npys",
          {
            ...baseTemplateParams,
            to_email: toEmail,
          },
          "M5loi_Mue6YL6n2Ce"
        )
      );

      const results = await Promise.all(emailPromises);
      const allSuccessful = results.every((result) => result.status === 200);

      if (allSuccessful) {
        setStatus({
          type: "success",
          message:
            "Message sent successfully! We will get back to you shortly.",
        });
        reset();
        setCharCount(0);
      } else {
        throw new Error("Some emails failed to send");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
      console.error("EmailJS error:", error);
    }
  };

  return (
    <div
      className="my-[50px] p-6 border border-[#E7BF44] max-w-6xl mx-auto rounded-[8px] "
      data-aos="fade-up"
    >
      <div className="space-y-[13px] text-center">
        {status.type && (
          <div
            className={`mt-4 p-4 rounded-lg   text-[16px] ${
              status.type === "success"
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            }`}
          >
            {status.message}
          </div>
        )}

        <p className="text-[32px] lg:text-[40px]   text-[#48484A]">
          Get in touch with us
        </p>
        <p className="  text-[16px] lg:text-[20px] text-[#48484A]">
          We are ready to engage all inquiries and questions
        </p>
      </div>

      <div className="grid lg:flex items-start gap-[56px] mt-[60px]">
        <div className="max-w-[400px] w-full space-y-[50px]">
          <div className="flex items-start gap-[24px]">
            <Image src={EmailIcon} alt="Email Icon" />
            <div>
              <p className="  text-[24px] text-[#48484A]">Email</p>
              <p className="  text-[16px] text-[#48484A]">
                Help@umpirewave.com <br /> Umpirewave@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-[24px]">
            <Image src={CallIcon} alt="Call Icon" />
            <div className="space-y-[16px]">
              <p className="  text-[24px] text-[#48484A]">Call</p>
              <p className="  text-[16px] text-[#48484A]">
                Mon - Fri, 9am - 7pm
              </p>
              <p className="  text-[16px] text-[#48484A]">
                Saturdays 10am - 5pm
              </p>
              <p className="  text-[16px] text-[#48484A]">09167264063</p>
            </div>
          </div>

          <div className="flex items-start gap-[24px]">
            <Image src={GlobalIcon} alt="Global Icon" />
            <div className="space-y-[16px]">
              <p className="  text-[24px] text-[#48484A]">
                Engage with us on social media
              </p>
              <p className="  text-[16px] text-[#48484A] hidden">
                Engage with our community and keep your business at the
                forefront.
              </p>
              <div className="flex items-center gap-[16px]">
                {/* <Link
                  href="http://linkedin.com/showcase/umpirewave"
                  target="blank"
                >
                  <Image src={LinkedIn} alt="LinkedIn Icon" />
                </Link> */}
                <Link
                  href="https://www.facebook.com/share/1DX7QdVcRs"
                  target="_blank"
                >
                  <Image src={Facebook} alt="Facebook Icon" />
                </Link>
                {/* <Link href="http://x.com/umpirewave" target="blank">
                  <Image src={X} alt="X Icon" />
                </Link> */}
                <Link
                  href="https://youtube.com/@umpirewave?si=1cRjpXv-gbmIXEyu"
                  target="blank"
                >
                  <Image src={Youtube} alt="Youtube" />
                </Link>
                <Link
                  href="https://www.tiktok.com/@umpire.wave.studi?_t=ZM-8vkUn3N4esX&_r=1"
                  target="_blank"
                >
                  <Image src={Tiktok} alt="Twitter" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[700px]">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-[24px]">
            <div className="grid lg:grid-cols-2 gap-[24px]">
              <div className="space-y-[8px]">
                <label className="block   text-[#48484A] text-[16px]">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  {...register("first_name", {
                    required: "First name is required",
                  })}
                  className="placeholder:  placeholder:text-[16px] placeholder:text-[#48484A] w-full mt-1 py-[10px] px-[14px] border border-[#48484A] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#E7BF44]"
                />
                {errors.first_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.first_name.message?.toString()}
                  </p>
                )}
              </div>

              <div className="space-y-[8px]">
                <label className="block   text-[#48484A] text-[16px]">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  {...register("last_name", {
                    required: "Last name is required",
                  })}
                  className="placeholder:  placeholder:text-[16px] placeholder:text-[#48484A] w-full mt-1 py-[10px] px-[14px] border border-[#48484A] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#E7BF44]"
                />
                {errors.last_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.last_name.message?.toString()}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-[8px]">
              <label className="block   text-[#48484A] text-[16px]">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="placeholder:  placeholder:text-[16px] placeholder:text-[#48484A] w-full mt-1 py-[10px] px-[14px] border border-[#48484A] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#E7BF44]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message?.toString()}
                </p>
              )}
            </div>

            <div className="space-y-[8px]">
              <label className="block   text-[#48484A] text-[16px]">
                Message
              </label>
              <div className="relative">
                <textarea
                  placeholder="Message"
                  {...register("description", {
                    required: "Message is required",
                    maxLength: {
                      value: 600,
                      message: "Message cannot exceed 600 characters",
                    },
                  })}
                  onChange={(e) => {
                    const input = e.target.value;
                    if (input.length <= 600) {
                      register("description").onChange(e);
                      setCharCount(input.length);
                    } else {
                      e.target.value = input.slice(0, 600);
                      setCharCount(600);
                    }
                  }}
                  className="placeholder:  placeholder:text-[16px] placeholder:text-[#48484A] w-full mt-1 py-[10px] px-[14px] border border-[#48484A] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#E7BF44] pb-8"
                  rows={4}
                />
                <div className="absolute bottom-2 right-3 text-sm text-[#48484A]  ">
                  {charCount}/600 characters
                </div>
              </div>
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message?.toString()}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full   cursor-pointer text-[16px] py-3 rounded-md transition ${
                isSubmitting
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-[#E7BF44]  text-white"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
