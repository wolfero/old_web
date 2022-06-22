import { Box, Container, Heading } from "@chakra-ui/react";

import styles from "./Projects.module.scss";

import { projectsLinks } from "../../../data/projectsLinks";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export const Projects = () => {
    return (
        <Container className={styles.Projects} maxW={"full"} px={"20"} py={"5"}>
            <Box className={styles.Gallery}>
                <Heading textAlign={"center"}>🚧 In development</Heading>
                {projectsLinks.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </Box>
        </Container>
    );
};

export default Projects;
