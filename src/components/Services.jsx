import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { detailedServices } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceDetailCard = ({ service, index, isExpanded, onToggle }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="w-full"
    >
      <div
        className={`glass-card rounded-2xl p-6 cursor-pointer transition-all duration-500 relative overflow-hidden group ${
          isExpanded ? "ring-2 ring-[#915EFF]/50 shadow-glow-lg" : ""
        }`}
        onClick={onToggle}
      >
        {/* Background Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/5 via-transparent to-[#00cea8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Header */}
        <div className="flex items-start justify-between relative z-10">
          <div className="flex items-center gap-4">
            {/* Icon Container */}
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#915EFF]/20 to-[#00cea8]/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img
                src={service.icon}
                alt={service.title}
                className="w-9 h-9 object-contain"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#915EFF] to-[#00cea8] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>

            <div>
              <h3 className="text-white text-[20px] font-bold">{service.title}</h3>
              <p className="cyan-text-gradient text-[14px] font-medium mt-1">
                {service.tagline}
              </p>
            </div>
          </div>

          {/* Expand Icon */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
              isExpanded ? "bg-[#915EFF]" : "bg-tertiary group-hover:bg-[#915EFF]/20"
            }`}
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-secondary text-[15px] mt-5 leading-[26px] relative z-10">
          {service.description}
        </p>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden relative z-10"
            >
              <div className="mt-6 pt-6 border-t border-[#915EFF]/20">
                {/* Offerings */}
                <div className="mb-6">
                  <h4 className="text-white text-[16px] font-semibold mb-4 flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-gradient-to-r from-[#915EFF] to-[#00cea8] rounded-full" />
                    What I Offer
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.offerings.map((offering, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-tertiary/50 transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#915EFF] to-[#00cea8]" />
                        <span className="text-secondary text-[14px]">{offering}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <h4 className="text-white text-[16px] font-semibold mb-4 flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-gradient-to-r from-[#00cea8] to-[#bf61ff] rounded-full" />
                    Use Cases
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, idx) => (
                      <span
                        key={idx}
                        className="badge-cyan"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-white text-[16px] font-semibold mb-4 flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-gradient-to-r from-[#bf61ff] to-[#915EFF] rounded-full" />
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="badge"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="btn-primary inline-flex items-center gap-2 text-[14px]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Discuss This Service</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      {/* Section Header */}
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} purple-text-gradient`}>What I Offer</p>
        <h2 className={styles.sectionHeadText}>Services.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto text-center leading-[30px]"
      >
        I provide end-to-end technology solutions that help businesses innovate,
        scale, and succeed. From AI integration to enterprise systems, each
        service is tailored to your specific needs and goals.
      </motion.p>

      {/* Service Cards Grid */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {detailedServices.map((service, index) => (
          <ServiceDetailCard
            key={service.id}
            service={service}
            index={index}
            isExpanded={expandedIndex === index}
            onToggle={() => toggleExpand(index)}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="mt-16 text-center"
      >
        <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-white text-[22px] font-bold mb-3">
            Not sure which service fits your needs?
          </h3>
          <p className="text-secondary text-[15px] mb-6">
            Let&apos;s discuss your project requirements and find the perfect solution together.
          </p>
          <a
            href="#contact"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <span>Schedule a Free Consultation</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="section-divider" />
    </>
  );
};

export default SectionWrapper(Services, "services");
