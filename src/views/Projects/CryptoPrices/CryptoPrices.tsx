import { Box, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import ErrorHandler from "../../../components/ErrorHandler/ErrorHandler";
import { Spinner } from "../../../components/Spinner/Spinner";
import { TableCoins } from "./components/TableCoins/TableCoins";
import { Coin } from "./model/Coin/coin";

export const CryptoPrices = () => {
    const [coins, setCoins] = useState(Array<Coin>());
    const [error, setError] = useState({ message: "", code: "" });
    const [isLoading, setIsLoading] = useState(false);

    function getData() {
        setIsLoading(true);
        axios
            .get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=1h%2C24h%2C7d%2C"
            )
            .then((response) => {
                setCoins(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError({ message: error.message, code: error.code });
                setIsLoading(false);
            });
    }

    useEffect(() => {
        getData();
        const interval = setInterval(getData, 60000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Box>
            <Heading textAlign={"center"}>Crypto Prices</Heading>
            {error.message ? (
                <ErrorHandler error={error} parentSlug="projects" />
            ) : (
                printSpinnerOrTable(isLoading, coins)
            )}
        </Box>
    );
};

function printSpinnerOrTable(isLoading:boolean, coins:Coin[]) {
    return isLoading ? <Spinner /> : <TableCoins coins={coins} />;
}

export default CryptoPrices;
