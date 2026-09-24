// Descargas reales del último año, leídas de npm al compilar.
// Si npm no responde, el build no se cae: simplemente no se muestra el número.
const cache = new Map<string, number | null>();

export async function yearlyDownloads(pkg: string): Promise<number | null> {
	if (cache.has(pkg)) return cache.get(pkg)!;
	let value: number | null = null;
	try {
		const res = await fetch(`https://api.npmjs.org/downloads/point/last-year/${pkg}`, {
			signal: AbortSignal.timeout(6000),
		});
		if (res.ok) {
			const data = (await res.json()) as {downloads?: number};
			value = typeof data.downloads === "number" ? data.downloads : null;
		}
	} catch {
		value = null;
	}
	cache.set(pkg, value);
	return value;
}

export const formatNumber = (n: number) => new Intl.NumberFormat("es-CO").format(n);
