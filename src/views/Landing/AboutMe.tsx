import { useTranslation } from "react-i18next";
import { Box, Button, Heading, Typography, VStack } from "native-piece";

import CV from "../../assets/cv.pdf";
import ImgAboutMe from "../../assets/img/about-me.png";

export const AboutMe = () => {
  const { t } = useTranslation();
  const handleDownloadCv = () => {
    const anchor = document.createElement("a");
    anchor.href = CV;
    anchor.download = "Dominyel Rivera_Developer";
    anchor.click();
  };

  return (
    <Box as="section" id="about" className="container">
      <Box className="grid" mediaMd={{ paddingInline: 20 }}>
        <VStack gap="48px">
          <VStack gap="0.5rem">
            <Typography className="text text-h5 text-info">
              {t("about-me")} 🔥
            </Typography>
            <Heading className="text text-h2">{t("get to know me")}</Heading>
            <VStack className="text text-grey" gap="1rem">
              <Typography>{t("i am a developer based in Colombia")}</Typography>
            </VStack>
            <Button
              padding="1rem"
              width="max-content"
              color="var(--white)"
              backgroundColor="var(--color-three)"
              onClick={handleDownloadCv}
            >
              {t("download CV")}
            </Button>
          </VStack>
        </VStack>
        <VStack gap="48px">
          <Box as="figure" height="375px">
            <img
              src={ImgAboutMe}
              alt="about-me"
              style={{ objectFit: "contain" }}
            />
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};
