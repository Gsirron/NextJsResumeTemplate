import { ReactNode } from "react";

import {
	Stack,
	Flex,
	Button,
	Text,
	VStack,
	useBreakpointValue,
} from '@chakra-ui/react';

import React from 'react'

const About = () => {
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
					About
				</Text>
			</VStack>

		</Flex>
	)
}

export default About
