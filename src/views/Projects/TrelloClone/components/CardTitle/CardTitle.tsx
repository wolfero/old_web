import { Box, Heading, Input } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';
import { BsTrashFill } from 'react-icons/bs';
import { StoreApi } from '../Board/Board';

import styles from './CardTitle.module.scss';

type CardTitleProps = {
	cardId: string;
	title: string;
	provided: DraggableProvided;
};

const CardTitle = ({ cardId, title, provided }: CardTitleProps) => {
	const [open, setOpen] = useState(false);
	const [newTitle, setNewTitle] = useState(title);
	const { updateCardTitle, removeCard } = useContext(StoreApi);

	const handleOnBlur = () => {
		updateCardTitle(newTitle, cardId);
		setOpen((prev) => !prev);
	};
	const handleDelete = () => removeCard(cardId);

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

export default CardTitle;
