import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "../../../../config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../../../../contexts/ThemeContext";
import { ButtonTheme } from "../styles/const";
import { Button } from "./Button";

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
		children: "Button",
	},
};

export const Clear: Story = {
	args: {
		children: "Button",
		theme: ButtonTheme.CLEAR,
	},
};

export const Outline: Story = {
	args: {
		children: "Button",
		theme: ButtonTheme.OUTLINE,
	},
};

export const OutlineDark: Story = {
	args: {
		children: "Button",
		theme: ButtonTheme.OUTLINE,
	},
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};
