import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { Button, ButtonTheme } from "./Button";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
	title: "@/shared/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
	
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "Button"
	}
};

export const Clear: Story = {
	args: {
		children: "Button",
		theme: ButtonTheme.CLEAR
	},
};

export const Outline: Story = {
	args: {
		children: "Button",
		theme: ButtonTheme.OUTLINE
	},
};

export const OutlineDark: Story = {
	args: {
		children: "Button",
		theme: ButtonTheme.OUTLINE
	},
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};