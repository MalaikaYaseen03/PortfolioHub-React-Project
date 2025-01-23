import { Link } from "react-router-dom";
import "./Certifications.css";
const Certifications = ({ title, subtitle, certifications = [] }) => {
  return (
    <>
      {/* ======= Certifications Section ======= */}
      {certifications && (
        <section id="certifications" className="blog-mf sect-pt4 route pt-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">{title}</h3>
                  <p className="subtitle-a">{subtitle}</p>
                  <div className="line-mf" />
                </div>
              </div>
            </div>
            <div className="row">
              {certifications.map((certification) => (
                <div
                  className="col-lg-4 col-sm-6 card-box"
                  key={certification._id}
                >
                  <div className="card card-certification">
                    {certification.image && (
                      <div className="card-img">
                        <img
                          src={certification.image}
                          alt="certification"
                          className="img-fluid"
                          style={{
                            maxHeight: "100%",
                            maxWidth: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    )}

                    <div className="card-body">
                      <div className="card-category-box">
                        <div className="card-category">
                          <h6 className="category">{certification.category}</h6>
                        </div>
                      </div>
                      <Link to={`/certifications/${certification._id}`}>
                        <h3 className="card-title">{certification.title}</h3>
                      </Link>
                      <p className="card-description">
                        {certification.description}
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="post-author">
                        {certification.authorImage && (
                          <div>
                            <img
                              src={certification.authorImage}
                              alt=""
                              className="avatar rounded-circle"
                            />
                          </div>
                        )}

                        <span className="author">{certification.name}</span>
                      </div>
                      <div className="post-date">
                        <span className="bi bi-clock" /> {certification.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/*End Certifications Section */}
    </>
  );
};
export default Certifications;
