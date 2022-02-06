import React, { useState, useEffect } from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
  Divider,
  Center,
  Container,
  useBreakpoint,
  ScaleFade,
} from "@chakra-ui/react";
import ResumeData from "../components/data/resumeData";
import SocialButton from "../components/SocialButton";

const Home = () => {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      flex={1}
      // bgAttachment={"fixed"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      backgroundImage={"/images/frontbg2.jpg"}
    >
      <VStack
        as={Container}
        maxW={"5xl"}
        w={"full"}
        justify={"center"}
        px={{ base: 4, md: 8 }}
      >
        <Stack
          maxW={"2xl"}
          textAlign={"center"}
          spacing={6}
          bg={"blackAlpha.600"}
          borderRadius={"2em"}
          py={{ base: 6, md: 10 }}
          px={{ base: 0, md: 10 }}
        >
          <Heading
            alignContent={"center"}
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={{ base: "4xl", md: "6xl" }}
          >
            {`I'm ${ResumeData.home.name}`}
          </Heading>
          <Text
            textAlign={"center"}
            color={"white"}
            // fontWeight={300}
            lineHeight={1.2}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            {`I'm a ${ResumeData.home.occupation} based in ${ResumeData.contact.city}`}
          </Text>
          <Divider position={"static"} />
          <Center></Center>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Home;
