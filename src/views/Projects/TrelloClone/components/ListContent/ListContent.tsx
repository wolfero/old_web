import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import { ListProps } from '../../model/ListProps';

import styles from './ListContent.module.scss';

type ListContentProps = {
	list: ListProps;
};

const ListContent = ({ list }: ListContentProps) => {
	return (
		<Droppable droppableId={list.id.toString()} type="task">
			{(provided) => (
				<Box
					ref={provided.innerRef}
					{...provided.droppableProps}
					className={styles.CardContent}
				>
					{list.cards.map((card, index) => (
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
