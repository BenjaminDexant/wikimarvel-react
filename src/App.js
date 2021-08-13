import React from "react";

import NavBar from "./components/navBar/NavBar";
import Home from "./components/home/Home";
import SearchCharacter from "./components/characters/SearchCharacter";
import Events from "./components/events/Events";
import Footer from "./components/footer/Footer";

const App = () => {
	return (
		<div>
			<NavBar />
			<Home />
			<SearchCharacter />
			<Events />
			<Footer />
		</div>
	);
};

export default App;
