import { Link } from "react-scroll";

import "./navBar.css";

const NavBar = () => {
	return (
		<ul className="list">
			<li className="element">
				<Link activeClass="active" to="home" spy={true} smooth={true} offset={-25}>
					Home
				</Link>
			</li>
			<li className="element" data-testid="element">
				<Link to="searchCharacter" spy={true} smooth={true} isDynamic={true} offset={-25}>
					Search
				</Link>
			</li>
			<li className="element">
				<Link to="events" spy={true} smooth={true} isDynamic={true} offset={-25}>
					Events
				</Link>
			</li>
			<li className="element">
				<Link to="footer" spy={true} smooth={true}>
					Footer
				</Link>
			</li>
		</ul>
	);
};

export default NavBar;
