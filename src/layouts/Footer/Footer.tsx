import "./Footer.css";
import { useTranslation } from "react-i18next";
import { Box, Stack, Typography, Heading, Link, VStack } from "native-piece";

import Avatar from "../../components/Avatar";

// ASSETS
import Logo from "../../assets/img/logo.png";
import { BsGithub, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box as="footer" backgroundColor="var(--background)">
      <VStack className="container" gap="2rem" mediaMd={{ padding: 0 }}>
        <Stack
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
          mediaMd={{ paddingBlock: 20 }}
          borderBottom="1px solid rgba(221, 221, 221, 0.2)"
        >
          <Stack gap="24px" marginBottom="2rem" flexWrap="wrap">
            <Box>
              <Heading mediaMd={{ fontSize: "16px" }}>
                {t("navigation")}
              </Heading>
              <VStack as="ul" className="footer-nav">
                <Box as="li">
                  <a href="#">{t("home")}</a>
                </Box>
                <Box as="li">
                  <a href="#projects">{t("projects")}</a>
                </Box>
                <Box as="li">
                  <a href="#about">{t("about-me")}</a>
                </Box>
                <Box as="li">
                  <a href="#toolUsers">{t("website")}</a>
                </Box>
                <Box as="li">
                  <a href="#tools">{t("tools")}</a>
                </Box>
                <Box as="li">
                  <a href="#contact">{t("contact")}</a>
                </Box>
              </VStack>
            </Box>
            <Box>
              <Heading mediaMd={{ fontSize: "16px" }}>{t("products")}</Heading>
              <VStack as="ul" className="footer-nav">
                <Box as="li">
                  <a
                    href="https://native-piece.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Native Piece
                  </a>
                </Box>
                <Box as="li">
                  <a
                    href="https://www.npmjs.com/package/react-switch-casu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    react-switch-casu
                  </a>
                </Box>
                <Box as="li">
                  <a
                    href="https://www.npmjs.com/package/reusable-js"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    reusable-js
                  </a>
                </Box>
              </VStack>
            </Box>
            <Box>
              <Heading mediaMd={{ fontSize: "16px" }}>{t("website")}</Heading>
              <VStack as="ul" className="footer-nav">
                <Box as="li">
                  <a
                    href="https://west-fast.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    West Fast
                  </a>
                </Box>
                <Box as="li">
                  <a
                    href="https://dice-merge.club/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fusionar dados
                  </a>
                </Box>
                <Box as="li">
                  <a
                    href="https://melife.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Melife
                  </a>
                </Box>
              </VStack>
            </Box>
            <Box>
              <Heading mediaMd={{ fontSize: "16px" }}>Social</Heading>
              <VStack as="ul" className="footer-nav">
                <Box as="li">
                  <BsFacebook />
                  <a
                    href="https://www.facebook.com/domiyel.rvr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </Box>
                <Box as="li">
                  <BsInstagram />
                  <a
                    href="https://www.instagram.com/_yoydev_/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </Box>
                <Box as="li">
                  <BsLinkedin />
                  <a
                    href="https://www.linkedin.com/in/dominyel-rivera/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                </Box>
                <Box as="li">
                  <BsGithub />
                  <a
                    href="https://github.com/lac617a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </Box>
              </VStack>
            </Box>
          </Stack>
          <VStack>
            <Avatar src={Logo} name="Yoydev" subtext="Developer" />
          </VStack>
        </Stack>
        <Stack
          gap={20}
          flexWrap="wrap"
          justifyContent="space-between"
          mediaMd={{ justifyContent: "center" }}
        >
          <Stack gap={8}>
            <Typography>&#169; {new Date().getFullYear()}.</Typography>
            <Typography>{t("all rights reserved")}.</Typography>
          </Stack>
          <VStack gap={8}>
            <Typography>
              {t("made with")} &#128302; {t("in")} Colombia
            </Typography>
            <Typography>
              {t("created with")}&ensp;
              <Link
                href="https://native-piece.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NATIVE-PIECE
              </Link>
            </Typography>
          </VStack>
        </Stack>
      </VStack>
    </Box>
  );
};

export default Footer;
