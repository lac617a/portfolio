import { Box, Heading, Typography, VStack } from "native-piece";
import { useTranslation } from "react-i18next";

import Card from "../../components/Card";

export const Tools = () => {
  const { t } = useTranslation();
  return (
    <Box as="section" id="tools" className="container">
      <VStack gap="0.5rem">
        <Typography className="text text-h5 text-info">
          {t("tools")} ⚒️
        </Typography>
        <Heading className="text text-h2">{t("resources for devs")}</Heading>
        <Typography className="text text-grey">
          {t(
            "i created these resources to help the community so they can improve their products"
          )}
        </Typography>
      </VStack>
      <Box className="grid" marginTop={20}>
        <Card
          title="Native Piece"
          description="React primitive UI components. Use the best bits of ES6 and CSS to style your apps without stress"
          src="https://i.ibb.co/2kX3rLP/native-piece.png"
          link="https://native-piece.netlify.app/"
          stack={["React", "Rollup", "Babel", "NPM"]}
        />
        <Card
          title="react-switch-casu"
          description="It is a simple package that provides multiple utility components for simplifying conditional rendering in react. By using this package you can make your code more readable and maintainable as shown below."
          src="https://i.ibb.co/1870wFz/react-switch-casu.png"
          link="https://www.npmjs.com/package/react-switch-casu"
          stack={["React", "Rollup", "Babel", "NPM"]}
        />
        <Card
          title="reusable-js"
          description="A lightweight library offering essential JavaScript validation and utility functions. Simplify your code with this versatile npm package."
          src="https://i.ibb.co/M7YH4Nv/reusable-js.png"
          link="https://www.npmjs.com/package/reusable-js"
          stack={["React", "Rollup", "Babel", "NPM", "POO"]}
        />
      </Box>
    </Box>
  );
};
