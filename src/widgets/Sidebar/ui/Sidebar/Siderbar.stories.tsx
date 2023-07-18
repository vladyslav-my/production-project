import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Sidebar } from "./Sidebar";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
	title: "@/widgets/Sidebar",
	component: Sidebar,
	tags: ["autodocs"],
	argTypes: {
	
	},
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
};

export const Dark: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK)
	]
};
