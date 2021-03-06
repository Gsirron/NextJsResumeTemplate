import { ReactNode } from "react";

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  Container,
  Box,
  Heading,
  Grid,
  GridItem,
  useColorModeValue,
  Avatar,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import NextLink from "next/link";
import { FaDownload } from "react-icons/fa";
import ResumeData from "../components/data/resumeData";

const About = () => {
  return (
    <Flex
      bg={useColorModeValue("gray.300", "gray.900")}
      pr={"5%"}
      bgImage={"/images/backgrounds/neuraldark.svg"}
      bgAttachment={"fixed"}
    >
      <Box as={Container} maxW={"5xl"}>
        <Grid
          m={{ base: 8, md: 20 }}
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={{ base: 4, md: 10 }}
          mx={"10px"}
        >
          <GridItem rowSpan={2} colSpan={1} mx={"auto"}>
            <Avatar
              position={"static"}
              src={"/images/profile/profileNL.jpg"}
              size={"2xl"}
            />
          </GridItem>
          <GridItem colSpan={2} w={"100%"}>
            <Heading mb={4} fontSize={{ base: "2xl", md: "3xl" }}>
              About Me
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} textColor={"gray.200"}>
              {ResumeData.home.bio}
            </Text>
          </GridItem>
          <GridItem colSpan={2}>
            <Stack
              py={{ base: 4, md: 10 }}
              direction={{ base: "column", md: "row" }}
            >
              <VStack align={"left"}>
                <Heading fontSize={{ base: "2xl", md: " 4xl" }}>
                  Contact Details
                </Heading>
                <Text pt={"4px"}>
                  {ResumeData.home.name} <br />
                  Australia <br /> Sydney NSW <br /> {ResumeData.contact.phone}
                </Text>
                <Link href={`mailto:${ResumeData.contact.email}`}>
                  {ResumeData.contact.email}
                </Link>
              </VStack>
              <Box p={"10px"} pl={{ base: 0, md: 20 }}>
                <a href={` ${ResumeData.contact.resume}`} target="_blank">
                  <Button
                    position={"static"}
                    leftIcon={<FaDownload />}
                    size={"lg"}
                    borderRadius={"md"}
                    bg={"green.500"}
                    fontWeight={700}
                  >
                    Download Resume
                  </Button>
                </a>
              </Box>
            </Stack>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
};

export default About;
