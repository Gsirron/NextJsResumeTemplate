import { ReactNode } from "react";
import Scroll from "react-scroll";
import {
  Box,
  Flex,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  HStack,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaMoon, FaSun } from "react-icons/fa";
import Navlink from "./Navlink";

const Links = ["Home", "About", "Resume", "Projects", "Contact"];

const Header3 = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack zIndex={10}>
      <Center
        zIndex={10}
        w="100%"
        position={"fixed"}
        as="header"
        bg={useColorModeValue("gray.300", "gray.900")}
        px={10}
        borderBottom={"1px"}
      >
        <Flex h={"55px"} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack
            spacing="24px"
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <HStack alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <Navlink key={link}>{link}</Navlink>
                ))}
              </HStack>
            </HStack>

            <Flex alignItems={"center"}>
              {/* uncomment this if you want a light/dark mode button
               {isOpen == false ? (
                <Stack direction={"row"} spacing={7}>
                  <Button onClick={toggleColorMode}>
                    {colorMode === "dark" ? <FaMoon /> : <FaSun />}
                  </Button>
                </Stack>
              ) : null} */}
            </Flex>
          </HStack>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Navlink key={link}>{link}</Navlink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Center>
    </VStack>
  );
};

export default Header3;
