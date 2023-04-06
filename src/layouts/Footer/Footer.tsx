import React from "react";
import { Box, Stack, Paragraph, Heading, Link } from "native-piece";
import { BsGithub, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

import Avatar from "../../components/Avatar";
import Logo from "../../assets/img/logo.png";
import "./Footer.css";

// ubete
// ubicacion-barberia-en-tiempo-real

const Footer = () => {
  return (
    <Box as="footer" backgroundColor="var(--background)" width="100%">
      <Stack.V className="container" gap="2rem">
        <Stack
          borderBottom="1px solid rgba(221, 221, 221, 0.2)" 
          justifyContent="space-between" alignItems="center">
          <Stack gap="24px" marginBottom="2rem">
            <Box>
              <Heading>Navigation</Heading>
              <Stack.V as="ul" className="footer-nav">
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
              </Stack.V>
            </Box>
            <Box>
              <Heading>Products</Heading>
              <Stack.V as="ul" className="footer-nav">
                <Box as="li">
                  <a
                    href="https://native-piece.com/"
                    target="_blank"
                    rel="noopener noreferrer">Native-piece</a>
                </Box>
              </Stack.V>
            </Box>
            <Box>
              <Heading>Social</Heading>
              <Stack.V as="ul" className="footer-nav">
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
                    href="https://github.com/lac617a/native-piece"
                    target="_blank"
                    rel="noopener noreferrer">Github</a>
                </Box>
              </Stack.V>
            </Box>
          </Stack>
          <Stack.V>
            <Avatar src={Logo} name="Yoydev" subtext="Developer" />
          </Stack.V>
        </Stack>
        <Stack justifyContent="space-between">
          <Stack gap="8px">
            <Paragraph>
              &#169; {new Date().getFullYear()}.
            </Paragraph>
            <Paragraph>All rights reserved.</Paragraph>
          </Stack>
          <Stack.V gap="8px">
            <Paragraph>Made with &#128302; in Colombia</Paragraph>
            <Paragraph>
              created with&ensp;
              <Link
                href="https://native-piece.com/"
                target="_blank"
                rel="noopener noreferrer">NATIVE-PIECE</Link>
              </Paragraph>
          </Stack.V>
        </Stack>
      </Stack.V>
    </Box>
  )
}

export default Footer;