import React from 'react'
import { Box, Heading, Link, Paragraph, Stack } from 'native-piece'

const Card = () => {
  return (
    <Box
      as="figure"
      borderRadius={8}
      overflow="hidden"
      position="relative"
      backgroundColor="#232323"
      pseudos={{
        ":hover": {
          backgroundColor: "#323232"
        }
      }}
      transition="0.2s ease-out">
      <Link
        position="absolute"
        inset="0 0 0 0"
        zIndex={10}
        href="https://github.com/lac617a"
        target="_blank"
        rel="noopener noreferrer" />
      <Box >
        <img
          src="https://i.ibb.co/XkGVBL6/default.png"
          alt="card-"
          style={{ objectFit: "contain" }}
        />
      </Box>
      <Stack.V as="figcaption" padding="1rem" gap="8px">
        <Heading
          as="h3"
          className="text text-h4 text-ellipsis"
        >RUD | Ecommerce redesign</Heading>
        <Paragraph className="text text-grey text-ellipsis">
          This project is a UX case study about the website 'RUD' an Argentinian ecommerce of fashion products, mainly shoes, for women.
        </Paragraph>
      </Stack.V>
    </Box>
  )
}

export default Card