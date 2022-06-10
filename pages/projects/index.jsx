import { Box } from "@chakra-ui/react";

import { projectsLinks } from "../../lib/projectsLinks";

import styles from "./Projects.module.scss";
import ProjectCard from "../../src/components/ProjectCard/ProjectCard";

export const Projects = () => {
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
};

export default Projects;