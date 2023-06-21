import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { AppLink, AppLinkTheme } from "./AppLink";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
	title: "shared/AppLink",
	component: AppLink,
	tags: ["autodocs"],
	argTypes: {
	
	},
	args: {
		to: "/"
	}
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "Primary"
	}
};

export const Secondary: Story = {
	args: {
		children: "Secondary",
		theme: AppLinkTheme.SECONDARY
	}
};

export const Red: Story = {
	args: {
		children: "Red",
		theme: AppLinkTheme.RED
	}
};
