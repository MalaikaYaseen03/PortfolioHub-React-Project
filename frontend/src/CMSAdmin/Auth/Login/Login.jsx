import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./LoginValidation";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";
import { useAuth } from "../AuthContext/AuthContext";
import { auth } from "../../../Config/FirebaseConfig";

const Login = () => {
  const { onLogin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate(); // for programmatic navigation
  const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8080";
  const [isSubmitting, setIsSubmitting] = useState(false);

  // console.log("Login component received onLogin prop:", onLogin);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Attempt to sign in the user with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const firebaseUser = userCredential.user;

      // Get the ID token
      const firebaseToken = await firebaseUser.getIdToken();
      // console.log("firebasetoken", firebaseToken);
      const response = await fetch(`${API_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firebaseToken, email: data.email }),
      });

      const result = await response.json();

      if (response.ok) {
        // Handle successful login
        const loggedInUser = result.User;
        onLogin(loggedInUser, result.accessToken, true);
        toast.success("User Logged In Successfully");
        reset();
        navigate.push("/form/dashboard");
      } else {
        // Handle backend validation errors
        toast.error(result.error || "An error occurred.");
      }
    } catch (error) {
      // General error message
      toast.error("Error logging in. Please check your credentials.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section
        id="login-form"
        className="login-form form bg-image"
        style={{ backgroundImage: "url(../assets/img/overlay-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="login-container">
              <div className="col-12">
                <h2>Login</h2>
              </div>
              <div className="col-12">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  {/* {error && <p className="error-message">{error}</p>} */}
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      autoComplete="on"
                      className="form-control"
                      {...register("email")}
                      placeholder="Email"
                      required
                    />
                  </div>
                  {errors.email && (
                    <p className="error-message">{errors.email.message}</p>
                  )}

                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      autoComplete="off"
                      className="form-control"
                      {...register("password")}
                      placeholder="Enter Password"
                      required
                    />
                  </div>
                  {errors.password && (
                    <p className="error-message">{errors.password.message}</p>
                  )}

                  <div className="pwd">
                    <button
                      className="login-button"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Logging In..." : "Login"}
                    </button>
                    <p className="forget-link">
                      <Link to="/form/forget-form">Forgot Password?</Link>
                    </p>
                  </div>

                  <div className="signup-link text-center">
                    <Link to="/form/signup-form">New User? SignUp</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
