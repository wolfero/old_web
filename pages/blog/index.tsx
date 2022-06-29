import Blog from "../../src/views/B-log/Blog";
export default Blog;

import { getAllFiles } from "../../lib/mdx";
export async function getStaticProps() {
    const posts = await getAllFiles();
    return {
        props: {
            posts,
        },
    };
}
