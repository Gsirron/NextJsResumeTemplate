import { Box, Center, Heading, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineLink } from "react-icons/ai";
interface IProjectProps {
  ProjectImage: string;
  ProjectName: string;
  ProjectDescription: string;
  ProjectLink: string;
}

const ProjectProps = (props: IProjectProps) => {
  const { ProjectName, ProjectImage, ProjectDescription, ProjectLink } = props;
  return (
    <a href={ProjectLink}>
      <Box
        _hover={{
          ".inner": { opacity: 1 },
          ".outer": { opacity: 0.3 },
        }}
      >
        <Box
          position={"absolute"}
          className="inner"
          pt={"10px"}
          textAlign={"center"}
          boxSize={"200px"}
          sx={{ opacity: 0 }}
        >
          <Heading fontSize={{ base: "xl", md: "2xl" }}>{ProjectName}</Heading>
          <Text fontSize={{ base: "md", md: "lg" }}>{ProjectDescription}</Text>
          <Icon as={AiOutlineLink} boxSize={6} />
        </Box>
        <Box
          position={"absolute"}
          className="outer"
          boxSize={"200px"}
          pos={"relative"}
          bgSize={"200px"}
          bgImage={ProjectImage}
          bgPosition={"center"}
          bgRepeat={"no-repeat"}
        ></Box>
      </Box>
    </a>
  );
};

export default ProjectProps;
