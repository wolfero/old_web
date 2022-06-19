import {
    Box,
    Button,
    Heading,
    Image,
    Link,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";

import styles from "./ProjectCard.module.scss";
import theme from "../../theme/index";

const ProjectCard = ({ title, githubLink, webLink, image }) => {
    const imageUrl = image ? image : "/assets/default.png";
    const [lightMode, darkMode] = [
        theme.colorsTags.white,
        theme.colorsTags.black,
    ];

    return (
        <Box>
            <Box
                className={styles.Card}
                bg={useColorModeValue(darkMode, lightMode)}
                color={useColorModeValue(lightMode, darkMode)}
            >
                <Box className={styles.FotoBox} bg="blue.500">
                    <Image className={styles.Foto} src={imageUrl} alt={title} />
                </Box>
                <Box className={styles.Content}>
                    <Heading as={"h3"} size={"lg"} className={styles.Title}>
                        {title}
                    </Heading>
                    <Stack className={styles.Buttons}>
                        <Link href={githubLink}>
                            <Button
                                fontSize={"sm"}
                                bg="red.500"
                                _hover={{
                                    bg: "red.400",
                                }}
                                _active={{
                                    bg: useColorModeValue(lightMode, darkMode),
                                    color: useColorModeValue(
                                        darkMode,
                                        lightMode
                                    ),
                                }}
                            >
                                In Github
                            </Button>
                        </Link>
                        <Link href={webLink}>
                            <Button
                                fontSize={"sm"}
                                bg={"blue.500"}
                                _hover={{
                                    bg: "blue.400",
                                }}
                                _active={{
                                    bg: useColorModeValue(lightMode, darkMode),
                                    color: useColorModeValue(
                                        darkMode,
                                        lightMode
                                    ),
                                }}
                            >
                                In Web
                            </Button>
                        </Link>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default ProjectCard;
