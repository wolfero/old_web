import Blog from "./blog";
import { getAllFiles } from "../../lib/mdx";

export default Blog;
export async function getStaticProps() {
  const posts = await getAllFiles();
  return {
    props: {
      posts,
    },
  };
}