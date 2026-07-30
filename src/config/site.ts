export const siteConfig = {
	name: 'Comando Financeiro',
	locale: 'pt-BR',
	defaultDescription: 'Portal oficial do ecossistema Comando Financeiro.',
	links: {
		comandoDeCompras: '/contato',
		whatsApp: {
			countryCode: '55',
			number: '14997890982',
			message:
				'Olá! Vim pelo site do Método Comando Financeiro e gostaria de saber mais.',
			fallback: '/contato',
		},
	},
	navigation: [
		{ label: 'Início', href: '/' },
		{ label: 'Formação Commander', href: '/formacao-commander' },
		{ label: 'Raio-X Financeiro', href: '/raio-x-financeiro' },
		{ label: 'Central de Comando', href: '/central-de-comando' },
		{ label: 'Contato', href: '/contato' },
		{ label: 'Política de Privacidade', href: '/politica-de-privacidade' },
		{ label: 'Termos de Uso', href: '/termos-de-uso' },
	],
} as const;

export function getWhatsAppUrl() {
	const countryCode: string = siteConfig.links.whatsApp.countryCode;
	const number: string = siteConfig.links.whatsApp.number;
	const message: string = siteConfig.links.whatsApp.message;
	const { fallback } = siteConfig.links.whatsApp;

	if (!number) {
		return fallback;
	}

	const normalizedCountryCode = countryCode.replace(/\D/g, '');
	const normalizedNumber = `${normalizedCountryCode}${number.replace(/\D/g, '')}`;
	const query = message ? `?text=${encodeURIComponent(message)}` : '';

	return `https://wa.me/${normalizedNumber}${query}`;
}
