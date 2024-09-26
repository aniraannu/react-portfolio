import { FaGithub } from "react-icons/fa";

const Project = ({ title, image, deployedLink, repoLink }) => {
  return (
    <div className="project-card">
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        <h3 className="project-title">{title}</h3>
      </a>
      <a
        href={repoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="repo-link"
      >
        <FaGithub size={30} />
      </a>
      <img src={image} alt={title} className="project-image" />
    </div>
  );
};

export default Project;
