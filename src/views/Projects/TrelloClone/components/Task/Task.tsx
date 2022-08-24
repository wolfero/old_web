import React, { memo } from 'react';
import { Heading } from '@chakra-ui/react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';

import { TaskType } from '../../model/TaskType';

import styles from './Task.module.scss';
import { BsTrashFill } from 'react-icons/bs';
import { removeTask } from '../../utils/taskManagement';

type RowProps = {
	task: TaskType;
	cardId: string;
	index: number;
};

export const Row = ({ task, cardId, index }: RowProps) => {
	if (!task) {
		return null;
	}

	return (
		<Draggable draggableId={task.id} index={index}>
			{(provided) => <Task provided={provided} index={index} cardId={cardId} task={task} />}
		</Draggable>
	);
};

type TaskProps = {
	task: TaskType;
	index: number;
	cardId: string;
	provided: DraggableProvided;
	isDragging?: boolean;
};

const Task = ({ task, index, cardId, provided }: TaskProps) => {
	if (!task) {
		return null;
	}

	const handleDelete = () => removeTask(index, cardId, task.id);

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
			<button className={styles.Button} onClick={handleDelete}>
				<BsTrashFill />
			</button>
		</Heading>
	);
};

export default Task;
