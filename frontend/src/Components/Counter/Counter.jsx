import React, { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";
import "./Counter.css";
const Counter = ({ counter = [] }) => {
  /**
   * Initiate Pure Counter
   */
  useEffect(() => {
    if (counter) {
      new PureCounter();
    }
  }, [counter]);

  return (
    <>
      {/* ======= Counter Section ======= */}
      {counter && (
        <div
          id="counter"
          className="section-counter paralax-mf bg-image"
          style={{ backgroundImage: "url(../assets/img/counters-bg.jpg)" }}
        >
          <div className="overlay-mf" />
          <div className="container position-relative">
            <div className="row">
              {counter.map((count) => (
                <div className="col-sm-3 col-lg-3" key={count._id}>
                  <div className="counter-box counter-box pt-4 pt-md-0">
                    {count.icon && (
                      <div className="counter-ico">
                        <span className="ico-circle">
                          <i className={count.icon} />
                        </span>
                      </div>
                    )}

                    <div className="counter-num">
                      <p
                        data-purecounter-start={0}
                        data-purecounter-end={count.counterEnd}
                        data-purecounter-duration={1}
                        className="counter purecounter"
                      />
                      <span className="counter-text text-uppercase">
                        {" "}
                        {count.text}{" "}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* End Counter Section */}
    </>
  );
};

export default Counter;
