import { useMemo } from "react";
import PersonalSkills from "../PersonalSkills/PersonalSkills";
import useFetch from "../CustomHook/useFetch";
import About from "../About/About";
import Services from "../Services/Services";
import Counter from "../Counter/Counter";
import Projects from "../Projects/Projects";
import Certifications from "../Certifications/Certifications";
import Testimonial from "../Testimonials/Testimonials";
import Publications from "../Publications/Publications";
import Contact from "../Contact/Contact";

const Home = () => {
  const API_URL = useMemo(
    () => process.env.REACT_APP_BACKEND_URL || "http://localhost:8080",
    []
  );

  const { data: personalSkills } = useFetch(`${API_URL}/api/v1/personalSkills`);
  const { data: about } = useFetch(`${API_URL}/api/v1/about`);
  const { data: services } = useFetch(`${API_URL}/api/v1/services`);
  const { data: counter } = useFetch(`${API_URL}/api/v1/counter`);
  const { data: projects } = useFetch(`${API_URL}/api/v1/projects`);
  const { data: certifications } = useFetch(`${API_URL}/api/v1/certifications`);
  const { data: testimonials } = useFetch(`${API_URL}/api/v1/testimonials`);
  const { data: publications } = useFetch(`${API_URL}/api/v1/publications`);
  const { data: contact } = useFetch(`${API_URL}/api/v1/contact`);

  return (
    <>
      <main id="main">
        {personalSkills && (
          <PersonalSkills personalSkills={personalSkills || []} />
        )}
        {about && <About about={about || []} />}
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
        {publications && <Publications publications={publications} />}
        {contact && <Contact contact={contact} />}
      </main>
    </>
  );
};

export default Home;
