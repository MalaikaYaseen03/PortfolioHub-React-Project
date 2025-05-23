import "./Services.css";
const Services = ({ title, subtitle, services = [] }) => {
  return (
    <>
      {/* ======= Services Section ======= */}
      {services && (
        <section id="services" className="services-mf pt-5 route">
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
              {services.map((service) => (
                <div className="col-md-4" key={service._id}>
                  <div className="service-box">
                    {service.icon && (
                      <div className="service-ico">
                        <span className="ico-circle">
                          <i className={service.icon} />
                        </span>
                      </div>
                    )}

                    <div className="service-content">
                      <h2 className="s-title">{service.title}</h2>
                      <p className="s-description text-center">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* End Services Section */}
    </>
  );
};

export default Services;
