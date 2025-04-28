import { useEffect } from "react";
import "./Testimonials.css";
import Swiper from "swiper/bundle";

const Testimonial = ({ testimonials = [] }) => {
  /**
   * Testimonials slider
   */
  useEffect(() => {
    if (testimonials) {
      new Swiper(".testimonials-slider", {
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      });
    }
  }, [testimonials]);

  return (
    <>
      {/* ======= Testimonials Section ======= */}
      {testimonials && (
        <div
          id="testimonial"
          className="testimonials paralax-mf bg-image"
          style={{ backgroundImage: "url(../assets/img/overlay-bg.jpg)" }}
        >
          <div className="overlay-mf" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="testimonials-slider swiper"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="swiper-wrapper">
                    {testimonials.map((testimonial) => (
                      <div className="swiper-slide" key={testimonial._id}>
                        <div className="testimonial-box">
                          <div className="author-test">
                            {testimonial.img && (
                              <div>
                                <img
                                  src={testimonial.img}
                                  alt=""
                                  className="rounded-circle b-shadow-a author-img"
                                />
                              </div>
                            )}

                            <span className="author"> {testimonial.name} </span>
                          </div>
                          <div className="content-test">
                            <p className="description lead">
                              {testimonial.description}{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="swiper-pagination" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* End Testimonials Section */}
    </>
  );
};

export default Testimonial;
