/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				green: "#C2F9BB",
				red: "#CE7B91",
				transparent: "transparent",
				current: "currentColor",
				cus_white: "#e2e2e8",
				grey_l: "#A8ACAE",
				grey: "#8C8C8C",
				grey_d: "#3E4342",
				black_l: "#2A2E2F",
				black: "#16181B",
			},
			width: {
				3.5: "14px",
			},
			rotate: {
				135: "135deg",
				315: "315deg",
			},
			translate: {
				"3px": "3px",
				"2px": "2px",
				"translate-x-3px": "3px",
				"translate-x-2px": "2px",
				"-translate-y-3px": "-3px",
				"-translate-y-2px": "-2px",
				"-translate-x-3px": "-3px",
				"-translate-x-2px": "-2px",
			},
			backgroundImage: {
				"mac-bg": "url('/bg.jpeg')",
				"mac-bg-2": "url('/bg-2.jpeg')",
				"mac-bg-3": "url('/bg-3.jpeg')",
				"mac-bg-4": "url('/bg-4.jpeg')",
				"mac-bg-5": "url('/bg-5.jpeg')",
				"mac-bg-6": "url('/bg-6.jpeg')",
				"mac-bg-7": "url('/bg-7.jpeg')",
				"mac-bg-8": "url('/bg-8.jpeg')",
			},
			borderRadius: {
				"sm-1": "0.225rem",
			},
			fontFamily: {
				"rob-mono": ["Roboto Mono", "monospace"],
			},
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
