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
  projectImage: "/images/skill_logos/csharp.svg",
  projectName: "testName",
  projectDescription: "TestDescription",
  projectLink: "",
};

export const Projects = () => {
  return (
    <Flex
      bg={useColorModeValue("gray.300", "gray.700")}
      bgImage={"/images/backgrounds/neuraldark.svg"}
      bgAttachment="fixed"
    >
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
