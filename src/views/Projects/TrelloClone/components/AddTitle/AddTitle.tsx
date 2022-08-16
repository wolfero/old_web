import React, { Dispatch, SetStateAction, useState } from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import { Button, Input, Textarea } from '@chakra-ui/react';

import styles from './AddTitle.module.scss';

type AddTitleProps = {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	listId?: string;
	type: string;
};

const AddTitle = ({ setOpen, listId, type }: AddTitleProps) => {
	const [title, setTitle] = useState('');
	const changeState = (title?: string) => {
		//saveTitle
		setOpen((prev) => !prev);
	};

	return (
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
					onClick={() => changeState(title)}
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
	);
};

export default AddTitle;
