//import react
import React from "react";
//import icons
import { UilInstagram, UilLinkedinAlt } from "@iconscout/react-unicons";
//Footer component
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">
              <a href="#home" className="footer__title">
                Anira
              </a>
            </h1>
            <span className="footer__subtitle">
              Software Developer, Senior Software Tester
            </span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="footer__link">
                Skills
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="www.linkedin.com/in/anira-raveendran"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <UilLinkedinAlt className="" />
            </a>
            <a
              href="https://www.instagram.com/_beyond_my_thoughtz_/?igsh=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <UilInstagram className="" />
            </a>
          </div>
        </div>

        <a href="mailto:aniraannu@gmail.com">
          <p className="footer__copy">
            Made by Anira Raveendran&#174; All right reserved
          </p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
