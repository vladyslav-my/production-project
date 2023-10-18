import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
	const svgLoader = {
		test: /\.svg$/,
		use: ["@svgr/webpack"],
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff|woff2)$/i,
		use: ["file-loader"],
	};

	const cssLoader = buildCssLoader(isDev);

	// Якщо використовуємо js - потрібен babel-loader
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};

	const babelLoader = {
		test: /\.(js|ts|tsx)/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				presets: ["@babel/preset-env"],
				plugins: [
					["i18next-extract", {
						locales: ["en", "uk"],
						keyAsDefaultValue: true,
					}],
				],
			},
		},
	};

	return [
		fileLoader,
		svgLoader,
		babelLoader,
		typescriptLoader,
		cssLoader,
	];
}
