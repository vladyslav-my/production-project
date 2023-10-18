// @ts-nocheck

import path from "path";
import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
	stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],

	framework: {
		name: "@storybook/react-webpack5",
		options: {},
	},

	docs: {
		autodocs: "tag",
	},

	webpackFinal: async (config) => {
		config.resolve.modules = [
			...(config.resolve?.modules || []),
			path.resolve(__dirname, "../src"),
		];

		return config;
	},
};

export default config;
