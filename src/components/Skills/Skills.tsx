import { Heading, Box } from "@chakra-ui/react";

import { skillsTags } from "../../../data/skills";
import Logos from "./Logos/Logos";
import styles from "./Skills.module.scss";

const Skills = () => {
    return (
        <Box as={"article"} className={styles.Skills}>
            <Heading className={styles.Title} as="h2">
                My Skills
            </Heading>
            <Box as={"section"} className={styles.Section}>
                {skillsTags.map((skill) => (
                    <Logos skill={skill} key={skill.type} />
                ))}
            </Box>
        </Box>
    );
};

export default Skills;
