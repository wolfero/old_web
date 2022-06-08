import {
  Container,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

import theme from "../src/theme/index";
import PostList from "../src/components/blog/PostList";
import PersonalSection from "../src/components/PersonalSection/PersonalSection";

const lightMode = theme.colorsTags.white;
const darkMode = theme.colorsTags.black;

export default function Home({ posts }) {
  return (
      <Container
          bg={useColorModeValue(lightMode, darkMode)}
          color={useColorModeValue(darkMode, lightMode)}
          maxW={"7xl"}
          p="12"
      >
          <Heading textAlign={"center"}>🚧 In Progress</Heading>
          <PersonalSection />
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
