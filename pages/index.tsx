import type { NextPage } from "next";
import { Box, VStack } from "@chakra-ui/react";
import Home2 from "./Home";
import About from "./About";
import { Element } from "react-scroll";

const Home: NextPage = () => {
  return (
    <Box>
      <Element id="Home" name="Home">
        <Home2 />
      </Element>
      <Element id="About" name="About">
        <About />
      </Element>
    </Box>
  );
};

export default Home;
