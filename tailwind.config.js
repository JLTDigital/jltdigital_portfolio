// import animate from 'tailwindcss-animate';
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./portfolio/src/**/*.{html,js,svelte,ts}',
		'./node_modules/@selemondev/svelte-marquee/dist/*.svelte'
	],
	theme: {
		extend: {
			keyframes: {
				'marquee-left': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-100% - var(--gap)))' }
				},
				'marquee-up': {
					from: { transform: 'translateY(0)' },
					to: { transform: 'translateY(calc(-100% - var(--gap)))' }
				}
			},
			animation: {
				'marquee-left': 'marquee-left var(--duration, 40s) linear infinite',
				'marquee-up': 'marquee-up var(--duration, 40s) linear infinite'
			},
			fontFamily: {
				orbitron: ['Orbitron', 'sans-serif'],
				grafmassa: ['Grafmassa', 'sans-serif']
			},
			colors: {
				red: '#FF1211',
				blue: '#21D2ED',
				green: '#2DD4BF',
				yellow: '#EDE621',
				white: '#FFFFFF',
				black: '#000000',
				purple: '#E879F9'
			}
		}
	},
	plugins: [require('@iconify/tailwind4'), animate]
};
