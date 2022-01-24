import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

interface IProjectProps {
  ProjectImage: string;
  ProjectName: string;
  ProjectDescription: string;
  ProjectLink: string;
}

const ProjectProps = (props: IProjectProps) => {
  const { ProjectName, ProjectImage, ProjectDescription, ProjectLink } = props;
  return (
    <Box pos={"relative"}>
      <a href={ProjectLink}>
        <Image
          src={ProjectImage}
          _hover={{
            opacity: 0.3,
          }}
        />
        <Box>
          <Heading>{ProjectName}</Heading>
          <Text>{ProjectDescription}</Text>
        </Box>
      </a>
    </Box>
  );
};

export default ProjectProps;
