import Blog from "./Blog";
import { getAllFilesMetadata } from "../../lib/mdx";
import { orderByDate } from "../../lib/order-by-date";

export default Blog;
export async function getStaticProps() {
  const posts = await getAllFilesMetadata().sort(orderByDate);
  return {
    props: {
      posts,
    },
  };
}