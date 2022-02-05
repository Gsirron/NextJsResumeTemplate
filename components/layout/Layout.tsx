import React from "react";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
type DashboardLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: DashboardLayoutProps) => {
  return (
    <Box>
      <Header />
      <Box pt={"55px"}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
