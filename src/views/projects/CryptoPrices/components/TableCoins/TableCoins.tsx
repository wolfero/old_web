import {
    Container,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Th,
    Thead,
    Tr,
    useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";

import { TableCoinsProps } from "../../model/TableCoins/tableCoins";
import { CoinRow } from "../CoinRow/CoinRow";

export const TableCoins: FC<TableCoinsProps> = ({ coins }) => {
    return (
        <Container maxW={"7xl"} px={{ base: "5", lg: "20" }} py={"5"}>
            <TableContainer>
                <Table
                    size={"sm"}
                    bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                >
                    <Thead>
                        <Tr>
                            <Th textAlign={"center"}>#</Th>
                            <Th>Name</Th>
                            <Th textAlign={"center"}>Symbol</Th>
                            <Th textAlign={"end"}>Price</Th>
                            <Th textAlign={"center"}>1h</Th>
                            <Th textAlign={"center"}>24h</Th>
                            <Th textAlign={"center"}>7d</Th>
                            <Th textAlign={"center"}>Last 7 days</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {coins.map((coin, index) => (
                            <CoinRow key={index} coin={coin} />
                        ))}
                    </Tbody>
                    <TableCaption>Obtained from CoinGecko's API</TableCaption>
                </Table>
            </TableContainer>
        </Container>
    );
};
