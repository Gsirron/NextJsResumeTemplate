import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Header3 from "../pages/Header3";
import Header from "../components/Header";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: DashboardLayoutProps) => {
  return (
    <Box id="mainlayout">
      <Header />
      <Box id="childlayout">{children}</Box>
    </Box>
  );
};

export default Layout;
