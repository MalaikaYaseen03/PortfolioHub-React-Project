import { useMemo } from "react";
import PersonalSkills from "../PersonalSkills/PersonalSkills";
import useFetch from "../CustomHook/useFetch";
import About from "../About/About";
import Services from "../Services/Services";
import Counter from "../Counter/Counter";
import Projects from "../Projects/Projects";
import Certifications from "../Certifications/Certifications";
import Testimonial from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";
import DynamicSections from "../DynamicSections/DynamicSections";

const Home = () => {
  const API_URL = useMemo(
    () => process.env.REACT_APP_BACKEND_URL || "http://localhost:8080",
    []
  );

  const { data: personalSkills } = useFetch(`${API_URL}/api/v1/personalSkills`);
  const { data: about } = useFetch(`${API_URL}/api/v1/about`);
  const { data: skills } = useFetch(`${API_URL}/api/v1/skills`);
  const { data: services } = useFetch(`${API_URL}/api/v1/services`);
  const { data: counter } = useFetch(`${API_URL}/api/v1/counter`);
  const { data: projects } = useFetch(`${API_URL}/api/v1/projects`);
  const { data: certifications } = useFetch(`${API_URL}/api/v1/certifications`);
  const { data: testimonials } = useFetch(`${API_URL}/api/v1/testimonials`);
  const { data: dynamicSections } = useFetch(
    `${API_URL}/api/v1/dynamicSections`
  );
  const { data: contact } = useFetch(`${API_URL}/api/v1/contact`);

  return (
    <>
      <main id="main">
        {personalSkills && (
          <PersonalSkills personalSkills={personalSkills || []} />
        )}
        {about && <About about={about || []} skills={skills || []} />}
        {services && (
          <Services
            services={services}
            title="Services"
            subtitle="Delivering solutions that exceed expectations."
          />
        )}
        {counter && <Counter counter={counter} />}
        {projects && (
          <Projects
            projects={projects}
            title="Projects"
            subtitle="We turn ideas into impactful results."
          />
        )}
        {testimonials && <Testimonial testimonials={testimonials} />}
        {certifications && (
          <Certifications
            certifications={certifications}
            title="Certifications"
            subtitle="Showcasing milestones of excellence"
          />
        )}
        {dynamicSections && (
          <DynamicSections dynamicSections={dynamicSections} />
        )}
        {contact && <Contact contact={contact} />}
      </main>
    </>
  );
};

export default Home;
