import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import PostTags from "../blog/PostTags";

import styles from "./PersonalSection.module.scss";

const PersonalSection = () => {
    return (
        <>
            <Box className={styles.PersonalSection}>
                <Box className={styles.PersonalFotoBox}>
                    <Box className={styles.PersonalFoto}>
                        <Image
                            className={styles.Foto}
                            src={"/assets/personal-image.jpg"}
                            alt="Home image"
                        />
                    </Box>
                    <Box className={styles.PersonalBackground}>
                        <Box
                            className={styles.PersonalBackgroundColors}
                            bgGradient={useColorModeValue(
                                "linear(red.400 0.2rem, transparent 1px)",
                                "linear(red.600 0.1rem, transparent 10px)",
                                "linear(red.600 0.1rem, transparent 10px)"
                            )}
                        />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="center"
                    marginTop={{ base: "5", sm: "2" }}
                >
                    <PostTags tags={["❤ Software Crafter"]} />
                    <Heading marginTop="1">
                        <Link
                            textDecoration="none"
                            _hover={{ textDecoration: "none" }}
                        >
                            ¿Quién soy?
                        </Link>
                    </Heading>
                    <Text
                        as="p"
                        marginTop="2"
                        color={useColorModeValue("gray.700", "gray.200")}
                        fontSize="lg"
                    >
                        Soy un desarrollador nuevo en el sector, aunque ya
                        algunas cosas he visto, back end y data enginnering con
                        sus respectivos stacks tecnológicos. Me gusta mucho el
                        trabajo en este sector, el teletrabajo y la comunicación
                        en ingles con otras personas del mundo es muy
                        interesante. Me gustaría decir qué suelo girar alrededor
                        del marco Agile, aprendiendo cómo se aplica. Empecé el
                        camino sel software crafter sin tener mucha idea pero
                        aspirando a hacer las cosas lo mejor qué se puede y
                        mejorando.
                    </Text>
                </Box>
            </Box>
        </>
    );
};

export default PersonalSection;
