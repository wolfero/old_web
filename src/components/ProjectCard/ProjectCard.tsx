import {
    Box,
    Button,
    Heading,
    Image,
    Link,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";

import { ProjectCardProps } from "../../model/ProjectCard/projectCard";
import theme from "../../theme/index";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ project }: ProjectCardProps) => {
    const imageUrl = project.image ? project.image : "/assets/default.png";
    const [lightMode, darkMode]: string[] = [
        theme.colorsTags.white,
        theme.colorsTags.black,
    ];

    const colorMode = (color1: string, color2: string) => {
        return useColorModeValue(color1, color2);
    };

    return (
        <Box
            className={styles.Card}
            bg={useColorModeValue(darkMode, lightMode)}
            color={useColorModeValue(lightMode, darkMode)}
        >
            <Box className={styles.FotoBox} bg="blue.500">
                <Image
                    className={styles.Foto}
                    src={imageUrl}
                    alt={project.name}
                />
            </Box>
            <Box className={styles.Content}>
                <Heading as={"h3"} size={"lg"} className={styles.Title}>
                    {project.name}
                </Heading>
                <Box as="p" className={styles.Description}>
                    {project.description}
                </Box>
                <Stack className={styles.Buttons}>
                    {project.githubLink ? (
                        <Link href={project.githubLink}>
                            <Button
                                fontSize={"sm"}
                                bg="red.500"
                                _hover={{
                                    bg: "red.400",
                                }}
                                _active={{
                                    bg: colorMode(lightMode, darkMode),
                                    color: colorMode(darkMode, lightMode),
                                }}
                            >
                                In Github
                            </Button>
                        </Link>
                    ) : null}
                    {project.webLink ? (
                        <Link href={project.webLink}>
                            <Button
                                fontSize={"sm"}
                                bg={"blue.500"}
                                _hover={{
                                    bg: "blue.400",
                                }}
                                _active={{
                                    bg: colorMode(lightMode, darkMode),
                                    color: colorMode(darkMode, lightMode),
                                }}
                            >
                                In Web
                            </Button>
                        </Link>
                    ) : null}
                </Stack>
            </Box>
        </Box>
    );
};

export default ProjectCard;
