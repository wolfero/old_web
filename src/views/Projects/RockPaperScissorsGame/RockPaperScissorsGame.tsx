import React, { useEffect, useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';

import styles from './RockPaperScissorsGame.module.scss';

const saveToLocalStorage = (tag: string, element: string) => {
	localStorage.setItem(tag, element);
};

const loadFromLocalStorage = (tag: string) => {
	const localStorageElement = localStorage.getItem(tag);
	const storagesElement = parseInt(localStorageElement ? localStorageElement : '0');
	return storagesElement;
};

const RockPaperScissorsGame = () => {
	const [wins, setWins] = useState(0);
	const [losses, setLosses] = useState(0);
	const [draws, setDraws] = useState(0);
	const [humanChoice, setHumanChoice] = useState('');
	const [computerChoice, setComputerChoice] = useState('');
	const [verdict, setVerdict] = useState('');
	const LoadGame = () => {
		setWins(loadFromLocalStorage('wins'));
		setDraws(loadFromLocalStorage('draws'));
		setLosses(loadFromLocalStorage('losses'));
	};
	const SaveGame = () => {
		saveToLocalStorage('wins', wins.toString());
		saveToLocalStorage('losses', losses.toString());
		saveToLocalStorage('draws', draws.toString());
	};
	const resetGame = () => {
		setHumanChoice('');
		setComputerChoice('');
		setVerdict('');
	};

	const ProcessResult = (outCome: string) => {
		switch (outCome) {
			case 'win':
				setWins(wins + 1);
				setVerdict('You win!');
				break;
			case 'loss':
				setLosses(losses + 1);
				setVerdict('You lose!');
				break;
			case 'draw':
				setDraws(draws + 1);
				setVerdict('It is a draw!');
				break;
		}
	};

	const winPercentage = () => {
		const totalGames = wins + losses + draws;
		const winPercentage = (wins / totalGames) * 100;
		return winPercentage;
	};

	const outComes = {
		rock: {
			rock: 'draw',
			paper: 'loss',
			scissors: 'win',
		},
		paper: {
			rock: 'win',
			paper: 'draw',
			scissors: 'loss',
		},
		scissors: {
			rock: 'loss',
			paper: 'win',
			scissors: 'draw',
		},
	};

	const Play = (choice: string) => {
		setHumanChoice(choice);

		const choices = ['rock', 'paper', 'scissors'];
		const random = Math.floor(Math.random() * choices.length);
		setComputerChoice(choices[random]);

		const outCome = outComes[humanChoice][computerChoice];
		ProcessResult(outCome);
		SaveGame();
	};

	useEffect(() => {});

	return (
		<>
			<Heading textAlign={'center'}>🚧 In development</Heading>
			<Box className={styles.Game} px={"20"} py={"5"}>
				
			</Box>
		</>
	);
};

export default RockPaperScissorsGame;
