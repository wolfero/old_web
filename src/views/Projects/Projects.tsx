import { Box, Container, Heading } from "@chakra-ui/react";

import { projectsLinks } from "../../../data/projectsLinks";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import styles from "./Projects.module.scss";

export const Projects = () => {
    return (
        <Container className={styles.Projects} maxW={"full"} px={"20"} py={"5"}>
            <Heading textAlign={"center"}>🚧 In development</Heading>
            <Box className={styles.Gallery}>
                {projectsLinks.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </Box>
        </Container>
    );
};

export default Projects;
