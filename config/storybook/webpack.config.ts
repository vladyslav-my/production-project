import path from "path";
import { Configuration, RuleSetRule } from "webpack";
import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

export default ({ config }: {config: Configuration}) => {
	const paths: BuildPaths = {
		src: path.resolve(__dirname, "..", "..", "src")
	};

	config.resolve.modules.push(paths.src);
	config.resolve.extensions.push(".ts", ".tsx");
	config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
		if (/svg/.test(rule.test as string)) {
			return { ...rule, exclude: /\.svg$/i };
		}

		return rule;
	});

	config.module.rules.push({
		test: /\.svg$/,
		use: ["@svgr/webpack"],
	});
	config.module.rules.push(buildCssLoader(true));

	return config;
};