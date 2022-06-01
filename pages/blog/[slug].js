import { MDXRemote } from "next-mdx-remote";
import { Heading } from "@chakra-ui/react";
import { getMdxPaths } from "next-mdx/server";
import { getFileBySlug } from "../../lib/mdx";
import { MDXComponents } from "../../src/components/mdx/MDXComponents";
import { formatDate } from "../../lib/format-date";

export default function Post({ post }) {
    const metadata = post.frontMatter;
    return (
        <>
            <Heading mt="4" align="center">📅 {formatDate(metadata.date)}</Heading>
            <section className="post-body">
                <article className="markdown-body">
                    <MDXRemote
                        {...post.serialize}
                        components={MDXComponents}
                        metadata={metadata}
                    />
                </article>
            </section>
        </>
    );
}

export async function getStaticProps({ params }) {
    const post = await getFileBySlug(params.slug);

    console.log(post);

    return {
        props: {
            post,
        },
    };
}

export async function getStaticPaths() {
    const paths = (await getMdxPaths("post"))
        .map((p) => `/blog/${p.params.slug}`)
        .flat();
    return {
        paths: paths,
        fallback: false,
    };
}
