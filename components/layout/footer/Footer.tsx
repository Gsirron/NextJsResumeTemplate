import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Link,
  IconButton,
  useClipboard,
  Tooltip,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";
import { ReactNode } from "react";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const { hasCopied, onCopy } = useClipboard("Norris.luong@Hotmail.com");
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2022 Norris Luong. All rights reserved</Text>
        <Stack align="center" justify="space-around" direction={"row"}>
          <Tooltip
            label={hasCopied ? "Email Copied!" : "Copy Email"}
            closeOnClick={false}
            hasArrow
          >
            <IconButton
              aria-label="email"
              variant="ghost"
              size="lg"
              fontSize="3xl"
              icon={<MdEmail />}
              _hover={{
                bg: "blue.500",
                color: useColorModeValue("white", "gray.700"),
              }}
              onClick={onCopy}
              isRound
            />
          </Tooltip>

          <a href="www.google.com">
            <IconButton
              aria-label="github"
              variant="ghost"
              size="lg"
              fontSize="3xl"
              icon={<BsGithub />}
              _hover={{
                bg: "blue.500",
                color: useColorModeValue("white", "gray.700"),
              }}
              isRound
            />
          </a>

          <Link href="#">
            <IconButton
              aria-label="twitter"
              variant="ghost"
              size="lg"
              icon={<BsTwitter size="28px" />}
              _hover={{
                bg: "blue.500",
                color: useColorModeValue("white", "gray.700"),
              }}
              isRound
            />
          </Link>

          <Link href="#">
            <IconButton
              aria-label="linkedin"
              variant="ghost"
              size="lg"
              icon={<BsLinkedin size="28px" />}
              _hover={{
                bg: "blue.500",
                color: useColorModeValue("white", "gray.700"),
              }}
              isRound
            />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
