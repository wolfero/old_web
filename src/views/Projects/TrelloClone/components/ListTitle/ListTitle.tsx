import { Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

import styles from './ListTitle.module.scss';

type ListTitleProps = {
	title: string;
};

const ListTitle = ({ title }: ListTitleProps) => {

	return (
		<Heading
			as={'h2'}
			size={'lg'}
			className={styles.TitleList}
		>
			{title}
		</Heading>
	);
};

export default ListTitle;
