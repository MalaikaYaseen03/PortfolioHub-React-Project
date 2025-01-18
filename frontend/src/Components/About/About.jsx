import "./About.css";

const About = ({ about = [] }) => {
  return (
    <>
      {/* About Section */}
      {about && (
        <section id="about" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      {about.map((item) => (
                        <div className="row" key={item._id}>
                          {item.img && (
                            <div className="col-sm-6 col-md-5">
                              <div className="about-img">
                                <img
                                  src={item.img}
                                  className="img-fluid rounded b-shadow-a"
                                  alt="Profile"
                                />
                              </div>
                            </div>
                          )}
                          <div className="col-sm-6 col-md-7">
                            <div className="about-info">
                              <p>
                                <span className="title-s">Name: </span>{" "}
                                {item.name}
                              </p>
                              <p>
                                <span className="title-s">Occupation: </span>{" "}
                                {item.occupation}
                              </p>
                              <p>
                                <span className="title-s">Email: </span>{" "}
                                {item.email}
                              </p>
                              <p>
                                <span className="title-s">Phone Num: </span>{" "}
                                {item.phoneNum}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {about.map((item) => (
                      <div className="col-md-6" key={item._id}>
                        <div className="about-me pt-4 pt-md-0">
                          <div className="title-box-2 d-flex justify-content-between">
                            <h5 className="title-left">About</h5>
                          </div>
                          <p className="lead">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default About;
