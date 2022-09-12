import React, { useContext, useState } from 'react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import { Box, Button, Collapse, Input } from '@chakra-ui/react';

import { StoreApi } from '../Board/Board';

import styles from './AddButton.module.scss';

type AddButtonProps = {
	listId?: string;
	type: string;
};

function AddButton({ listId, type }: AddButtonProps) {
	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState('');
	const changeState = () => setOpen((prev) => !prev);
	const { addList, addCard } = useContext(StoreApi);

	const handleSubmit = () => {
		if (type === 'card' && listId) {
			addCard(title, listId);
		} else if (type === 'list') {
			addList(title);
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
							type === 'card'
								? 'Enter a title for this card...'
								: 'Enter a title for this list...'
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
					className={type === 'card' ? styles.AddCard : styles.AddList}
				>
					<AddIcon boxSize={'4'} />
					{type === 'card' ? 'Add a card' : 'Add another list'}
				</button>
			</Collapse>
		</Box>
	);
}

export default AddButton;
