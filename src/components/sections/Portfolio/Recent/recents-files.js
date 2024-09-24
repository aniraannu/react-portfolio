import "../../../../App.css";

//TODO: Images
import img from "./Assets/pp1.jpeg";
import img from "./Assets/pp2.jpeg";
import img from "./Assets/pp3.jpeg";
import img from "./Assets/pp4.jpeg";

//TODO: Routes
import route1 from "./Assets/pp1.pdf";
import route2 from "./Assets/pp2.pdf";
import route3 from "./Assets/pp3.pdf";
import route4 from "./Assets/pp4.pdf";

export const recentsFiles = [
  //
  {
    hexa: "var(--first-color)",
    title: "Project 1",
    description: "Description1",
    image: img,
    route: route1,
  },
  {
    hexa: "var(--first-color-lighter)",
    title: "Project 2",
    description: "Desc 2",
    image: img,
    route: route2,
  },
  {
    hexa: "var(--first-color-alt)",
    title: "Title 3",
    description: "Desc 3",
    image: img,
    route: route3,
  },
  //
  {
    hexa: "var(--first-color)",
    title: "Title 4",
    description: "Desc 4",
    image: img,
    route: route4,
  },
];
