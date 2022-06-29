import { HStack, Tag, Text, Flex } from "@chakra-ui/react";

type PostTags = {
    tags: string[];
};

const PostTags = ({ tags }: PostTags) => {
    return (
        <HStack spacing={2} mt={3}>
            <Flex wrap={"wrap"}>
                {tags.map((tag) => {
                    return (
                        <Tag
                            m="1"
                            size={"lg"}
                            variant="solid"
                            colorScheme="red"
                            key={tag}
                        >
                            <Text isTruncated key={tag}>
                                {tag}
                            </Text>
                        </Tag>
                    );
                })}
            </Flex>
        </HStack>
    );
};

export default PostTags;
