import { Box, Stack, Paragraph, Heading, Link, VStack } from "native-piece";
import { BsGithub, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

import Avatar from "../../components/Avatar";
import Logo from "../../assets/img/logo.png";
import "./Footer.css";

// ubete
// ubicacion-barberia-en-tiempo-real

const Footer = () => {
  return (
    <Box as="footer" backgroundColor="var(--background)">
      <VStack className="container" gap="2rem" mediaMd={{padding: 0}}>
        <Stack
          borderBottom="1px solid rgba(221, 221, 221, 0.2)"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          mediaMd={{
            paddingBlock: 20
          }}>
          <Stack gap="24px" marginBottom="2rem" flexWrap="wrap">
            <Box>
              <Heading mediaMd={{fontSize: "16px"}}>Navigation</Heading>
              <VStack as="ul" className="footer-nav">
                <Box as="li">
                  <a href="#">Home</a>
                </Box>
                <Box as="li">
                  <a href="#projects">Projects</a>
                </Box>
                <Box as="li">
                  <a href="#about">About me</a>
                </Box>
                <Box as="li">
                  <a href="#blog">Blog</a>
                </Box>
                <Box as="li">
                  <a href="#tools">Tools</a>
                </Box>
                <Box as="li">
                  <a href="#contact">Contact</a>
                </Box>
              </VStack>
            </Box>
            <Box>
              <Heading mediaMd={{fontSize: "16px"}}>Products</Heading>
              <VStack as="ul" className="footer-nav">
                <Box as="li">
                  <a
                    href="https://native-piece.com/"
                    target="_blank"
                    rel="noopener noreferrer">Native-piece</a>
                </Box>
              </VStack>
            </Box>
            <Box>
              <Heading mediaMd={{fontSize: "16px"}}>Social</Heading>
              <VStack as="ul" className="footer-nav">
                <Box as="li">
                  <BsFacebook />
                  <a
                    href="https://www.facebook.com/domiyel.rvr/"
                    target="_blank"
                    rel="noopener noreferrer">Facebook</a>
                </Box>
                <Box as="li">
                  <BsInstagram />
                  <a
                    href="https://www.instagram.com/_yoydev_/"
                    target="_blank"
                    rel="noopener noreferrer">Instagram</a>
                </Box>
                <Box as="li">
                  <BsLinkedin />
                  <a
                    href="https://www.linkedin.com/in/dominyel-rivera/"
                    target="_blank"
                    rel="noopener noreferrer">Linkedin</a>
                </Box>
                <Box as="li">
                  <BsGithub />
                  <a
                    href="https://github.com/lac617a"
                    target="_blank"
                    rel="noopener noreferrer">Github</a>
                </Box>
              </VStack>
            </Box>
          </Stack>
          <VStack>
            <Avatar src={Logo} name="Yoydev" subtext="Developer" />
          </VStack>
        </Stack>
        <Stack
          justifyContent="space-between"
          flexWrap="wrap"
          gap={20}
          mediaMd={{
            justifyContent: "center",
          }}>
          <Stack gap="8px">
            <Paragraph>
              &#169; {new Date().getFullYear()}.
            </Paragraph>
            <Paragraph>All rights reserved.</Paragraph>
          </Stack>
          <VStack gap="8px">
            <Paragraph>Made with &#128302; in Colombia</Paragraph>
            <Paragraph>
              created with&ensp;
              <Link
                href="https://native-piece.com/"
                target="_blank"
                rel="noopener noreferrer">NATIVE-PIECE</Link>
            </Paragraph>
          </VStack>
        </Stack>
      </VStack>
    </Box>
  )
}

export default Footer;