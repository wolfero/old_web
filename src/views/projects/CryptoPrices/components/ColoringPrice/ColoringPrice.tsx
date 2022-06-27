import { Box, Td } from "@chakra-ui/react";
import { FC } from "react";

import { ColoringPriceProps } from "../../model/ColoringPrice/coloringPrice";
import styles from "./ColoringPrice.module.scss";

const ColoringPrice: FC<ColoringPriceProps> = ({ price }) => {
    if (price < 0) {
        return (
            <Td textAlign={"center"}>
                <Box className={styles.PriceLoss}>{price}%</Box>
            </Td>
        );
    }

    return (
        <Td textAlign={"center"}>
            <Box className={styles.PriceGain}>{price}%</Box>
        </Td>
    );
};
export default ColoringPrice;
