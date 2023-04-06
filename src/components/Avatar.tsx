import { FC } from 'react'
import { Box, Stack, Paragraph } from "native-piece";

interface IAvatarProps {
  src: string;
  name: string;
  size?: string;
  subtext?: string;
}
const Avatar: FC<IAvatarProps> = (props) => {
  return (
    <Stack.V gap={props.subtext ? "16px" : 0} height="min-content">
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
          <Paragraph fontSize={props.size}>{props.name}</Paragraph>
        </Stack>
      </Box>
      <Paragraph fontSize={props.size}>{props.subtext}</Paragraph>
    </Stack.V>
  )
}

export default Avatar;