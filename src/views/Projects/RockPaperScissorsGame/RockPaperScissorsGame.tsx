import React, { useEffect, useState } from 'react';
import { Box, Button, Heading, Img, Text } from '@chakra-ui/react';

import styles from './RockPaperScissorsGame.module.scss';

const iconLinks = [
	'/assets/projects/RockPaperScissorsGame/RockIcon.svg',
	'/assets/projects/RockPaperScissorsGame/PaperIcon.svg',
	'/assets/projects/RockPaperScissorsGame/ScissorsIcon.svg',
];

const choices = [
	{ type: 'rock', className: styles.Rock, iconLink: iconLinks[0] },
	{ type: 'paper', className: styles.Paper, iconLink: iconLinks[1] },
	{ type: 'scissors', className: styles.Scissors, iconLink: iconLinks[2] },
];

const RockPaperScissorsGame = () => {
	const [wins, setWins] = useState(0);
	const [draws, setDraws] = useState(0);
	const [losses, setLosses] = useState(0);
	const [winRate, setWinRate] = useState(0);
	const [gameCount, setGameCount] = useState(0);
	const [userChoice, setUserChoice] = useState('');
	const [computerChoice, setComputerChoice] = useState('');
	const [verdict, setVerdict] = useState('');

	const resetGame = () => {
		setWins(0);
		setDraws(0);
		setLosses(0);
		setWinRate(0);
		setVerdict('');
		setUserChoice('');
		setComputerChoice('');
	};
	const winPercentage = () => {
		if (gameCount !== 0) {
			const winPercentage = Math.floor((wins / gameCount) * 100);
			setWinRate(winPercentage);
		}
	};
	const generateComputerChoice = () => {
		const choices = ['rock', 'paper', 'scissors'];
		const randomNumber = Math.floor(Math.random() * choices.length);
		const randomChoice = choices[randomNumber];
		setComputerChoice(randomChoice);
	};

	interface OutComes {
		rock: {
			rock: string;
			paper: string;
			scissors: string;
		};
		paper: {
			rock: string;
			paper: string;
			scissors: string;
		};
		scissors: {
			rock: string;
			paper: string;
			scissors: string;
		};
	}
	const outComes: OutComes = {
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

	const checkResult = () => {
		setGameCount((prev) => prev + 1);
		const outCome = outComes[userChoice as keyof OutComes];
		const result: string = outCome[computerChoice as keyof OutComes];
		switch (result) {
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
	const handleClick = (value: string) => {
		setUserChoice(value);
		generateComputerChoice();
	};

	useEffect(() => {
		winPercentage();
	}, [gameCount]);

	useEffect(() => {
		const choicesAreNotEmpty = userChoice !== '' && computerChoice !== '';
		if (choicesAreNotEmpty) {
			checkResult();
		}
	}, [computerChoice]);

	return (
		<Box className={styles.Game} px={'20'} py={'5'}>
			<Heading textAlign={'center'}>Rock, Paper, Scissors Game</Heading>
			<Box className={styles.Dashboard}>
				{choices.map((choice, index) => {
					return (
						<Box key={index} className={choice.className}>
							<Button onClick={() => handleClick(choice.type)}>
								<Img src={choice.iconLink} />
							</Button>
						</Box>
					);
				})}
			</Box>
			{verdict ? (
				<Box className={styles.Result}>
					<Heading textAlign={'center'}>{verdict}</Heading>
					<Heading color={'green.500'}>Your pick: {userChoice}</Heading>
					<Heading color={'red.500'}>Computer pick: {computerChoice}</Heading>
					<Box className={styles.Restart}>
						<Button
							bg="red.500"
							_hover={{
								bg: 'red.400',
							}}
							onClick={resetGame}
						>
							Reset game
						</Button>
					</Box>
				</Box>
			) : null}
			<Heading className={styles.Score}>
				<span>Wins: {wins}</span>
				<span>Losses: {losses}</span>
				<span>Draws: {draws}</span>
			</Heading>
			<Heading className={styles.WinRate}>Win Rate: {winRate}%</Heading>
		</Box>
	);
};

export default RockPaperScissorsGame;
