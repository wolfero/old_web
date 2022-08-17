import React, { memo } from 'react';
import { Box } from '@chakra-ui/react';
import { Droppable } from 'react-beautiful-dnd';

import { CardType } from '../../model/CardType';
import Task, { Row } from '../Task/Task';

import styles from './CardContent.module.scss';

type CardContentProps = {
	card: CardType;
	index: number;
};

const CardContent = memo(function CardContent({
	card,
	index,
}: CardContentProps) {
	return (
		<Droppable
			droppableId={card.id}
			mode="virtual"
			type="task"
			renderClone={(provided, snapshot, rubric) => (
				<Task
					index={index}
					task={card.tasks[rubric.source.index]}
					provided={provided}
					isDragging={snapshot.isDragging}
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
						<Row task={task} index={index} key={index} />
					))}
				</Box>
			)}
		</Droppable>
	);
});

export default CardContent;
