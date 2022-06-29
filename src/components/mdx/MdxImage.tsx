import { Image, Box } from "@chakra-ui/react";

interface MdxImageProps {
    src: string;
    alt: string;
}

const MdxImage = ({ src, alt }: MdxImageProps) => {
    return (
        <Box display="flex" flexDirection="row" justifyContent="center" m="4">
            <Image src={src} alt={alt} borderRadius="lg" />
        </Box>
    );
};

export default MdxImage;
