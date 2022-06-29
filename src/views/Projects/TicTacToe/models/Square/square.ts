import { MouseEventHandler } from "react";
import { Value } from "../Board/board";

export interface SquareProps {
    square: Value,
    className: string,
    onClick: MouseEventHandler<HTMLButtonElement>
}