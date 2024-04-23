import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		federation({
			name: "pokemonList",
			filename: "remoteEntry.js",
			exposes: {
				"./pokemon-list": "./src/components/pokemon-list",
				"./pokemon": "./src/atoms/pokemon.ts",
			},
			shared: ["react", "react-dom", "jotai"],
		}),
	],
	build: {
		modulePreload: false,
		target: "esnext",
		minify: false,
		cssCodeSplit: false,
	},
});
