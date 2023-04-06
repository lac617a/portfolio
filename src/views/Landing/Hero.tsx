import React from "react";
import { Box, Heading, Paragraph, Stack } from "native-piece";

export const Hero = () => {
  return (
    <Box
      as="section"
      className="bg-hero">
      <Box className="container">
        <Stack.V gap="10px" maxWidth={520}>
          <Paragraph className="text text-grey" fontSize="2rem">Hi there, I'm Dominyel</Paragraph>
          <Heading className="text text-h1">Frontend Developer</Heading>
          <Stack.V gap="1rem">
            <Paragraph className="text text-grey" fontSize="1.25rem">
              I help people and brands reach their goals by designing & building digital products that solve real user needs
            </Paragraph>
            <Stack gap="1rem">
              <Box
                as="button"
                padding="1rem 2rem"
                backgroundColor="var(--secundary)"
                color="var(--primary)"
                onClick={() => window.location.href = "#projects"}>
                See my projects
              </Box>
              <Box
                as="button"
                padding="1rem 2rem"
                onClick={() => window.location.href = "#about"}
              >More about me
              </Box>
            </Stack>
          </Stack.V>
        </Stack.V>
      </Box>
    </Box>
  );
};