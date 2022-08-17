import { Heading } from '@chakra-ui/react';
import React from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';

import styles from './CardTitle.module.scss';

type CardTitleProps = {
	title: string;
	provided: DraggableProvided;
};

const CardTitle = ({ title, provided }: CardTitleProps) => {
	return (
		<Heading
			as={'h2'}
			size={'lg'}
			className={styles.TitleList}
			{...provided.dragHandleProps}
		>
			{title}
		</Heading>
	);
};

export default CardTitle;
