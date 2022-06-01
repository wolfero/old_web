import { Box, Heading } from "@chakra-ui/react";
import { useCallback, useMemo, useState } from "react";

import styles from './TickTackToe.module.scss';

const DEFAULT_BOARD = [...Array(9)];

const getWinner = squares => [
    [0, 1, 2], [3, 4, 5],
    [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
].map(line =>
    line.map(number => squares[number]))
    .find(([a, b, c]) => a === b && a === c)?.[0];

const Game = () => {
    const [squares, setSquares] = useState(DEFAULT_BOARD);
    const getNextPlayer = squares => squares.filter(Boolean).length % 2 === 0 ? "X" : "O";
    const nextPlayer = useMemo(() =>
        getNextPlayer(squares),
        [squares]);
    const winner = useMemo(() =>
        getWinner(squares),
        [squares]);
    const onRestartClick = useCallback(() =>
        setSquares(DEFAULT_BOARD),
        [setSquares]
    );
    const onSquareClick = useCallback(
        index => winner === undefined && squares[index] === undefined
            ? setSquares([
                ...squares.slice(0, index),
                nextPlayer,
                ...squares.slice(index + 1)
            ])
            : undefined,
        [nextPlayer, setSquares, squares, winner]
    );

    return (
        <Box className={styles.Game} >
            <Board
                {...{
                    onRestartClick,
                    onSquareClick,
                    nextPlayer,
                    squares,
                    winner
                }}
            />
        </Box>
    );
}

export default Game;

const Board = ({
    nextPlayer,
    onRestartClick,
    onSquareClick,
    squares,
    winner,
    ...props
}) => (
    <Box className={styles.GameBoard} {...props}>
        <Heading className={styles.Status}>
            {winner ? `Winner: ${winner}`
                : squares.every(Boolean)
                    ? "Draw"
                    : `Next player: ${nextPlayer}`}
        </Heading>
        <button className={styles.Restart} onClick={onRestartClick}>
            Restart
        </button>
        <Box className={styles.Squares}>
            {squares.map((square, index) => (
                <button
                    className={styles.Square}
                    key={index}
                    onClick={() => onSquareClick(index)}
                >
                    {square}
                </button>
            ))}
        </Box>
    </Box>
);

