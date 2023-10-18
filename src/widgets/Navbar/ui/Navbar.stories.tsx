import type { Meta, StoryObj } from "@storybook/react";
// import { Theme } from "@/app/providers/ThemeProvider";
// import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import Navbar from "./Navbar";

const meta = {
	title: "@/widgets/Navbar",
	component: Navbar,
	tags: ["autodocs"],
	argTypes: {

	},
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

// export const Light: Story = {
// };

// export const Dark: Story = {
// 	decorators: [
// 		ThemeDecorator(Theme.DARK),
// 	],
// };
