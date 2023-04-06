import { Box, Heading, Paragraph, Stack } from "native-piece";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer/Footer';
import { Hero, Projects } from "./Landing";
import ImgAboutMe from "../assets/img/about-me.png";
const Main = () => {
  return (
    <Box as="main">
      <Header />
      <Box as="article">
        <Hero />
        <Projects />
        <Box as="section" id="about" className="container">
          <Box
            display="grid"
            gap="2rem"
            paddingBottom="4rem"
            gridTemplateRows="1fr"
            gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))">
            <Stack.V gap="48px">
              <Stack.V gap="0.5rem">
                <Paragraph className="text text-h5 text-info">About me 🔥</Paragraph>
                <Heading className="text text-h2">Get to know me</Heading>
                <Stack.V className="text text-grey" gap="1rem">
                  <Paragraph>
                    I am a developer based in <b>Colombia</b>. I am focused on <b>developing</b>&ensp;
                    easy-to-use interfaces to offer the best product. I am passionate
                    about improving the lives of other developers by creating tools to
                    streamline work
                  </Paragraph>
                  <Paragraph>
                    I have experience working in agile <b>environments</b> and have worked through
                    the entire product development cycle, from ideation to delivery.
                    I've worked as a <b>freelancer</b> to help clients design and build unique
                    products that were visually strong, worked beautifully, were easy to use,
                    but most importantly, focused on the <b>user experience</b>.
                  </Paragraph>
                  <Paragraph>
                    I am constantly looking to learn new things every day and look for new
                    ways to improve my skills and knowledge to improve as a <b>developer frontend</b>.
                  </Paragraph>
                </Stack.V>
              </Stack.V>
            </Stack.V>
            <Stack.V gap="48px">
              <Box as="figure" height="375px">
                <img src={ImgAboutMe} alt="about-me" style={{ objectFit: "contain" }} />
              </Box>
            </Stack.V>
          </Box>
          <Stack.V gap="24px">
            <Heading className="text text-h4">What I do</Heading>
            <Box
              display="grid"
              gap="2rem"
              paddingBottom="4rem"
              gridTemplateRows="1fr"
              gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))">
              <Stack.V gap="8px">
                <Paragraph className="text text-h5">
                  Coding
                </Paragraph>
                <Paragraph className="text text-grey">
                  Building responsive websites with a “Mobile First” approach.
                  Providing the users an enriching experience that responds to
                  any device and screen size.
                </Paragraph>
              </Stack.V>
              <Stack.V gap="8px">
                <Paragraph className="text text-h5">
                  Coding
                </Paragraph>
                <Paragraph className="text text-grey">
                  Building responsive websites with a “Mobile First” approach.
                  Providing the users an enriching experience that responds to
                  any device and screen size.
                </Paragraph>
              </Stack.V>
              <Stack.V gap="8px">
                <Paragraph className="text text-h5">
                  Coding
                </Paragraph>
                <Paragraph className="text text-grey">
                  Building responsive websites with a “Mobile First” approach.
                  Providing the users an enriching experience that responds to
                  any device and screen size.
                </Paragraph>
              </Stack.V>
            </Box>
          </Stack.V>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default Main;