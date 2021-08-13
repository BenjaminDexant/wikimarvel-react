import { Link } from "react-scroll";

import "./navBar.css";

const NavBar = () => {
	return (
		<ul className="list">
			<li>
				<Link activeClass="active" to="home" spy={true} smooth={true}>
					Home
				</Link>
			</li>
			<li>
				<Link to="searchCharacter" spy={true} smooth={true}>
					Search
				</Link>
			</li>
			<li>
				<Link to="events" spy={true} smooth={true}>
					Events
				</Link>
			</li>
			<li>
				<Link to="footer" spy={true} smooth={true}>
					Footer
				</Link>
			</li>
		</ul>
	);
};

export default NavBar;
