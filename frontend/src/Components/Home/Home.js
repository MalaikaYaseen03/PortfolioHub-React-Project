import { useMemo } from "react";
import PersonalSkills from "../PersonalSkills/PersonalSkills";
import useFetch from "../CustomHook/useFetch";
const Home = () => {
  const API_URL = useMemo(
    () => process.env.REACT_APP_BACKEND_URL || "http://localhost:8080",
    []
  );

  const { data: personalSkills } = useFetch(`${API_URL}/api/v1/personalSkills`);
  return (
    <>
      <main id="main">
        {personalSkills && (
          <PersonalSkills personalSkills={personalSkills || []} />
        )}
      </main>
    </>
  );
};

export default Home;
