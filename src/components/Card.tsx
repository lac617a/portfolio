import { FC } from "react";
import { Box, Stack, Heading, Link, Typography, VStack } from "native-piece";

type ICardProps = Readonly<{
  src: string;
  link: string;
  title: string;
  hidden?: boolean;
  description: string;
  stack?: Readonly<string[]>;
}>;

const Card: FC<ICardProps> = (props) => {
  return (
    <Box
      as="figure"
      borderRadius={8}
      overflow="hidden"
      position="relative"
      hidden={props.hidden}
      backgroundColor="#232323"
      pseudos={{
        ":hover": {
          backgroundColor: "#323232",
        },
      }}
      transition="0.2s ease-out"
    >
      <Link
        position="absolute"
        inset="0 0 0 0"
        zIndex={10}
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      />
      <Box>
        <img
          src={props.src}
          alt={`card-${props.title}`}
          style={{ objectFit: "contain" }}
        />
      </Box>
      <VStack as="figcaption" padding="1rem" gap="8px">
        <Heading as="h3" className="text text-h4 text-ellipsis">
          {props.title}
        </Heading>
        <Typography className="text text-grey text-ellipsis">
          {props.description}
        </Typography>
        <Stack gap={8} flexWrap="wrap">
          {props.stack?.map((item) => (
            <Box
              key={item}
              backgroundColor="#6a4fff"
              padding={2}
              paddingInline={10}
              borderRadius={12}
            >
              <Typography as="span">{item}</Typography>
            </Box>
          ))}
        </Stack>
      </VStack>
    </Box>
  );
};

export default Card;
