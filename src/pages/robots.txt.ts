import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
	const baseUrl = site ?? new URL('https://metodocomandofinanceiro.com.br');
	const sitemapUrl = new URL('sitemap-index.xml', baseUrl);
	const body = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl.href}
`;

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
};
