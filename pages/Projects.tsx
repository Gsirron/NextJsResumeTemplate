import {
  Box,
  Flex,
  Container,
  useColorModeValue,
  VStack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import ProjectProps from "../components/ProjectProps";

const testProjectProps = {
  ProjectImage: "/images/skill_logos/csharp.svg",
  ProjectName: "testName",
  ProjectDescription: "TestDescription",
  ProjectLink: "",
};

export const Projects = () => {
  return (
    <Flex bg={useColorModeValue("gray.300", "gray.700")}>
      <Box as={Container} maxW={"5xl"}>
        <VStack py={{ base: 10, md: 30 }}>
          <Box pb={{ base: 10, md: 30 }}>
            <Heading>Check out some of my Projects</Heading>
          </Box>
          <SimpleGrid
            spacing={{ base: 10, md: "auto" }}
            columns={{ base: 1, md: 4 }}
          >
            <ProjectProps {...testProjectProps} />
            <ProjectProps {...testProjectProps} />
            <ProjectProps {...testProjectProps} />
            <ProjectProps {...testProjectProps} />
          </SimpleGrid>
        </VStack>
      </Box>
    </Flex>
  );
};
