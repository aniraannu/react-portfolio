//Import react
import React from "react";
//import icons
import { UilEnvelopeEdit } from "@iconscout/react-unicons";
//Contact function
function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container">
        <div className="contact__wrapper">
          <a href="mailto:aniraannu@gmail.com">
            <div className="contact__information">
              <UilEnvelopeEdit className="contact__icon" />

              <div>
                <h3 className="contact__title">Email Me</h3>
                <span className="contact__subtitle">aniraannu@gmail.com</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
