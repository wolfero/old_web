import { AddIcon } from '@chakra-ui/icons';
import { Box, Collapse } from '@chakra-ui/react';
import React, { useState } from 'react';

import AddTitle from '../AddTitle/AddTitle';
import styles from './AddButton.module.scss';

type AddButtonProps = {
	listId?: string;
	type: string;
};

function AddButton({ listId, type }: AddButtonProps) {
	const [open, setOpen] = useState(false);
	const changeState = () => setOpen((prev) => !prev);

	return (
		<Box>
			<Collapse in={open}>
				<AddTitle setOpen={setOpen} listId={listId} type={type} />
			</Collapse>
			<Collapse in={!open}>
				<button
					onClick={changeState}
					className={
						type === 'card' ? styles.AddCard : styles.AddList
					}
				>
					<AddIcon boxSize={'4'} />
					{type === 'card' ? 'Add a card' : 'Add another list'}
				</button>
			</Collapse>
		</Box>
	);
}

export default AddButton;
