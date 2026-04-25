import {Box, Heading, Typography, VStack} from "native-piece";
import {useTranslation} from "react-i18next";

import Card from "../../components/Card";

export const Projects = () => {
	const {t} = useTranslation();
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
					{PROJECTS.slice(0, 3).map((item) => (
						<Card key={item.id} {...item} />
					))}
				</VStack>
				<VStack gap="48px">
					{PROJECTS.slice(3).map((item) => (
						<Card key={item.id} {...item} />
					))}
				</VStack>
			</Box>
		</Box>
	);
};

const PROJECTS = [
	{
		id: 1,
		title: "Profiya",
		description:
			"Una plataforma construida para profesionales que quieren mostrar su arte, conectar con su industria y construir su marca personal.",
		src: "https://profiya.com/og-image.png",
		link: "https://profiya.com/",
		stack: ["React", "Nextjs", "RadixUI", "Tailwind", "TypeScript"],
	},
	{
		id: 2,
		title: "Luan Fotografía",
		description:
			"Luan Fotografía es un estudio fotográfico profesional especializado en retratos, sesiones de moda, fotografía de producto y momentos únicos. Reserva tu sesión hoy.",
		src: "https://luan.profiya.com/logo.png",
		link: "https://luan.profiya.com/",
		stack: ["React", "Nextjs", "RadixUI", "Tailwind", "TypeScript"],
	},
	{
		id: 3,
		title: "Rankerfy",
		description:
			"Rankerfy es una herramienta SEO que ha venido a mejorar el mercado. Si eres nichero o tienes un perfil de SEO técnico, te interesa.",
		src: "https://i.ibb.co/4KsyWMY/rankerfy-landing.png",
		link: "https://rankerfy.com/",
		stack: ["Por definir"],
	},
	{
		id: 4,
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
			"TypeScript",
		],
	},
	{
		id: 5,
		title: "Medible",
		description:
			"Somos un equipo global de pensadores y creadores rápidos que diseñan futuros posibles.",
		src: "https://i.ibb.co/PFdwjJL/MEDIBLE.png",
		link: "https://medible.cl/en",
		stack: ["Vite", "React", "SCSS", "TypeScript"],
	},
	{
		id: 6,
		title: "Mydna digital",
		description:
			"Gestión de Carrera y todas las Soluciones Estratégicas de RRHH en un Único Lugar.",
		src: "https://mydnadigital.com/home/b2b-img.png",
		link: "https://mydnadigital.com/",
		stack: ["React", "Nextjs", "RadixUI", "Tailwind", "TypeScript"],
	},
] as const;
