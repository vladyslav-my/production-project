import { readFileSync } from "fs";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svgr({ exportAsDefault: true }), react()],
	resolve: {
		alias: [{ find: "@", replacement: "/src" }],
	},

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: readFileSync(path.resolve("src/scss/tools/index.scss"), {
					encoding: "utf8",
					flag: "r",
				}),
			},
		},
	},
	define: {
		__IS_DEV__: JSON.stringify(true),
		__API__: JSON.stringify("http://localhost:8000"),
	},
});
