import { Box, Image } from "@chakra-ui/react";

import styles from "./Spinner.module.scss";

export const Spinner = () => {
    return (
        <Box className={styles.SpinnerBox}>
            <Image src="/assets/loader.svg" alt="Loader" />
        </Box>
    );
};
