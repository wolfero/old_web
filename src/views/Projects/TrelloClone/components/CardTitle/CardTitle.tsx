import { Heading } from '@chakra-ui/react';
import React from 'react';

import styles from './CardTitle.module.scss';

type CardTitleProps = {
	title: string;
};

const CardTitle = ({ title }: CardTitleProps) => {
	return (
		<Heading as={'h2'} size={'lg'} className={styles.TitleList}>
			{title}
		</Heading>
	);
};

export default CardTitle;
