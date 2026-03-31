import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { processSteps } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProcessStep = ({ step, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={fadeIn(isEven ? "right" : "left", "spring", index * 0.1, 0.75)}
      className="relative"
    >
      {/* Connector Line */}
      {index < processSteps.length - 1 && (
        <div className="hidden md:block absolute left-[50%] top-full w-[2px] h-8 bg-gradient-to-b from-[#915EFF] to-transparent" />
      )}

      <div className="bg-tertiary rounded-2xl p-6 md:p-8 hover:bg-black-100 transition-all duration-300">
        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
          {/* Step Number */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#915EFF] to-[#00cea8] flex items-center justify-center">
              <span className="text-white text-[24px] font-bold">
                {step.number}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-white text-[22px] font-bold mb-3">
              {step.title}
            </h3>
            <p className="text-secondary text-[15px] leading-[26px] mb-4">
              {step.description}
            </p>

            {/* Deliverables */}
            <div>
              <p className="text-[#00cea8] text-[14px] font-medium mb-2">
                Key Deliverables:
              </p>
              <div className="flex flex-wrap gap-2">
                {step.deliverables.map((deliverable, idx) => (
                  <span
                    key={idx}
                    className="bg-black-200 text-secondary text-[12px] px-3 py-1 rounded-full"
                  >
                    {deliverable}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Process = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>How I Work</p>
        <h2 className={styles.sectionHeadText}>Process.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        A structured, transparent approach ensures successful project delivery.
        Here's how I work with clients to transform ideas into impactful
        solutions.
      </motion.p>

      {/* Process Steps */}
      <div className="mt-12 flex flex-col gap-8">
        {processSteps.map((step, index) => (
          <ProcessStep key={step.number} step={step} index={index} />
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="mt-12 bg-black-100 rounded-2xl p-8 text-center"
      >
        <h3 className="text-white text-[24px] font-bold mb-4">
          Ready to Start Your Project?
        </h3>
        <p className="text-secondary text-[16px] max-w-2xl mx-auto mb-6 leading-[28px]">
          Every successful project begins with a conversation. Let's discuss
          your vision, challenges, and how we can work together to achieve your
          goals.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="bg-[#915EFF] hover:bg-[#7a4de0] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
          >
            Schedule a Discovery Call
          </a>
          <a
            href="#portfolio"
            className="border border-[#915EFF] text-[#915EFF] hover:bg-[#915EFF] hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
          >
            View Case Studies
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Process, "process");
