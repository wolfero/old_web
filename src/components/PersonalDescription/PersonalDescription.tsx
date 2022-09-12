import { Box, Heading, Image, Text } from '@chakra-ui/react';

import styles from './PersonalDescription.module.scss';

const PersonalDescription = () => {
	return (
		<Box className={styles.Article} as={'article'}>
			<Heading as="h2" className={styles.Title}>
				About me
			</Heading>
			<Box className={styles.Section} as={'section'}>
				<Box className={styles.PersonalFoto}>
					<Image
						className={styles.Foto}
						src={'/assets/about/personal-image.jpg'}
						alt="Home image"
					/>
				</Box>
				<Box marginTop={{ base: '5', sm: '2' }} className={styles.Content}>
					<Text className={styles.Text}>
						Hello! My name is Frantisek Klucar, the diminutive of my name is Fero.
						I&apos;m a Slovak living since 2006 in Tenerife. Ever since I was a kid,
						I&apos;ve been interested in computers.
					</Text>
					<Text className={styles.Text}>
						When I entered the higher cycle of web application development, I fell in
						love with programming. The first year they taught us to program in C# and
						PHP as backend languages. In the second year they added Java to the Backend
						and JavaScript for the Frontend. I&apos;ve always been better at the
						Frontend side than the Backend, but I keep forcing myself to improve in one
						or the other.
					</Text>
					<Text className={styles.Phrase}>
						I&apos;m currently studying React by myself, how to do TDD on the Frontend
						side and TypeScript.
					</Text>
				</Box>
			</Box>
			<Heading as="h2" className={styles.Title}>
				My family
			</Heading>
			<Box className={styles.Section} as={'section'}>
				<Box marginTop={{ base: '5', sm: '2' }} className={styles.Content}>
					<Text className={styles.Text}>
						My father is an important part of my life. I&apos;m very proud to have my
						father. He is a hardworking person who has taught me those principles and
						without whom I would not be where I am today. I can never thank him enough
						for everything he has given me and continues to give me.
					</Text>
				</Box>
				<Box className={styles.FotoBox}>
					<Image
						className={styles.Foto}
						src={'/assets/about/father-image.jpg'}
						alt="Home image"
					/>
				</Box>
			</Box>
			<Box className={styles.Section} as={'section'}>
				<Box className={styles.FotoBox}>
					<Image
						className={styles.Foto}
						src={'/assets/about/bobby-young.webp'}
						alt="Home image"
					/>
				</Box>
				<Box marginTop={{ base: '5', sm: '2' }} className={styles.Content}>
					<Text className={styles.Text}>
						This is Bobby, a 1 year old American Staffordshire. Is the life of the party
						in the house and we never get bored with him. He loves playing with balls,
						passionate about playing tug of war and going hiking. Can&apos;t resist
						DentalLife, his favorite snack that helps him clean those big fangs.
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default PersonalDescription;
