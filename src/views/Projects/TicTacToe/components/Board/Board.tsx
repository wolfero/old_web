import { Box } from "@chakra-ui/react";

import styles from "./Board.module.scss";
import Square from "../Square/Square";
import { BoardProps } from "../../models/Board/board";

const Board = ({ onSquareClick, squares, isDark }: BoardProps) => {
    const squareButtonClass = [styles.Square, isDark].join(" ");
    return (
        <Box className={styles.Board}>
            {squares.map((square, index: number) => (
                <Square
                    square={square}
                    key={index}
                    className={squareButtonClass}
                    onClick={() => onSquareClick(index)}
                />
            ))}
        </Box>
    );
};

export default Board;
