import { Link } from "react-router-dom";
import "./Signup.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./SignupValidation";

const Signup = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <>
      {/* SIGNUP FORM */}
      <section
        id="signup-form"
        className="signup-form form bg-image"
        style={{ backgroundImage: "url(../assets/img/overlay-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="signup-container">
              <div className="col-12">
                <h2>SignUp</h2>
              </div>
              <div className="col-12">
                <form noValidate>
                  <div className="form-group">
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      {...register("username")}
                      placeholder="Username"
                      required
                    />
                  </div>
                  {errors.username && (
                    <p className="error-message">{errors.username.message}</p>
                  )}

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
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
                      className="form-control"
                      autoComplete="off"
                      {...register("password")}
                      placeholder="Create Password"
                      required
                    />
                  </div>
                  {errors.password && (
                    <p className="error-message">{errors.password.message}</p>
                  )}

                  <div className="from-group">
                    <input
                      type="password"
                      name="confirmPassword"
                      autoComplete="off"
                      className="form-control"
                      {...register("confirmPassword")}
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                  {errors.confirmPassword && (
                    <p className="error-message">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                  <div className="TandC">
                    <input
                      type="checkbox"
                      id="TandC"
                      name="TandC"
                      {...register("TandC")}
                      className="mx-2"
                      required
                    />
                    <Link to="/termsandconditions">
                      <label htmlFor="TandC">
                        Agree to the Terms and Condtions
                      </label>
                    </Link>
                  </div>
                  {errors.TandC && (
                    <p className="error-message">{errors.TandC.message}</p>
                  )}
                  <div className="sign">
                    <button className="signup-button" type="submit">
                      Signup
                    </button>
                  </div>
                  <div className="log">
                    <Link to="/form/login-form">
                      Already have an account? Login
                    </Link>
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

export default Signup;
