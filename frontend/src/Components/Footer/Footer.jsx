import { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { toggleBacktotop, scrollToTop } from "./Footer";

const Footer = () => {
  useEffect(() => {
    // adds event on load and scroll
    window.addEventListener("load", toggleBacktotop);
    window.addEventListener("scroll", toggleBacktotop);

    // cleanup function to remove event on load and scroll
    return () => {
      window.removeEventListener("load", toggleBacktotop);
      window.removeEventListener("scroll", toggleBacktotop);
    };
  }, []);

  return (
    <>
      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
                <p className="copyright">
                  © Copyright <strong>PortfolioHub</strong>. All Rights Reserved
                </p>
                <div className="credits">
                  Designed by <Link to="/">PortfolioHub</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End  Footer */}
      {/*Back to top button*/}
      <Link
        to="/"
        className="back-to-top d-flex align-items-center justify-content-center"
        onClick={scrollToTop}
      >
        <i className="bi bi-arrow-up-short"></i>
      </Link>
    </>
  );
};

export default Footer;
