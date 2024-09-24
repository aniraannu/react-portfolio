//Image for the About section
import AboutImg from "../images/about.webp";
//TODO : Resume in PDF format
import AniraCV from "../assets/aniraraveendrancv.pdf";
//import icons
import { UilDownloadAlt } from "@iconscout/react-unicons";

//About function
function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">Let me introduce myself</span>

      <div className="about__container container">
        <div className="about__data">
          <img src={AboutImg} alt="" className="about__img" />
          <p className="about__description">
            Anira Raveendran is a passionate and dedicated software engineer.
          </p>

          {/* <div className="about__info">
                    <div>
                        <span className="about__info-title">15+</span>
                        <span className="about__info-name">Years <br/> experience</span>
                    </div>
                    
                    <div>
                        <span className="about__info-title">15+</span>
                        <span className="about__info-name">Years <br/> experience</span>
                    </div>

                    <div>
                        <span className="about__info-title">15+</span>
                        <span className="about__info-name">Years <br/> experience</span>
                    </div>
                </div> */}

          <div className="about__buttons">
            <a
              download="aniraraveendrancv"
              href={AniraCV}
              className="button button--flex"
            >
              Download CV
              <UilDownloadAlt className="button__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
