import React from 'react';
import { Box } from '@chakra-ui/react';
import { Droppable } from 'react-beautiful-dnd';

import { CardType } from '../../model/CardType';
import Task, { Row } from '../Task/Task';

import styles from './CardContent.module.scss';

type CardContentProps = {
	card: CardType;
	index: number;
};

const CardContent = ({ card, index }: CardContentProps) => {
	return (
		<Droppable
			droppableId={card.id}
			mode="virtual"
			type="task"
			renderClone={(provided, snapshot, rubric) => (
				<Task
					index={index}
					cardId={card.id}
					task={card.tasks[rubric.source.index]}
					provided={provided}
				/>
			)}
		>
			{(provided) => (
				<Box
					ref={provided.innerRef}
					{...provided.droppableProps}
					className={styles.CardContent}
				>
					{card.tasks.map((task, index) => (
						<Row task={task} index={index} cardId={card.id} key={task.id} />
					))}
				</Box>
			)}
		</Droppable>
	);
};

export default CardContent;
