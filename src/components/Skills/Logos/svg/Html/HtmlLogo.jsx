import styles from "./HtmlLogo.module.scss";

const HtmlLogo = () => {
    return (
        <svg
            className={styles.Html}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 89.54 120.47"
        >
            <path
                d="M130.52,149.35l-27.45,8.9a10,10,0,0,1-6.23,0l-26.6-8.87a10,10,0,0,1-6.79-8.71L56.76,52a10,10,0,0,1,9.95-10.73h66.58a10,10,0,0,1,10,10.63l-5.85,88.63A10,10,0,0,1,130.52,149.35Z"
                transform="translate(-55.23 -39.76)"
                style={{
                    fill: "none",
                    strokeMiterlimit: 10,
                    strokeWidth: ".2rem",
                }}
            />
            <polyline
                points="67.83 29.17 23.33 29.17 25.33 56.17 64.33 56.17 62.33 84.17 44.33 91.17 27.33 83.17 26.33 70.17"
                style={{
                    fill: "none",
                    strokeMiterlimit: 10,
                    strokeWidth: ".2rem",
                }}
            />
        </svg>
    );
};

export default HtmlLogo;
