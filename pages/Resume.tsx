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
  Icon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaAccusoft } from "react-icons/fa";
import { ResumeProps } from "../components/ResumeProps";
import ResmueSkillProps from "../components/ResumeSkillProps";
import ResumeData from "../components/resumeData";
import ResumeSkillProps from "../components/ResumeSkillProps";
import ConfettiBg from "../components/ConfettiBg";

export const Resume = () => {
  return (
    <Flex
      bg={"gray.100"}
      bgImage={ConfettiBg.CONFETTI_LIGHT}
      bgAttachment={"fixed"}
      justify="center"
      align="center"
    >
      <Box p={{ base: 10, md: 20 }} as={Container} maxW={"5xl"} zindex={4}>
        <VStack spacing={"40px"}>
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
            <GridItem colSpan={3}>
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
    </Flex>
  );
};

export default Resume;
