import React from 'react';
import { Box } from '@chakra-ui/react';
import { Droppable } from 'react-beautiful-dnd';

import { ListType } from '../../model/ListType';
import Card, { Row } from '../Card/Card';

import styles from './ListContent.module.scss';

type ListContentProps = {
	list: ListType;
};

const ListContent = ({ list }: ListContentProps) => {
	return (
		<Droppable
			droppableId={list.id}
			mode="virtual"
			type="card"
			renderClone={(provided, snapshot, rubric) => (
				<Card listId={list.id} card={list.cards[rubric.source.index]} provided={provided} />
			)}
		>
			{(provided) => (
				<Box
					ref={provided.innerRef}
					{...provided.droppableProps}
					className={styles.ListContent}
				>
					{list.cards.map((task, index) => (
						<Row card={task} index={index} listId={list.id} key={task.id} />
					))}
				</Box>
			)}
		</Droppable>
	);
};

export default ListContent;
