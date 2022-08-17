import React, { memo } from 'react';
import { Heading } from '@chakra-ui/react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';

import { TaskType } from '../../model/TaskType';

import styles from './Task.module.scss';

type RowProps = {
	task: TaskType;
	index: number;
};

export const Row = memo(function Row({ task, index }: RowProps) {
	if (!task) {
		return null;
	}

	return (
		<Draggable draggableId={task.id} index={index} key={task.id}>
			{(provided) => (
				<Task provided={provided} index={index} task={task} />
			)}
		</Draggable>
	);
});

type TaskProps = {
	task: TaskType;
	index: number;
	provided: DraggableProvided;
	isDragging?: boolean;
};

const Task = memo(function Task({ task, index, provided }: TaskProps) {
	if (!task) {
		return null;
	}

	return (
		<Heading
			as={'h3'}
			size={'md'}
			key={index}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
			ref={provided.innerRef}
			className={styles.Task}
		>
			{task.title}
		</Heading>
	);
});

export default Task;
