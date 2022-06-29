import { MDXRemote } from "next-mdx-remote";
import { Container, Heading } from "@chakra-ui/react";

import { formatDate } from "../../../../lib/format-date";
import styles from "./Post.module.scss";
import { PostProps } from "../../../model/Blog/post";
import { MDXComponents } from "../../../components/mdx/MDXComponents";

const Post = ({ post }: PostProps) => {
    const metadata = post.frontMatter;

    return (
        <Container maxW={"7xl"} px={"20"} py={"5"}>
            <Heading textAlign={"center"}>
                📅 {formatDate(metadata.date)}
            </Heading>
            <section className={styles.PostBody}>
                <article className="markdown-body">
                    <MDXRemote
                        {...post.serialize}
                        components={MDXComponents as any}
                    />
                </article>
            </section>
        </Container>
    );
};
export default Post;
