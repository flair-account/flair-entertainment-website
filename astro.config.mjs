import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
	site: 'https://flairentertainment.je',
	trailingSlash: 'always',
	output: 'static',
	devToolbar: { enabled: false },
	build: {
		format: 'directory',
		// The whole stylesheet is a few KB, so inlining it removes the only render-blocking request.
		inlineStylesheets: 'always',
	},
	integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
})
