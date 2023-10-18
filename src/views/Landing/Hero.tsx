import { useTranslation } from 'react-i18next';
import { Box, Heading, Typography, Stack, VStack, Button } from "native-piece";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <Box
      as="section"
      className="bg-hero">
      <Box className="container">
        <VStack gap="10px" maxWidth={520}>
          <Typography className="text text-grey" fontSize="2rem">{t("hi there, I'm")} Dominyel</Typography>
          <Heading className="text text-h1">Frontend Developer</Heading>
          <VStack gap="1rem">
            <Typography className="text text-grey" fontSize="1.25rem">
              {t("i help people and brands")}
            </Typography>
            <Stack gap="1rem">
              <Button
                padding="1rem 2rem"
                color="var(--primary)"
                backgroundColor="var(--secundary)"
                mediaMd={{ padding: "1rem" }}
                onClick={() => window.location.href = "#projects"}>
                {t("see my projects")}
              </Button>
              <Button
                padding="1rem 2rem"
                mediaMd={{ padding: "1rem" }}
                color="var(--primary)"
                backgroundColor="var(--secundary)"
                onClick={() => window.location.href = "#about"}>
              {t("more about me")}
              </Button>
            </Stack>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};