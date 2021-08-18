import React from "react";
import SearchCharacter from "../SearchCharacter";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Title is rendering correctly", () => {
	const { getByTestId } = render(<SearchCharacter />);
	const titleElem = getByTestId("title");

	expect(titleElem.textContent).toBe("Look for a character :");
});
