import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer_sec">
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 logo_png_1">
              <img src="../images/Cybersify_newlogog.png" alt="" />
              <p>
                Get insider tips straight to your inbox, relate to the
                challenges other services teams face everyday,
              </p>

              <div className="social_links">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/profile.php?id=100095118732975"
                    >
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.instagram.com/cybersify_cloud_computing_/"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/Cybersifycloud"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/company/cybersify-cloud-computing-pvt-ltd/?originalSubdomain=in"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.pinterest.com/CybersifyCloud/"
                    >
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://wa.me/9501151756"
                    >
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <h5>Explore Links</h5>
              <ul className="footer_link">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Services</Link>
                </li>
                <li>
                  <Link to="/">Portfolio</Link>
                </li>
                <li>
                  <Link to="#">Team</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-6">
              <h5>Quick Links</h5>
              <ul className="footer_link">
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
                <li>
                  <Link to="#">Pricing</Link>
                </li>
                <li>
                  <Link to="#">FAQ</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-6 footer_link">
              <h5>Get in Touch</h5>
              <p>
                <span style={{ color: "#b6d736", fontWeight: "normal" }}>
                  Address:{" "}
                </span>
                D 264-265B Phase, Phase 8B, Cybersify Cloud Computing Pvt. ltd, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160074, IN
              </p>
              <p>
                <span style={{ color: "#b6d736", fontWeight: "normal" }}>
                  Phone:{" "}
                </span>{" "}
                : <a href="tel: 6283521702">+91 6283521702</a>
              </p>
              <p>
                <span style={{ color: "#b6d736", fontWeight: "normal" }}>
                  Email:{" "}
                </span>{" "}
                : <a href="mailto: info@cybersify.tech">info@cybersify.tech</a>
              </p>
            </div>
          </div>
          <div className="row footer_txt">
            <p>
              <i class="fa fa-copyright" aria-hidden="true"></i> All Copyright &
              Design by cybersify cloud computing.
            </p>
            <button
              className="btn-up"
              id="backtoTop"
              onClick={scrollToTop}
            ></button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
