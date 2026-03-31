import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { styles } from "../styles";
import { usePortfolioData } from "../hooks/usePortfolioData";

const CATEGORIES = ["Web App", "AI/ML", "Telecom", "Blockchain", "E-Commerce", "Desktop"];

const generateSlug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const AdminCaseStudyForm = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { caseStudies, updateCaseStudies } = usePortfolioData();
  const isEdit = slug && slug !== "new";

  const [form, setForm] = useState({
    name: "",
    slug: "",
    category: "Web App",
    description: "",
    image: "",
    role: "",
    responsibilities: [""],
    challenges: [{ title: "", challenge: "", solution: "" }],
    techStack: [""],
    patterns: [""],
    link: "",
  });

  useEffect(() => {
    if (isEdit) {
      const existing = caseStudies.find((cs) => cs.slug === slug);
      if (existing) {
        setForm({
          name: existing.name || "",
          slug: existing.slug || "",
          category: existing.category || "Web App",
          description: existing.description || "",
          image: typeof existing.image === "string" ? existing.image : "",
          role: existing.role || "",
          responsibilities: existing.responsibilities?.length > 0 ? existing.responsibilities : [""],
          challenges: existing.challenges?.length > 0
            ? existing.challenges
            : [{ title: "", challenge: "", solution: "" }],
          techStack: existing.techStack?.length > 0 ? existing.techStack : [""],
          patterns: existing.patterns?.length > 0 ? existing.patterns : [""],
          link: existing.link || "",
        });
      }
    }
  }, [isEdit, slug, caseStudies]);

  const updateField = (field, value) => {
    setForm((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === "name" && !isEdit) {
        updated.slug = generateSlug(value);
      }
      return updated;
    });
  };

  // String list helpers
  const addListItem = (field) =>
    setForm((prev) => ({ ...prev, [field]: [...prev[field], ""] }));
  const removeListItem = (field, idx) =>
    setForm((prev) => ({ ...prev, [field]: prev[field].filter((_, i) => i !== idx) }));
  const updateListItem = (field, idx, value) =>
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === idx ? value : item)),
    }));

  // Challenge helpers
  const addChallenge = () =>
    setForm((prev) => ({
      ...prev,
      challenges: [...prev.challenges, { title: "", challenge: "", solution: "" }],
    }));
  const removeChallenge = (idx) =>
    setForm((prev) => ({
      ...prev,
      challenges: prev.challenges.filter((_, i) => i !== idx),
    }));
  const updateChallenge = (idx, field, value) =>
    setForm((prev) => ({
      ...prev,
      challenges: prev.challenges.map((c, i) => (i === idx ? { ...c, [field]: value } : c)),
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.slug.trim()) return;

    const studyData = {
      ...form,
      responsibilities: form.responsibilities.filter((r) => r.trim()),
      challenges: form.challenges.filter((c) => c.title.trim() || c.challenge.trim()),
      techStack: form.techStack.filter((t) => t.trim()),
      patterns: form.patterns.filter((p) => p.trim()),
      link: form.link || null,
    };

    if (isEdit) {
      updateCaseStudies(caseStudies.map((cs) => (cs.slug === slug ? studyData : cs)));
    } else {
      updateCaseStudies([...caseStudies, studyData]);
    }

    navigate("/admin");
  };

  const StringListField = ({ label, field, placeholder }) => (
    <div>
      <div className="flex justify-between items-center mb-3">
        <label className="text-white text-[14px] font-medium">{label}</label>
        <button
          type="button"
          onClick={() => addListItem(field)}
          className="text-[#915EFF] hover:text-white text-[13px] transition-colors"
        >
          + Add
        </button>
      </div>
      <div className="space-y-3">
        {form[field].map((item, idx) => (
          <div key={idx} className="flex gap-3 items-center">
            <input
              type="text"
              value={item}
              onChange={(e) => updateListItem(field, idx, e.target.value)}
              placeholder={placeholder}
              className="flex-1 bg-tertiary text-white rounded-lg py-2 px-4 outline-none border border-transparent focus:border-[#915EFF] transition-colors text-[14px]"
            />
            {form[field].length > 1 && (
              <button
                type="button"
                onClick={() => removeListItem(field, idx)}
                className="text-red-400 hover:text-red-300 text-[18px] px-2"
              >
                x
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );

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
              {isEdit ? "Edit Case Study." : "Add Case Study."}
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
              <label className="text-white text-[14px] font-medium mb-2 block">Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="e.g. Deal AI - NDA Conflict Detection"
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

          {/* Category & Role */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <div>
              <label className="text-white text-[14px] font-medium mb-2 block">Role</label>
              <input
                type="text"
                value={form.role}
                onChange={(e) => updateField("role", e.target.value)}
                placeholder="e.g. Senior Software Engineer"
                className="w-full bg-tertiary text-white rounded-lg py-3 px-4 outline-none border border-transparent focus:border-[#915EFF] transition-colors"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-white text-[14px] font-medium mb-2 block">Description</label>
            <textarea
              value={form.description}
              onChange={(e) => updateField("description", e.target.value)}
              placeholder="Detailed project description..."
              rows={5}
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

          {/* Responsibilities */}
          <StringListField
            label="Responsibilities"
            field="responsibilities"
            placeholder="e.g. Designed RESTful APIs..."
          />

          {/* Challenges */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-white text-[14px] font-medium">Challenges & Solutions</label>
              <button
                type="button"
                onClick={addChallenge}
                className="text-[#915EFF] hover:text-white text-[13px] transition-colors"
              >
                + Add Challenge
              </button>
            </div>
            <div className="space-y-4">
              {form.challenges.map((item, idx) => (
                <div key={idx} className="glass-card rounded-xl p-5 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-[14px] font-semibold">Challenge #{idx + 1}</span>
                    {form.challenges.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeChallenge(idx)}
                        className="text-red-400 hover:text-red-300 text-[13px]"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => updateChallenge(idx, "title", e.target.value)}
                    placeholder="Challenge title"
                    className="w-full bg-tertiary text-white rounded-lg py-2 px-4 outline-none border border-transparent focus:border-[#915EFF] transition-colors text-[14px]"
                  />
                  <textarea
                    value={item.challenge}
                    onChange={(e) => updateChallenge(idx, "challenge", e.target.value)}
                    placeholder="Describe the challenge..."
                    rows={2}
                    className="w-full bg-tertiary text-white rounded-lg py-2 px-4 outline-none border border-transparent focus:border-[#915EFF] transition-colors text-[14px] resize-y"
                  />
                  <textarea
                    value={item.solution}
                    onChange={(e) => updateChallenge(idx, "solution", e.target.value)}
                    placeholder="Describe the solution..."
                    rows={2}
                    className="w-full bg-tertiary text-white rounded-lg py-2 px-4 outline-none border border-transparent focus:border-[#915EFF] transition-colors text-[14px] resize-y"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <StringListField
            label="Tech Stack"
            field="techStack"
            placeholder="e.g. React, Node.js, MongoDB"
          />

          {/* Patterns */}
          <StringListField
            label="Patterns & Practices"
            field="patterns"
            placeholder="e.g. CI/CD, REST APIs, MVC"
          />

          {/* Link */}
          <div>
            <label className="text-white text-[14px] font-medium mb-2 block">Live Site Link (optional)</label>
            <input
              type="text"
              value={form.link}
              onChange={(e) => updateField("link", e.target.value)}
              placeholder="https://example.com"
              className="w-full bg-tertiary text-white rounded-lg py-3 px-4 outline-none border border-transparent focus:border-[#915EFF] transition-colors"
            />
          </div>

          {/* Submit */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="bg-[#915EFF] hover:bg-[#7a4de0] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
            >
              {isEdit ? "Save Changes" : "Create Case Study"}
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

export default AdminCaseStudyForm;
