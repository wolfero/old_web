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

const getNext = squares => squares.filter(Boolean).length % 2 === 0 ? "X" : "O";

const Game = () => {
    const [squares, setSquares] = useState(DEFAULT_BOARD);
    const next = useMemo(() => getNext(squares), [squares]);
    const winner = useMemo(() => getWinner(squares), [squares]);
    const onRestartClick = useCallback(
        () => setSquares(DEFAULT_BOARD), [setSquares]
    );
    const onSquareClick = useCallback(
        index => winner === undefined && squares[index] === undefined
            ? setSquares([
                ...squares.slice(0, index),
                next,
                ...squares.slice(index + 1)
            ])
            : undefined,
        [next, setSquares, squares, winner]
    );

    return (
        <div className={styles.Game} >
            <Board
                {...{
                    onRestartClick,
                    onSquareClick,
                    next,
                    squares,
                    winner
                }}
            />
        </div>
    );
}

export default Game;

const Board = ({
    next,
    onRestartClick,
    onSquareClick,
    squares,
    winner,
    ...props
}) => (
    <div className={styles.GameBoard} {...props}>
        <div className={styles.Status}>
            {winner
                ? `Winner: ${winner}`
                : squares.every(Boolean)
                    ? "Draw"
                    : `Next player: ${next}`}
        </div>
        <button className={styles.Restart} onClick={onRestartClick}>
            restart
        </button>
        <div className={styles.Squares}>
            {squares.map((square, index) => (
                <button
                    className={styles.Square}
                    key={index}
                    onClick={() => onSquareClick(index)}
                >
                    {square}
                </button>
            ))}
        </div>
    </div>
);

