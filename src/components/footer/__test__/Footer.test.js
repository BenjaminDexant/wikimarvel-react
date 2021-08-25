import React from "react";
import Footer from "../Footer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Marvel's copyright is displayed correctly", () => {
	const { getByTestId} = render(<Footer />);
	const componenetElement = getByTestId("copyright");

	expect(componenetElement.textContent).toBe("Data provided by Marvel. © 2014 Marvel");
});
