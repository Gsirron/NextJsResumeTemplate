import React from "react";

import { GridItem, Flex, Box, Heading, Text } from "@chakra-ui/react";

interface IResumeProps {
  heading: string;
  name: string;
  text: string;
  date: string;
}

export const ResumeProps = (props: IResumeProps) => {
  const { heading, name, text, date } = props;
  return (
    <GridItem colSpan={2}>
      <Heading fontSize={{ base: "2xl", md: "3xl" }}>{heading}</Heading>
      <Heading
        mt={"10px"}
        fontStyle={"italic"}
        fontWeight={500}
        fontSize={{ base: "md", md: "lg" }}
        size="lg"
        lineHeight={1}
      >
        {`${name} • ${date}`}
      </Heading>
      <Text>{text}</Text>
    </GridItem>
  );
};
