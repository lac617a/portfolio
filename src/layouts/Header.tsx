import { Box, Stack } from "native-piece";
import Avatar from "../components/Avatar";
import Logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <Box
      as="header"
      position="fixed"
      width="100%"
      zIndex={100}
      backdropFilter="saturate(180%) blur(20px)"
      backgroundColor="rgba(35, 35, 35, 0.9019607843)"
      boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.04), 0 -1px 0 0 rgba(0, 0, 0, 0.08);">
      <Stack
        padding={20}
        alignItems="center"
        justifyContent="space-between">
        <Avatar src={Logo} name="Yoydev" />
        <Stack as="ul" gap="2rem">
          <Box as="li">
            <a href="#projects">Projects</a>
          </Box>
          <Box as="li">
            <a href="#about">About me</a>
          </Box>
          <Box as="li">
            <a href="#tools">Tools</a>
          </Box>
          <Box as="li">
            <a href="#contact">Contact</a>
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Header;