import { Box, Button, Heading, useColorMode } from "@chakra-ui/react";
import { useCallback, useMemo, useState } from "react";

import styles from "./TickTackToe.module.scss";

const DEFAULT_BOARD = [...Array(9)];
const winningCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const getWinner = (squares) =>
    winningCases
        .map((line) => line.map((number) => squares[number]))
        .find(([a, b, c]) => a === b && a === c)?.[0];

const Game = () => {
    const [squares, setSquares] = useState(DEFAULT_BOARD);
    const winner = useMemo(() => getWinner(squares), [squares]);

    const firstPLayer = "X";
    const secondPlayer = "O";
    const getNextPlayer = (squares) =>
        squares.filter(Boolean).length % 2 === 0 ? firstPLayer : secondPlayer;
    const nextPlayer = useMemo(() => getNextPlayer(squares), [squares]);

    const onRestartClick = useCallback(
        () => setSquares(DEFAULT_BOARD),
        [setSquares]
    );

    const onSquareClick = useCallback(
        (index) =>
            winner === undefined && squares[index] === undefined
                ? updateSquares(index)
                : undefined,
        [nextPlayer, setSquares, squares, winner]
    );

    function updateSquares(index) {
        setSquares([
            ...squares.slice(0, index),
            nextPlayer,
            ...squares.slice(index + 1),
        ]);
    }

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark" ? styles.DarkMode : "";
    const restartButtonClass = [styles.Restart, isDark].join(" ");

    return (
        <Box className={styles.Game}>
            <Heading className={styles.NextPLayer}>
                {winner
                    ? `Winner: ${winner}`
                    : squares.every(Boolean)
                    ? "Draw"
                    : `Next player: ${nextPlayer}`}
            </Heading>
            <Button className={restartButtonClass} onClick={onRestartClick}>
                Restart
            </Button>
            <Board
                {...{
                    onSquareClick,
                    squares,
                    isDark,
                }}
            />
        </Box>
    );
};

const Board = ({ onSquareClick, squares, isDark }) => {
    const squareButtonClass = [styles.Square, isDark].join(" ");

    return (
        <Box className={styles.Board}>
            {squares.map((square, index) => (
                <Square
                    square={square}
                    index={index}
                    className={squareButtonClass}
                    onClick={() => onSquareClick(index)}
                />
            ))}
        </Box>
    );
};

const Square = ({ square, index, className, onClick }) => (
    <Button className={className} key={index} onClick={onClick}>
        {square}
    </Button>
);

export default Game;
