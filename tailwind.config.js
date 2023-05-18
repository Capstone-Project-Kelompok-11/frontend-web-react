/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"custom-yellow": "#FFDA6A",
				"custom-blue": "#3D8BFD",
				logo: "#0A58CA",
			},
			fontFamily: {
				poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	daisyui: {
		themes: [],
	},
	plugins: [require("daisyui")],
};
