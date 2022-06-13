import { Container, Heading } from "@chakra-ui/react";

import PostList from "../../components/blog/PostList";
import Skills from "../../components/Skills/Skills";
import PersonalSection from "../../components/PersonalSection/PersonalSection";

export function Home({ posts }) {
    return (
        <Container maxW={"7xl"} px={"20"} py={"5"}>
            <Heading textAlign={"center"}>🚧 In development</Heading>
            <PersonalSection />
            <Skills />
            <PostList posts={posts}></PostList>
        </Container>
    );
}

export default Home;
