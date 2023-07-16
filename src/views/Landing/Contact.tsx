import { Box, Heading, Link, Button, Typography, Stack, VStack } from "native-piece";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

export const Contact = () => {
  return (
    <Box as="section" id="contact" className="container">
      <Box>
        <VStack gap="0.5rem">
          <Typography className="text text-h5 text-info">
            Get in touch 😉
          </Typography>
          <Heading className="text text-h2">Contact me</Heading>
          <Typography position="relative" className="text text-green">
            <Typography as="span" className="pulse" />
            I'm currently available for work.
          </Typography>
        </VStack>
        <Box className="text text-grey">
          <Typography marginBlock={30}>
            I'm always looking for new opportunities to help
            you build your product.
          </Typography>
          <Typography marginBlock={30}>
            Feel free to contact me. I'm waiting for your message.
          </Typography>
        </Box>
      </Box>
      <Box className="grid" maxWidth={600}>
        <Button
          padding={20}
          color="var(--text)"
          transition="300ms"
          pseudos={{
            ":hover": {
              backgroundColor: "var(--info)",
              transform: "scale(1.02)"
            }
          }}>
          <Stack gap="1rem" alignItems="center">
            <Link
              href="mailto:botlacrita617@gmail.com"
              position="absolute"
              inset={0} />
            <MdEmail size={30} color="var(--text)" />
            <VStack textAlign="left">
              <Typography>Email</Typography>
              <Typography>dominyel.r@gmail.com</Typography>
            </VStack>
          </Stack>
        </Button>
        <Button
          padding={20}
          color="var(--text)"
          transition="300ms"
          pseudos={{
            ":hover": {
              backgroundColor: "#1d3557",
              transform: "scale(1.02)"
            }
          }}>
          <Stack gap="1rem" alignItems="center">
            <Link
              href="https://www.linkedin.com/in/dominyel-rivera/"
              target="_blank"
              rel="noopener noreferrer"
              position="absolute"
              inset={0} />
            <FaLinkedinIn size={30} />
            <VStack textAlign="left">
              <Typography>Linkedin</Typography>
              <Typography>linkedin/in/dominyel.R</Typography>
            </VStack>
          </Stack>
        </Button>
      </Box>
    </Box>
  )
}