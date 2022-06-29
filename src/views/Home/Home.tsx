import { Container } from "@chakra-ui/react";

import PostList from "../../components/blog/PostList";
import Skills from "../../components/Skills/Skills";
import SelfIntroduction from "../../components/SelfIntroduction/SelfIntroduction";
import { PostsProps } from "../../model/Blog/posts";

const Home = ({ posts }:PostsProps) => {
    return (
        <Container maxW={"7xl"} px={"20"} py={"5"}>
            <SelfIntroduction />
            <Skills />
            <PostList posts={posts} />
            {/* <LastProjects/> */}
        </Container>
    );
};

export default Home;
