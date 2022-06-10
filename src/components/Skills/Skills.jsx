import { Divider, Heading, Box} from "@chakra-ui/react";

import { skillsTags } from "../../../data/skills";
import Logos from "./Logos/Logos";
import styles from "./Skills.module.scss";

const Skills = () => {
    return (
        <>
            <Box className={styles.Skills}>
                <Heading className={styles.SkillsHeader} as="h2">
                    Skills
                </Heading>
                <Divider className={styles.Divider} />
                <Box className={styles.Container}>
                    {skillsTags.map((skill) => (
                        <Logos skill={skill} key={skill.type} />
                    ))}
                </Box>
            </Box>
        </>
    );
};

export default Skills;
