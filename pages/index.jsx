import { Container, Heading } from "@chakra-ui/react";

import PostList from "../src/components/blog/PostList";
import Skills from "../src/components/Skills/Skills";
import PersonalSection from "../src/components/PersonalSection/PersonalSection";

export default function Home({ posts }) {
    return (
        <Container maxW={"7xl"} p="20">
            <Heading textAlign={"center"}>🚧 In development</Heading>
            <PersonalSection />
            <Skills />
            <PostList posts={posts}></PostList>
        </Container>
    );
}

import { getAllFiles } from "../lib/mdx";
export async function getStaticProps() {
    const allPosts = await getAllFiles();
    const maxPosts = 3;
    const posts = allPosts.slice(0, maxPosts);
    return {
        props: {
            posts,
        },
    };
}
