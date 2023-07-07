import { fireEvent, getByTestId, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import {
	componentRender
} from "shared/lib/tests/componentRender/componentRender";

describe("Counter", () => {
	test("inc", () => {
		componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
		const incBtn = screen.getByTestId("inc");
		fireEvent.click(incBtn);
		expect(screen.getByTestId("result")).toHaveTextContent("11");
	});

	test("dec", () => {
		componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
		const decBtn = screen.getByTestId("dec");
		fireEvent.click(decBtn);
		expect(screen.getByTestId("result")).toHaveTextContent("9");
	});
});
