import {
    Box,
    Container,
    Image,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import styles from "./Footer.module.scss";
import SocialButton from "../FooterButtons/SocialButton";
import CopyButton from "../FooterButtons/CopyButton";
import { socialLinks } from "../../../data/pageLinks";
import { ThemeProps } from "../../model/Theme/theme";

const Footer = ({ themes }: ThemeProps) => {
    const [lightMode, darkMode] = themes;

    return (
        <Box
            className={styles.Footer}
            bg={useColorModeValue(lightMode, darkMode)}
            color={useColorModeValue(darkMode, lightMode)}
            borderTop={"1px"}
        >
            <Container
                as={Stack}
                maxW={"6xl"}
                className={styles.container}
                flexDirection={"row"}
            >
                <Box className={styles.FooterBox}>
                    <Text fontSize={"1.25rem"}>
                        {new Date().getFullYear()} Frantisek Klucar
                    </Text>
                </Box>
                <Image
                    className={styles.FooterImg}
                    src="/assets/default.png"
                    alt="Wolf Logo"
                />
                <Stack direction={"row"} spacing={6} alignSelf={"center"}>
                    <CopyButton
                        label={"Mail"}
                        href={socialLinks.gmail}
                        themes={themes}
                    >
                        <MdEmail size={25} />
                    </CopyButton>
                    <SocialButton
                        label={"Github"}
                        href={socialLinks.gitHub}
                        themes={themes}
                    >
                        <BsGithub size={25} />
                    </SocialButton>
                    <SocialButton
                        label={"LinkedIn"}
                        href={socialLinks.linkedIn}
                        themes={themes}
                    >
                        <BsLinkedin size={25} />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
