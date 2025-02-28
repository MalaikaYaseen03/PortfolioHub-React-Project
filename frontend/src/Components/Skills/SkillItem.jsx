// TermItem.js
import React from "react";

const SkillItem = ({ skill = [] }) => {
  return (
    <div className="skill-item">
      <section id="skills" className="skills-mf route">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-box">
                <div className="skill-content">
                  <div className="d-flex justify-content-between">
                    <div className="content">
                      <span>{skill.name}</span>{" "}
                      <span className="pull-right">{skill.proficiency}%</span>
                    </div>
                  </div>

                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${skill.proficiency}%` }}
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillItem;
