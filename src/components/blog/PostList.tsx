import React from "react";
import { Heading, Divider, Wrap, WrapItem } from "@chakra-ui/react";
import Post from "./Post";
import { PostsProps } from "../../model/Blog/posts";

const PostList = ({ posts }: PostsProps) => {
    return (
        <>
            <Heading as="h2" marginTop="5">
                Articles
            </Heading>
            <Divider marginTop="4" />
            <Wrap spacing="30px" marginTop="5">
                {posts.map((post) => (
                    <WrapItem
                        key={post.slug}
                        width={{
                            base: "100%",
                            sm: "100%",
                            md: "29%",
                            lg: "30%",
                        }}
                    >
                        <Post key={post.slug} post={post} />
                    </WrapItem>
                ))}
            </Wrap>
        </>
    );
};

export default PostList;