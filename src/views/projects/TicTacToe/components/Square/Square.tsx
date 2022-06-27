import { SquareProps } from "../../models/Square/square";

const Square: React.FC<SquareProps> = ({ square, className, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            {square}
        </button>
    );
};

export default Square;
