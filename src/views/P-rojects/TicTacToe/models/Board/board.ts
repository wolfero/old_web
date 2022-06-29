export type Value = "X" | "O" | null;

export interface BoardProps {
    onSquareClick: (index: number) => void,
    squares: Value[],
    isDark: string
}