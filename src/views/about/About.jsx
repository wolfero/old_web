import { Container } from "@chakra-ui/react";

import PersonalDescription from "../../components/PersonalDescription/PersonalDescription";
import Skills from "../../components/Skills/Skills";

const About = () => {
    return (
        <Container maxW={"7xl"} px={"20"} py={"5"}>
            <PersonalDescription />
            <Skills />
        </Container>
    );
};

export default About;
