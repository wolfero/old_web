import { Box, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';
import { BsThreeDots, BsTrashFill } from 'react-icons/bs';

import styles from './CardTitle.module.scss';

type CardTitleProps = {
	title: string;
	provided: DraggableProvided;
};

const CardTitle = ({ title, provided }: CardTitleProps) => {
	const [open, setOpen] = useState(false);
	// const [openOption, setOpenOption] = useState(false);
	const [newTitle, setNewTitle] = useState(title);

	const handleOnBlur = () => {
		setOpen((prev) => !prev);
	};

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
					<button
						className={styles.Button}
						// onClick={() => setOpenOption((prev) => !prev)}
						onClick={() => console.log('deleted card')} //TODO DELETE CARD
					>
						{/* <BsThreeDots /> */}
						<BsTrashFill />
					</button>
					{/* {openOption && (
						//ClickOutComponent => https://www.npmjs.com/package/react-onclickout
						<ClickOutComponent
							onClickOut={(e) => {
								setOpenOption((prev) => !prev);
							}}
						>
							<ul>
								<li
									onClick={() => {
										setOpenOption((curr) => !curr);
									}}
								>
									Delete Card
								</li>
							</ul>
						</ClickOutComponent>
					)} */}
				</Box>
			)}
		</>
	);
};

export default CardTitle;
