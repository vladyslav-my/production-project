import { StoryFn } from "@storybook/react";
import { Theme } from "../../../contexts/ThemeContext";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
	<div className={`app ${theme}`}>
		<StoryComponent />
	</div>
);
