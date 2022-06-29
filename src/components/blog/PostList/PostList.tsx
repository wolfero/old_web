import { Heading, Wrap, WrapItem, Box } from "@chakra-ui/react";
import PostPreview from "../PostPreview/PostPreview";
import { PostsProps } from "../../../model/Blog/posts";
import styles from "./PostList.module.scss";

const PostList = ({ posts }: PostsProps) => {
    return (
        <Box as={"article"} className={styles.Posts}>
            <Heading as="h2" className={styles.Title}>
                Articles
            </Heading>
            <Box as={"section"} className={styles.List}>
                {posts.map((post) => (
                    <WrapItem
                        key={post.slug}
                        width={{
                            base: "100%",
                            md: "45%",
                            lg: "30%",
                        }}
                    >
                        <PostPreview key={post.slug} post={post} />
                    </WrapItem>
                ))}
            </Box>
        </Box>
    );
};

export default PostList;
