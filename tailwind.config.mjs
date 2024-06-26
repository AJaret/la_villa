/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			width: {
				'180': '180%'
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}
