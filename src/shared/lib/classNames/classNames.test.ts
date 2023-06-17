import { classNames } from "./classNames";

describe("classNames", () => {
	test("with only first param", () => {
		expect(classNames("someClass")).toBe("someClass");
	});

	test("with additional class", () => {
		const expected = "someClass additionClass1 additionClass2";
		expect(classNames("someClass", {}, ["additionClass1", "additionClass2"])).toBe(expected);
	});

	test("with all params", () => {
		const expected = "someClass additionClass1 additionClass2 mods1";
		expect(classNames("someClass", {"mods1": true, "mods2": false}, ["additionClass1", "additionClass2"])).toBe(expected);
	});
});