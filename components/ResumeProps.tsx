import React from "react";

import { GridItem, Flex, Box, Heading, Text } from "@chakra-ui/react";

interface ResumeProps {
  heading: string;
  name: string;
  text: string;
  date: string;
}

export const ResumeProps = (props: ResumeProps) => {
  const { heading, name, text, date } = props;
  return (
    <GridItem colSpan={2}>
      <Heading>{heading}</Heading>
      <Flex>
        <Heading fontSize={{ base: "md", md: "lg" }} as={"h3"}>
          {name}&nbsp;•&nbsp;
        </Heading>
        <Heading fontSize={{ base: "md", md: "lg" }} as={"h3"}>
          {date}
        </Heading>
      </Flex>
      <Text>{text}</Text>
    </GridItem>
  );
};
