import { Fragment } from "react";
import { Zoom } from "@mui/material";
import Card from "../../../card/Card.jsx";
import { developmentFiles } from "./development-files.js";

function Development() {
  return (
    <Fragment>
      <div className="portfolio__sections">
        {developmentFiles.map((website, index) => (
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

export default Development;
