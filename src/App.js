import React from "react";

import NavBar from "./components/navBar/NavBar";
import Home from "./components/home/Home";
import SearchCharacter from "./components/characters/SearchCharacter";
import Events from "./components/events/Events";
import Footer from "./components/footer/Footer";

const App = () => {
	return (
		<div>
			<div>
				<NavBar />
			</div>
			<div id="home">
				<Home />
			</div>

			<div id="searchCharacter">
				<SearchCharacter />
			</div>

			<div id="events">
				<Events />
			</div>

			<div id="footer">
				<Footer />
			</div>
		</div>
	);
};

export default App;
