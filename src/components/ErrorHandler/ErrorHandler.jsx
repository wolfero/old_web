import {
    Box,
    Button,
    Heading,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import NextLink from "next/link";

const ErrorHandler = ({ error, parentSlug }) => {
    return (
        <Box textAlign="center" py={10} px={6}>
            <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                bgGradient="linear(to-r, red.400, red.800)"
                backgroundClip="text"
            >
                {error.code}
            </Heading>
            <Text fontSize="18px" my={3}>
                {error.message}
            </Text>
            <NextLink href={`/${parentSlug}`}>
                <Button
                    bgGradient="linear(to-r, red.400, red.600, red.800)"
                    _hover={{
                        bg: useColorModeValue("black", "white"),
                        color: useColorModeValue("white", "black"),
                    }}
                    variant="solid"
                >
                    Return to {parentSlug} page
                </Button>
            </NextLink>
        </Box>
    );
};

export default ErrorHandler;
