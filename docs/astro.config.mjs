// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import MermaidTheme from '../packages/starlight/index.ts';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Rojo',
			plugins: [MermaidTheme()],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
