import { Routes, Route } from "react-router-dom";
import Signup from "../Auth/Signup/Signup";

const Form = () => {
  return (
    <>
      <section id="form">
        {/* Public Routes */}
        <Routes>
          <Route path="/signup-form" element={<Signup />} />
        </Routes>
      </section>
    </>
  );
};

export default Form;
