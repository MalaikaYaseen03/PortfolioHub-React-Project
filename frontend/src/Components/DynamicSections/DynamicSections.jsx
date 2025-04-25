import React from "react";
import "./DynamicSections.css";

const DynamicSections = ({ dynamicSections = [] }) => {
  // console.log("publications in home", publications);

  return (
    <>
      {dynamicSections &&
        dynamicSections.map((dynamicSection) => (
          <section
            id="section"
            className="section-mf route"
            key={dynamicSection._id}
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="title-box text-center">
                    <h3 className="title-a">{dynamicSection.title}</h3>
                    <div className="line-mf" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="section-container">
                    <div className="row">
                      <div className="col-12">
                        <div className="section-content">
                          {dynamicSection.content}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
    </>
  );
};

export default DynamicSections;
