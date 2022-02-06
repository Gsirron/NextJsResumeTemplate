import React from "react";
import {
  Flex,
  Text,
  VStack,
  GridItem,
  Box,
  Container,
  Grid,
  Heading,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import { ResumeProps } from "../components/ResumeProps";
import ResumeData from "../components/data/resumeData";
import ResumeSkillProps from "../components/ResumeSkillProps";

export const Resume = () => {
  return (
    <Flex
      bg={"gray.100"}
      bgImage={"/images/aboutbgwhite.svg"}
      bgAttachment={"fixed"}
      justify="center"
      align="center"
    >
      <Box
        p={{ base: 10, md: 20 }}
        as={Container}
        maxW={"5xl"}
        zindex={4}
        justify="space-around"
      >
        <Box>
          <VStack spacing={"40px"}>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(3, 1fr)",
              }}
              gap={{ base: 4, md: 10, xl: 10 }}
              mx={"10px"}
            >
              <GridItem rowSpan={2} colSpan={1}>
                <Heading
                  textColor={"black"}
                  fontSize={"2xl"}
                  textDecoration={"underline"}
                >
                  EDUCATION
                </Heading>
              </GridItem>
              {ResumeData.education.map((iteminfo) => (
                <ResumeProps key={iteminfo.heading} {...iteminfo} />
              ))}
            </Grid>
            <Divider borderBottom={"1px"} />
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
                <Heading
                  textColor={"black"}
                  fontSize={"2xl"}
                  textDecoration={"underline"}
                >
                  WORK
                </Heading>
              </GridItem>
              {ResumeData.work.map((iteminfo) => (
                <ResumeProps key={iteminfo.heading} {...iteminfo} />
              ))}
            </Grid>
            <Divider borderBottom={"1px"} />
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
              <GridItem colSpan={1}>
                <Heading
                  textColor={"blackAlpha.900"}
                  fontSize={"2xl"}
                  textDecoration={"underline"}
                >
                  FAVORITE TECH
                </Heading>
              </GridItem>
              <GridItem colSpan={{ base: 4, md: 3 }}>
                <Text textColor={"blackAlpha.900"} textAlign={"left"}>
                  {ResumeData.resumeStuff.techStatement}
                </Text>
              </GridItem>
              <GridItem colSpan={4}>
                <SimpleGrid
                  columns={{ base: 1, md: 4 }}
                  gap={{ base: 10, md: 15 }}
                  spacing={100}
                >
                  {ResumeData.resumeStuff.techSkills.map((iteminfo) => (
                    <ResumeSkillProps key={iteminfo.title} {...iteminfo} />
                  ))}
                </SimpleGrid>
              </GridItem>
            </Grid>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default Resume;
