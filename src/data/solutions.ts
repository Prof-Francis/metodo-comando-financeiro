import { siteConfig } from '../config/site';

export const solutions = [
	{
		slug: 'formacao-commander',
		title: 'Formação Commander',
		placeholderDescription: 'O conteúdo da Formação Commander será desenvolvido posteriormente.',
		cardDescription:
			'Aprenda a construir patrimônio e transforme o dinheiro que sobra na liberdade que você deseja viver.',
		cta: 'Conhecer a Formação',
		href: '/formacao-commander',
		label: 'Formação',
	},
	{
		slug: 'raio-x-financeiro',
		title: 'Raio-X Financeiro',
		placeholderDescription: 'O conteúdo do Raio-X Financeiro será desenvolvido posteriormente.',
		cardDescription: 'Descubra exatamente o que impede você de fazer o dinheiro sobrar.',
		cta: 'Fazer meu diagnóstico',
		href: '/raio-x-financeiro',
		label: 'Diagnóstico',
	},
	{
		slug: 'central-de-comando',
		title: 'Central de Comando',
		placeholderDescription: 'O conteúdo da Central de Comando será desenvolvido posteriormente.',
		cardDescription: 'Pare de controlar planilhas. Comece a comandar seu dinheiro.',
		cta: 'Conhecer a Central',
		href: '/central-de-comando',
		label: 'Aplicativo',
	},
	{
		slug: 'comando-de-compras',
		title: 'Comando de Compras',
		placeholderDescription: 'O conteúdo do Comando de Compras será desenvolvido posteriormente.',
		cardDescription: 'Aprenda a comprar sem sabotar os seus objetivos financeiros.',
		cta: 'Conhecer o aplicativo',
		href: siteConfig.links.comandoDeCompras,
		label: 'Aplicativo',
	},
] as const;

export type SolutionSlug = (typeof solutions)[number]['slug'];

export function getSolutionBySlug(slug: SolutionSlug) {
	const solution = solutions.find((item) => item.slug === slug);

	if (!solution) {
		throw new Error(`Solução não encontrada: ${slug}`);
	}

	return solution;
}
