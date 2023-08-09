import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
// import Services from "./services";
import Header from "../header";
// import Innovation from "./innovation";
import Footer from "./Footer";
// import Portfolio from "./Portfolio";
// import { Link } from "react-router-dom";
// import Headejquery from "./header-1";

function Termcondition() {
  useEffect(() => {
    document.title = 'Terms & Condition | Cybersify Cloud Computing';
}, []);
  return (
    <>
      <div className="Privacy_policyheader">
        <Container>
          <Header />
        </Container>
      </div>
      <section className="privacy_policy">
        <Container>
          <h1>Terms &amp; Conditions</h1>
          <h3>Collection of Personal Information</h3>
          <p>
            We collect personal information from visitors to our website when
            they submit a contact form, sign up for our newsletter, or request a
            quote. The types of personal information we collect may include
            name, email address, phone number, and any additional information
            that you voluntarily provide to us.
          </p>
          <h3>Use of Personal Information</h3>
          <p>
            We use the personal information that we collect to respond to
            inquiries, provide services, and send marketing communications. We
            may also use personal information to analyze website usage and
            improve website functionality.
          </p>
          <h3>Sharing of Personal Information</h3>
          <p>
            We do not share personal information with third parties except as
            necessary to provide services, such as subcontractors or service
            providers. We may also share personal information if required by law
            or to protect our legal rights.
          </p>
          <h3>Security</h3>
          <p>
            We take reasonable measures to protect personal information from
            unauthorized access, disclosure, or misuse. We use encryption,
            firewalls, and access controls to secure personal information.
          </p>
          <h3>Data Retention</h3>
          <p>
            We retain personal information for as long as necessary to provide
            services, respond to inquiries, and comply with legal obligations.
            We may also retain personal information for a reasonable period for
            business purposes, such as to analyze website usage.
          </p>
          <h3>User Rights</h3>
          <p>
            Users have the right to access, correct, or delete their personal
            information. Users may also request to restrict or object to the
            processing of their personal information. To exercise these rights,
            please contact us using the information provided below.
          </p>
          <h3>Cookies and Tracking Technologies</h3>
          <p>
            We may use cookies or other tracking technologies on our website to
            improve website functionality or personalize user experience. Users
            may choose to disable cookies in their web browser settings.
          </p>
          <h3>Legal Basis for Processing</h3>
          <p>
            We process personal information based on user consent or our
            legitimate interests, such as providing services, responding to
            inquiries, and improving website functionality.
          </p>
          <h3>Changes to Privacy Policy</h3>
          <p>
            We may update this privacy policy from time to time. We will notify
            users of any changes to the privacy policy and provide the effective
            date of the policy.
          </p>
        </Container>
      </section>
      <div className="whattodo">
        <Footer />
      </div>
    </>
  );
}

export default Termcondition;
