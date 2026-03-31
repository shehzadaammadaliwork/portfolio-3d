import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./components";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import ExperiencePage from "./pages/ExperiencePage";
import AdminPage from "./pages/AdminPage";
import AdminProjectForm from "./pages/AdminProjectForm";
import AdminCaseStudyForm from "./pages/AdminCaseStudyForm";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/project/:slug" element={<AdminProjectForm />} />
          <Route path="/admin/case-study/:slug" element={<AdminCaseStudyForm />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
