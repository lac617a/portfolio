import { useTranslation } from "react-i18next";
import { Box, Heading, Typography, VStack } from "native-piece"
import Card from "../../components/Card"

export const ToolUsers = () => {
  const { t } = useTranslation();

  return (
    <Box as="section" id="toolUsers" className="container">
      <VStack gap="0.5rem">
        <Typography className="text text-h5 text-info">{t("website")} 🌐</Typography>
        <Heading className="text text-h2">{t("resources for users")}</Heading>
        <Typography className="text text-grey">
          {t("i created these resources to help people")}
        </Typography>
      </VStack>
      <Box className="grid" maxWidth={400} marginTop={20}>
        <Card
          title="West Fast"
          description="West fast, te ofrecemos una plataforma dinámica y divertida para poner a prueba y mejorar tus habilidades de escritura a toda velocidad."
          src="https://i.ibb.co/R32xpDp/West-Fast.png"
          link="https://west-fast.vercel.app/"
        />
      </Box>
    </Box>
  )
}
