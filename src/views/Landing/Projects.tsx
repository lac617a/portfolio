import { useTranslation } from "react-i18next";
import { Box, Heading, Typography, VStack } from "native-piece";
import Card from "../../components/Card";

import IMGPenafiel from "../../assets/img/projects/penafiel.png";
import IMGACHS from "../../assets/img/projects/ACHS.png";
import IMGGasco from "../../assets/img/projects/gasco.png";
import IMGKmushicoin from "../../assets/img/projects/kmushicoin.png";

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
  //   src: IMGBarest,
  //   link: "https://dev.barest.es/"
  // },
  {
    id: 1,
    title: "Audioguía Peñafiel",
    description:
      "Descubre relatos fascinantes, datos curiosos y anécdotas sobre la vida cotidiana a lo largo de su historia mientras te desplazas por sus rincones emblemáticos.",
    src: IMGPenafiel,
    link: "https://play.google.com/store/apps/details?id=com.penafielapp&pcampaignid=web_share",
  },
  {
    id: 2,
    title: "Mydna digital",
    description:
      "Gestión de Carrera y todas las Soluciones Estratégicas de RRHH en un Único Lugar.",
    src: "https://mydnadigital.com/home/b2b-img.png",
    link: "https://mydnadigital.com/",
  },
  {
    id: 3,
    title: "ACHS",
    description:
      "Repositorio de asesorías y sistema de admin para manejo de registro.",
    src: IMGACHS,
    link: "https://saqaswaplaybook.z13.web.core.windows.net",
  },
  {
    id: 4,
    title: "Kmushicoin",
    description:
      "Nos esforzamos diariamente por cuidar el medio ambiente, utilizando tecnología blockchain de última generación y soluciones de pago digital accesibles para todos.",
    src: IMGKmushicoin,
    link: "https://kmushicoin.co/",
  },
  {
    id: 5,
    title: "Gasco",
    description: "Design System | GasUI",
    src: IMGGasco,
    link: "https://www.npmjs.com/package/@gasco/core",
  },
] as const;
