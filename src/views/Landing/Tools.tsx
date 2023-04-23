import { Box, Heading, Paragraph, VStack } from "native-piece"
import Card from "../../components/Card"
import IMGNativePiece from "../../assets/img/projects/native-piece.png";
export const Tools = () => {
  return (
    <Box as="section" id="tools" className="container">
      <VStack gap="0.5rem">
        <Paragraph className="text text-h5 text-info">Tools ⚒️</Paragraph>
        <Heading className="text text-h2">Resources for devs</Heading>
        <Paragraph className="text text-grey">
          I created these resources to help the community so they can improve their products.
        </Paragraph>
      </VStack>
      <Box className="grid" maxWidth={400} marginTop={20}>
        <Card
          title="NativePiece"
          description="React primitive UI components. Use the best bits of ES6 and CSS to style your apps without stress"
          src={IMGNativePiece}
          link="https://native-piece.com/"
        />
      </Box>
    </Box>
  )
}
