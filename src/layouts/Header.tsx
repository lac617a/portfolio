import { Box, Button, Stack } from "native-piece";
import Avatar from "../components/Avatar";
import Logo from "../assets/img/logo.png";
import { BsTranslate } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import i18n from "../locales/i18n";

const Header = () => {
  const { t } = useTranslation();
  return (
    <Box
      as="header"
      position="fixed"
      width="100%"
      zIndex={100}
      backdropFilter="saturate(180%) blur(20px)"
      backgroundColor="rgba(35, 35, 35, 0.9019607843)"
      boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.04), 0 -1px 0 0 rgba(0, 0, 0, 0.08)">
      <Stack
        padding={20}
        alignItems="center"
        justifyContent="space-between">
        <Avatar src={Logo} name="Yoydev" />
        <Stack as="ul" gap="2rem" mediaMd={{
          display: "none"
        }}>
          <Box as="li">
            <a href="#projects">{t("projects")}</a>
          </Box>
          <Box as="li">
            <a href="#about">{t("about-me")}</a>
          </Box>
          <Box as="li">
            <a href="#tools">{t("tools")}</a>
          </Box>
          <Box as="li">
            <a href="#contact">{t("contact")}</a>
          </Box>
          <Button
            padding={0}
            color="var(--white)"
            onClick={() => i18n.changeLanguage(i18n.language === "es" ? "en" : "es")}>
            <BsTranslate color="var(--white)" />
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Header;