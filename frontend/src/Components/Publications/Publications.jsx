import React from "react";
import "./Publications.css";

const Publications = ({ publications = [] }) => {
  // console.log("publications in home", publications);

  return (
    <>
      <section id="section" className="section-mf route">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-container">
                {publications &&
                  publications.map((publication) => (
                    <div key={publication._id}>
                      <div className="row">
                        <div className="col-9">
                          <div className="section-title title-box-2 d-flex justify-content-between">
                            <h5>{publication.title}</h5>
                          </div>
                        </div>
                        <div className="col-3"></div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="section-content">
                            {publication.content}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Publications;
