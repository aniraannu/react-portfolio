//Importing skills
import React from "react";
//Skills component
function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Areas of expertise</h2>
      <span className="section__subtitle">Services</span>

      <div className="skills__container container grid">
        <div>
          {/* <!-Software Development skills-> */}
          <div className="skills__content">
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Full Stack Development</h3>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__entoes"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">
                    Node.js, React, Express, MongoDB & GraphQL
                  </h3>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__transc"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">
                    RESTful API Design and Integration
                  </h3>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__transc"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">
                    Responsive Web Design and Development
                  </h3>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__transc"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">
                    Version Control (Git, GitHub)
                  </h3>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__transc"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">
                    Unit Testing and Test-Driven Development (TDD)
                  </h3>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__transc"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-Software testing-> */}
        <div>
          <div className="skills__list grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Manual and Automation Testing</h3>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__editing"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Performance and Load Testing</h3>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__editing"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Test Case Design and Execution</h3>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__proof"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Agile, waterfall and V-model</h3>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__adapt"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Automation framework(Selenium)</h3>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__adapt"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">
                  Test Management Tools (JIRA, TestRail)
                </h3>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__adapt"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills;
