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
      <Heading textColor={"gray.800"} fontSize={{ base: "2xl", md: "3xl" }}>
        {heading}
      </Heading>
      <Heading
        textColor={"black"}
        mt={"10px"}
        fontStyle={"italic"}
        fontWeight={500}
        fontSize={{ base: "md", md: "lg" }}
        size="lg"
        lineHeight={1}
      >
        {`${name} • ${date}`}
      </Heading>
      <Text textColor={"black"} mt={3}>
        {text}
      </Text>
    </GridItem>
  );
};
