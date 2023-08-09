import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();

  return (
    <div>
      <div>
        <>
          <nav
            style={{ paddingTop: "10px" }}
            className="navbar navbar-expand-lg nav_header justify-content-between"
            id="negivation"
          >
            {location.pathname === `/Services` ||
            location.pathname === `/Contact_page` ||
            location.pathname === `/Portfolio` ? (
              <Link className="navbar-brand logo_png" to="/">
                <img
                  src="../images/Cybersify_newlogoBLACK-1.png"
                  alt="BigCo Inc. logo"
                />
              </Link>
            ) : (
              <Link className="navbar-brand logo_png" to="/">
                <img
                  src="../images/Cybersify_newlogog.png"
                  alt="BigCo Inc. logo"
                />
              </Link>
            )}

            {/* {location.pathname === `Services` && */}

            {/* <a className="navbar-brand logo_png" href="#"><img src="/images/serivce_logo.png" alt="BigCo Inc. logo" /></a> */}

            {/* } */}

            <button className="navbar-toggler" type="button">
              <span>
                {/* <i className="fa fa-bars navbar-toggler-icon"></i> */}
              </span>
            </button>

            <div id="navbarSupportedContent">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  {/* <NavLink exact activeClassName="navbar__link--active" className="nav-link" to="/">Explore</NavLink> */}
                  <NavLink
                    exact
                    activeClassName="navbar__link--active"
                    className="nav-link"
                    to="/"
                  >
                    Home<span class="sr-only">(current)</span>
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="navbar__link--active"
                    className="nav-link"
                    to="/about-us"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="navbar__link--active"
                    className="nav-link"
                    to="/services"
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="navbar__link--active"
                    className="nav-link"
                    to="/portfolio"
                  >
                    Our Portfolio
                  </NavLink>
                </li>
                <li className="btn-header">
                  <button type="button" className="btn-nav">
                    <NavLink
                      exact
                      activeClassName="navbar__link--active"
                      className="nav-link"
                      to="/contact-us"
                    >
                      Contact Us
                    </NavLink>
                  </button>
                </li> */}
              </ul>
              <span className="close_button"></span>
            </div>
          </nav>
        </>
      </div>
    </div>
  );
}

export default Header;
