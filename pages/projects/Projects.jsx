import { Box, Link } from "@chakra-ui/react";

import projectsLinks from "./projectsLinks";

import styles from "./Projects.module.scss";
import ProjectCard from "../../src/components/ProjectCard/ProjectCard";

function Projects() {
    return (
        <Box>
            {projectsLinks.map(({ name, webLink, githubLink }) => (
                <ProjectCard
                    key={name}
                    title={name}
                    githubLink={githubLink}
                    webLink={webLink}
                ></ProjectCard>
            ))}
        </Box>
    );
}

export default Projects;
