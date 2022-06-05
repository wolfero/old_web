import {
    Avatar,
    Badge,
    Box,
    Button,
    Center,
    Heading,
    Link,
    useColorModeValue,
    Stack,
    Text,
} from "@chakra-ui/react";

import styles from "./ProyectCard.module.scss";

const ProyectCard = ({ title,githubLink, webLink }) => {
    return (
        <Center py={6}>
            <Box className={styles.Card}>
                <Avatar
                    src={"/assets/default-image.png"}
                    className={styles.Image}
                />

                <Heading className={styles.Name}>{title}</Heading>

                <Box className={styles.Content}>
                    <Stack mt={8} direction={"row"} spacing={4}>
                        <Link href={githubLink}>
                            <Button
                                flex={1}
                                fontSize={"sm"}
                                rounded={"full"}
                                _focus={{
                                    bg: "black.100",
                                }}
                            >
                                Ver en Github
                            </Button>
                        </Link>

                        <Link href={webLink}>
                            <Button
                                flex={1}
                                fontSize={"sm"}
                                rounded={"full"}
                                bg={"blue.400"}
                                color={"white"}
                                boxShadow={
                                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                                }
                                _hover={{
                                    bg: "blue.500",
                                }}
                                _focus={{
                                    bg: "blue.500",
                                }}
                            >
                                Ver en la web
                            </Button>
                        </Link>
                    </Stack>
                </Box>
            </Box>
        </Center>
    );
};

export default ProyectCard;
