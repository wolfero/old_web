import { MouseEventHandler } from "react";

export interface SquareProps {
    square: string,
    className: string,
    onClick: MouseEventHandler<HTMLButtonElement>
}