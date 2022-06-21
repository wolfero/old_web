import { Image, Td, Tr } from "@chakra-ui/react";
import React from "react";

import styles from "./CoinRow.module.scss";

export const CoinRow = ({ coin }) => {
    console.log(coin);
    return (
        <Tr key={coin.id}>

            <Td>{coin.market_cap_rank}</Td>
            <Td className={styles.CoinName}>
                <Image className={styles.CoinImage} src={coin.image} />
                {coin.name}
            </Td>
            <Td>{coin.current_price} US$</Td>
            <Td>{coin.price_change_percentage_1h_in_currency.toFixed(1)}%</Td>
            <Td>{coin.price_change_percentage_24h_in_currency.toFixed(1)}%</Td>
            <Td>{coin.price_change_percentage_7d_in_currency.toFixed(1)}%</Td>
        </Tr>
    );
};


// <Tr>
//     <Th>#</Th>
//     <Th>Name</Th>
//     <Th>Price</Th>
//     <Th>1h</Th>
//     <Th>24h</Th>
//     <Th>7d</Th>
// </Tr>