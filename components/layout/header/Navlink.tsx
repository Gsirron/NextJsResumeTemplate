import Scroll from "react-scroll";
import { ReactNode } from "react";
import { Link, Box, Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";
// import Link from "next/link";
let Link2 = Scroll.Link;

const Navlink = ({ children }: { children: ReactNode }) => {
  return (
    <Link
      as={Link2}
      to={`${children}`}
      spy={true}
      smooth={true}
      activeClass="active"
      // className={`${children}`}
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
    </Link>
    // <Link href={`${children}`}>
    //   <Box
    //     as={Button}
    //     px={2}
    //     py={1}
    //     rounded={"md"}
    //     _hover={{
    //       textDecoration: "none",
    //       bg: useColorModeValue("gray.200", "gray.700"),
    //     }}
    //   >
    //     {children}
    //   </Box>
    // </Link>
  );
};

export default Navlink;
