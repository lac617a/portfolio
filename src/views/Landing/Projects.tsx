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
        <Stack.Block gap="48px">
          <Stack.Block gap="0.5rem">
            <Paragraph className="text text-h5 text-info">My projects 🔮</Paragraph>
            <Heading className="text text-h2">Some of my latest works</Heading>
            <Paragraph className="text text-grey">Case studies, digital products and design systems which are visually pleasing, user-centric and easy to use.</Paragraph>
          </Stack.Block>
          {PROJECTS.slice(0, 2).map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </Stack.Block>
        <Stack.Block gap="48px">
          {PROJECTS.slice(2).map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </Stack.Block>
      </Box>
    </Box>
  )
}

import IMGACHS from "../../assets/img/projects/ACHS.png";
import IMGGasco from "../../assets/img/projects/gasco.png";
import IMGBarest from "../../assets/img/projects/Barest.png";
import IMGKmushicoin from "../../assets/img/projects/kmushicoin.png";

const PROJECTS = [
  {
    title: "Barest",
    description: "Juntamos todas las empresas y ofertas laborales de hostelería en un solo lugar.",
    src: IMGBarest,
    link: "https://dev.barest.es/"
  },
  {
    title: "ACHS",
    description: "Repositorio de asesorías y sistema de admin para manejo de registro.",
    src: IMGACHS,
    link: "https://achs-playbook.alaxatechtest.com/"
  },
  {
    title: "Kmushicoin",
    description: "Nos esforzamos diariamente por cuidar el medio ambiente, utilizando tecnología blockchain de última generación y soluciones de pago digital accesibles para todos.",
    src: IMGKmushicoin,
    link: "https://kmushicoin.co/"
  },
  {
    title: "Gasco",
    description: "Design System | GasUI",
    src: IMGGasco,
    link: "https://storybook-gasco.herokuapp.com/"
  },
] as const;