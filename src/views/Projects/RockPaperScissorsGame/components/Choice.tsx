import { Box, Button, Img } from '@chakra-ui/react';
import React, { MouseEventHandler } from 'react';

type ChoiceProps = {
	className: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
	iconLink: string;
};

const Choice = ({ className, onClick, iconLink }: ChoiceProps) => {
	return (
		<Box className={className}>
			<Button onClick={onClick}>
				<Img src={iconLink} />
			</Button>
		</Box>
	);
};

export default Choice;
