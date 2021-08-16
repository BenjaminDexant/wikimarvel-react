import React from "react";
import NavBar from "../NavBar";
import { render } from "@testing-library/react";
import renderer from 'react-test-renderer';
import "@testing-library/jest-dom/extend-expect";

test("The navBar is made of an ul with four li elements Home Search Events and Footer", () => {
	const elem = renderer.create(<NavBar />).toJSON();
	expect(elem).toMatchSnapshot();
});
