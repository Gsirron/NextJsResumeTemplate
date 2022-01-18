import React from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  GridItem,
  Box,
  Container,
  Grid,
  Heading,
  Divider,
  chakra,
  Spacer,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaAccusoft } from "react-icons/fa";
import { ResumeProps } from "../components/ResumeProps";
import ResmueSkillProps from "../components/ResumeSkillProps";

const test = [
  {
    heading: "University of Western Sydney",
    name: "Bachelor of Computer Science",
    text: "did work here",
    date: "2017 - 2020",
  },
  {
    heading: "University of Western Sydney",
    name: "Bachelor of Computer Science",
    text: "did work here",
    date: "2017 - 2020",
  },
];

export const Resume = () => {
  return (
    <Flex bg={useColorModeValue("gray.200", "gray.800")}>
      <Box p={{ base: 10, md: 20 }} as={Container} maxW={"5xl"}>
        <VStack spacing={"40px"}>
          <Grid
            w={"full"}
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            gap={{ base: 4, md: 10, xl: 10 }}
            mx={"10px"}
          >
            <GridItem rowSpan={2} colSpan={1}>
              <Heading fontSize={"2xl"} textDecoration={"underline"}>
                EDUCATION
              </Heading>
            </GridItem>
            {test.map((iteminfo) => (
              <ResumeProps {...iteminfo} />
            ))}
          </Grid>
          <Divider />

          <Grid
            w={"full"}
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            gap={{ base: 4, md: 10, xl: 10 }}
            mx={"10px"}
          >
            <GridItem rowSpan={2} colSpan={1}>
              <Heading fontSize={"2xl"} textDecoration={"underline"}>
                WORK
              </Heading>
            </GridItem>
            {test.map((iteminfo) => (
              <ResumeProps {...iteminfo} />
            ))}
          </Grid>
          <Divider />

          <Grid
            w={"full"}
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            gap={{ base: 4, md: 10, xl: 10 }}
            mx={"10px"}
          >
            <GridItem colSpan={1}>
              <Heading fontSize={"2xl"} textDecoration={"underline"}>
                FAVORITE TECH
              </Heading>
            </GridItem>
            <GridItem colSpan={3}>
              <Text textAlign={"left"}>dogs are tasty at times</Text>
            </GridItem>
            <GridItem colSpan={4}>
              <SimpleGrid columns={{ base: 1, md: 4 }}>
                <ResmueSkillProps
                  image={"/images/skill_logos/cpp.svg"}
                  title={"TEST 1"}
                  text={"test stuff"}
                ></ResmueSkillProps>
                <ResmueSkillProps
                  image={"/images/skill_logos/cpp.svg"}
                  title={"TEST 1"}
                  text={"test stuff"}
                ></ResmueSkillProps>
                <ResmueSkillProps
                  image={"/images/skill_logos/cpp.svg"}
                  title={"TEST 1"}
                  text={"test stuff"}
                ></ResmueSkillProps>
                <ResmueSkillProps
                  image={"/images/skill_logos/cpp.svg"}
                  title={"TEST 1"}
                  text={"test stuff"}
                ></ResmueSkillProps>
              </SimpleGrid>
            </GridItem>
          </Grid>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Resume;
