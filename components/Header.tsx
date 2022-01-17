import { ReactNode } from "react";
import Scroll from "react-scroll";
import {
  Box,
  Flex,
  Link,
  Button,
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

const Links = [
  "Home",
  "About",
  "Resmue",
  "Projects",
  "Testimonials",
  "Contact",
];

const Header3 = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack zIndex={10}>
      <Center
        w="100%"
        position="fixed"
        as="header"
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
      >
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
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
              {isOpen == false ? (
                <Stack direction={"row"} spacing={7}>
                  <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <FaMoon /> : <FaSun />}
                  </Button>
                </Stack>
              ) : null}
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
