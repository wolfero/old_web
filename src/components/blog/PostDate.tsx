import { Text, HStack } from "@chakra-ui/react";
import { MdDateRange } from "react-icons/md";

interface PostDateProps {
    date: string;
}

export const PostDate = ({ date }: PostDateProps) => {
    return (
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <MdDateRange />
            <Text>{date}</Text>
        </HStack>
    );
};

export default PostDate;
