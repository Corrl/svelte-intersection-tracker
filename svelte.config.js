import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

const BASE_PATH = '/svelte-intersection-tracker'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		prerender: {
			default: true,
		},
		trailingSlash: 'always', // + .nojekyll file for deployment on GitHub pages so '_' in filenames are no problem
		paths: {
			base: dev ? '' : BASE_PATH, // having a base path in dev mode is currently not possible, so only add to beginning of link paths when building production version ('npm run preview' won't work)
		}
	}
};

export default config;
