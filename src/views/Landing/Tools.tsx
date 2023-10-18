import { Box, Heading, Typography, VStack } from "native-piece"
import Card from "../../components/Card"
import IMGNativePiece from "../../assets/img/projects/native-piece.png";
import IMGReusableJs from "../../assets/img/projects/reusable-js.png";
import IMGReactSwitchCasu from "../../assets/img/projects/react-switch-casu.png";
import { useTranslation } from "react-i18next";
export const Tools = () => {
  const { t } = useTranslation();
  return (
    <Box as="section" id="tools" className="container">
      <VStack gap="0.5rem">
        <Typography className="text text-h5 text-info">{t("tools")} ⚒️</Typography>
        <Heading className="text text-h2">{t("resources for devs")}</Heading>
        <Typography className="text text-grey">
          {t("i created these resources to help the community so they can improve their products")}
        </Typography>
      </VStack>
      <Box className="grid" marginTop={20}>
        <Card
          title="Native Piece"
          description="React primitive UI components. Use the best bits of ES6 and CSS to style your apps without stress"
          src={IMGNativePiece}
          link="https://native-piece.com/"
        />
        <Card
          title="react-switch-casu"
          description="It is a simple package that provides multiple utility components for simplifying conditional rendering in react. By using this package you can make your code more readable and maintainable as shown below."
          src={IMGReactSwitchCasu}
          link="https://www.npmjs.com/package/react-switch-casu"
        />
        <Card
          title="reusable-js"
          description="A lightweight library offering essential JavaScript validation and utility functions. Simplify your code with this versatile npm package."
          src={IMGReusableJs}
          link="https://www.npmjs.com/package/reusable-js"
        />
      </Box>
    </Box>
  )
}
