import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { styles } from "../styles";
import { usePortfolioData } from "../hooks/usePortfolioData";

const TAG_COLORS = [
  "blue-text-gradient",
  "green-text-gradient",
  "pink-text-gradient",
  "orange-text-gradient",
];

const CATEGORIES = ["Web App", "AI/ML", "Telecom", "Blockchain", "E-Commerce", "Desktop"];

const generateSlug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const AdminProjectForm = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { projects, updateProjects } = usePortfolioData();
  const isEdit = slug && slug !== "new";

  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
    category: "Web App",
    image: "",
    tags: [{ name: "", color: "blue-text-gradient" }],
    metrics: [""],
    source_code_link: "",
    link: "",
  });

  useEffect(() => {
    if (isEdit) {
      const existing = projects.find((p) => p.slug === slug);
      if (existing) {
        setForm({
          name: existing.name || "",
          slug: existing.slug || "",
          description: existing.description || "",
          category: existing.category || "Web App",
          image: typeof existing.image === "string" ? existing.image : "",
          tags: existing.tags?.length > 0 ? existing.tags : [{ name: "", color: "blue-text-gradient" }],
          metrics: existing.metrics?.length > 0 ? existing.metrics : [""],
          source_code_link: existing.source_code_link || "",
          link: existing.link || "",
        });
      }
    }
  }, [isEdit, slug, projects]);

  const updateField = (field, value) => {
    setForm((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === "name" && !isEdit) {
        updated.slug = generateSlug(value);
      }
      return updated;
    });
  };

  // Dynamic list helpers
  const addTag = () => setForm((prev) => ({ ...prev, tags: [...prev.tags, { name: "", color: "blue-text-gradient" }] }));
  const removeTag = (idx) => setForm((prev) => ({ ...prev, tags: prev.tags.filter((_, i) => i !== idx) }));
  const updateTag = (idx, field, value) =>
    setForm((prev) => ({
      ...prev,
      tags: prev.tags.map((t, i) => (i === idx ? { ...t, [field]: value } : t)),
    }));

  const addMetric = () => setForm((prev) => ({ ...prev, metrics: [...prev.metrics, ""] }));
  const removeMetric = (idx) => setForm((prev) => ({ ...prev, metrics: prev.metrics.filter((_, i) => i !== idx) }));
  const updateMetric = (idx, value) =>
    setForm((prev) => ({
      ...prev,
      metrics: prev.metrics.map((m, i) => (i === idx ? value : m)),
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.slug.trim()) return;

    const projectData = {
      ...form,
      tags: form.tags.filter((t) => t.name.trim()),
      metrics: form.metrics.filter((m) => m.trim()),
    };

    if (isEdit) {
      updateProjects(projects.map((p) => (p.slug === slug ? projectData : p)));
    } else {
      updateProjects([...projects, projectData]);
    }

    navigate("/admin");
  };

  return (
    <div className="pt-28">
      <section className={`${styles.padding} max-w-4xl mx-auto relative z-0`}>
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className={`${styles.sectionSubText} purple-text-gradient`}>
              {isEdit ? "Edit" : "New"}
            </p>
            <h2 className={`${styles.sectionHeadText} text-[32px]`}>
              {isEdit ? "Edit Project." : "Add Project."}
            </h2>
          </div>
          <button
            onClick={() => navigate("/admin")}
            className="text-secondary hover:text-white text-[14px] border border-secondary/30 hover:border-white/30 px-4 py-2 rounded-lg transition-all"
          >
            Cancel
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Slug */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-white text-[14px] font-medium mb-2 block">Project Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="e.g. Deal AI"
                required
                className="w-full bg-tertiary text-white rounded-lg py-3 px-4 outline-none border border-transparent focus:border-[#915EFF] transition-colors"
              />
            </div>
            <div>
              <label className="text-white text-[14px] font-medium mb-2 block">Slug *</label>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => updateField("slug", e.target.value)}
                placeholder="e.g. deal-ai"
                required
                className="w-full bg-tertiary text-white rounded-lg py-3 px-4 outline-none border border-transparent focus:border-[#915EFF] transition-colors"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="text-white text-[14px] font-medium mb-2 block">Category</label>
            <select
              value={form.category}
              onChange={(e) => updateField("category", e.target.value)}
              className="w-full bg-tertiary text-white rounded-lg py-3 px-4 outline-none border border-transparent focus:border-[#915EFF] transition-colors"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="text-white text-[14px] font-medium mb-2 block">Description</label>
            <textarea
              value={form.description}
              onChange={(e) => updateField("description", e.target.value)}
              placeholder="Project description..."
              rows={4}
              className="w-full bg-tertiary text-white rounded-lg py-3 px-4 outline-none border border-transparent focus:border-[#915EFF] transition-colors resize-y"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="text-white text-[14px] font-medium mb-2 block">Image URL</label>
            <input
              type="text"
              value={form.image}
              onChange={(e) => updateField("image", e.target.value)}
              placeholder="https://example.com/image.png"
              className="w-full bg-tertiary text-white rounded-lg py-3 px-4 outline-none border border-transparent focus:border-[#915EFF] transition-colors"
            />
            {form.image && (
              <img src={form.image} alt="Preview" className="mt-3 w-full max-w-xs h-32 object-cover rounded-lg" />
            )}
          </div>

          {/* Tags */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-white text-[14px] font-medium">Tags</label>
              <button
                type="button"
                onClick={addTag}
                className="text-[#915EFF] hover:text-white text-[13px] transition-colors"
              >
                + Add Tag
              </button>
            </div>
            <div className="space-y-3">
              {form.tags.map((tag, idx) => (
                <div key={idx} className="flex gap-3 items-center">
                  <input
                    type="text"
                    value={tag.name}
                    onChange={(e) => updateTag(idx, "name", e.target.value)}
                    placeholder="Tag name"
                    className="flex-1 bg-tertiary text-white rounded-lg py-2 px-4 outline-none border border-transparent focus:border-[#915EFF] transition-colors text-[14px]"
                  />
                  <select
                    value={tag.color}
                    onChange={(e) => updateTag(idx, "color", e.target.value)}
                    className="bg-tertiary text-white rounded-lg py-2 px-3 outline-none border border-transparent focus:border-[#915EFF] transition-colors text-[14px]"
                  >
                    {TAG_COLORS.map((c) => (
                      <option key={c} value={c}>{c.replace("-text-gradient", "")}</option>
                    ))}
                  </select>
                  {form.tags.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeTag(idx)}
                      className="text-red-400 hover:text-red-300 text-[18px] px-2"
                    >
                      x
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-white text-[14px] font-medium">Metrics</label>
              <button
                type="button"
                onClick={addMetric}
                className="text-[#915EFF] hover:text-white text-[13px] transition-colors"
              >
                + Add Metric
              </button>
            </div>
            <div className="space-y-3">
              {form.metrics.map((metric, idx) => (
                <div key={idx} className="flex gap-3 items-center">
                  <input
                    type="text"
                    value={metric}
                    onChange={(e) => updateMetric(idx, e.target.value)}
                    placeholder="e.g. 95% test coverage"
                    className="flex-1 bg-tertiary text-white rounded-lg py-2 px-4 outline-none border border-transparent focus:border-[#915EFF] transition-colors text-[14px]"
                  />
                  {form.metrics.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeMetric(idx)}
                      className="text-red-400 hover:text-red-300 text-[18px] px-2"
                    >
                      x
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-white text-[14px] font-medium mb-2 block">Source Code Link</label>
              <input
                type="text"
                value={form.source_code_link}
                onChange={(e) => updateField("source_code_link", e.target.value)}
                placeholder="https://github.com/..."
                className="w-full bg-tertiary text-white rounded-lg py-3 px-4 outline-none border border-transparent focus:border-[#915EFF] transition-colors"
              />
            </div>
            <div>
              <label className="text-white text-[14px] font-medium mb-2 block">Live Site Link</label>
              <input
                type="text"
                value={form.link}
                onChange={(e) => updateField("link", e.target.value)}
                placeholder="https://example.com"
                className="w-full bg-tertiary text-white rounded-lg py-3 px-4 outline-none border border-transparent focus:border-[#915EFF] transition-colors"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="bg-[#915EFF] hover:bg-[#7a4de0] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
            >
              {isEdit ? "Save Changes" : "Create Project"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin")}
              className="text-secondary hover:text-white border border-secondary/30 hover:border-white/30 py-3 px-8 rounded-lg transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AdminProjectForm;
