import Post from '../../src/views/blog/Post/Post';
export default Post;

import { getFileBySlug } from "../../lib/mdx";
export async function getStaticProps({ params }) {
    const post = await getFileBySlug(params.slug);
    return {
        props: {
            post,
        },
    };
}

import { getMdxPaths } from "next-mdx/server";
export async function getStaticPaths() {
    const paths = (await getMdxPaths("posts"))
        .map((p) => `/blog/${p.params.slug}`)
        .flat();
    return {
        paths: paths,
        fallback: false,
    };
}
