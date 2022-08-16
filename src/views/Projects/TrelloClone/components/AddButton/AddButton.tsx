import React, { useState } from 'react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import { Box, Button, Collapse, Input } from '@chakra-ui/react';

import styles from './AddButton.module.scss';

type AddButtonProps = {
	cardId?: string;
	type: string;
};

function AddButton({ cardId, type }: AddButtonProps) {
	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState('');
	const changeState = () => setOpen((prev) => !prev);

	return (
		<Box>
			<Collapse in={open}>
				<div className={styles.AddButtonContainer}>
					<Input
						className={styles.AddButtonText}
						placeholder={
							type === 'card'
								? 'Enter a title for this card...'
								: 'Enter list title...'
						}
						onChange={(e) => setTitle(e.target.value)}
						autoFocus
					/>
					<div className={styles.AddButtonGroup}>
						<Button
							bg={'blue.400'}
							color={'black'}
							_hover={{ bg: 'blue.500' }}
							onClick={() => changeState()}
						>
							Create
						</Button>
						<Button
							bg={'red.400'}
							color={'black'}
							_hover={{ bg: 'red.500' }}
							onClick={() => changeState()}
						>
							<CloseIcon />
						</Button>
					</div>
				</div>
			</Collapse>
			<Collapse in={!open}>
				<button
					onClick={changeState}
					className={
						type === 'card' ? styles.AddTask : styles.AddCard
					}
				>
					<AddIcon boxSize={'4'} />
					{type === 'card' ? 'Add a task' : 'Add another card'}
				</button>
			</Collapse>
		</Box>
	);
}

export default AddButton;
