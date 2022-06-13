import {
    Avatar,
    Box,
    Button,
    Heading,
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
                <Avatar
                    src={imageUrl}
                    className={styles.Image}
                    bg={useColorModeValue(lightMode, darkMode)}
                />
                <Heading className={styles.Name}>{title}</Heading>
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
                                color: useColorModeValue(darkMode, lightMode),
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
                                color: useColorModeValue(darkMode, lightMode),
                            }}
                        >
                            In Web
                        </Button>
                    </Link>
                </Stack>
            </Box>
        </Box>
    );
};

export default ProjectCard;
