import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import SocialButton from "../SocialButton/SocialButton";
import {
  linkedInUrl,
  githubUrl,
  gmailUrl
} from "../../../data/socialLinks/social-links";
import CopyButton from "../CopyButton/CopyButton";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>🐺 {new Date().getFullYear()} Frantisek Klucar</Text>
        <Stack direction={"row"} spacing={6}>
          <CopyButton label={"Mail"} href={gmailUrl}>
            <MdEmail></MdEmail>
          </CopyButton>
          <SocialButton label={"Github"} href={githubUrl}>
            <BsGithub />
          </SocialButton>
          <SocialButton label={"LinkedIn"} href={linkedInUrl}>
            <BsLinkedin />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
