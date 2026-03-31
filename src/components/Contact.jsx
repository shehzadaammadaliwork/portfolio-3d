import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn } from "../utils/motion";
import { contactInfo } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Shehzada Ammad Ali",
          from_email: form.email,
          to_email: contactInfo.email,
          message: `Company: ${form.company || "Not specified"}\n\n${form.message}`,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for reaching out! I'll get back to you within 24 hours."
          );

          setForm({
            name: "",
            email: "",
            company: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Something went wrong. Please try again or email me directly.");
        }
      );
  };

  return (
    <>
      {/* Section Header */}
      <motion.div variants={fadeIn("", "", 0.1, 1)} className="mb-8">
        <p className={styles.sectionSubText}>{contactInfo.sectionSubText}</p>
        <h2 className={styles.sectionHeadText}>{contactInfo.sectionHeadText}</h2>
        <p className="mt-4 text-secondary text-[17px] max-w-2xl leading-[30px]">
          {contactInfo.description}
        </p>
      </motion.div>

      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <h3 className="text-white text-[24px] font-bold mb-2">
            Send Me a Message
          </h3>
          <p className="text-secondary text-[14px] mb-8">
            {contactInfo.cta}
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">
                {contactInfo.formFields.name} <span className="text-red-500">*</span>
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915EFF] transition-all"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">
                {contactInfo.formFields.email} <span className="text-red-500">*</span>
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="john@company.com"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915EFF] transition-all"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">
                {contactInfo.formFields.company}
              </span>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Your Company Name"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915EFF] transition-all"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">
                {contactInfo.formFields.message} <span className="text-red-500">*</span>
              </span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project, challenges, or how I can help..."
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none focus:ring-2 focus:ring-[#915EFF] transition-all"
              />
            </label>

            <button
              type="submit"
              className="bg-[#915EFF] hover:bg-[#7a4de0] py-4 px-8 rounded-xl outline-none w-full text-white font-bold shadow-md shadow-primary transition-all duration-300 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Alternative Contact Methods */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-secondary text-[14px] mb-4">
              Prefer to connect directly?
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-[#915EFF] hover:text-white transition-colors"
              >
                <span className="text-[20px]">&#9993;</span>
                <span className="text-[14px]">{contactInfo.email}</span>
              </a>
              <a
                href={contactInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary hover:text-[#0077B5] transition-colors"
              >
                <span className="text-[14px]">LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
