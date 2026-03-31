import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, aboutContent, roles, education } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, description }) => (
  <Tilt className="xs:w-[280px] w-full">
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="w-full h-full"
    >
      <div className="premium-card min-h-[340px] flex flex-col items-center relative overflow-hidden group">
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#915EFF]/0 via-[#915EFF]/0 to-[#00cea8]/0 group-hover:from-[#915EFF]/10 group-hover:via-[#00cea8]/10 group-hover:to-[#bf61ff]/10 transition-all duration-500 rounded-[20px]" />

        {/* Icon Container */}
        <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#915EFF]/20 to-[#00cea8]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
          <img
            src={icon}
            alt={title}
            className="w-12 h-12 object-contain"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#915EFF] to-[#00cea8] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </div>

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>

        <p className="text-secondary text-[14px] text-center mt-4 leading-[24px] px-2">
          {description}
        </p>

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#915EFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Section Header */}
      <motion.div variants={textVariant()} className="relative">
        <p className={`${styles.sectionSubText} purple-text-gradient`}>
          {aboutContent.sectionSubText}
        </p>
        <h2 className={styles.sectionHeadText}>{aboutContent.sectionHeadText}</h2>
      </motion.div>

      {/* Founder Story */}
      <div className="mt-6 flex flex-col gap-5">
        {aboutContent.paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            variants={fadeIn("", "", 0.1 * (index + 1), 1)}
            className="text-secondary text-[16px] sm:text-[17px] max-w-4xl leading-[30px]"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      {/* Philosophy Section */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="mt-12 glass-card rounded-2xl p-8 relative overflow-hidden"
      >
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#915EFF] rounded-full filter blur-[100px] opacity-10" />

        <h3 className="text-white text-[26px] font-bold mb-6 flex items-center gap-3">
          <span className="w-10 h-1 bg-gradient-to-r from-[#915EFF] to-[#00cea8] rounded-full" />
          {aboutContent.philosophy.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {aboutContent.philosophy.points.map((point, index) => (
            <motion.div
              key={index}
              variants={fadeIn("right", "spring", 0.1 * (index + 1), 0.5)}
              className="flex items-start gap-4 p-4 rounded-xl bg-tertiary/50 hover:bg-tertiary transition-colors duration-300 group"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#915EFF] to-[#00cea8] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-secondary text-[15px] leading-[26px]">{point}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Roles & Education */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Roles */}
        <motion.div
          variants={fadeIn("right", "spring", 0.3, 0.75)}
          className="glass-card rounded-2xl p-6"
        >
          <h3 className="text-white text-[20px] font-bold mb-4 flex items-center gap-3">
            <span className="w-8 h-1 bg-gradient-to-r from-[#00cea8] to-[#bf61ff] rounded-full" />
            Designations
          </h3>
          <div className="space-y-3">
            {roles.map((role, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-tertiary/50 hover:bg-tertiary transition-colors">
                <img src={role.icon} alt={role.title} className="w-8 h-8 object-contain" />
                <div>
                  <p className="text-white text-[14px] font-semibold">{role.title}</p>
                  <p className="text-secondary text-[12px]">{role.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          variants={fadeIn("left", "spring", 0.3, 0.75)}
          className="glass-card rounded-2xl p-6"
        >
          <h3 className="text-white text-[20px] font-bold mb-4 flex items-center gap-3">
            <span className="w-8 h-1 bg-gradient-to-r from-[#915EFF] to-[#00cea8] rounded-full" />
            Education
          </h3>
          {education.map((edu, index) => (
            <div key={index} className="p-4 rounded-xl bg-tertiary/50">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[24px]">🎓</span>
                <h4 className="text-white text-[16px] font-semibold">{edu.degree}</h4>
              </div>
              <p className="text-[#00cea8] text-[14px] ml-9">{edu.institution}</p>
            </div>
          ))}

          <h3 className="text-white text-[20px] font-bold mt-6 mb-4 flex items-center gap-3">
            <span className="w-8 h-1 bg-gradient-to-r from-[#915EFF] to-[#00cea8] rounded-full" />
            Companies
          </h3>
          <div className="flex flex-wrap gap-2">
            {["InnvoBiz Ltd", "Pixel Pace Technologies", "tossdown", "Prism Ware Technologies"].map((company) => (
              <span key={company} className="badge text-[13px]">{company}</span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Services Cards */}
      <div className="mt-20">
        <motion.div variants={textVariant()} className="text-center">
          <p className={`${styles.sectionSubText} cyan-text-gradient`}>What I Offer</p>
          <h2 className={`${styles.sectionHeadText} text-[32px] md:text-[44px]`}>
            Core Services.
          </h2>
          <p className="text-secondary text-[16px] mt-4 max-w-2xl mx-auto">
            Full-stack development, AI integration, and modern web solutions
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap gap-8 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="section-divider" />
    </>
  );
};

export default SectionWrapper(About, "about");
