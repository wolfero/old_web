import { MDXRemote } from "next-mdx-remote";
import { Container, Heading } from "@chakra-ui/react";
import { getMdxPaths } from "next-mdx/server";

import { getFileBySlug } from "../../lib/mdx";
import { MDXComponents } from "../../src/components/mdx/MDXComponents";
import { formatDate } from "../../lib/format-date";
import styles from './Post.module.scss';

export default function Post({ post }) {
    const metadata = post.frontMatter;
    return (
        <Container maxW={"7xl"} p="20">
            <Heading align="center">
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
        </Container>
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
