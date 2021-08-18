import React from "react";
import SearchCharacter from "../SearchCharacter";
import { fireEvent, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";

test("The form is displayed correctly", () => {
	const component = renderer.create(<SearchCharacter />).toJSON();
	expect(component).toMatchSnapshot();
});

test("Change value is working correctly", () => {
	const { getByTestId } = render(<SearchCharacter />);
	const inputElem = getByTestId("input");

	expect(inputElem.value).toBe("");

	fireEvent.change(inputElem, {
		target: {
			value: "Spider-Man",
		},
	});

	expect(inputElem.value).toBe("Spider-Man");
});

