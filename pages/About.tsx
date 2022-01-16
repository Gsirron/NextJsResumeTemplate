import { ReactNode } from "react";

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Container,
  Box,
  Heading,
  SimpleGrid,
  Grid,
  GridItem,
  useColorModeValue,
  Center,
  Spacer,
} from "@chakra-ui/react";

import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <Flex bg={useColorModeValue("gray.100", "gray.900")} w={"100%"}>
      <Box as={Container} maxW={"5xl"} pb={"40px"}>
        <Grid
          m={{ base: 8, md: 20 }}
          h="200px"
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={{ base: 4, md: 10, xl: 10 }}
        >
          <GridItem rowSpan={2} colSpan={1}></GridItem>
          <GridItem colSpan={2}>
            <Heading mb={4} fontSize={{ base: "2xl", md: "3xl" }}>
              About me
            </Heading>
            <Text fontSize={"lg"}>
              The NewLife™ technology allows you to monitor your crops and get
              complete insights at real time. The proprietary software/hardware
              ecosystem prevents your plants from getting neglected.
            </Text>
          </GridItem>
          <GridItem colSpan={2}>
            <Stack
              py={{ base: 4, md: 10 }}
              direction={{ base: "column", md: "row" }}
            >
              <VStack align={"left"}>
                <Heading fontSize={{ base: "xl", md: " 3xl" }}>Contact</Heading>
                <Text pt={"4px"}>
                  Norris Luong <br /> Australia <br /> Chipping Norton NSW 2170
                </Text>
                <Text>0478162776</Text>
                <Link href="mailto:norris.luong@hotmail.com">
                  Norris.luong@hotmail.com
                </Link>
              </VStack>
              <Box p={"10px"}>
                <Box
                  px={"20px"}
                  as="button"
                  h={"50px"}
                  borderRadius={"md"}
                  bg={"green.500"}
                  fontWeight={700}
                >
                  Download Resume
                </Box>
              </Box>
            </Stack>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
};

export default About;
