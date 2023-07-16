import { useState } from 'react';
import { Box, Heading, Typography, Stack, VStack, Button } from "native-piece";

export const Hero = () => {
  const [state, setState] = useState<boolean>(false);
  return (
    <Box
      as="section"
      className="bg-hero">
      <Box className="container">
        <VStack gap="10px" maxWidth={520}>
          <Typography className="text text-grey" fontSize="2rem">Hi there, I'm Dominyel</Typography>
          <Heading className="text text-h1">Frontend Developer</Heading>
          <VStack gap="1rem">
            <Typography className="text text-grey" fontSize="1.25rem">
              I help people and brands reach their goals by designing & building digital products that solve real user needs
            </Typography>
            <Stack gap="1rem">
              <Button
                padding="1rem 2rem"
                color="var(--primary)"
                backgroundColor="var(--secundary)"
                mediaMd={{ padding: "1rem" }}
                onClick={() => window.location.href = "#projects"}>
                See my projects
              </Button>
              <Button
                padding="1rem 2rem"
                mediaMd={{ padding: "1rem" }}
                onClick={() => window.location.href = "#about"}
              >More about me
              </Button>
            </Stack>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};