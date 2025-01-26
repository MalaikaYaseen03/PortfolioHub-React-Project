import React from "react";

function ContactForm() {
  return (
    <>
      <section>
        <form>
          <div className="row">
            <div className="col-md-12 mb-3">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your Name"
                  autoComplete="on"
                />
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  autoComplete="on"
                />
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message"
                />
              </div>
            </div>

            <div className="col-md-12 text-center">
              <button
                type="submit"
                className="button button-a button-big button-rouded mt-4"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
export default ContactForm;
