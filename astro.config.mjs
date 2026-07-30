// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site =
	process.env.PUBLIC_SITE_URL ?? 'https://metodocomandofinanceiro.com.br';

export default defineConfig({
	site,
	output: 'static',
	integrations: [
		sitemap({
			filter: (page) => new URL(page).pathname === '/',
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
