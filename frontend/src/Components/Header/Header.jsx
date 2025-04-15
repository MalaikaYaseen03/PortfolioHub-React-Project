import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  //  state for setting class on scroll of page
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // function to set the scroll state for scrolling behaviour of page
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // adds event on scroll of webpage
    window.addEventListener("scroll", handleScroll);

    // cleanup function to remove event on scroll of webpage
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/#about", label: "About" },
    { to: "/#services", label: "Services" },
    { to: "/#work", label: "Work" },
    { to: "/#certifications", label: "Certifications" },
    { to: "/#contact", label: "Contact" },
  ];
  const isActiveLink = (link) => {
    const linkHash = link.split("#")[1] ? `#${link.split("#")[1]}` : null;
    // Check if the location's hash matches the link hash or location's pathname matches the link
    // if one is true, the result will be true
    return location.hash === linkHash || location.pathname === link;
  };
  return (
    <>
      {/* Header for user portal */}
      <header
        id="header"
        // if isScrolled is true, add the classname to 'header-scrolled' to apply css
        className={`fixed-top ${isScrolled ? "header-scrolled" : ""}`}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <Link to="/" target="_blank">
              PortfolioHub
            </Link>
          </h1>
          <nav id="navbar" className="navbar">
            {/*uses map function to display links to be shown on the header at once*/}
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  {/* Adding 'active classname if the current link is active in the url bar to apply css for active links' */}
                  <Link
                    className={`nav-link ${
                      isActiveLink(link.to) ? "active" : ""
                    }`}
                    smooth
                    to={link.to}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* <li className="dropdown nav-link">
                  {isAuthenticated && user ? (
                    <>
                      <a href="/" onClick={preventRefresh}>
                        <span>{user.username}</span>
                        <i className="bi bi-chevron-down" />
                      </a>
                      <ul>
                        <li>
                          <Link smooth to="/" onClick={onLogout}>
                            Log Out
                          </Link>
                        </li>
                        {isAdminPage ? (
                          <li>
                            <Link smooth to="/">
                              Go to User Portal
                            </Link>
                          </li>
                        ) : (
                          <li>
                            <Link smooth to="/form/dashboard">
                              Go to Admin Portal
                            </Link>
                          </li>
                        )}
                      </ul>
                    </>
                  ) : (
                    <>
                      <a href="/" onClick={preventRefresh}>
                        <span>Register</span>
                        <i className="bi bi-chevron-down" />
                      </a>
                      <ul>
                        <li>
                          <Link smooth to="/form/login-form">
                            Log in
                          </Link>
                        </li>
                      </ul>
                    </>
                  )}
                </li> */}
            </ul>
            {/* toggle for mobile navigation */}
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* .navbar */}
        </div>
      </header>
    </>
  );
};

export default Header;
