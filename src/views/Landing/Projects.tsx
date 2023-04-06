import React from 'react'
import { Box, Heading, Paragraph, Stack } from 'native-piece';
import Card from '../../components/Card';

export const Projects = () => {
  return (
    <Box as="section" id="projects" marginTop="4rem">
      <Box
        className="container"
        display="grid"
        gap="2rem"
        paddingBottom="4rem"
        gridTemplateRows="1fr"
        borderBottom="1px solid rgba(221, 221, 221, 0.2)"
        gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))">
        <Stack.V gap="48px">
          <Stack.V gap="0.5rem">
            <Paragraph className="text text-h5 text-info">My projects 🔮</Paragraph>
            <Heading className="text text-h2">Some of my latest works</Heading>
            <Paragraph className="text text-grey">Case studies, digital products and design systems which are visually pleasing, user-centric and easy to use.</Paragraph>
          </Stack.V>
          <Card />
          <Card />
        </Stack.V>
        <Stack.V gap="48px">
          <Card />
          <Card />
        </Stack.V>
      </Box>
    </Box>
  )
}