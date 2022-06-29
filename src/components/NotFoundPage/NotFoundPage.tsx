import {
    Box,
    Heading,
    Text,
    Button,
    useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

type NotFoundPageProps = {
    themes: string[];
};

const NotFoundPage = ({ themes }: NotFoundPageProps) => {
    const [lightMode, darkMode] = themes;
    return (
        <Box textAlign="center" py={10} px={6}>
            <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                bgGradient="linear(to-r, red.400, red.800)"
                backgroundClip="text"
            >
                404
            </Heading>
            <Text fontSize="18px" mt={3} mb={2}>
                Página no encontrada
            </Text>
            <NextLink href="/">
                <Button
                    bgGradient="linear(to-r, red.400, red.600, red.800)"
                    _hover={{
                        bg: useColorModeValue(darkMode, lightMode),
                        color: useColorModeValue(lightMode, darkMode),
                    }}
                    variant="solid"
                >
                    Volver a la página principal
                </Button>
            </NextLink>
        </Box>
    );
};

export default NotFoundPage;
