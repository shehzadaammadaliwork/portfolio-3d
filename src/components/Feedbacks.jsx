import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="glass-card rounded-2xl p-8 xs:w-[340px] w-full relative overflow-hidden group"
  >
    {/* Quote Icon */}
    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#915EFF]/20 to-[#00cea8]/20 flex items-center justify-center">
      <span className="purple-text-gradient text-[24px] font-serif">&ldquo;</span>
    </div>

    {/* Hover Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/5 to-[#00cea8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative z-10">
      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-[#f5af19]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-white text-[15px] leading-[28px] mb-6">
        {testimonial}
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-4 border-t border-[#915EFF]/20">
        <div className="relative">
          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="absolute inset-0 rounded-full ring-2 ring-[#915EFF]/50 ring-offset-2 ring-offset-[#151030]" />
        </div>
        <div>
          <p className="text-white font-semibold text-[16px]">
            {name}
          </p>
          <p className="text-secondary text-[13px]">
            {designation}
          </p>
          <p className="cyan-text-gradient text-[12px] font-medium">
            {company}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const stats = [
    { number: "98%", label: "Client Satisfaction", color: "purple-text-gradient" },
    { number: "200+", label: "Projects Delivered", color: "cyan-text-gradient" },
    { number: "85%", label: "Repeat Clients", color: "pink-text-gradient" },
    { number: "12+", label: "Countries Served", color: "orange-text-gradient" },
  ];

  return (
    <div className="relative">
      {/* Background Section */}
      <div className="glass-card rounded-3xl overflow-hidden">
        {/* Header */}
        <div className={`${styles.padding} relative`}>
          {/* Background Decoration */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#915EFF] rounded-full filter blur-[120px] opacity-10" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00cea8] rounded-full filter blur-[120px] opacity-10" />

          <motion.div variants={textVariant()} className="text-center relative z-10">
            <p className={`${styles.sectionSubText} purple-text-gradient`}>What Clients Say</p>
            <h2 className={styles.sectionHeadText}>Testimonials.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto text-center leading-[30px] relative z-10"
          >
            Don&apos;t just take my word for it. Here&apos;s what business leaders and
            technology executives have to say about working with me.
          </motion.p>
        </div>

        {/* Testimonials Cards */}
        <div className={`pb-14 ${styles.paddingX} flex flex-wrap gap-8 justify-center`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          className="pb-14 px-6"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="premium-card text-center group"
                >
                  <p className={`${stat.color} font-bold text-[36px] sm:text-[42px]`}>
                    {stat.number}
                  </p>
                  <p className="text-secondary text-[13px] mt-1 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="section-divider" />
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");
