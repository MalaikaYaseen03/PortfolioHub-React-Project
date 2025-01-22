import "./Projects.css";
const Projects = ({ title, subtitle, projects = [] }) => {
  return (
    <>
      {/* ======= Portfolio Section ======= */}
      {projects && (
        <section id="project" className="portfolio-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">{title}</h3>
                  <p className="subtitle-a">{subtitle} </p>
                  <div className="line-mf" />
                </div>
              </div>
            </div>
            <div className="row">
              {projects.map((project) => (
                <div className="col-md-4 col-sm-6" key={project._id}>
                  <div className="project-box">
                    {project.image && (
                      <div className="project-img">
                        <img
                          src={project.image}
                          alt="project"
                          className="img-fluid"
                          style={{
                            maxHeight: "100%",
                            maxWidth: "100%",
                            objectFit: "contain",
                            transition: "all 1s",
                          }}
                        />
                      </div>
                    )}

                    <div className="project-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="p-title">
                            <a href={project.url} target="blank">
                              {project.title}
                            </a>
                          </h2>
                          <div className="p-more">
                            <span className="p-ctegory">
                              {project.category}
                            </span>{" "}
                            / <span className="p-date">{project.date}</span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="p-like">
                            <span className="bi bi-plus-circle" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* End Portfolio Section */}
    </>
  );
};

export default Projects;
