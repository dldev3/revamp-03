module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			width: {
				'230px': '14.375rem',
				'60px': '3.75rem',

			},
			height: {
				'60px': '3.75rem',
				'768px': '48rem'
			},
			fontSize: {
				'f50': '3.125rem',
				'f28': '1.75rem',
				'f25': '1.5625rem',
				'f24': '1.5rem',
				'f20': '1.25rem',
				'f18': '1.125rem',
				'f16': '1rem',
				'f14': '0.875rem',
				'f12': '0.750rem',
				'f10': '0.625rem',
			},
			colors: {
				'hero-dark': '#07152D',
				'home-cap': '#5648FF',
				'mcl-blue': '#5648FF',
				'mcl-black': '#07152D',
				'mcl-gray': '#262A53',
				'mcl-text-black': "#2D2D2D",
			},
			lineHeight: {
				'f50': '66px',
				'f24-low': '24px',
				'f24': '36px',
				'f24-high': '38px',
				'f26': '26px',
				'f33': '33px',
				'f48': '48px',
				'f40': '40px',
			},
			spacing: {
				'102': '30rem',
				'33': '8.75rem',
				'100': '28rem',
				'104': '42rem',
				'103': '32rem'
			},
			margin: {
				'88': '22.5rem',
			},
		},
	},
	plugins: [],
}
