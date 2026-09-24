import type {ImageMetadata} from "astro";

import atomic from "../assets/shots/atomic.webp";
import casinoenchile from "../assets/shots/casinoenchile.webp";
import compucentro from "../assets/shots/compucentro.webp";
import dice from "../assets/shots/dice.webp";
import latamwin from "../assets/shots/latamwin.webp";
import luan from "../assets/shots/luan.webp";
import maker from "../assets/shots/maker.webp";
import medible from "../assets/shots/medible.webp";
import mias from "../assets/shots/mias.webp";
import mydna from "../assets/shots/mydna.webp";
import penafielIcon from "../assets/shots/penafiel-icon.png";
import penafielApp from "../assets/shots/penafiel-2.png";
import penafielStops from "../assets/shots/penafiel-1.png";
import pokerenchile from "../assets/shots/pokerenchile.webp";
import rankerfy from "../assets/shots/rankerfy.webp";
import simba from "../assets/shots/simba.webp";
import winchile from "../assets/shots/winchile.webp";

export type Kind = "producto" | "cliente" | "local" | "propio" | "open-source";

export const KINDS: Record<Kind, {label: string; hint: string}> = {
	producto: {label: "Producto", hint: "Software que se vende por suscripción"},
	cliente: {label: "Clientes", hint: "Empresas y equipos con los que trabajé"},
	local: {label: "Negocios de aquí", hint: "Tiendas y estudios de cerca de casa"},
	propio: {label: "Míos", hint: "Cosas que hice porque quise"},
	"open-source": {label: "Open source", hint: "Librerías publicadas en npm"},
};

export type Link = {label: string; url: string};

export type Project = {
	slug: string;
	name: string;
	kind: Kind;
	/** Dónde vive el proyecto o su gente. */
	place?: string;
	/** Solo cuando la fecha es segura (npm la registra); si no, mejor nada. */
	year?: number;
	/** Una línea, como se lo contarías a alguien en una fila. */
	line: string;
	/** Dos o tres frases con más contexto. */
	story: string;
	stack: string[];
	url: string;
	/** Enlaces extra (npm, docs, las otras marcas…). */
	links?: Link[];
	shots: ImageMetadata[];
	/** Captura vertical de móvil en vez de navegador de escritorio. */
	phone?: boolean;
	/** Sale en la portada. */
	featured?: boolean;
	/** Nota a mano que acompaña la captura en la portada. */
	note?: string;
};

