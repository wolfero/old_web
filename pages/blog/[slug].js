import { MDXRemote } from "next-mdx-remote";
import { Heading } from "@chakra-ui/react";
import { getMdxPaths } from "next-mdx/server";

import { getFileBySlug } from "../../lib/mdx";
import { MDXComponents } from "../../src/components/mdx/MDXComponents";
import { formatDate } from "../../lib/format-date";
import styles from './blog.module.scss';

export default function Post({ post }) {
    const metadata = post.frontMatter;
    return (
        <>
            <Heading mt="4" align="center">
                📅 {formatDate(metadata.date)}
            </Heading>
            <section className={styles.PostBody}>
                <article className='markdown-body'>
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
