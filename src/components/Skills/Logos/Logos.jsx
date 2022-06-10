import { Box, Tag, useColorModeValue } from "@chakra-ui/react";

import HtmlLogo from "./svg/Html/HtmlLogo";
import CssLogo from "./svg/Css/CssLogo";
import Es6Logo from "./svg/JS/JsLogo";
import SassLogo from "./svg/Sass/SassLogo";
import ReactLogo from "./svg/React/ReactLogo";
import GitLogo from "./svg/Git/GitLogo";
import theme from "../../../theme/index";

import styles from "./Logos.module.scss";

const showIconType = {
    html: <HtmlLogo />,
    css: <CssLogo />,
    sass: <SassLogo />,
    es6: <Es6Logo />,
    react: <ReactLogo />,
    git: <GitLogo />,
};

const Logos = ({ skill }) => {
    const { lightMode, darkMode } = [
        theme.colorsTags.white,
        theme.colorsTags.black,
    ];

    return (
        <Box className={styles.SkillsBox} key={skill.type}>
            <Tag
                className={styles.SkillsLogo}
                variant="solid"
            >
                {showIconType[skill.type]}
            </Tag>
            <p className={styles.SkillsLogoTitle}>{skill.title}</p>
        </Box>
    );
};

export default Logos;
