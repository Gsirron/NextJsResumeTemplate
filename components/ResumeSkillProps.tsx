import React, { ReactElement, ReactNode } from "react";

import {
  GridItem,
  Flex,
  Box,
  Heading,
  Text,
  Center,
  Stack,
  Icon,
  Image,
} from "@chakra-ui/react";

interface SkillProps {
  title: string;
  text: string;
  image: string;
}

const ResumeSkillProps = (props: SkillProps) => {
  const { title, text, image } = props;
  return (
    <Stack textAlign={"center"}>
      <Flex mx={"auto"} color={"white"} mb={1}>
        <Image src={image} w={40} h={40} alt={title} />
      </Flex>

      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default ResumeSkillProps;
