import { Box, Image, Td, Tr, useColorModeValue } from "@chakra-ui/react";

import styles from "./CoinRow.module.scss";
import { CoinRowProps } from "../../model/CoinRow/coinRow";
import ColoringPrice from "../ColoringPrice/ColoringPrice";

export const CoinRow = ({ coin }: CoinRowProps) => {
    const wrapImageLink = coin.image.split("images/");
    const coinCode = wrapImageLink[1].split("/")[0];
    const coinChart = `https://www.coingecko.com/coins/${coinCode}/sparkline.svg`;

    return (
        <Tr
            key={coin.id}
            _odd={{
                bg: useColorModeValue("blackAlpha.100", "whiteAlpha.100"),
            }}
            _hover={{
                bg: useColorModeValue("blackAlpha.900", "whiteAlpha.900"),
                color: useColorModeValue("white", "black"),
            }}
        >
            <Td textAlign={"center"}>{coin.market_cap_rank}</Td>
            <Td>
                <Box className={styles.NameColumn}>
                    <Image
                        className={styles.CoinImage}
                        src={coin.image}
                        alt={coin.name}
                    />
                    <Box as={"span"}>{coin.name}</Box>
                </Box>
            </Td>
            <Td textAlign={"center"}>
                <Box as={"span"} className={styles.CoinSymbol}>
                    {coin.symbol.toUpperCase()}
                </Box>
            </Td>
            <Td textAlign={"end"}>{coin.current_price} US$</Td>
            <ColoringPrice
                price={roundPrice(coin.price_change_percentage_1h_in_currency)}
            />
            <ColoringPrice
                price={roundPrice(coin.price_change_percentage_24h_in_currency)}
            />
            <ColoringPrice
                price={roundPrice(coin.price_change_percentage_7d_in_currency)}
            />
            <Td>
                <Box className={styles.Graph}>
                    <Image src={coinChart} alt={coin.name + " Graph"} />
                </Box>
            </Td>
        </Tr>
    );
};

function roundPrice(price: number) {
    return +price.toFixed(1);
}
