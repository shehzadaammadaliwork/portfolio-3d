import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { usePortfolioData } from "../hooks/usePortfolioData";

const categories = ["All", "Web App", "AI/ML", "Telecom", "Blockchain", "E-Commerce", "Desktop"];

const ProjectCard = ({
  index,
  name,
  slug,
  description,
  tags,
  image,
  category,
  metrics,
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <Tilt
        options={{
          max: 25,
          scale: 1.02,
          speed: 450,
        }}
        className="w-full sm:w-[380px]"
      >
        <div className="glass-card rounded-2xl overflow-hidden group">
          {/* Project Image */}
          <div className="relative w-full h-[220px] overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="badge">
                {category}
              </span>
            </div>

            {/* View Project Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-[#915EFF] text-white px-6 py-2 rounded-full font-medium text-[14px] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                View Details
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div className="p-6">
            <h3 className="text-white font-bold text-[22px] group-hover:text-[#915EFF] transition-colors duration-300">
              {name}
            </h3>
            <p className="mt-3 text-secondary text-[14px] leading-[24px] line-clamp-3">
              {description}
            </p>

            {/* Metrics */}
            {metrics && metrics.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {metrics.map((metric, idx) => (
                  <span
                    key={idx}
                    className="badge-cyan text-[11px]"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            )}

            {/* Tags */}
            <div className="mt-4 pt-4 border-t border-[#915EFF]/10 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={`${name}-${tag.name}`}
                  className={`text-[13px] font-medium ${tag.color}`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>

            {/* Case Study Link */}
            {slug && (
              <div className="mt-4">
                <Link
                  to={`/case-studies/${slug}`}
                  className="text-[#915EFF] text-[13px] font-medium hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  View Case Study
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { projects } = usePortfolioData();

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      {/* Section Header */}
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} purple-text-gradient`}>Case Studies</p>
        <h2 className={styles.sectionHeadText}>Portfolio.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto text-center leading-[30px]"
      >
        Here are select projects that showcase my expertise across AI, SaaS,
        enterprise systems, and finance technology. Each case study highlights
        the challenge, approach, and measurable outcomes delivered.
      </motion.p>

      {/* Category Filter */}
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.5)}
        className="mt-12 flex flex-wrap gap-3 justify-center"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-gradient-to-r from-[#915EFF] to-[#00cea8] text-white shadow-glow"
                : "glass text-secondary hover:text-white hover:border-[#915EFF]/50"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="mt-14 flex flex-wrap gap-8 justify-center"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`project-${project.name}`} index={index} {...project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* More Projects CTA */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="mt-16 text-center"
      >
        <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#915EFF] rounded-full filter blur-[80px] opacity-20" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#00cea8] rounded-full filter blur-[80px] opacity-20" />

          <h3 className="text-white text-[22px] font-bold mb-3 relative z-10">
            Want to see all projects & case studies?
          </h3>
          <p className="text-secondary text-[15px] mb-6 relative z-10">
            Explore detailed case studies with challenges, solutions, and tech stacks.
          </p>
          <div className="flex flex-wrap gap-4 justify-center relative z-10">
            <Link
              to="/case-studies"
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>View Case Studies</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/projects"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <span>All Projects</span>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="section-divider" />
    </>
  );
};

export default SectionWrapper(Works, "portfolio");
