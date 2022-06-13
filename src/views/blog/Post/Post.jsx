import { MDXRemote } from "next-mdx-remote";
import { Container, Heading } from "@chakra-ui/react";

import { MDXComponents } from "../../../components/mdx/MDXComponents";
import { formatDate } from "../../../../lib/format-date";
import styles from "./Post.module.scss";

export function Post({ post }) {
    const metadata = post.frontMatter;

    return (
        <Container maxW={"7xl"} px={"20"} py={"5"}>
            <Heading align="center">📅 {formatDate(metadata.date)}</Heading>
            <section className={styles.PostBody}>
                <article className="markdown-body">
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
export default Post;
