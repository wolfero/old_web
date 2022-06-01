import { Box, Link } from '@chakra-ui/react';

import proyectsLinks from './proyectsLinks';

import styles from './Proyects.module.scss';

function Proyects() {
    return (
        <Box>
            {proyectsLinks.map(({ name, path }) => (
                <Link key={name} href={path}>
                    {name}
                </Link>
            ))}
        </Box>
    );
}




export default Proyects;