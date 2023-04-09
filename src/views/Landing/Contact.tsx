import { Box, Heading, Link, Paragraph, Stack, VStack } from "native-piece";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

export const Contact = () => {
  return (
    <Box as="section" id="contact" className="container">
      <Box>
        <VStack gap="0.5rem">
          <Paragraph className="text text-h5 text-info">
            Get in touch 😉
          </Paragraph>
          <Heading className="text text-h2">Contact me</Heading>
          <Paragraph position="relative" className="text text-green">
            <Paragraph as="span" className="pulse" />
            I'm currently available for work.
          </Paragraph>
        </VStack>
        <Box className="text text-grey">
          <Paragraph marginBlock={30}>
            I'm always looking for new opportunities to help
            you build your product.
          </Paragraph>
          <Paragraph marginBlock={30}>
            Feel free to contact me. I'm waiting for your message.
          </Paragraph>
        </Box>
      </Box>
      <Box className="grid" maxWidth={600}>
        <Stack
          as="button"
          gap="1rem"
          position="relative"
          alignItems="center"
          color="var(--text)"
          transition="300ms"
          padding={20}
          pseudos={{
            ":hover": {
              backgroundColor: "var(--info)",
              transform: "scale(1.02)"
            }
          }}>
          <Link
            href="mailto:botlacrita617@gmail.com"
            position="absolute"
            inset={0} />
          <MdEmail size={30} color="var(--text)" />
          <VStack textAlign="left">
            <Paragraph>Email</Paragraph>
            <Paragraph>dominyel.r@gmail.com</Paragraph>
          </VStack>
        </Stack>
        <Stack
          as="button"
          gap="1rem"
          position="relative"
          alignItems="center"
          color="var(--text)"
          transition="300ms"
          padding={20}
          pseudos={{
            ":hover": {
              backgroundColor: "#1d3557",
              transform: "scale(1.02)"
            }
          }}>
          <Link
            href="https://www.linkedin.com/in/dominyel-rivera/"
            target="_blank"
            rel="noopener noreferrer"
            position="absolute"
            inset={0} />
          <FaLinkedinIn size={30} />
          <VStack textAlign="left">
            <Paragraph>Linkedin</Paragraph>
            <Paragraph>linkedin/in/dominyel.R</Paragraph>
          </VStack>
        </Stack>
      </Box>
    </Box>
  )
}