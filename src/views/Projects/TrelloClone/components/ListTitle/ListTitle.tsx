import { Box, Heading, Input } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';
import { BsTrashFill } from 'react-icons/bs';

import { StoreApi } from '../Board/Board';

import styles from './ListTitle.module.scss';

type ListTitleProps = {
	listId: string;
	title: string;
	provided: DraggableProvided;
};

const ListTitle = ({ listId, title, provided }: ListTitleProps) => {
	const [open, setOpen] = useState(false);
	const [newTitle, setNewTitle] = useState(title);
	const { updateListTitle, removeList } = useContext(StoreApi);

	const handleOnBlur = () => {
		updateListTitle(newTitle, listId);
		setOpen((prev) => !prev);
	};
	const handleDelete = () => removeList(listId);

	return (
		<>
			{open ? (
				<Input
					type={'text'}
					value={newTitle}
					onChange={(e) => setNewTitle(e.target.value)}
					onBlur={handleOnBlur}
					onKeyPress={(e) => {
						if (e.key === 'Enter') handleOnBlur();
					}}
					autoFocus
				/>
			) : (
				<Box className={styles.Title}>
					<Heading
						as={'h2'}
						size={'lg'}
						className={styles.Text}
						{...provided.dragHandleProps}
						onClick={() => setOpen((prev) => !prev)}
					>
						{newTitle}
					</Heading>
					<button className={styles.Button} onClick={handleDelete}>
						<BsTrashFill />
					</button>
				</Box>
			)}
		</>
	);
};

export default ListTitle;
