import { SquareProps } from "../../models/Square/square";

const Square = ({ square, className, onClick }:SquareProps) => {
    return (
        <button className={className} onClick={onClick}>
            {square}
        </button>
    );
};

export default Square;
