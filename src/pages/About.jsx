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
            Hello! I’m a passionate software developer with a diverse background
            in software testing and engineering. With over 6 years of experience
            in software testing—spanning manual and automation techniques—I have
            a deep understanding of the software development lifecycle (SDLC)
            across various methodologies, including Waterfall, V-Model, and
            Agile. Having recently completed a Full Stack Development Bootcamp
            at UC Berkeley Extension, I am excited to transition into a software
            development role. My technical skills include building full-stack
            applications using Node.js, React, Express, MongoDB, and GraphQL. I
            am dedicated to crafting efficient, user-friendly solutions that
            solve real-world problems. My academic foundation in Civil
            Engineering, complemented by a Master’s in Structural Engineering,
            equips me with a unique analytical perspective and strong
            problem-solving abilities. I thrive on collaboration and am eager to
            contribute my diverse skill set to a dynamic and innovative team. I
            look forward to connecting with forward-thinking organizations where
            I can leverage my experience and enthusiasm for software
            development!
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
