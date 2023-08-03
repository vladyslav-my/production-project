import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { AppNavLink } from "./AppNavLink";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
	title: "@/shared/AppLink",
	component: AppNavLink,
	tags: ["autodocs"],
	argTypes: {
	
	},
	args: {
		to: "/"
	}
} satisfies Meta<typeof AppNavLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "Primary"
	}
};