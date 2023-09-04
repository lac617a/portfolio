import { Box, Heading, Typography, VStack } from "native-piece"
import Card from "../../components/Card"
import IMGNativePiece from "../../assets/img/projects/native-piece.png";
export const Tools = () => {
  return (
    <Box as="section" id="tools" className="container">
      <VStack gap="0.5rem">
        <Typography className="text text-h5 text-info">Tools ⚒️</Typography>
        <Heading className="text text-h2">Resources for devs</Heading>
        <Typography className="text text-grey">
          I created these resources to help the community so they can improve their products.
        </Typography>
      </VStack>
      <Box className="grid" maxWidth={400} marginTop={20}>
        <Card
          title="Native Piece"
          description="React primitive UI components. Use the best bits of ES6 and CSS to style your apps without stress"
          src={IMGNativePiece}
          link="https://native-piece.com/"
        />
      </Box>
    </Box>
  )
}
