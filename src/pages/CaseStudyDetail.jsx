import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { usePortfolioData } from "../hooks/usePortfolioData";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const { caseStudies } = usePortfolioData();
  const study = caseStudies.find((s) => s.slug === slug);
  const currentIndex = caseStudies.findIndex((s) => s.slug === slug);
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  if (!study) {
    return (
      <div className="pt-28 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-white text-[36px] font-bold">Case Study Not Found</h2>
          <p className="text-secondary mt-4">The requested case study doesn&apos;t exist.</p>
          <Link to="/case-studies" className="btn-primary inline-block mt-6">
            View All Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28">
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className={`${styles.padding} max-w-5xl mx-auto relative z-0`}
      >
        {/* Back Button */}
        <motion.div variants={fadeIn("", "", 0.1, 0.5)}>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span className="text-[14px] font-medium">Back to Case Studies</span>
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          variants={fadeIn("up", "spring", 0.1, 0.75)}
          className="relative rounded-2xl overflow-hidden h-[300px] md:h-[400px] mb-8"
        >
          <img
            src={study.image}
            alt={study.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="badge mb-3">{study.category}</span>
            <h1 className="text-white font-black text-[32px] md:text-[48px] leading-tight">
              {study.name}
            </h1>
            <p className="text-[#00cea8] text-[16px] font-semibold mt-2">{study.role}</p>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div variants={fadeIn("", "", 0.2, 0.75)} className="mb-12">
          <h2 className="text-white text-[24px] font-bold mb-4 flex items-center gap-3">
            <span className="w-8 h-1 bg-gradient-to-r from-[#915EFF] to-[#00cea8] rounded-full" />
            Project Overview
          </h2>
          <p className="text-secondary text-[16px] leading-[30px]">
            {study.description}
          </p>
          {study.link && (
            <a
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#915EFF] hover:text-white transition-colors mt-4 text-[14px] font-medium"
            >
              <span>Visit Live Site</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </motion.div>

        {/* Responsibilities */}
        <motion.div variants={fadeIn("up", "spring", 0.3, 0.75)} className="mb-12">
          <h2 className="text-white text-[24px] font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-gradient-to-r from-[#00cea8] to-[#bf61ff] rounded-full" />
            Role & Responsibilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {study.responsibilities.map((resp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-3 rounded-xl bg-tertiary/50 hover:bg-tertiary transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#915EFF] to-[#00cea8] mt-2 flex-shrink-0" />
                <p className="text-secondary text-[14px] leading-[22px]">{resp}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Challenges */}
        <motion.div variants={fadeIn("up", "spring", 0.4, 0.75)} className="mb-12">
          <h2 className="text-white text-[24px] font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-gradient-to-r from-[#bf61ff] to-[#915EFF] rounded-full" />
            Challenges & Solutions
          </h2>
          <div className="space-y-6">
            {study.challenges.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 hover:border-[#915EFF]/30 transition-all"
              >
                <h3 className="text-white text-[18px] font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#915EFF] to-[#00cea8] flex items-center justify-center text-[14px] font-bold flex-shrink-0">
                    {idx + 1}
                  </span>
                  {item.title}
                </h3>

                <div className="ml-11 space-y-4">
                  <div>
                    <p className="text-[#f5af19] text-[13px] font-semibold uppercase tracking-wider mb-2">
                      Challenge
                    </p>
                    <p className="text-secondary text-[14px] leading-[24px]">
                      {item.challenge}
                    </p>
                  </div>

                  <div>
                    <p className="text-[#00cea8] text-[13px] font-semibold uppercase tracking-wider mb-2">
                      Solution
                    </p>
                    <p className="text-secondary text-[14px] leading-[24px]">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)} className="mb-12">
          <h2 className="text-white text-[24px] font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-gradient-to-r from-[#915EFF] to-[#00cea8] rounded-full" />
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {study.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="badge text-[13px] px-4 py-2"
              >
                {tech}
              </span>
            ))}
          </div>

          {study.patterns && study.patterns.length > 0 && (
            <div className="mt-6">
              <p className="text-[#00cea8] text-[14px] font-semibold mb-3">Patterns & Practices:</p>
              <div className="flex flex-wrap gap-3">
                {study.patterns.map((pattern, idx) => (
                  <span key={idx} className="badge-cyan text-[13px] px-4 py-2">
                    {pattern}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Navigation */}
        <motion.div
          variants={fadeIn("up", "spring", 0.6, 0.75)}
          className="mt-16 pt-8 border-t border-[#915EFF]/20"
        >
          <div className="flex justify-between items-center">
            {prevStudy ? (
              <Link
                to={`/case-studies/${prevStudy.slug}`}
                className="flex items-center gap-3 text-secondary hover:text-white transition-colors group"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <div>
                  <p className="text-[12px] text-secondary">Previous</p>
                  <p className="text-[14px] font-medium">{prevStudy.name}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextStudy ? (
              <Link
                to={`/case-studies/${nextStudy.slug}`}
                className="flex items-center gap-3 text-secondary hover:text-white transition-colors group text-right"
              >
                <div>
                  <p className="text-[12px] text-secondary">Next</p>
                  <p className="text-[14px] font-medium">{nextStudy.name}</p>
                </div>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default CaseStudyDetail;
