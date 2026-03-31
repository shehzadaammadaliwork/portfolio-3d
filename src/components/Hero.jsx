import { motion } from "framer-motion";

import { styles } from "../styles";
import { heroContent } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#915EFF] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse-slow" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#00cea8] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-[#bf61ff] rounded-full mix-blend-multiply filter blur-[128px] opacity-15 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        {/* Animated Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            className="w-5 h-5 rounded-full bg-gradient-to-r from-[#915EFF] to-[#00cea8] pulse-glow"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915EFF] via-[#00cea8] to-transparent"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        {/* Content */}
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#00cea8] animate-pulse" />
            <span className="text-secondary text-[13px] font-medium tracking-wide">
              Available for new projects
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I&apos;m{" "}
            <span className="purple-text-gradient text-glow">{heroContent.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-2 mt-3"
          >
            <span className="cyan-text-gradient font-bold text-[20px] sm:text-[24px]">
              {heroContent.title}
            </span>
            {heroContent.company && (
              <>
                <span className="text-secondary text-[18px] sm:text-[22px]">at</span>
                <span className="pink-text-gradient font-bold text-[20px] sm:text-[24px]">
                  {heroContent.company}
                </span>
              </>
            )}
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`${styles.heroSubText} mt-3 text-white-100`}
          >
            {heroContent.tagline}
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 text-secondary text-[15px] sm:text-[17px] leading-[28px] max-w-xl"
          >
            {heroContent.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="btn-primary flex items-center gap-2 group"
            >
              <span>{heroContent.cta.primary}</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#portfolio"
              className="btn-secondary flex items-center gap-2"
            >
              {heroContent.cta.secondary}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {heroContent.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="glass-card rounded-xl p-4 text-center group hover:border-[#915EFF]/30 transition-all duration-300"
              >
                <p className="stat-number text-[28px] sm:text-[36px]">
                  {stat.number}
                </p>
                <p className="text-secondary text-[11px] sm:text-[13px] font-medium mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="w-[35px] h-[64px] rounded-3xl border-2 border-[#915EFF]/50 flex justify-center items-start p-2 glow-hover transition-all duration-300"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-gradient-to-b from-[#915EFF] to-[#00cea8]"
            />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
