import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		animation: {
			"slider-vertical": "slide 45s infinite linear",
			"slider-horizontal": "slide 60s infinite linear",
		},
		keyframes: {
			slide: {
				from: {
					transform: "translateX(0)",
				},
				to: {
					transform: "translateX(-100%)",
				},
			},
		},
		fontFamily: {
			primary: ["var(--font-n27)"],
		},
		zIndex: {
			max: "9999",
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
		colors: {
			black: {
				primary: "#000000",
			},
			blue: {
				primary: "#0019FF",
			},
			white: {
				primary: "#FFFFFF",
			},
		},
	},
	plugins: [],
};
export default config;
