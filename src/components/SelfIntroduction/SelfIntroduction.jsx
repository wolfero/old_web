import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Image, Link, Text, Button } from "@chakra-ui/react";

import styles from "./SelfIntroduction.module.scss";

const SelfIntroduction = () => {
    return (
        <Box className={styles.Section} as={"section"}>
            <Box className={styles.FotoBox}>
                <Image
                    className={styles.Foto}
                    src={"/assets/about/personal-image.jpg"}
                    alt="Home image"
                />
            </Box>
            <Box marginTop={{ base: "5", sm: "2" }} className={styles.Content}>
                <Text fontSize="lg" className={styles.Text}>
                    I&apos;m a software developer, eager to continue training
                    and improve as a professional. I consider myself very
                    attentive to minimalist details, which in my opinion, in the
                    end are always important. I have a great ability to work in
                    a team. I am passionate about learning new technologies.
                    When I am presented with a challenge, the more difficult it
                    is, the more I care about solving it. I&apos;m pretty hard
                    on myself as I was always told.
                </Text>
                <Text mt={4}>
                    &quot;Today be better than yesterday, but tomorrow, be
                    better than today&quot;.
                </Text>
                <Link href="/about" marginTop="2" textAlign={"end"}>
                    <Button
                        bg={"red.500"}
                        _hover={{
                            bg: "red.400",
                        }}
                    >
                        Read more here
                        <ArrowRightIcon ml={"1rem"} />
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};

export default SelfIntroduction;
