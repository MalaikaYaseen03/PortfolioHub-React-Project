import { Routes, Route } from "react-router-dom";
import Signup from "../Auth/Signup/Signup";
import Login from "../Auth/Login/Login";
import PrivateRoute from "../Auth/ProtectedRoute.jsx/AuthGuard";
import Dashboard from "../Dashboard/Dashboard";
import { useAuth } from "../Auth/AuthContext/AuthContext";

const Form = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <section id="form">
        {/* Public Routes */}
        <Routes>
          <Route path="/signup-form" element={<Signup />} />
          <Route path="/login-form" element={<Login />} />
          {/* Protected Route */}
          <Route
            path="/form/dashboard"
            element={
              <PrivateRoute>
                {" "}
                <Dashboard />{" "}
              </PrivateRoute>
            }
            isAuthenticated={isAuthenticated}
            title="FORMS"
            subtitle="Navigate to any form"
          />
        </Routes>
      </section>
    </>
  );
};

export default Form;
