import { ReactNode } from "react";
import Scroll from "react-scroll";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  HStack,
  Spacer,
  LinkBox,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaMoon, FaSun } from "react-icons/fa";
let Link2 = Scroll.Link;
const Links = [
  "Home",
  "About",
  "Resmue",
  "Projects",
  "Testimonials",
  "Contact",
];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    as={Link2}
    to={`${children}`}
    spy={true}
    smooth={true}
    activeClass="active"
    className={`${children}`}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    // href={children?.toString()}
  >
    {children}
    {/* <Link2
				activeClass="active"
				to={`${children}`}
				className={`${children}`}
				spy={true}
				smooth={true}>
				
				{children}
			</Link2> */}
  </Link>
);

const Header3 = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack>
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
                  <NavLink key={link}>{link}</NavLink>
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
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Center>
    </VStack>
  );
};

export default Header3;
