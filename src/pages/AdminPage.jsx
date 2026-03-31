import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { usePortfolioData } from "../hooks/usePortfolioData";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ADMIN_PASSWORD = "admin123";
const AUTH_KEY = "portfolio_admin_auth";

const AdminPage = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("projects");
  const navigate = useNavigate();

  const { projects, caseStudies, updateProjects, updateCaseStudies, resetToDefaults, usingSanity } =
    usePortfolioData();

  useEffect(() => {
    if (localStorage.getItem(AUTH_KEY) === "true") {
      setAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      localStorage.setItem(AUTH_KEY, "true");
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY);
    setAuthenticated(false);
    setPassword("");
  };

  const handleDeleteProject = (slug) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      updateProjects(projects.filter((p) => p.slug !== slug));
    }
  };

  const handleDeleteCaseStudy = (slug) => {
    if (window.confirm("Are you sure you want to delete this case study?")) {
      updateCaseStudies(caseStudies.filter((cs) => cs.slug !== slug));
    }
  };

  const handleReset = () => {
    if (window.confirm("Reset all data to defaults? This will remove all custom changes.")) {
      resetToDefaults();
    }
  };

  if (!authenticated) {
    return (
      <div className="pt-28 min-h-screen flex items-center justify-center">
        <div className="glass-card rounded-2xl p-8 max-w-md w-full mx-4">
          <h2 className="text-white text-[28px] font-bold text-center mb-2">Admin Panel</h2>
          <p className="text-secondary text-center mb-8">Enter password to access the admin panel</p>

          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full bg-tertiary text-white rounded-lg py-3 px-4 outline-none border border-transparent focus:border-[#915EFF] transition-colors mb-4"
            />
            {error && <p className="text-red-400 text-[14px] mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#915EFF] hover:bg-[#7a4de0] text-white font-medium py-3 rounded-lg transition-all duration-300"
            >
              Login
            </button>
          </form>
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
        viewport={{ once: true, amount: 0.1 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} purple-text-gradient`}>Management</p>
            <h2 className={styles.sectionHeadText}>Admin Panel.</h2>
          </motion.div>

          <div className="flex gap-3">
            {!usingSanity && (
              <button
                onClick={handleReset}
                className="text-secondary hover:text-white text-[14px] border border-secondary/30 hover:border-white/30 px-4 py-2 rounded-lg transition-all"
              >
                Reset to Defaults
              </button>
            )}
            <button
              onClick={handleLogout}
              className="text-red-400 hover:text-red-300 text-[14px] border border-red-400/30 hover:border-red-300/30 px-4 py-2 rounded-lg transition-all"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Sanity CMS Status Banner */}
        {usingSanity ? (
          <motion.div
            variants={fadeIn("up", "spring", 0.1, 0.75)}
            className="mb-8 rounded-xl p-5 border border-green-500/30 bg-green-500/10"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
                  <span className="text-green-400 font-semibold text-[15px]">Sanity CMS Connected</span>
                </div>
                <p className="text-secondary text-[13px]">
                  Your portfolio data is managed via Sanity Studio. Add/edit projects, upload images, and manage content there.
                </p>
              </div>
              <a
                href="http://localhost:3333"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#915EFF] hover:bg-[#7a4de0] text-white text-[14px] font-medium py-2 px-6 rounded-lg transition-all duration-300 whitespace-nowrap"
              >
                Open Sanity Studio
              </a>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <p className="text-white text-[22px] font-bold">{projects.length}</p>
                <p className="text-secondary text-[12px]">Projects</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <p className="text-white text-[22px] font-bold">{caseStudies.length}</p>
                <p className="text-secondary text-[12px]">Case Studies</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <p className="text-green-400 text-[13px] font-medium">Live Sync</p>
                <p className="text-secondary text-[12px]">Changes reflect instantly</p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            variants={fadeIn("up", "spring", 0.1, 0.75)}
            className="mb-8 rounded-xl p-5 border border-yellow-500/30 bg-yellow-500/10"
          >
            <div className="flex items-start gap-3">
              <span className="text-yellow-400 text-[18px] mt-0.5">⚠</span>
              <div>
                <p className="text-yellow-400 font-semibold text-[15px] mb-1">Using Local Storage (Sanity not connected)</p>
                <p className="text-secondary text-[13px] mb-3">
                  Data is stored in your browser only. Connect Sanity CMS for cloud storage, image uploads, and cross-device access.
                </p>
                <div className="bg-black/30 rounded-lg p-3 text-[12px] font-mono text-secondary">
                  <p className="text-white/70 mb-1"># To connect Sanity CMS:</p>
                  <p>cd studio</p>
                  <p>npx sanity init</p>
                  <p className="text-white/70 mt-1"># Then add VITE_SANITY_PROJECT_ID to .env</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Only show local CRUD when Sanity is NOT connected */}
        {!usingSanity && (
          <>
            {/* Tabs */}
            <div className="flex gap-4 mb-8 border-b border-[#915EFF]/20 pb-4">
              <button
                onClick={() => setActiveTab("projects")}
                className={`text-[16px] font-medium px-4 py-2 rounded-lg transition-all ${
                  activeTab === "projects"
                    ? "bg-[#915EFF] text-white"
                    : "text-secondary hover:text-white"
                }`}
              >
                Projects ({projects.length})
              </button>
              <button
                onClick={() => setActiveTab("caseStudies")}
                className={`text-[16px] font-medium px-4 py-2 rounded-lg transition-all ${
                  activeTab === "caseStudies"
                    ? "bg-[#915EFF] text-white"
                    : "text-secondary hover:text-white"
                }`}
              >
                Case Studies ({caseStudies.length})
              </button>
            </div>

            {/* Projects Tab */}
            {activeTab === "projects" && (
              <motion.div variants={fadeIn("up", "spring", 0.1, 0.75)}>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-white text-[20px] font-bold">All Projects</h3>
                  <button
                    onClick={() => navigate("/admin/project/new")}
                    className="bg-[#915EFF] hover:bg-[#7a4de0] text-white text-[14px] font-medium py-2 px-6 rounded-lg transition-all duration-300"
                  >
                    + Add New Project
                  </button>
                </div>

                <div className="space-y-4">
                  {projects.map((project) => (
                    <div
                      key={project.slug}
                      className="glass-card rounded-xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        {project.image && (
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-16 h-12 object-cover rounded-lg flex-shrink-0"
                          />
                        )}
                        <div>
                          <h4 className="text-white text-[16px] font-semibold">{project.name}</h4>
                          <div className="flex gap-2 mt-1">
                            <span className="badge text-[11px] px-2 py-1">{project.category}</span>
                            <span className="text-secondary text-[12px]">{project.slug}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 flex-shrink-0">
                        <button
                          onClick={() => navigate(`/admin/project/${project.slug}`)}
                          className="text-[#915EFF] hover:text-white text-[13px] border border-[#915EFF]/30 hover:border-white/30 px-4 py-2 rounded-lg transition-all"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteProject(project.slug)}
                          className="text-red-400 hover:text-red-300 text-[13px] border border-red-400/30 hover:border-red-300/30 px-4 py-2 rounded-lg transition-all"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Case Studies Tab */}
            {activeTab === "caseStudies" && (
              <motion.div variants={fadeIn("up", "spring", 0.1, 0.75)}>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-white text-[20px] font-bold">All Case Studies</h3>
                  <button
                    onClick={() => navigate("/admin/case-study/new")}
                    className="bg-[#915EFF] hover:bg-[#7a4de0] text-white text-[14px] font-medium py-2 px-6 rounded-lg transition-all duration-300"
                  >
                    + Add New Case Study
                  </button>
                </div>

                <div className="space-y-4">
                  {caseStudies.map((study) => (
                    <div
                      key={study.slug}
                      className="glass-card rounded-xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        {study.image && (
                          <img
                            src={study.image}
                            alt={study.name}
                            className="w-16 h-12 object-cover rounded-lg flex-shrink-0"
                          />
                        )}
                        <div>
                          <h4 className="text-white text-[16px] font-semibold">{study.name}</h4>
                          <div className="flex gap-2 mt-1">
                            <span className="badge text-[11px] px-2 py-1">{study.category}</span>
                            <span className="text-secondary text-[12px]">{study.role}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 flex-shrink-0">
                        <button
                          onClick={() => navigate(`/admin/case-study/${study.slug}`)}
                          className="text-[#915EFF] hover:text-white text-[13px] border border-[#915EFF]/30 hover:border-white/30 px-4 py-2 rounded-lg transition-all"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteCaseStudy(study.slug)}
                          className="text-red-400 hover:text-red-300 text-[13px] border border-red-400/30 hover:border-red-300/30 px-4 py-2 rounded-lg transition-all"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </>
        )}

        {/* When Sanity is connected, show quick links to manage content */}
        {usingSanity && (
          <motion.div variants={fadeIn("up", "spring", 0.2, 0.75)} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a
              href="http://localhost:3333/desk/project"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-6 hover:border-[#915EFF]/40 transition-all group"
            >
              <h3 className="text-white text-[18px] font-bold mb-2 group-hover:text-[#915EFF] transition-colors">
                Manage Projects
              </h3>
              <p className="text-secondary text-[13px]">
                Add, edit, or delete portfolio projects. Upload images and set categories.
              </p>
              <span className="text-[#915EFF] text-[13px] mt-3 inline-block">Open in Studio →</span>
            </a>

            <a
              href="http://localhost:3333/desk/caseStudy"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-6 hover:border-[#915EFF]/40 transition-all group"
            >
              <h3 className="text-white text-[18px] font-bold mb-2 group-hover:text-[#915EFF] transition-colors">
                Manage Case Studies
              </h3>
              <p className="text-secondary text-[13px]">
                Add detailed case studies with challenges, solutions, and tech stack.
              </p>
              <span className="text-[#915EFF] text-[13px] mt-3 inline-block">Open in Studio →</span>
            </a>
          </motion.div>
        )}
      </motion.section>
    </div>
  );
};

export default AdminPage;
