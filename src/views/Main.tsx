import { Box } from "native-piece";

import Header from '../layouts/Header';
import Footer from '../layouts/Footer/Footer';
import { AboutMe, Contact, Hero, Projects, Tools } from "./Landing";

const Main = () => {
  return (
    <Box as="main">
      <Header />
      <Box as="article">
        <Hero />
        <Projects />
        <AboutMe />
        <Tools />
        <Contact />
      </Box>
      <Footer />
    </Box>
  )
}

export default Main;