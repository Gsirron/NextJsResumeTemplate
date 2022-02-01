import type { NextPage } from "next";
import { Box, Container, VStack } from "@chakra-ui/react";
import Home2 from "./Home";
import About from "./About";
import { Element } from "react-scroll";
import Resume from "./Resume";
import { Projects } from "./Projects";
import ContactForm from "./Contact";
import Testimoinals from "./Testimonials";
const Home: NextPage = () => {
  return (
    <Box>
      <Element id="Home" name="Home">
        <Home2 />
      </Element>
      <Element id="About" name="About">
        <About />
      </Element>
      <Element id="Resume" name="Resume">
        <Resume />
      </Element>
      <Element id="Projects" name="Projects">
        <Projects />
      </Element>
      {/* <Element id="Testimoinals" name="Testimoinals">
        <Testimoinals />
      </Element> */}
      <Element id="Contact" name="Contact">
        <ContactForm />
      </Element>
    </Box>
  );
};

export default Home;
