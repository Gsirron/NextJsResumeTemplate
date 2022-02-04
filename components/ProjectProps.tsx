import { Box, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineLink } from "react-icons/ai";

interface IProjectProps {
  projectImage: string;
  projectName: string;
  projectDescription: string;
  projectLink: string;
}

const ProjectProps = (props: IProjectProps) => {
  const { projectName, projectImage, projectDescription, projectLink } = props;
  return (
    <a href={projectLink}>
      <Box
        _hover={{
          ".inner": { opacity: 1 },
          ".outer": { opacity: 0.2 },
        }}
      >
        <VStack
          position={"absolute"}
          className="inner"
          pt={"10px"}
          textAlign={"center"}
          boxSize={"200px"}
          sx={{ opacity: 0 }}
        >
          <Heading fontSize={{ base: "xl", md: "2xl" }}>{projectName}</Heading>
          <Text fontSize={{ base: "md", md: "lg" }}>{projectDescription}</Text>
          <Icon as={AiOutlineLink} boxSize={6} />
        </VStack>
        <Box
          className="outer"
          boxSize={"200px"}
          pos={"relative"}
          bgSize={"200px"}
          bgImage={projectImage}
          bgPosition={"center"}
          bgRepeat={"no-repeat"}
        ></Box>
      </Box>
    </a>
  );
};

export default ProjectProps;
