import { Box, Heading } from "@chakra-ui/react";
import Axios from "axios";
import { useEffect, useState } from "react";

import { TableCoins } from "./components/TableCoins/TableCoins";

export const CryptoPrices = () => {
    const [coins, setCoins] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        Axios({
            url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=1h%2C24h%2C7d%2C",
        })
            .then((response) => setCoins(response.data))
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }, []);

    return (
        <>
            <Heading textAlign={"center"}>Crypto Prices</Heading>
            {errorMessage ? (
                <ErrorMessage message={errorMessage} />
            ) : (
                <TableCoins coins={coins} />
            )}
        </>
    );
};

const ErrorMessage = ({ message }) => <Box textAlign={"center"} bg={"red"} mt={"5"}>{message}</Box>;

export default CryptoPrices;
