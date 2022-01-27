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
} from "@chakra-ui/react";

const axios = require("axios");
const Home = () => {
  let [homeData, setHomeData] = useState<any[]>([]);

  async function getHomeData() {
    try {
      const res = await axios.get("resumeData.json");
      console.log(res.data.home);
      setHomeData(res.data.home);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getHomeData();
  }, []);

  return (
    <Flex
      w={"full"}
      h={"80vh"}
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
            {`Hi I'm ${homeData.name}`}
          </Heading>
          <Text
            textAlign={"center"}
            color={"white"}
            // fontWeight={300}
            lineHeight={1.2}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            {`I'm a ${homeData.occupation}`}
          </Text>
          <Divider position={"static"} />
          <Center></Center>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Home;
