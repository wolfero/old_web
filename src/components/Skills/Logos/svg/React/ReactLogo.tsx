import styles from "./ReactLogo.module.scss";

const ReactLogo = () => {
    return (
        <svg
            id="react"
            className={styles.React}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 104.81 93.2"
            overflow="visible"
        >
            <ellipse
                id={styles.tre}
                style={{
                    fill: "none",
                    strokeMiterlimit: 10,
                    strokeWidth: "2px",
                }}
                cx="100"
                cy="100"
                rx="19.68"
                ry="51.4"
                transform="translate(-84.2 10) rotate(-30)"
            />
            <ellipse
                id={styles.two}
                style={{
                    fill: "none",
                    strokeMiterlimit: 10,
                    strokeWidth: "2px",
                }}
                cx="100"
                cy="100"
                rx="51.4"
                ry="19.68"
                transform="translate(-84.2 83.2) rotate(-60)"
            />
            <ellipse
                id={styles.one}
                style={{
                    fill: "none",
                    strokeMiterlimit: 10,
                    strokeWidth: "2px",
                }}
                cx="52.4"
                cy="46.6"
                rx="51.4"
                ry="19.68"
            />
            <circle id={styles.center} cx="52.4" cy="46.6" r="6" />
        </svg>
    );
};

export default ReactLogo;
