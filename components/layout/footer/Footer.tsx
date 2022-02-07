import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Link,
  IconButton,
  useClipboard,
  Tooltip,
} from "@chakra-ui/react";
import {
  BsGithub,
  BsLinkedin,
  BsFillCaretUpFill,
  BsTwitter,
} from "react-icons/bs";
import { ReactNode } from "react";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import ResumeData from "../../data/resumeData";
import Scroll from "react-scroll";
let Link2 = Scroll.Link;
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
        <Text>{`© 2022 ${ResumeData.home.name}. All rights reserved`}</Text>
        <Box pb={"20px"}>
          <Link
            as={Link2}
            to={"Home"}
            spy={true}
            smooth={true}
            activeClass="active"
          >
            <IconButton
              aria-label="To the Top"
              variant="ghost"
              icon={<BsFillCaretUpFill />}
              isRound
              size={"lg"}
            />
          </Link>
        </Box>
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
