import React, { useContext, useState } from 'react';
import { Heading, Input } from '@chakra-ui/react';
import { Draggable } from 'react-beautiful-dnd';
import { BsTrashFill } from 'react-icons/bs';

import { StoreApi } from '../Board/Board';
import { RowProps, TaskProps } from '../../model/TaskType';

import styles from './Task.module.scss';

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

const Task = ({ task, index, cardId, provided }: TaskProps) => {
	if (!task) {
		return null;
	}

	const [open, setOpen] = useState(false);
	const [newTitle, setNewTitle] = useState(task.title);
	const { updateTaskTitle, removeTask } = useContext(StoreApi);
	const handleOnBlur = (savedTitle: string) => {
		setOpen((prev) => !prev);
		updateTaskTitle(savedTitle, index, cardId, task.id);
		setNewTitle(savedTitle);
	};
	const handleDelete = () => removeTask(cardId, task.id);

	return (
		<>
			{open ? (
				<Input
					type={'text'}
					defaultValue={newTitle}
					onBlur={(e) => handleOnBlur(e.target.value)}
					onKeyPress={(e) => {
						if (e.key === 'Enter') {
							const target = e.target as HTMLInputElement;
							handleOnBlur(target.value);
						}
					}}
					autoFocus
				/>
			) : (
				<Heading
					as={'h3'}
					size={'md'}
					key={task.id}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					className={styles.Task}
					onClick={() => setOpen((prev) => !prev)}
				>
					{newTitle}
					<button className={styles.Button} onClick={handleDelete}>
						<BsTrashFill />
					</button>
				</Heading>
			)}
		</>
	);
};

export default Task;
