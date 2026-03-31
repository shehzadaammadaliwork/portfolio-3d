import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { aiAgentProjects, llmTrainingWork } from "../constants";
import { usePortfolioData } from "../hooks/usePortfolioData";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const categories = ["All", "Web App", "AI/ML", "Telecom", "Blockchain", "E-Commerce", "Desktop"];

const ProjectCard = ({ name, slug, description, tags, image, category, metrics, link }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <Tilt
        options={{ max: 25, scale: 1.02, speed: 450 }}
        className="w-full sm:w-[380px]"
      >
        <div className="glass-card rounded-2xl overflow-hidden group">
          <div className="relative w-full h-[220px] overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="absolute top-4 left-4">
              <span className="badge">{category}</span>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-white font-bold text-[22px] group-hover:text-[#915EFF] transition-colors duration-300">
              {name}
            </h3>
            <p className="mt-3 text-secondary text-[14px] leading-[24px] line-clamp-3">
              {description}
            </p>

            {metrics && metrics.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {metrics.map((metric, idx) => (
                  <span key={idx} className="badge-cyan text-[11px]">
                    {metric}
                  </span>
                ))}
              </div>
            )}

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

            <div className="mt-4 flex gap-3">
              <Link
                to={`/case-studies/${slug}`}
                className="btn-primary text-[13px] py-2 px-4"
              >
                View Case Study
              </Link>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-[13px] py-2 px-4"
                >
                  Live Site
                </a>
              )}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { projects } = usePortfolioData();

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
          <p className={`${styles.sectionSubText} purple-text-gradient`}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto text-center leading-[30px]"
        >
          A collection of projects spanning web applications, AI/ML systems, blockchain,
          e-commerce, and more. Each project demonstrates real-world problem solving
          with production-grade solutions.
        </motion.p>

        {/* Category Filter */}
        <div className="mt-12 flex flex-wrap gap-3 justify-center">
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
        </div>

        {/* Projects Grid */}
        <motion.div layout className="mt-14 flex flex-wrap gap-8 justify-center">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* AI Agent Projects Section */}
        <div className="mt-24">
          <motion.div variants={textVariant()} className="text-center">
            <p className={`${styles.sectionSubText} cyan-text-gradient`}>AI & Automation</p>
            <h2 className={`${styles.sectionHeadText} text-[32px] md:text-[44px]`}>
              AI Agent Projects.
            </h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto text-center leading-[30px]"
          >
            Autonomous AI agents built for diverse domains including medical diagnostics,
            legal analysis, email management, and enterprise knowledge systems.
          </motion.p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiAgentProjects.map((project, index) => (
              <motion.div
                key={project}
                variants={fadeIn("up", "spring", index * 0.05, 0.5)}
                className="glass-card rounded-xl p-5 hover:border-[#915EFF]/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#915EFF]/20 to-[#00cea8]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-[18px]">🤖</span>
                  </div>
                  <h3 className="text-white text-[15px] font-semibold">{project}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* LLM Training Work Section */}
        <div className="mt-24">
          <motion.div variants={textVariant()} className="text-center">
            <p className={`${styles.sectionSubText} pink-text-gradient`}>LLM Training</p>
            <h2 className={`${styles.sectionHeadText} text-[32px] md:text-[44px]`}>
              LLM & AI Training.
            </h2>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {llmTrainingWork.map((work, index) => (
              <motion.div
                key={work.title}
                variants={fadeIn("up", "spring", index * 0.15, 0.75)}
                className="glass-card rounded-2xl p-6 hover:border-[#915EFF]/30 transition-all duration-300"
              >
                <h3 className="text-white text-[18px] font-bold mb-3">{work.title}</h3>
                <p className="text-secondary text-[14px] leading-[24px] mb-4">
                  {work.description}
                </p>

                <div className="mb-4">
                  <p className="text-[#00cea8] text-[13px] font-semibold mb-2">Key Highlights:</p>
                  <ul className="space-y-2">
                    {work.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-secondary text-[13px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#915EFF] mt-1.5 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#915EFF]/10">
                  {work.techStack.map((tech, idx) => (
                    <span key={idx} className="badge text-[11px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectsPage;
