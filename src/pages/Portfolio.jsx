import { useState } from "react";
import Recents from "../components/sections/Portfolio/Recents/Recents";
import Development from "../components/sections/Portfolio/Development/Development";
import Testing from "../components/sections/Portfolio/Testing/Testing";

function Portfolio() {
  const [categoryArray, setCategoryArray] = useState({
    recents: true,
    development: false,
    testing: false,
  });
  // name = selected categ
  const handleClick = (name) => {
    let categoryAux = {
      recents: false,
      development: false,
      testing: false,
    };
    if (!name) {
      setCategoryArray(categoryAux);
    } else {
      setCategoryArray({
        ...categoryAux,
        [name]: true,
      });
    }
  };

  let currentCategory = Object.keys(categoryArray).filter(function (category) {
    return categoryArray[category];
  });

  let renderCurrentCategory = () => {
    switch (currentCategory.toString()) {
      case "recents":
        return <Recents />;
      case "development":
        return <Development />;
      case "testing":
        return <Testing />;
      default:
        console.error("No Funciona to render in this category");
        break;
    }
  };

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Career Profile</h2>
      <span className="section__subtitle">My work</span>

      <div className="portfolio__container container">
        <div className="portfolio__tabs">
          <div
            className="portfolio__button button--flex"
            onClick={() => handleClick("recents")}
            style={{
              color: categoryArray.recents ? "white" : "",
              backgroundColor: categoryArray.recents
                ? "var(--first-color)"
                : "",
            }}
          >
            Recents
          </div>
          <div
            className="portfolio__button button--flex"
            onClick={() => handleClick("development")}
            style={{
              color: categoryArray.development ? "white" : "",
              backgroundColor: categoryArray.development
                ? "var(--first-color)"
                : "",
            }}
          >
            Development
          </div>
          <div
            className="portfolio__button button--flex"
            onClick={() => handleClick("testing")}
            style={{
              color: categoryArray.testing ? "white" : "",
              backgroundColor: categoryArray.testing
                ? "var(--first-color)"
                : "",
            }}
          >
            Testing
          </div>
        </div>

        {renderCurrentCategory()}
      </div>
    </section>
  );
}

export default Portfolio;
