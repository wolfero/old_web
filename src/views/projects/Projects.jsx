import { Box, Container, Input } from "@chakra-ui/react";

import styles from "./Projects.module.scss";

import { projectsLinks } from "../../../data/projectsLinks";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export const Projects = () => {
    return (
        <Container className={styles.Projects} maxW={"full"} p="20">
            <Box className={styles.Gallery}>
                {projectsLinks.map(({ name, webLink, githubLink, image }) => (
                    <ProjectCard
                        key={name}
                        title={name}
                        githubLink={githubLink}
                        webLink={webLink}
                        image={image}
                    ></ProjectCard>
                ))}
            </Box>
        </Container>
    );
};

export default Projects;
