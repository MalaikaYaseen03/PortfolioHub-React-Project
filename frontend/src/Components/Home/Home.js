import { useMemo } from "react";
import PersonalSkills from "../PersonalSkills/PersonalSkills";
import useFetch from "../CustomHook/useFetch";
import About from "../About/About";
const Home = () => {
  const API_URL = useMemo(
    () => process.env.REACT_APP_BACKEND_URL || "http://localhost:8080",
    []
  );

  const { data: personalSkills } = useFetch(`${API_URL}/api/v1/personalSkills`);
  const { data: about } = useFetch(`${API_URL}/api/v1/about`);
  const { data: services } = useFetch(`${API_URL}/api/v1/services`);
  return (
    <>
      <main id="main">
        {personalSkills && (
          <PersonalSkills personalSkills={personalSkills || []} />
        )}
        {about && <About about={about || []} />}
      </main>
    </>
  );
};

export default Home;
