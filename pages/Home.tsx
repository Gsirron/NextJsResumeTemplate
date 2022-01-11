import React from 'react'
import {
	Stack,
	Flex,
	Button,
	Text,
	VStack,
	useBreakpointValue,
} from '@chakra-ui/react';

const Home = () => {
	return (
		<Flex
			w={'full'}
			h={'100vh'}
			backgroundSize={'cover'}
			backgroundPosition={'center center'}
		>
			<VStack
				w={'full'}
				justify={'center'}
			>
				<Text>
					Home
				</Text>
			</VStack>

		</Flex>
	)
}

export default Home
