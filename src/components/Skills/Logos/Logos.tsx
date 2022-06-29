import { Box } from "@chakra-ui/react";

import HtmlLogo from "./svg/Html/HtmlLogo";
import CssLogo from "./svg/Css/CssLogo";
import Es6Logo from "./svg/JS/JsLogo";
import SassLogo from "./svg/Sass/SassLogo";
import ReactLogo from "./svg/React/ReactLogo";
import GitLogo from "./svg/Git/GitLogo";
import styles from "./Logos.module.scss";
import { LogosProps } from "../../../model/Skills/logos";

const logoType: { [key: string]: JSX.Element } = {
    html: <HtmlLogo />,
    css: <CssLogo />,
    sass: <SassLogo />,
    es6: <Es6Logo />,
    react: <ReactLogo />,
    git: <GitLogo />,
};

const Logos = ({ skill }: LogosProps) => {
    return (
        <Box className={styles.SkillsBox} key={skill.type}>
            <Box
                className={styles.SkillsLogo}
                _hover={{
                    boxShadow: "0 0.5rem 1rem 0 " + skill.color,
                }}
            >
                {logoType[skill.type]}
            </Box>
            <p className={styles.SkillsLogoTitle}>{skill.title}</p>
        </Box>
    );
};

export default Logos;
