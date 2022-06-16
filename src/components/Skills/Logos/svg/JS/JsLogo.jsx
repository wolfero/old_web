import styles from "./JsLogo.module.scss";

const Es6Logo = () => {
    return (
        <svg
            className={styles.Js}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 105 120.47"
            overflow="visible"
        >
            <g id="bones">
                <path
                    id="frame"
                    style={{
                        fill: "none",
                        strokeMiterlimit: "10",
                        strokeWidth: "3px",
                    }}
                    d="M130.52,149.35l-27.45,8.9a10,10,0,0,1-6.23,0l-26.6-8.87a10,10,0,0,1-6.79-8.71L56.76,52a10,10,0,0,1,9.95-10.73h66.58a10,10,0,0,1,10,10.63l-5.85,88.63A10,10,0,0,1,130.52,149.35Z"
                    transform="translate(-47.5 -39.76)"
                />
                <g id={styles.letters}>
                    <polyline
                        style={{
                            fill: "none",
                            strokeMiterlimit: "10",
                            strokeWidth: "3px",
                        }}
                        points="46.7 28.25 46.7 90.25 27 80.74"
                    />
                    <polyline
                        style={{
                            fill: "none",
                            strokeMiterlimit: "10",
                            strokeWidth: "3px",
                        }}
                        points="75.7 30.25 56.7 30.25 56.7 64.25 73.7 60.26 72.7 86.25 53.7 90.25"
                    />
                </g>
            </g>
        </svg>
    );
};

export default Es6Logo;
