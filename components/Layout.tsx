import React from "react";
import { Box } from "@chakra-ui/react";
import Header3 from "../pages/Header3";
import Header from "../components/Header";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: DashboardLayoutProps) => {
  return (
    <Box>
      <Header />
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
