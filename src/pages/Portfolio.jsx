import Project from "../components/project/Project";
//Import all project images
import Weatherapp from "../assets/weather-dashboard.png";
import JATEapp from "../assets/JATE.png";
import SupperAndSipapp from "../assets/Supper&Sip.png";
import SecondPlayapp from "../assets/SecondPlay.png";
import BookSearchEngineApp from "../assets/BookSearchEngine.png";
import EmployeeTrackerApp from "../assets/EmployeeTracker.png";

function Portfolio() {
  const projects = [
    {
      title: "Weather Dashboard",
      description: "Description for Project 1",
      image: Weatherapp,
      link: "A simple web application that allows users to search for a city to get the current weather and 5 day forecast. Cities that users previously looked up will be saved in their local storage.",
      repoLink: "https://github.com/aniraannu/weather-dashboard",
      deployedLink: "https://aniraannu.github.io/weather-dashboard/",
    },
    {
      title: "J.A.T.E",
      description:
        "J.A.T.E is a Progressive Web Application (PWA) that runs in the browser, offline and can be installed locally to your machine",
      image: JATEapp,
      repoLink: "https://github.com/aniraannu/PWA-text-editor",
      deployedLink: "https://text-editor-6tq2.onrender.com/",
    },
    {
      title: "Supper And Sips",
      description:
        "An app to randomly choose dinner and drink recipes. The Random Recipe & Cocktail Generator is ideal for anyone who wants to try new but delicious recipes. With a range of different recipes to choose from, this generator has something for everyone. Happy Cooking 👨🏻‍🍳",
      image: SupperAndSipapp,
      repoLink: "https://github.com/tjmcd2010/Supper-and-Sips",
      deployedLink: "https://tjmcd2010.github.io/Supper-and-Sips/",
    },
    {
      title: "SecondPlay",
      description:
        "This is a web application that allows users to sell their old gaming equipment and peripherals such as old playstations, XBOX consoles, Gameboys, controllers and games.",
      image: SecondPlayapp,
      repoLink: "https://github.com/ItsWillyNilly/Project-02-SecondPlay",
      deployedLink: "https://project-02-secondplay.onrender.com/",
    },
    {
      title: "Search Engine for Books",
      description:
        "A React application that allows users to search for books using the Google Books API, save books to their account, and view their saved books. It leverages React Bootstrap for UI components and Apollo Client for interacting with a GraphQL API.",
      image: BookSearchEngineApp,
      repoLink: "https://github.com/aniraannu/book-search-engine",
      deployedLink: "https://book-finder-m6ty.onrender.com/",
    },
    {
      title: "Employee Tracker",
      description:
        "A command-line application using Node.js, Inquirer, and PostgreSQL that dynamically updates and views a company's employee database.",
      image: EmployeeTrackerApp,
      repoLink: "https://github.com/aniraannu/employee-tracker",
    },
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Career Profile</h2>
      <span className="section__subtitle">My work</span>

      <div className="portfolio__container container">
        <div className="portfolio">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              image={project.image}
              deployedLink={project.deployedLink}
              repoLink={project.repoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
