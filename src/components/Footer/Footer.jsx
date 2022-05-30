import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  useColorModeValue,
  useColorMode
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import SocialButton from "../Buttons/SocialButton";
import CopyButton from "../Buttons/CopyButton";
import {
  linkedInUrl,
  githubUrl,
  gmailUrl
} from "../../../data/socialLinks/social-links";

import styles from './Footer.module.scss';

const Footer = ({ themes }) => {
  const { toggleColorMode } = useColorMode()
  const [lightMode, darkMode] = themes;

  return (
    <Box
      className={styles.socialIconsBox}
      bg={useColorModeValue(lightMode, darkMode)}
      color={useColorModeValue(darkMode, lightMode)}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        className={styles.container}
      >
        <Stack direction={"row"} spacing={6}>
          <CopyButton label={"Mail"} href={gmailUrl} themes={themes}>
            <MdEmail></MdEmail>
          </CopyButton>
          <SocialButton label={"Github"} href={githubUrl} themes={themes}>
            <BsGithub />
          </SocialButton>
          <SocialButton label={"LinkedIn"} href={linkedInUrl} themes={themes}>
            <BsLinkedin />
          </SocialButton>
          <Button onClick={toggleColorMode}>
            to
          </Button>
        </Stack>
        <Text>{new Date().getFullYear()} Frantisek Klucar</Text>
      </Container>
    </Box>
  );
};

export default Footer;
