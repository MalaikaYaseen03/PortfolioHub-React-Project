import { Link } from "react-router-dom";
import "./Dashboard.css";
import useFetch from "../../Components/CustomHook/useFetch";

const Dashboard = () => {
  const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8080";
  // console.log("API_URL:", API_URL);
  const {
    data: formsList,
    error,
    isPending,
  } = useFetch(`${API_URL}/api/dashboard`);
  // console.log("Form List:", formsList);

  return (
    <>
      {formsList && (
        <section id="dashboard">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">FORMS</h3>
                  <p className="subtitle-a">
                    Navigate to Any Form With Just One Tap
                  </p>
                  <div className="line-mf" />
                </div>
              </div>
            </div>
            <div className="row">
              {formsList.map((formItem) => (
                <div className="col-md-4" key={formItem._id}>
                  <Link to={formItem.link}>
                    <div className="service-box anime-box">
                      <div className="service-ico">
                        <span className="ico-circle">
                          <i className={formItem.Icon} />
                        </span>
                      </div>
                      <div className="service-content">
                        <h2 className="s-title">{formItem.Title}</h2>
                        <p className="s-description text-center form-link">
                          <span className="link-item">
                            {formItem.Description}
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Dashboard;
