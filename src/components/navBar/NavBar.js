import { Link } from "react-scroll";

import "./navBar.css";

const NavBar = () => {
	return (
		<ul className="list">
			<li className="element">
				<Link activeClass="active" to="home" spy={true} smooth={true}>
					Home
				</Link>
			</li>
			<li className="element">
				<Link to="searchCharacter" spy={true} smooth={true}>
					Search
				</Link>
			</li>
			<li className="element">
				<Link to="events" spy={true} smooth={true}>
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
