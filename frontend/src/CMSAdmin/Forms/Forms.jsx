import { Routes, Route } from "react-router-dom";
import Signup from "../Auth/Signup/Signup";
import Login from "../Auth/Login/Login";

const Form = () => {
  return (
    <>
      <section id="form">
        {/* Public Routes */}
        <Routes>
          <Route path="/signup-form" element={<Signup />} />
          <Route path="/login-form" element={<Login />} />
        </Routes>
      </section>
    </>
  );
};

export default Form;
