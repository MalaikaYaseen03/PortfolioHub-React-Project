import { Routes, Route } from "react-router-dom";
import SignUp from "../Auth/Signup/Signup";

const Form = () => {
  return (
    <>
      <section id="form">
        {/* Public Routes */}
        <Routes>
          <Route path="/form/signup-form" element={<SignUp />} />
        </Routes>
      </section>
    </>
  );
};

export default Form;
