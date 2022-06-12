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
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="center"
                    marginTop={{ base: "5", sm: "2" }}
                >
                    <PostTags tags={["Software Developer","Animal lover ❤"]} />
                    <Heading marginTop="1">
                        <Link
                            textDecoration="none"
                            _hover={{ textDecoration: "none" }}
                        >
                            Who I am?
                        </Link>
                    </Heading>
                    <Text
                        as="p"
                        marginTop="2"
                        color={useColorModeValue("gray.700", "gray.200")}
                        fontSize="lg"
                    >
                        I&apos;m a web developer, eager to continue training and
                        improve as a professional. I consider myself very
                        attentive to minimalist details, which in my opinion, in
                        the end are always important. I have a great ability to
                        work in a team. I am passionate about learning new
                        technologies. When I am presented with a challenge, the
                        more difficult it is, the more I care about solving it.
                        I&apos;m pretty hard on myself as I was always told.
                        <Text mt={4}>
                            &quot;Today be better than yesterday, but tomorrow, be
                            better than today&quot;.
                        </Text>
                    </Text>
                </Box>
            </Box>
        </>
    );
};

export default PersonalSection;
