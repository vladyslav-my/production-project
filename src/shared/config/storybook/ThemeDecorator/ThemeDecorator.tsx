/* eslint-disable react/display-name */
import { StoryFn } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
	<div className={`app ${theme}`}>
		<StoryComponent />
	</div>
);
