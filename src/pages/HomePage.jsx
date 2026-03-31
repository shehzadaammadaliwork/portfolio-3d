import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Tech,
  Works,
  Products,
  Services,
  Industries,
  Process,
  StarsCanvas,
} from "../components";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>

      {/* About / Founder Story */}
      <About />

      {/* Services */}
      <Services />

      {/* Experience Timeline */}
      <Experience />

      {/* Technologies */}
      <Tech />

      {/* Portfolio / Case Studies */}
      <Works />

      {/* Products */}
      <Products />

      {/* Industries */}
      <Industries />

      {/* Process / Approach */}
      <Process />

      {/* Testimonials */}
      <Feedbacks />

      {/* Contact Section with Earth Canvas */}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
};

export default HomePage;
