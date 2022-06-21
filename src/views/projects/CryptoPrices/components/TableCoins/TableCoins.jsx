import {
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Th,
    Thead,
    Tr,
    Container,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

import theme from "../../../../../theme";
import { CoinRow } from "../CoinRow/CoinRow";

export const TableCoins = ({ coins }) => {
    const themeMode = useColorModeValue(
        theme.colorsTags.white,
        theme.colorsTags.black
    );
    return (
        <Container maxW={"7xl"} px={"20"} py={"5"}>
            <TableContainer>
                <Table variant={"striped"} size={"sm"} colorScheme={themeMode}>
                    <TableCaption>Obtained from CoinGecko's API</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>#</Th>
                            <Th>Name</Th>
                            <Th>Price</Th>
                            <Th>1h</Th>
                            <Th>24h</Th>
                            <Th>7d</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {coins.map((coin,index) => (
                            <CoinRow key={index} coin={coin} />
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Container>
    );
};
