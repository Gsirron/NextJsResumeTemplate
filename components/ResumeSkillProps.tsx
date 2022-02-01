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
        <Image src={image} boxSize="140px" alt={title} />
      </Flex>

      <Text
        fontWeight={700}
        fontSize={{ base: "xl", md: "3xl" }}
        fontStyle={""}
      >
        {title}
      </Text>
      <Text>{text}</Text>
    </Stack>
  );
};

export default ResumeSkillProps;
