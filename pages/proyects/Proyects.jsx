import { Box, Link } from "@chakra-ui/react";

import proyectsLinks from "./proyectsLinks";

import styles from "./Proyects.module.scss";
import ProyectCard from "../../src/components/ProyectCard/ProyectCard";

function Proyects() {
    return (
        <Box>
            {proyectsLinks.map(({ name, webLink, githubLink }) => (
                <ProyectCard
                    key={name}
                    title={name}
                    githubLink={githubLink}
                    webLink={webLink}
                ></ProyectCard>
            ))}
        </Box>
    );
}

export default Proyects;
