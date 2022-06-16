import { Container } from "@chakra-ui/react";

import PostList from "../../components/blog/PostList";
import SelfIntroduction from "../../components/SelfIntroduction/SelfIntroduction";

export function Home({ posts }) {
    return (
        <Container maxW={"7xl"} px={"20"} py={"5"}>
            <SelfIntroduction />
            <PostList posts={posts} />
            {/* <LastProjects/> */}
        </Container>
    );
}

export default Home;
