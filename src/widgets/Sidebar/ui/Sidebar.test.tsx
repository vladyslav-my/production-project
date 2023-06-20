import { screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("Test", () => {
	test("To be in the document", () => {
		renderWithTranslation(<Sidebar />);
		expect(screen.getByTestId("sidebar")).toBeInTheDocument();
	});
});