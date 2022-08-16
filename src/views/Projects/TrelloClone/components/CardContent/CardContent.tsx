import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import { CardType } from '../../model/CardType';

import styles from './CardContent.module.scss';

type CardContentProps = {
	card: CardType;
};

const ListContent = ({ card }: CardContentProps) => {
	return (
		<Droppable droppableId={card.id.toString()} type="task">
			{(provided) => (
				<Box
					ref={provided.innerRef}
					{...provided.droppableProps}
					className={styles.CardContent}
				>
					{card.tasks.map((card, index) => (
						<Heading
							as={'h3'}
							size={'md'}
							key={index}
							className={styles.Task}
						>
							{card.title}
						</Heading>
					))}
					{provided.placeholder}
				</Box>
			)}
		</Droppable>
	);
};

export default ListContent;
