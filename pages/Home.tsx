import React from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      flex={1}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      backgroundImage={"/images/frontbg2.jpg"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"center"} spacing={6}>
          <Heading
            alignContent={"center"}
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "4xl", md: "6xl" })}
          >
            I'm Norris Luong
          </Heading>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
          >
            I'm a full stack web devloper based in Sydney Australia.
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Home;
