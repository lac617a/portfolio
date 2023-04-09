import { Box, Heading, Paragraph, VStack } from 'native-piece'
import ImgAboutMe from "../../assets/img/about-me.png";
import { FaReact } from "react-icons/fa";
import { TbLogicAnd } from "react-icons/tb";
import { BiCodeCurly } from "react-icons/bi";

export const AboutMe = () => {
  return (
    <Box as="section" id="about" className="container">
      <Box
        className="grid"
        mediaMd={{
          paddingInline: 20
        }}>
        <VStack gap="48px">
          <VStack gap="0.5rem">
            <Paragraph className="text text-h5 text-info">About me 🔥</Paragraph>
            <Heading className="text text-h2">Get to know me</Heading>
            <VStack className="text text-grey" gap="1rem">
              <Paragraph>
                I am a developer based in <b>Colombia</b>. I am focused on&ensp;
                <b>developing</b>&ensp;easy-to-use interfaces to offer the
                best product. I am passionate about improving the lives of
                other developers by creating tools to streamline work
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
            </VStack>
          </VStack>
        </VStack>
        <VStack gap="48px">
          <Box as="figure" height="375px">
            <img src={ImgAboutMe} alt="about-me" style={{ objectFit: "contain" }} />
          </Box>
        </VStack>
      </Box>
      <VStack gap="24px" mediaMd={{
          paddingInline: 20
        }}>
        <Heading className="text text-h4">What I do</Heading>
        <Box
          display="grid"
          gap="2rem"
          paddingBottom="4rem"
          gridTemplateRows="1fr"
          gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))">
          <VStack gap="8px">
            <BiCodeCurly color="#61DBFB" size={34} />
            <Paragraph className="text text-h5">
              Coding
            </Paragraph>
            <Paragraph className="text text-grey">
              Building responsive websites with a “Mobile First” approach.
              Providing the users an enriching experience that responds to
              any device and screen size.
            </Paragraph>
          </VStack>
          <VStack gap="8px">
            <FaReact color="#61DBFB" size={40} />
            <Paragraph className="text text-h5">
              React / React Native
            </Paragraph>
            <Paragraph className="text text-grey">
              Understand basic React concepts such as components, state, properties,
              and use tools like React DevTools to help debug and optimize your app's
              performance. Also separate the presentation logic from the business logic
              into separate or modulated components.
            </Paragraph>
          </VStack>
          <VStack gap="8px">
            <TbLogicAnd color="#61DBFB" size={40} />
            <Paragraph className="text text-h5">
              Logic and good practices
            </Paragraph>
            <Paragraph className="text text-grey">
              I use add-on libraries and frameworks like Redux or React Router to handle
              application state management and navigation. I make sure to optimize the
              performance of your application using techniques like conditional rendering
              and lazy loading. I keep your code organized and readable using common design
              patterns and good coding practices.
            </Paragraph>
          </VStack>
        </Box>
      </VStack>
    </Box>
  )
}
