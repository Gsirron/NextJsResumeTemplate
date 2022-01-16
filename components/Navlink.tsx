import Scroll from "react-scroll";
import { ReactNode } from "react";
import { Link, useColorModeValue } from "@chakra-ui/react";
import React from "react";

let Link2 = Scroll.Link;

const Navlink = ({ children }: { children: ReactNode }) => {
  return (
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
    </Link>
  );
};

export default Navlink;
