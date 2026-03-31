import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { industries } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const IndustryCard = ({ industry, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="bg-tertiary rounded-2xl p-6 hover:bg-black-100 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <span className="text-[40px]">{industry.icon}</span>
        <div className="flex-1">
          <h3 className="text-white text-[20px] font-bold mb-2">
            {industry.name}
          </h3>
          <p className="text-secondary text-[14px] leading-[24px] mb-4">
            {industry.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {industry.clients.map((client, idx) => (
              <span
                key={idx}
                className="bg-black-200 text-secondary text-[12px] px-3 py-1 rounded-full"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Industries = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Expertise Across Sectors</p>
        <h2 className={styles.sectionHeadText}>Industries.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        With 15+ years of experience, I've delivered solutions across diverse
        industries. This cross-sector expertise allows me to bring best practices
        and innovative approaches from one domain to another.
      </motion.p>

      {/* Industries Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry, index) => (
          <IndustryCard key={industry.name} industry={industry} index={index} />
        ))}
      </div>

      {/* Industry Experience Highlight */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="mt-12 bg-gradient-to-r from-[#915EFF]/20 to-[#00cea8]/20 rounded-2xl p-8"
      >
        <div className="text-center">
          <h3 className="text-white text-[24px] font-bold mb-4">
            Industry-Specific Solutions
          </h3>
          <p className="text-secondary text-[16px] max-w-2xl mx-auto leading-[28px]">
            Every industry has unique challenges, regulations, and opportunities.
            I bring deep domain knowledge combined with technical expertise to
            deliver solutions that truly fit your business context.
          </p>
          <a
            href="#contact"
            className="inline-block mt-6 bg-[#915EFF] hover:bg-[#7a4de0] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
          >
            Discuss Your Industry Needs
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Industries, "industries");
