import { Fragment } from "react";
import { Zoom } from "@mui/material";
import Card from "../../../card/Card.jsx";
import { testingFiles } from "./testing-files.js";

function Testing() {
  return (
    <Fragment>
      <div className="portfolio__sections">
        {testingFiles.map((website, index) => (
          <Zoom in={true} timeout={700} key={index}>
            <a
              href={website.repoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                key={website.description}
                hexa={website.hexa}
                title={website.title}
                description={website.description}
                image={website.image}
              />
            </a>
          </Zoom>
        ))}
      </div>
    </Fragment>
  );
}

export default Testing;
