import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svgr({ exportAsDefault: true }),
		react()
	],
	resolve: {
		alias: [
			{ find: "@", replacement: "/src" }
		],
    
	},
	define: {
		__IS_DEV__: JSON.stringify(true),
		__API__: JSON.stringify("http://localhost:8000")
	}
});
