import { Box, Heading, Link, Image } from "@chakra-ui/react";

import PostTags from "./PostTags";
import PostDate from "./PostDate";
import PostReadingTime from "./PostReadingTime";
import { formatDate } from "../../../lib/format-date";
import { PostProps } from "../../model/Blog/post";
import { FrontMatter } from "../../model/Blog/FrontMatter";

const defaultImage = "/assets/blog/default-icon.svg";

const Post = ({ post }: PostProps) => {
    const metadata = post.frontMatter;
    const hasPreviewImage = (metadata: FrontMatter) =>
        metadata.preview ?? defaultImage;

    return (
        <Box w="100%">
            <Box
                borderRadius="3xl"
                overflow="hidden"
                border="2px"
                borderColor="red.500"
            >
                <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                    href={post.url}
                >
                    <Image
                        transform="scale(1.0)"
                        src={hasPreviewImage(metadata)}
                        alt={metadata.preview}
                        objectFit="cover"
                        width="100%"
                        transition="0.5s ease-in-out"
                        _hover={{
                            transform: "scale(1.05)",
                        }}
                        height="280"
                    />
                </Link>
            </Box>

            <PostTags tags={metadata.tags} />
            <Heading fontSize="xl" marginTop="2">
                <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                    href={metadata.slug}
                >
                    {metadata.title}
                </Link>
            </Heading>
            <PostDate date={formatDate(metadata.date)} />
            <PostReadingTime readingTime={metadata.readingTime} />
        </Box>
    );
};

export default Post;
