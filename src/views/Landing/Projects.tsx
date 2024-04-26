import { Box, Heading, Typography, VStack } from "native-piece";
import { useTranslation } from "react-i18next";

import Card from "../../components/Card";

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <Box as="section" id="projects" marginTop="4rem">
      <Box
        className="container grid"
        borderBottom="1px solid rgba(221, 221, 221, 0.2)"
      >
        <VStack gap="48px">
          <VStack gap="0.5rem">
            <Typography className="text text-h5 text-info">
              {t("my projects")} 🔮
            </Typography>
            <Heading className="text text-h2">
              {t("some of my latest works")}
            </Heading>
            <Typography className="text text-grey">
              {t("case studies, digital products and design systems")}
            </Typography>
          </VStack>
          {PROJECTS.slice(0, 2).map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </VStack>
        <VStack gap="48px">
          {PROJECTS.slice(2).map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

const PROJECTS = [
  // {
  //   title: "Barest",
  //   description: "Juntamos todas las empresas y ofertas laborales de hostelería en un solo lugar.",
  //   src: "https://i.ibb.co/CmPDrJw/Barest.png",
  //   link: "https://dev.barest.es/"
  // },
  {
    id: 1,
    title: "Audioguía Peñafiel",
    description:
      "Descubre relatos fascinantes, datos curiosos y anécdotas sobre la vida cotidiana a lo largo de su historia mientras te desplazas por sus rincones emblemáticos.",
    src: "https://i.ibb.co/27wN9gC/penafiel.png",
    link: "https://play.google.com/store/apps/details?id=com.penafielapp&pcampaignid=web_share",
    stack: [
      "React-Native",
      "Vite",
      "React",
      "Nestjs",
      "DynamoDB",
      "Stripe",
      "MUI",
    ],
  },
  {
    id: 2,
    title: "Medible",
    description:
      "Somos un equipo global de pensadores y creadores rápidos que diseñan futuros posibles.",
    src: "https://i.ibb.co/PFdwjJL/MEDIBLE.png",
    link: "https://medible.cl/en",
    stack: ["Vite", "React", "SASS"],
  },
  {
    id: 3,
    title: "Mydna digital",
    description:
      "Gestión de Carrera y todas las Soluciones Estratégicas de RRHH en un Único Lugar.",
    src: "https://mydnadigital.com/home/b2b-img.png",
    link: "https://mydnadigital.com/",
    stack: ["React", "Nextjs", "RadixUI", "Tailwind"],
  },
  {
    id: 4,
    title: "ACHS",
    description:
      "Repositorio de asesorías y sistema de admin para manejo de registro.",
    src: "https://i.ibb.co/3Cr5Jz7/ACHS.png",
    link: "https://saqaswaplaybook.z13.web.core.windows.net",
    stack: ["Vite", "React", "PWA", "SASS"],
  },
  {
    id: 5,
    title: "Kmushicoin",
    description:
      "Nos esforzamos diariamente por cuidar el medio ambiente, utilizando tecnología blockchain de última generación y soluciones de pago digital accesibles para todos.",
    src: "https://i.ibb.co/xCNJb83/kmushicoin.png",
    link: "https://play.google.com/store/apps/details?id=com.kmushi.pay&pcampaignid=web_share",
    stack: ["React-Native", "Vite", "React", "SASS"],
  },
  // {
  //   id: 5,
  //   title: "Gasco",
  //   description: "Design System | GasUI",
  //   src: "https://i.ibb.co/9TXy0q3/gasco.png",
  //   link: "https://www.npmjs.com/package/@gasco/core",
  // },
] as const;
