import { Heading } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { TableCoins } from "./components/TableCoins/TableCoins";

import styles from "./CryptoPrices.module.scss";

export const CryptoPrices = () => {
    const [coins, setCoins] = useState([]);

    const getData = async () => {
        const response = await axios.get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
        );
        setCoins(response.data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Heading textAlign={"center"}>🚧 In development</Heading>
            <TableCoins coins={coins} />
        </>
    );
};

export default CryptoPrices;
