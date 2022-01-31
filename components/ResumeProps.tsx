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
        fontStyle={"italic"}
        as={"b"}
        fontWeight={350}
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
