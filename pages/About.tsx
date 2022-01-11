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
} from "@chakra-ui/react";

import React from "react";

const About = () => {
  return (
    <Box bg={"gray.800"} position={"relative"}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: "none", lg: "flex" }}
        backgroundSize={"cover"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={"absolute"}
        width={"50%"}
        insetY={0}
        right={0}
      >
        <Flex
          bgGradient={"linear(to-r, gray.800 10%, transparent)"}
          w={"full"}
          h={"full"}
        />
      </Flex>
      <Container maxW={"4xl"} zIndex={2} position={"relative"}>
        <Grid
          m={{ base: 8, md: 20 }}
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={{ base: 4, md: 10, xl: 10 }}
        >
          <GridItem rowSpan={2} colSpan={1}></GridItem>
          <GridItem colSpan={2}>
            <Heading
              color={"white"}
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
            >
              About Me
            </Heading>
            <Text fontSize={"xl"} color={"gray.400"}>
              The NewLife™ technology allows you to monitor your crops and get
              complete insights at real time. The proprietary software/hardware
              ecosystem prevents your plants from getting neglected.
            </Text>
          </GridItem>
          <GridItem colSpan={2}></GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
