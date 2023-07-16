import { FC } from 'react'
import { Box, Stack, Typography, VStack } from "native-piece";

interface IAvatarProps {
  src: string;
  name: string;
  size?: string;
  subtext?: string;
}
const Avatar: FC<IAvatarProps> = (props) => {
  return (
    <VStack gap={props.subtext ? "16px" : 0} height="min-content">
      <Box as="a">
        <Stack alignItems="center" gap="8px">
          <Box
            borderRadius={100}
            overflow="hidden"
            width={props.size || 40}
            height={props.size || 40}>
            <img
              style={{ objectFit: "cover", width: "100%" }}
              src={props.src} alt={props.name} />
          </Box>
          <Typography fontSize={props.size}>{props.name}</Typography>
        </Stack>
      </Box>
      <Typography fontSize={props.size}>{props.subtext}</Typography>
    </VStack>
  )
}

export default Avatar;