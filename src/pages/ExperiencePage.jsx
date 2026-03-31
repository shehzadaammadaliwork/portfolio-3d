import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import {
  experiences,
  techStackGrouped,
  architecturalPatterns,
  education,
  certificates,
  vrProject,
} from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-[#915EFF] text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider leading-[24px]"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const ExperiencePage = () => {
  return (
    <div className="pt-28">
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* Header */}
        <motion.div variants={textVariant()} className="text-center">
          <p className={`${styles.sectionSubText} purple-text-gradient`}>My Journey</p>
          <h2 className={styles.sectionHeadText}>Experience.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto text-center leading-[30px]"
        >
          My professional journey across multiple companies, building everything from
          e-commerce platforms and telecom backends to blockchain games and AI systems.
        </motion.p>

        {/* Timeline */}
        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={`experience-${index}`} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>

        {/* Education */}
        <div className="mt-24">
          <motion.div variants={textVariant()} className="text-center">
            <p className={`${styles.sectionSubText} cyan-text-gradient`}>Education</p>
            <h2 className={`${styles.sectionHeadText} text-[32px] md:text-[44px]`}>
              Academic Background.
            </h2>
          </motion.div>

          <div className="mt-8 flex justify-center">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", 0.2, 0.75)}
                className="glass-card rounded-2xl p-8 max-w-lg text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#915EFF] to-[#00cea8] flex items-center justify-center mx-auto mb-4">
                  <span className="text-[28px]">🎓</span>
                </div>
                <h3 className="text-white text-[22px] font-bold">{edu.degree}</h3>
                <p className="text-[#00cea8] text-[16px] font-medium mt-2">{edu.institution}</p>
                {edu.year && <p className="text-secondary text-[14px] mt-1">{edu.year}</p>}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div className="mt-24">
          <motion.div variants={textVariant()} className="text-center">
            <p className={`${styles.sectionSubText} orange-text-gradient`}>Achievements</p>
            <h2 className={`${styles.sectionHeadText} text-[32px] md:text-[44px]`}>
              Certificates & Awards.
            </h2>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.15, 0.75)}
                className="glass-card rounded-2xl p-6 text-center hover:border-[#915EFF]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f5af19]/20 to-[#f12711]/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[24px]">🏆</span>
                </div>
                <h3 className="text-white text-[16px] font-bold">{cert.title}</h3>
                <p className="text-[#00cea8] text-[14px] font-medium mt-2">{cert.issuer}</p>
                <p className="text-secondary text-[13px] mt-1">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack Grouped */}
        <div className="mt-24">
          <motion.div variants={textVariant()} className="text-center">
            <p className={`${styles.sectionSubText} pink-text-gradient`}>Tools & Technologies</p>
            <h2 className={`${styles.sectionHeadText} text-[32px] md:text-[44px]`}>
              Tech Stack.
            </h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto text-center leading-[30px]"
          >
            60+ technologies across the full stack, from programming languages and frameworks
            to databases, cloud services, AI/ML tools, and more.
          </motion.p>

          <div className="mt-12 space-y-8">
            {Object.entries(techStackGrouped).map(([category, techs], catIndex) => (
              <motion.div
                key={category}
                variants={fadeIn("up", "spring", catIndex * 0.1, 0.75)}
                className="glass-card rounded-2xl p-6"
              >
                <h3 className="text-white text-[18px] font-bold mb-4 flex items-center gap-3">
                  <span className="w-6 h-[2px] bg-gradient-to-r from-[#915EFF] to-[#00cea8] rounded-full" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-tertiary text-secondary text-[13px] px-4 py-2 rounded-lg hover:text-white hover:bg-[#915EFF]/20 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Architectural Patterns */}
        <div className="mt-16">
          <motion.div variants={fadeIn("up", "spring", 0.3, 0.75)}>
            <h3 className="text-white text-[20px] font-bold mb-6 text-center">
              Architectural Patterns & Techniques
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {architecturalPatterns.map((pattern, idx) => (
                <span
                  key={idx}
                  className="badge-cyan text-[13px] px-4 py-2"
                >
                  {pattern}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* VR Project */}
        <div className="mt-24">
          <motion.div variants={textVariant()} className="text-center">
            <p className={`${styles.sectionSubText} purple-text-gradient`}>Research</p>
            <h2 className={`${styles.sectionHeadText} text-[32px] md:text-[44px]`}>
              {vrProject.title}
            </h2>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "spring", 0.2, 0.75)}
            className="mt-8 glass-card rounded-2xl p-8"
          >
            <p className="text-secondary text-[16px] leading-[28px] mb-6">
              {vrProject.abstract}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-white text-[16px] font-semibold mb-4 flex items-center gap-2">
                  <span className="w-6 h-[2px] bg-gradient-to-r from-[#915EFF] to-[#00cea8] rounded-full" />
                  Key Contributions
                </h4>
                <ul className="space-y-3">
                  {vrProject.contributions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-secondary text-[14px]">
                      <span className="w-2 h-2 rounded-full bg-[#915EFF] mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white text-[16px] font-semibold mb-4 flex items-center gap-2">
                  <span className="w-6 h-[2px] bg-gradient-to-r from-[#00cea8] to-[#bf61ff] rounded-full" />
                  Features
                </h4>
                <ul className="space-y-3">
                  {vrProject.features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-secondary text-[14px]">
                      <span className="w-2 h-2 rounded-full bg-[#00cea8] mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#915EFF]/20">
              <div className="flex flex-wrap gap-2">
                {vrProject.techStack.map((tech, idx) => (
                  <span key={idx} className="badge text-[13px]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ExperiencePage;
