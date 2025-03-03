import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./LoginValidation";

import "./Login.css";

const Login = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

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
                <form noValidate>
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
                    <button className="login-button" type="submit">
                      Login
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
