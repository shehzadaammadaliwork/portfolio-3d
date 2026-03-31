import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { usePortfolioData } from "../hooks/usePortfolioData";

const STATUS_COLORS = {
  Live: "bg-green-500/20 text-green-400 border border-green-500/30",
  Beta: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
  "Open Source": "bg-blue-500/20 text-blue-400 border border-blue-500/30",
  "In Development": "bg-purple-500/20 text-purple-400 border border-purple-500/30",
};

const FeatureTag = ({ label }) => (
  <span className="flex items-center gap-1.5 text-[13px] text-secondary bg-tertiary px-3 py-1.5 rounded-lg">
    <span className="w-1.5 h-1.5 rounded-full bg-[#915EFF] flex-shrink-0" />
    {label}
  </span>
);

const ProductCard = ({ product, index }) => {
  const statusStyle = STATUS_COLORS[product.status] || STATUS_COLORS["Live"];

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="glass-card rounded-2xl overflow-hidden group hover:border-[#915EFF]/30 transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Image */}
        <div className="relative w-full lg:w-[360px] h-[220px] lg:h-auto overflow-hidden flex-shrink-0">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#915EFF]/20 to-[#00cea8]/10 flex items-center justify-center">
              <span className="text-[60px] opacity-30">🚀</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />

          {/* Status badge */}
          <div className="absolute top-4 left-4">
            <span className={`text-[12px] font-semibold px-3 py-1 rounded-full ${statusStyle}`}>
              {product.status || "Live"}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <p className="text-[#915EFF] text-[13px] font-semibold uppercase tracking-wider mb-1">
                  {product.category || "SaaS Product"}
                </p>
                <h3 className="text-white text-[24px] font-bold leading-tight group-hover:text-[#915EFF] transition-colors">
                  {product.name}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-secondary text-[15px] leading-[28px] mb-5">
              {product.description}
            </p>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="mb-5">
                <p className="text-white text-[13px] font-semibold mb-2 uppercase tracking-wider">
                  Key Features
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, idx) => (
                    <FeatureTag key={idx} label={feature} />
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            {product.techStack && product.techStack.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {product.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="badge text-[12px] px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4 border-t border-white/5">
            {product.link && (
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#915EFF] hover:bg-[#7a4de0] text-white text-[14px] font-medium px-5 py-2.5 rounded-lg transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Visit Product
              </a>
            )}
            {product.github && (
              <a
                href={product.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary hover:text-white text-[14px] border border-secondary/30 hover:border-white/30 px-5 py-2.5 rounded-lg transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Products = () => {
  const { products } = usePortfolioData();

  if (!products || products.length === 0) return null;

  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} purple-text-gradient`}>What I Built</p>
        <h2 className={styles.sectionHeadText}>Products.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto text-center leading-[30px]"
      >
        Beyond client work — products I designed, built, and launched from scratch.
      </motion.p>

      <div className="mt-14 flex flex-col gap-8">
        {products.map((product, index) => (
          <ProductCard key={product._id || product.slug || index} product={product} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Products, "products");