export const projects: Project[] = [
	{
		slug: "mydna",
		name: "MyDNA HRTech",
		kind: "cliente",
		place: "Chile y 20 países de LATAM",
		line: "Una plataforma de RR.HH. con IA que usan más de 500 empresas.",
		story:
			"Reclutamiento, onboarding gamificado, benchmark salarial y people analytics, todo en un mismo sitio. Es muchísima información, y el trabajo del frontend es que se sienta ordenada y no como el tablero de un avión.",
		stack: ["Next.js", "React", "Radix UI", "Tailwind", "TypeScript"],
		url: "https://mydnadigital.com",
		shots: [mydna],
		featured: true,
		note: "mucho dato, poco ruido",
	},
	{
		slug: "latamwin",
		name: "Latamwin Grupo",
		kind: "cliente",
		place: "Chile",
		line: "Cuatro casinos online de una misma casa.",
		story:
			"PokerEnChile y Latamwin corren sobre la base nueva en Next.js; CasinoEnChile y WinChile, sobre la clásica en jQuery y Bootstrap. El mismo catálogo de más de 500 juegos, cuatro marcas con su propia personalidad.",
		stack: ["Next.js", "Tailwind", "TypeScript", "jQuery", "Bootstrap"],
		url: "https://app.latamwin.online",
		links: [
			{label: "PokerEnChile", url: "https://pokerenchile.com"},
			{label: "Latamwin", url: "https://app.latamwin.online"},
			{label: "CasinoEnChile", url: "https://casinoenchile.com"},
			{label: "WinChile", url: "https://winchile.online"},
		],
		shots: [pokerenchile, latamwin, casinoenchile, winchile],
		featured: true,
		note: "mismo motor, 4 pieles",
	},
	{
		slug: "penafiel",
		name: "Audioguía Peñafiel",
		kind: "cliente",
		place: "Peñafiel, España",
		line: "Una ruta medieval de 13 paradas, contada al oído.",
		story:
			"Una app para recorrer la villa de Peñafiel a pie en más o menos una hora: el castillo, las iglesias, las plazas, cada parada con su historia en audio, en español y en inglés. App en React Native, panel en React y una API en NestJS que cobra con Stripe.",
		stack: ["React Native", "React", "NestJS", "DynamoDB", "Stripe", "MUI", "TypeScript"],
		url: "https://play.google.com/store/apps/details?id=com.penafielapp",
		shots: [penafielApp, penafielStops, penafielIcon],
		phone: true,
		featured: true,
		note: "13 paradas · ~1 hora",
	},
	{
		slug: "rankerfy",
		name: "Rankerfy",
		kind: "producto",
		line: "Una suite de SEO para quien se toma el SEO en serio.",
		story:
			"Keywords con volumen real, tracking diario de posiciones, competidores, backlinks, canibalizaciones y contenido flojo. Abre por oleadas cerradas, con lista de espera.",
		stack: [],
		url: "https://rankerfy.com",
		shots: [rankerfy],
		featured: true,
	},
	{
		slug: "maker",
		name: "Piñata Maker",
		kind: "propio",
		line: "Tu imagen a tamaño piñata, en hojas que imprimes en casa.",
		story:
			"Subes una imagen, dices cuánto mide en centímetros y te devuelve un PDF repartido en hojas A4, A3 o Carta, con mapa de montaje, marcas para solapar y una regla de 10 cm para comprobar que la impresora no escaló nada. Porque una piñata calculada a ojo siempre termina torcida.",
		stack: ["Next.js", "Tailwind", "TypeScript"],
		url: "https://maker.profiya.com",
		shots: [maker],
		featured: true,
		note: "gratis, sin registrarte",
	},
	{
		slug: "dice",
		name: "Fusionar dados",
		kind: "propio",
		line: "Un juego de dados que se fusionan, para jugar desde el celular.",
		story:
			"Arrastras los dados por el tablero y, cuando dos iguales se juntan, se fusionan en uno más grande. Tiene récord, inicio de sesión y se juega directo en el navegador, sin instalar nada.",
		stack: ["React"],
		url: "https://dice.profiya.com",
		shots: [dice],
		phone: true,
	},
	{
		slug: "medible",
		name: "Medible",
		kind: "cliente",
		place: "Chile",
		line: "El sitio de un estudio de innovación, en cuatro idiomas.",
		story:
			"Tipografía enorme, mucho aire y una imagen que se deshace. Un sitio que tenía que verse tan pensado como el trabajo del estudio, en inglés, español, portugués e italiano.",
		stack: ["React", "SCSS", "TypeScript"],
		url: "https://medible.cl/en",
		shots: [medible],
	},
	{
		slug: "mias",
		name: "MiasVariedades",
		kind: "local",
		place: "Piedecuesta",
		line: "Pijamas al detal y por mayor, con pedidos por WhatsApp.",
		story:
			"La tienda de la familia Rivera. Catálogo, favoritos y un botón de WhatsApp siempre a mano, porque así es como la gente de verdad compra aquí.",
		stack: ["Next.js", "Tailwind", "TypeScript"],
		url: "https://mias.profiya.com",
		shots: [mias],
	},
	{
		slug: "simba",
		name: "Gestión Simba",
		kind: "local",
		place: "Restaurante",
		line: "Empleados, asistencia y propinas de un restaurante.",
		story:
			"Una herramienta interna: quién vino, cuántas horas hizo y cómo se reparten las propinas. No tiene landing ni se puede mostrar mucho; vive detrás de un login, que es donde viven las herramientas que de verdad se usan.",
		stack: ["Next.js", "Tailwind", "TypeScript"],
		url: "https://simba.profiya.com",
		shots: [simba],
	},
	{
		slug: "luan",
		name: "Luan Fotografía",
		kind: "local",
		place: "Piedecuesta",
		line: "Un estudio de fotografía: retratos, moda y producto.",
		story:
			"Un sitio donde las fotos hablan primero y el botón de agendar sesión nunca queda lejos.",
		stack: ["React", "Vite"],
		url: "https://luan.profiya.com",
		shots: [luan],
	},
	{
		slug: "compucentro",
		name: "CompuCentro",
		kind: "local",
		place: "Colombia",
		line: "Una tienda de componentes para armar o mejorar tu PC.",
		story:
			"Procesadores, tarjetas gráficas, RAM, discos. Un catálogo pensado para quien ya sabe lo que busca y quiere comparar rápido, con envíos a toda Colombia.",
		stack: ["React", "Vite"],
		url: "https://compucentro.profiya.com",
		shots: [compucentro],
	},
	{
		slug: "tailwindcss-atomic",
		name: "tailwindcss-atomic",
		kind: "open-source",
		year: 2026,
		line: "CSS atómico para Tailwind, con el motor en Rust.",
		story:
			"Parte cada utilidad de Tailwind en una clase por declaración, le pone un hash corto y reescribe los className para que coincidan. El hashing corre en Rust compilado a WebAssembly. Funciona con Vite, Webpack, Rollup, Next.js y Astro.",
		stack: ["Rust", "WebAssembly", "PostCSS", "TypeScript"],
		url: "https://atomic.profiya.com/es",
		links: [
			{label: "Documentación", url: "https://atomic.profiya.com/es"},
			{label: "npm", url: "https://www.npmjs.com/package/tailwindcss-atomic"},
			{label: "GitHub", url: "https://github.com/lac617a/tailwindcss-atomic"},
		],
		shots: [atomic],
	},
	{
		slug: "native-piece",
		name: "native-piece",
		kind: "open-source",
		year: 2023,
		line: "Componentes primitivos para React, con CSS como props.",
		story:
			"Box, Stack y compañía: escribes el estilo directo en las props, sin provider ni configuración. Pesa unos 4 KB. Mi portafolio anterior estaba hecho entero con esto.",
		stack: ["React", "Emotion", "Rollup", "TypeScript"],
		url: "https://www.npmjs.com/package/native-piece",
		links: [
			{label: "npm", url: "https://www.npmjs.com/package/native-piece"},
			{label: "GitHub", url: "https://github.com/lac617a/native-piece"},
		],
		shots: [],
	},
	{
		slug: "react-switch-casu",
		name: "react-switch-casu",
		kind: "open-source",
		year: 2023,
		line: "Switch, Case y Default para React, en vez de ternarios anidados.",
		story:
			"Renderizado condicional que se lee como un switch de JavaScript. Tiene fallthrough opcional y memo para que solo vuelva a renderizar cuando cambia la expresión.",
		stack: ["React", "Rollup", "TypeScript"],
		url: "https://www.npmjs.com/package/react-switch-casu",
		links: [
			{label: "npm", url: "https://www.npmjs.com/package/react-switch-casu"},
			{label: "GitHub", url: "https://github.com/lac617a/react-switch-casu"},
		],
		shots: [],
	},
];

export const featured = projects.filter((p) => p.featured);
export const packages = projects.filter((p) => p.kind === "open-source");

export function hostOf(url: string) {
	const {hostname, pathname} = new URL(url);
	if (hostname === "play.google.com") return "Google Play";
	if (hostname === "www.npmjs.com") return `npm · ${pathname.split("/").pop()}`;
	return hostname.replace(/^www\./, "");
}
