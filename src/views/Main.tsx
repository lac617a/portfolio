import { Box, Heading, Paragraph, Stack } from "native-piece";

import Header from '../layouts/Header';
import Footer from '../layouts/Footer/Footer';
import { AboutMe, Hero, Projects } from "./Landing";


const Main = () => {
  return (
    <Box as="main">
      <Header />
      <Box as="article">
        <Hero />
        <Projects />
        <AboutMe />
      </Box>
      <Footer />
    </Box>
  )
}

export default Main;