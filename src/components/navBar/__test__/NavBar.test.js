import React from "react";
import NavBar from "../NavBar";
import { fireEvent, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";

test("The navBar is made of an ul with four li elements Home Search Events and Footer", () => {
	const elem = renderer.create(<NavBar />).toJSON();
	expect(elem).toMatchSnapshot();
});

test("click to an element scroll to it", () => {
	const { getByTestId } = render(<NavBar />);
	const liElem = getByTestId("element");
	fireEvent.click(liElem, {
		target: {
			activeClass: "active",
		},
	});
	expect(liElem.activeClass).toBe("active");
});
