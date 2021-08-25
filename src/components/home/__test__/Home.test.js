import React from "react";
import Home from "../Home";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Title is rendering correctly", () => {
	const { getByTestId} = render(<Home />);
	const componenetElement = getByTestId("title");

	expect(componenetElement.textContent).toBe("My home component");
});
