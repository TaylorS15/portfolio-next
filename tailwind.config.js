/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				keppel: '#9993B2',
				'dark-green': '#2A2A3C',
				'app-blue': '#C5283D',
				'app-green': '#D09115',
				'app-black': '#191923',
				'app-black-2': '#1E1B1B',
				'app-white': '#e7e4e4',
			},
			keyframes: {
				'slide-left': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(-100vw)' },
				},
				'hand-wave': {
					'0%, 100%': { transform: 'rotate(-10deg)' },
					'50%': { transform: 'rotate(20deg)' },
				},
			},
			animation: {
				'slide-left-one': 'slide-left 2s ease-in infinite',
				'slide-left-two': 'slide-left 2.5s ease-in infinite .3s',
				'slide-left-three': 'slide-left 2.7s ease-in infinite .8s',
				'slide-left-four': 'slide-left 2.2s ease-in infinite 1.1s',
				'slide-left-five': 'slide-left 3s ease-in infinite 1.4s',
				'slide-left-six': 'slide-left 1.7s ease-in infinite 1.8s',
				'hand-wave': 'hand-wave 2s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};
