import React from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  GridItem,
  Box,
  Container,
  Grid,
  Heading,
  Divider,
  chakra,
  Spacer,
} from "@chakra-ui/react";
const test = [
  {
    heading: "University of Western Sydney",
    name: "Bachelor of Computer Science",
    text: "did work here",
    date: "2017 - 2020",
  },
  {
    heading: "University of Western Sydney",
    name: "Bachelor of Computer Science",
    text: "did work here",
    date: "2017 - 2020",
  },
];
interface ResumeProps {
  heading: string;
  name: string;
  text: string;
  date: string;
}

export const ResumeProps = (props: ResumeProps) => {
  const { heading, name, text, date } = props;
  return (
    <Box>
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
    </Box>
  );
};

export const Resume = () => {
  return (
    <Box p={{ base: 10, md: 20 }} as={Container} maxW={"5xl"}>
      <Grid
        w={"full"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={{ base: 4, md: 10, xl: 10 }}
        mx={"10px"}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <Heading textDecoration={"underline"}>Education</Heading>
          <Divider />
        </GridItem>
        <GridItem colSpan={2}>
          {test.map((iteminfo) => (
            <ResumeProps {...iteminfo} />
          ))}
        </GridItem>
      </Grid>
      <Grid
        w={"full"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={{ base: 4, md: 10, xl: 10 }}
        mx={"10px"}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <Heading textAlign={"center"} textDecoration={"underline"}>
            Work
          </Heading>
          <Divider />
        </GridItem>
        <GridItem colSpan={2}>
          {test.map((iteminfo) => (
            <ResumeProps {...iteminfo} />
          ))}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Resume;
