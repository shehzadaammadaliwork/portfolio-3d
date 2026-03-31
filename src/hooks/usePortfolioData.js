import { useState, useCallback, useEffect } from "react";
import { projects as defaultProjects, caseStudies as defaultCaseStudies } from "../constants";
import { client, urlFor, isSanityConfigured } from "../sanity/client";
import { PROJECTS_QUERY, CASE_STUDIES_QUERY, PRODUCTS_QUERY } from "../sanity/queries";

const PROJECTS_KEY = "portfolio_projects";
const CASE_STUDIES_KEY = "portfolio_caseStudies";

const readFromStorage = (key, fallback) => {
  try {
    const stored = localStorage.getItem(key);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {
    // ignore parse errors
  }
  return fallback;
};

const normalizeSanityImage = (item) => ({
  ...item,
  image: item.image ? urlFor(item.image).width(800).url() : "",
});

export const usePortfolioData = () => {
  const usingSanity = isSanityConfigured();

  const [projects, setProjectsState] = useState(() =>
    usingSanity ? defaultProjects : readFromStorage(PROJECTS_KEY, defaultProjects)
  );
  const [caseStudies, setCaseStudiesState] = useState(() =>
    usingSanity ? defaultCaseStudies : readFromStorage(CASE_STUDIES_KEY, defaultCaseStudies)
  );
  const [products, setProductsState] = useState([]);
  const [loading, setLoading] = useState(usingSanity);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!usingSanity) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const [sanityProjects, sanityCaseStudies, sanityProducts] = await Promise.all([
          client.fetch(PROJECTS_QUERY),
          client.fetch(CASE_STUDIES_QUERY),
          client.fetch(PRODUCTS_QUERY),
        ]);

        if (sanityProjects?.length > 0) {
          setProjectsState(sanityProjects.map(normalizeSanityImage));
        } else {
          setProjectsState(defaultProjects);
        }

        if (sanityCaseStudies?.length > 0) {
          setCaseStudiesState(sanityCaseStudies.map(normalizeSanityImage));
        } else {
          setCaseStudiesState(defaultCaseStudies);
        }

        if (sanityProducts?.length > 0) {
          setProductsState(sanityProducts.map(normalizeSanityImage));
        }
      } catch (err) {
        console.error("Sanity fetch failed, using fallback data:", err);
        setError(err.message);
        setProjectsState(readFromStorage(PROJECTS_KEY, defaultProjects));
        setCaseStudiesState(readFromStorage(CASE_STUDIES_KEY, defaultCaseStudies));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [usingSanity]);

  const updateProjects = useCallback((newProjects) => {
    setProjectsState(newProjects);
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(newProjects));
  }, []);

  const updateCaseStudies = useCallback((newCaseStudies) => {
    setCaseStudiesState(newCaseStudies);
    localStorage.setItem(CASE_STUDIES_KEY, JSON.stringify(newCaseStudies));
  }, []);

  const resetToDefaults = useCallback(() => {
    localStorage.removeItem(PROJECTS_KEY);
    localStorage.removeItem(CASE_STUDIES_KEY);
    setProjectsState(defaultProjects);
    setCaseStudiesState(defaultCaseStudies);
  }, []);

  return {
    projects,
    caseStudies,
    products,
    loading,
    error,
    usingSanity,
    updateProjects,
    updateCaseStudies,
    resetToDefaults,
  };
};
