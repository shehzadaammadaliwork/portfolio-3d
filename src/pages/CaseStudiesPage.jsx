import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { usePortfolioData } from "../hooks/usePortfolioData";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const CaseStudyCard = ({ study, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="w-full"
    >
      <Link to={`/case-studies/${study.slug}`}>
        <div className="glass-card rounded-2xl overflow-hidden group hover:border-[#915EFF]/30 transition-all duration-300">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="relative w-full md:w-[300px] h-[200px] md:h-auto overflow-hidden flex-shrink-0">
              <img
                src={study.image}
                alt={study.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
              <div className="absolute top-4 left-4">
                <span className="badge">{study.category}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-white text-[22px] font-bold group-hover:text-[#915EFF] transition-colors">
                    {study.name}
                  </h3>
                  <p className="text-[#00cea8] text-[14px] font-medium mt-1">
                    {study.role}
                  </p>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#915EFF]/20 to-[#00cea8]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              <p className="mt-3 text-secondary text-[14px] leading-[24px] line-clamp-2">
                {study.description}
              </p>

              {/* Challenges count */}
              <div className="mt-4 flex items-center gap-4">
                <span className="badge-cyan text-[12px]">
                  {study.challenges.length} Challenges Solved
                </span>
                <span className="badge text-[12px]">
                  {study.techStack.length} Technologies
                </span>
              </div>

              {/* Tech preview */}
              <div className="mt-4 flex flex-wrap gap-2">
                {study.techStack.slice(0, 5).map((tech, idx) => (
                  <span key={idx} className="text-secondary text-[12px] bg-tertiary px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
                {study.techStack.length > 5 && (
                  <span className="text-[#915EFF] text-[12px] px-2 py-1">
                    +{study.techStack.length - 5} more
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const CaseStudiesPage = () => {
  const { caseStudies } = usePortfolioData();

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
          <p className={`${styles.sectionSubText} purple-text-gradient`}>Deep Dives</p>
          <h2 className={styles.sectionHeadText}>Case Studies.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto text-center leading-[30px]"
        >
          Detailed explorations of my most impactful projects. Each case study covers
          the project overview, my role, the challenges faced, and the solutions
          I engineered to overcome them.
        </motion.p>

        {/* Case Study Cards */}
        <div className="mt-14 flex flex-col gap-6">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.slug} study={study} index={index} />
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default CaseStudiesPage;
