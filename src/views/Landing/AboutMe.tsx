import { useTranslation } from 'react-i18next';
import { Box, Button, Heading, Typography, VStack } from 'native-piece'

// ASSETS
import CV from "../../assets/cv.pdf";
import ImgAboutMe from "../../assets/img/about-me.png";
import { FaReact } from "react-icons/fa";
import { TbLogicAnd } from "react-icons/tb";
import { BiCodeCurly } from "react-icons/bi";

export const AboutMe = () => {
  const { t } = useTranslation();
  const handleDownloadCv = () => {
    const anchor = document.createElement("a");
    anchor.href = CV;
    anchor.download = "Dominyel Rivera_Front-end Developer";
    anchor.click();
  }
  return (
    <Box as="section" id="about" className="container">
      <Box
        className="grid"
        mediaMd={{ paddingInline: 20 }}>
        <VStack gap="48px">
          <VStack gap="0.5rem">
            <Typography className="text text-h5 text-info">{t("about-me")} 🔥</Typography>
            <Heading className="text text-h2">{t("get to know me")}</Heading>
            <VStack className="text text-grey" gap="1rem">
              <Typography>
                {t("i am a developer based in Colombia")}
              </Typography>
              <Typography>
                {t("i have experience working in agile environments")}
              </Typography>
              <Typography>
                {t("i am constantly looking")}
              </Typography>
            </VStack>
            <Button
              padding="1rem"
              width="max-content"
              color="var(--white)"
              backgroundColor="var(--color-three)"
              onClick={handleDownloadCv}
            >{t("download CV")}</Button>
          </VStack>
        </VStack>
        <VStack gap="48px">
          <Box as="figure" height="375px">
            <img src={ImgAboutMe} alt="about-me" style={{ objectFit: "contain" }} />
          </Box>
        </VStack>
      </Box>
      <VStack gap="24px" mediaMd={{ paddingInline: 20 }}>
        <Heading className="text text-h4">{t("what I do")}</Heading>
        <Box
          display="grid"
          gap="2rem"
          paddingBottom="4rem"
          gridTemplateRows="1fr"
          gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))">
          <VStack gap="8px">
            <BiCodeCurly color="#61DBFB" size={34} />
            <Typography className="text text-h5">
              {t("coding")}
            </Typography>
            <Typography className="text text-grey">
              {t("building responsive websites with a Mobile First approach")}
            </Typography>
          </VStack>
          <VStack gap="8px">
            <FaReact color="#61DBFB" size={40} />
            <Typography className="text text-h5">
              React / React Native
            </Typography>
            <Typography className="text text-grey">
              {t("understand basic React concepts such as components, state, properties")}
            </Typography>
          </VStack>
          <VStack gap="8px">
            <TbLogicAnd color="#61DBFB" size={40} />
            <Typography className="text text-h5">
              {t("logic and good practices")}
            </Typography>
            <Typography className="text text-grey">
              {t("i use add-on libraries and frameworks like Redux or React Router")}
            </Typography>
          </VStack>
        </Box>
      </VStack>
    </Box>
  )
}
