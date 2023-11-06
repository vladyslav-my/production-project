import type { Meta, StoryObj } from "@storybook/react";
import { AppNavLink } from "./AppNavLink";

const meta = {
	title: "@/shared/AppLink",
	component: AppNavLink,
	tags: ["autodocs"],
	argTypes: {},
	args: {
		to: "/",
	},
} satisfies Meta<typeof AppNavLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "Primary",
	},
};
