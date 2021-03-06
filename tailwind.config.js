module.exports = {
	theme: {
		extend: {
			colors: {
				black: '#00303F',
				white: '#FFFFFF',
				indigo: {
					100: '#F8FBFF',
					200: '#E4F9FF',
					500: '#3544D0',
					900: '#3C366B'
				},
				logo: '#00A0CC',
				blue: {
					500: '#41CDFA'
				},
				red: {
					500: '#F56565',
					900: '#E53E3E'
				},
				yellow: {
					200: '#FAF089',
					500: '#F6E05E'
				}
			},
			boxShadow: {
				'indigo-500': '1.5rem 1.5rem #5A67D8',
				'red-500': '1.5rem 1.5rem #F56565',
				'yellow-500': '1.5rem 1.5rem #F6E05E',
				link: '0.5em 0.5em #F6E05E'
			}
		},
		fontFamily: {
			serif: ['Merriweather'],
			display: ['Work Sans'],
			sans: ['Open Sans']
		}
	},
	variants: {},
	plugins: []
};
