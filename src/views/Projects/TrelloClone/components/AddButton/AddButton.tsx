import React, { useContext, useState } from 'react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import { Box, Button, Collapse, Input } from '@chakra-ui/react';

import styles from './AddButton.module.scss';
import { StoreApi } from '../Board/Board';

type AddButtonProps = {
	cardId?: string;
	type: string;
};

function AddButton({ cardId, type }: AddButtonProps) {
	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState('');
	const changeState = () => setOpen((prev) => !prev);
	const { addMoreCard, addMoreTask } = useContext(StoreApi);

	const handleSubmit = () => {
		if (type === 'task' && cardId) {
			addMoreTask(title, cardId);
		} else if (type === 'card') {
			addMoreCard(title);
		}
		setOpen(false);
		setTitle('');
	};

	return (
		<Box>
			<Collapse in={open}>
				<div className={styles.AddButtonContainer}>
					<Input
						className={styles.AddButtonText}
						value={title}
						placeholder={
							type === 'task'
								? 'Enter a title for this task...'
								: 'Enter a title for this card...'
						}
						onChange={(e) => setTitle(e.target.value)}
						onKeyPress={(e) => {
							if (e.key === 'Enter') handleSubmit();
						}}
						autoFocus
					/>
					<div className={styles.AddButtonGroup}>
						<Button
							bg={'blue.400'}
							color={'black'}
							_hover={{ bg: 'blue.500' }}
							onClick={handleSubmit}
						>
							Create
						</Button>
						<Button
							bg={'red.400'}
							color={'black'}
							_hover={{ bg: 'red.500' }}
							onClick={() => {
								changeState();
								setTitle('');
							}}
						>
							<CloseIcon />
						</Button>
					</div>
				</div>
			</Collapse>
			<Collapse in={!open}>
				<button
					onClick={changeState}
					className={type === 'task' ? styles.AddTask : styles.AddCard}
				>
					<AddIcon boxSize={'4'} />
					{type === 'task' ? 'Add a task' : 'Add another card'}
				</button>
			</Collapse>
		</Box>
	);
}

export default AddButton;
