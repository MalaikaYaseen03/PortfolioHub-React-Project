import ContactForm from "./ContactForm";
import "./Contact.css";

const Contact = ({ contact = [] }) => {
  return (
    <>
      {/* ======= Contact Section ======= */}
      {contact && (
        <section
          id="contact"
          className="paralax-mf footer-paralax bg-image sect-mt4 route"
          style={{ backgroundImage: "url(../assets/img/overlay-bg.jpg)" }}
        >
          <div className="overlay-mf" />
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="contact-mf">
                  <div id="contact" className="box-shadow-full">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="title-box-2">
                          <h5 className="title-left">Send Message Us</h5>
                        </div>
                        <div>
                          <ContactForm />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="title-box-2 pt-4 pt-md-0">
                          <h5 className="title-left">Get in Touch</h5>
                        </div>
                        {contact &&
                          contact.map((contact) => (
                            <div className="more-info" key={contact._id}>
                              <p className="lead">{contact.description}</p>
                              <ul className="list-ico">
                                <li>
                                  <span className="bi bi-geo-alt" />{" "}
                                  {contact.location}
                                </li>
                                <li>
                                  <span className="bi bi-phone" />
                                  {contact.number}
                                </li>
                                <li>
                                  <span className="bi bi-envelope" />
                                  {contact.email}{" "}
                                </li>
                              </ul>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* End Contact Section */}
    </>
  );
};

export default Contact;
