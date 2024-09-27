import "../../../../App.css";

//TODO: Images
//Import all project images
import Weatherapp from "./Assets/weather-dashboard.png";
import JATEapp from "./Assets/JATE.png";
import SupperAndSipapp from "./Assets/Supper&Sip.png";
import SecondPlayapp from "./Assets/SecondPlay.png";
import BookSearchEngineApp from "./Assets/BookSearchEngine.png";
import EmployeeTrackerApp from "./Assets/EmployeeTracker.png";

export const recentsFiles = [
  {
    hexa: "var(--first-color)",
    title: "Weather Dashboard",
    description:
      "Weather dashboard is a simple web application that allows users to search for a city to get the current weather and 5 day forecast.",
    image: Weatherapp,
    repoLink: "https://github.com/aniraannu/weather-dashboard",
    deployedLink: "https://aniraannu.github.io/weather-dashboard/",
  },
  {
    hexa: "var(--first-color-lighter)",
    title: "J.A.T.E",
    description:
      "J.A.T.E is a Progressive Web Application (PWA) that runs in the browser, offline and can be installed locally to your machine",
    image: JATEapp,
    repoLink: "https://github.com/aniraannu/PWA-text-editor",
    deployedLink: "https://text-editor-6tq2.onrender.com/",
  },
  {
    hexa: "var(--first-color-alt)",
    title: "Supper And Sips",
    description:
      "The Random Recipe & Cocktail Generator is ideal for anyone who wants to try new but delicious recipes.Happy Cooking 👨🏻‍🍳",
    image: SupperAndSipapp,
    repoLink: "https://github.com/tjmcd2010/Supper-and-Sips",
    deployedLink: "https://tjmcd2010.github.io/Supper-and-Sips/",
  },
  //Second Row
  {
    hexa: "var(--first-color)",
    title: "SecondPlay",
    description:
      "This is a web application that allows users to sell their old gaming equipment and peripherals such as old playstations, XBOX consoles, Gameboys, controllers and games.",
    image: SecondPlayapp,
    repoLink: "https://github.com/ItsWillyNilly/Project-02-SecondPlay",
    deployedLink: "https://project-02-secondplay.onrender.com/",
  },
  {
    hexa: "var(--first-color-lighter)",
    title: "Search Engine for Books",
    description:
      "A React application that allows users to search for books using the Google Books API, save books to their account, and view their saved books.",
    image: BookSearchEngineApp,
    repoLink: "https://github.com/aniraannu/book-search-engine",
    deployedLink: "https://book-finder-m6ty.onrender.com/",
  },
  {
    hexa: "var(--first-color-alt)",
    title: "Employee Tracker",
    description:
      "A command-line application using Node.js, Inquirer, and PostgreSQL that dynamically updates and views a company's employee database.",
    image: EmployeeTrackerApp,
    repoLink: "https://github.com/aniraannu/employee-tracker",
  },
];
